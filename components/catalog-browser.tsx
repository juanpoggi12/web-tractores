'use client';

import { useEffect, useMemo, useState, type CSSProperties, type SyntheticEvent } from 'react';
import { ArrowLeft, ArrowUpRight, MessageCircle, Search, SlidersHorizontal, X } from 'lucide-react';
import {
  catalogLocation,
  categories,
  getBrands,
  getCategory,
  getModels,
  readCatalogLocation,
  searchProducts,
  whatsapp,
  type Product,
} from '@/lib/catalog';
import { ProductDetailDialog, ProductResult } from './product-result';

export function CatalogBrowser() {
  const [query, setQuery] = useState('');
  const [debouncedQuery, setDebouncedQuery] = useState('');
  const [categoryId, setCategoryId] = useState('');
  const [brand, setBrand] = useState('');
  const [model, setModel] = useState('');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const location = readCatalogLocation(window.location.search);
    const frame = window.requestAnimationFrame(() => {
      setQuery(location.query);
      setDebouncedQuery(location.query);
      setCategoryId(location.categoryId);
      setBrand(location.brand);
      setModel(location.model);
      setReady(true);
    });
    return () => window.cancelAnimationFrame(frame);
  }, []);

  useEffect(() => {
    const timer = window.setTimeout(() => setDebouncedQuery(query), 250);
    return () => window.clearTimeout(timer);
  }, [query]);

  useEffect(() => {
    if (!ready) return;
    window.history.replaceState(null, '', catalogLocation({ query, categoryId, brand, model }));
  }, [ready, query, categoryId, brand, model]);

  const currentCategory = getCategory(categoryId);
  const brands = useMemo(() => getBrands(categoryId), [categoryId]);
  const selectedBrand = brands.includes(brand) ? brand : '';
  const models = useMemo(() => getModels(categoryId, selectedBrand), [categoryId, selectedBrand]);
  const selectedModel = models.includes(model) ? model : '';

  const globalSearchActive = debouncedQuery.trim().length >= 3;
  const showResults = Boolean(categoryId) || globalSearchActive;
  const results = useMemo(
    () => showResults ? searchProducts({ query: categoryId || globalSearchActive ? debouncedQuery : '', categoryId, brand: selectedBrand, model: selectedModel }) : [],
    [showResults, categoryId, globalSearchActive, debouncedQuery, selectedBrand, selectedModel],
  );

  function selectCategory(nextCategoryId: string) {
    setCategoryId(nextCategoryId);
    setQuery('');
    setDebouncedQuery('');
    setBrand('');
    setModel('');
    window.requestAnimationFrame(() => document.getElementById('catalog-search')?.focus());
  }

  function resetCatalog() {
    setQuery('');
    setDebouncedQuery('');
    setCategoryId('');
    setBrand('');
    setModel('');
  }

  function submitSearch(event: SyntheticEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!categoryId && query.trim().length < 3) return;
    setDebouncedQuery(query);
    window.requestAnimationFrame(() => {
      document.getElementById('resultados')?.scrollIntoView({ block: 'start' });
      document.getElementById('resultados')?.focus({ preventScroll: true });
    });
  }

  const searchLabel = currentCategory
    ? `Buscar dentro de ${currentCategory.name}`
    : 'Buscar por nombre, código, marca o modelo';

  return <>
    {currentCategory && (
      <div className="catalog-context">
        <button type="button" className="catalog-back" onClick={resetCatalog}>
          <ArrowLeft size={18} /> Todas las categorías
        </button>
        <div>
          <h2>{currentCategory.name}</h2>
          <p>{currentCategory.description}</p>
        </div>
      </div>
    )}

    <search>
    <form className="catalog-search" aria-label={searchLabel} onSubmit={submitSearch}>
      <label className="sr-only" htmlFor="catalog-search">{searchLabel}</label>
      <Search size={25} className="search-icon" aria-hidden="true" />
      <input
        id="catalog-search"
        name="q"
        type="search"
        autoComplete="off"
        value={query}
        onChange={event => setQuery(event.target.value)}
        placeholder={searchLabel}
      />
      {query && <button type="button" className="search-clear" aria-label="Borrar búsqueda" onClick={() => setQuery('')}><X size={19} /></button>}
      <button type="submit" className="search-submit" disabled={!categoryId && query.trim().length < 3}>
        Buscar <ArrowUpRight size={18} />
      </button>
    </form>
    </search>

    {!showResults && (
      <section className="category-browser" aria-labelledby="category-title">
        <div className="category-heading">
          <h2 id="category-title">Buscar por categoría</h2>
          <p>Elegí una familia para ver sus repuestos y aplicaciones.</p>
        </div>
        <div className="category-grid">
          {categories.map(category => (
            <button className="category-card" type="button" key={category.id} onClick={() => selectCategory(category.id)}>
              <span
                className="category-artwork"
                aria-hidden="true"
                style={{ backgroundPosition: category.imagePosition } as CSSProperties}
              />
              <span className="category-card-copy">
                <strong>{category.name}</strong>
                <span>{category.description}</span>
              </span>
              <ArrowUpRight size={20} aria-hidden="true" />
            </button>
          ))}
        </div>
      </section>
    )}

    {showResults && (
      <section className="catalog-results" id="resultados" tabIndex={-1} aria-labelledby="results-title">
        <div className="results-heading">
          <div>
            <h2 id="results-title">{currentCategory ? `Repuestos de ${currentCategory.name}` : `Resultados para “${debouncedQuery.trim()}”`}</h2>
            <output aria-live="polite" aria-atomic="true">{results.length} {results.length === 1 ? 'repuesto encontrado' : 'repuestos encontrados'}</output>
          </div>
          <button type="button" className="clear-results" onClick={resetCatalog}>Nueva búsqueda</button>
        </div>

        <div className="catalog-filters" aria-label="Filtrar repuestos">
          <span className="filter-title"><SlidersHorizontal size={18} /> Filtrar</span>
          {!currentCategory && (
            <label>
              <span>Categoría</span>
              <select value={categoryId} onChange={event => { setCategoryId(event.target.value); setBrand(''); setModel(''); }}>
                <option value="">Todas</option>
                {categories.map(category => <option value={category.id} key={category.id}>{category.name}</option>)}
              </select>
            </label>
          )}
          <label>
            <span>Marca</span>
            <select value={selectedBrand} onChange={event => { setBrand(event.target.value); setModel(''); }}>
              <option value="">Todas</option>
              {brands.map(item => <option value={item} key={item}>{item}</option>)}
            </select>
          </label>
          <label>
            <span>Modelo</span>
            <select value={selectedModel} onChange={event => setModel(event.target.value)}>
              <option value="">Todos</option>
              {models.map(item => <option value={item} key={item}>{item}</option>)}
            </select>
          </label>
          {(brand || model) && <button type="button" className="clear-filters" onClick={() => { setBrand(''); setModel(''); }}>Limpiar filtros</button>}
        </div>

        {results.length > 0 ? (
          <div className="product-list">
            {results.map(product => <ProductResult product={product} onSelect={setSelectedProduct} key={product.id} />)}
          </div>
        ) : (
          <div className="empty-state catalog-empty">
            <Search size={38} />
            <h3>No encontramos ese repuesto</h3>
            <p>Probá con otro nombre, código, marca o modelo. También podemos ayudarte a identificarlo.</p>
            <div className="empty-actions">
              <button className="button" type="button" onClick={() => { setQuery(''); setBrand(''); setModel(''); }}>Limpiar búsqueda</button>
              <a href={whatsapp(undefined, query)} target="_blank" rel="noopener noreferrer">
                <MessageCircle size={18} /> Consultar por WhatsApp <ArrowUpRight size={18} />
              </a>
            </div>
          </div>
        )}
      </section>
    )}

    <p className="catalog-note">Catálogo demostrativo. La información, las aplicaciones y las imágenes son ilustrativas; disponibilidad y compatibilidad se confirman por consulta.</p>
    <ProductDetailDialog product={selectedProduct} onClose={() => setSelectedProduct(null)} />
  </>;
}

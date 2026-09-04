'use client';
import { useEffect, useState, type FormEvent } from 'react';
import { ArrowUpRight, Search, X, SlidersHorizontal, Wrench } from 'lucide-react';
import { categories, products, whatsapp, filterProducts, readCatalogLocation } from '@/lib/catalog';
import { ProductCard } from './product-card';

export function CatalogBrowser() {
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState(categories[0]);
  useEffect(() => {
    const location = readCatalogLocation(window.location.search);
    setQuery(location.query);
    setCategory(location.category);
  }, []);
  const filtered = filterProducts(query, category);
  function showResults(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    document.getElementById('resultados')?.scrollIntoView({ block: 'start' });
    document.getElementById('resultados')?.focus({ preventScroll: true });
  }
  return <>
    <form className="search catalog-search" role="search" onSubmit={showResults}>
      <label className="sr-only" htmlFor="catalog-search">Buscar repuestos por nombre o categoría</label>
      <Search size={21} className="search-icon" />
      <input id="catalog-search" name="q" type="search" autoComplete="off" value={query} onChange={event => setQuery(event.target.value)} placeholder="Nombre de la pieza o categoría" />
      {query && <button type="button" className="search-clear" aria-label="Borrar búsqueda" onClick={() => setQuery('')}><X size={18} /></button>}
      <button type="submit" className="search-submit">Buscar <ArrowUpRight size={18} /></button>
    </form>
          <div className="catalog-layout">
            <aside className="filters" aria-label="Filtrar productos">
              <div className="filters-sticky">
                <h3><SlidersHorizontal size={18} /> Categorías</h3>
                <div className="category-list">
                  {categories.map(item => (
                    <button key={item} type="button" className={category === item ? 'category selected' : 'category'} aria-pressed={category === item} onClick={() => setCategory(item)}>
                      <span>{item}</span>
                      <span className="category-count">{item === categories[0] ? products.length : products.filter(product => product.category === item).length}</span>
                    </button>
                  ))}
                </div>
                <div className="parts-help">
                  <Wrench size={30} />
                  <h4>¿No encontrás<br />tu repuesto?</h4>
                  <p>Mandanos una foto o el modelo de tu tractor.</p>
                  <a href={whatsapp()} target="_blank" rel="noopener noreferrer">Te ayudamos <ArrowUpRight size={19} /></a>
                </div>
              </div>
            </aside>

            <div className="catalog-results" id="resultados" tabIndex={-1}>
              <div className="results-bar">
                <p role="status" aria-live="polite" aria-atomic="true">{filtered.length} {filtered.length === 1 ? 'producto' : 'productos'}</p>
                <span>Selección de muestra</span>
              </div>
              <div className="product-grid">
                {filtered.map(product => <ProductCard product={product} key={product.id} />)}
              </div>
              {filtered.length === 0 && (
                <div className="empty-state">
                  <Search size={38} />
                  <h3>No encontramos ese repuesto</h3>
                  <p>Probá con otro nombre o consultanos. Podemos ayudarte a identificarlo.</p>
                  <div className="empty-actions">
                    <button className="button" type="button" onClick={() => { setQuery(''); setCategory(categories[0]); }}>Ver todos los productos</button>
                    <a href={whatsapp()} target="_blank" rel="noopener noreferrer">Consultar por WhatsApp <ArrowUpRight size={18} /></a>
                  </div>
                </div>
              )}
              <p className="catalog-note">Catálogo demostrativo. Las imágenes son ilustrativas; disponibilidad y compatibilidad se confirman por consulta.</p>
            </div>
          </div>
  </>;
}

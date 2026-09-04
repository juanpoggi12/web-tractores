import type { Metadata } from 'next';
import { ArrowDown, ArrowUpRight, Search, Truck, MapPin } from 'lucide-react';
import { products, categories, whatsapp } from '@/lib/catalog';
import { ProductCard } from '@/components/product-card';
import { ServiceStrip, ContactBand } from '@/components/site-sections';

export const metadata: Metadata = {
  title: 'Tractopartes Orlandini | Repuestos para tractores',
  description: 'Tractopartes Alejandro Orlandini, en Rafaela. Repuestos para tractores, venta mayorista y minorista y consultas por WhatsApp.',
};
const familyImages = ['0% 0%', '50% 0%', '100% 0%', '100% 100%'];
export default function Home() {
  return <main id="contenido" tabIndex={-1} className="home">
    <section className="hero home-hero" aria-labelledby="hero-title">
      <div className="hero-media">
        <img src="/tractor-campo.png" alt="Ilustración fotográfica de un tractor azul trabajando en el campo" width="1672" height="941" fetchPriority="high" />
      </div>
      <div className="shell hero-inner">
        <div className="hero-copy">
          <h1 id="hero-title">El campo no para.<br />Tu tractor, tampoco.</h1>
          <p>Repuestos para tractores.<br />De Rafaela a donde sigue el trabajo.</p>
          <form className="search" role="search" action="/catalogo" method="get">
            <label className="sr-only" htmlFor="product-search">Buscar repuestos</label>
            <Search size={21} className="search-icon" aria-hidden="true" />
            <input id="product-search" name="q" placeholder="¿Qué repuesto necesitás?" type="search" autoComplete="off" />
            <button className="search-submit" type="submit">Buscar <ArrowUpRight size={18} aria-hidden="true" /></button>
          </form>
          <a className="home-hero-link" href="/catalogo">Explorar todo el catálogo <ArrowUpRight size={20} aria-hidden="true" /></a>
        </div>
        <a className="hero-discover" href="#orlandini"><ArrowDown size={20} aria-hidden="true" /> Conocé Orlandini</a>
        <span className="hero-caption">Imagen ilustrativa</span>
      </div>
    </section>
    <ServiceStrip />
    <section id="orlandini" className="shell company-intro" aria-labelledby="company-title">
      <div className="company-title"><h2 id="company-title">Tractopartes.<br />Personas.<br />Trabajo.</h2></div>
      <div className="company-copy">
        <h3>Somos Alejandro Orlandini.</h3>
        <p>Repuestos para tractores y atención para quienes trabajan con ellos: productores, talleres y comercios.</p>
        <p>El modelo de tu tractor, una foto o el código de una pieza. Así empieza una consulta con nosotros. Te ayudamos a encontrar la aplicación que necesitás.</p>
        <a href="/nosotros" className="button">Conocé nuestra empresa <ArrowUpRight size={19} aria-hidden="true" /></a>
      </div>
    </section>
    <section className="families-section" aria-labelledby="families-title">
      <div className="shell">
        <div className="section-heading"><h2 id="families-title">El repuesto que buscás.<br />En su lugar.</h2><p>Explorá las familias del catálogo<br className="desktop-break" /> y consultá por tu pieza.</p></div>
        <div className="family-grid">
          {categories.slice(1).map((category, index) => (
            <a className="family-card" key={category} href={'/catalogo?categoria=' + encodeURIComponent(category)}>
              <div className="family-image"><div className="product-art" role="img" aria-label={'Pieza ilustrativa de ' + category} style={{backgroundPosition: familyImages[index]}} /><span className="image-note">Imagen ilustrativa</span></div>
              <div className="family-caption"><h3>{category}</h3><span className="family-open" aria-hidden="true"><ArrowUpRight size={25} /></span></div>
            </a>
          ))}
        </div>
        <div className="families-close"><p>¿No sabés en qué categoría buscar? Mandanos una foto.</p><a className="text-link" href={whatsapp()} target="_blank" rel="noopener noreferrer">Consultar un repuesto <ArrowUpRight size={19} aria-hidden="true" /></a></div>
      </div>
    </section>
    <section className="catalog shell home-selection" aria-labelledby="selection-title">
      <div className="catalog-heading">
        <div><h2 id="selection-title">Cada pieza cuenta.</h2><p>Una selección de repuestos de muestra.</p></div>
        <a className="text-link" href="/catalogo">Ver catálogo completo <ArrowUpRight size={20} aria-hidden="true" /></a>
      </div>
      <div className="product-grid preview-grid">{products.slice(0, 3).map(product => <ProductCard product={product} key={product.id} />)}</div>
      <p className="catalog-note">Catálogo demostrativo. Las imágenes son ilustrativas; disponibilidad y compatibilidad se confirman por consulta.</p>
    </section>
    <section className="national-section" aria-labelledby="national-title">
      <div className="shell national-inner">
        <div className="national-title"><h2 id="national-title">Nuestro punto<br />de partida: Rafaela.<br />El destino: tu trabajo.</h2><a href="/contacto" className="button button-yellow">Hablemos de tu pedido <ArrowUpRight size={19} aria-hidden="true" /></a></div>
        <div className="national-details">
          <div><Truck size={32} aria-hidden="true" /><h3>Envíos a todo el país</h3><p>Consultá la disponibilidad de tu repuesto y coordiná con nosotros las condiciones de entrega.</p></div>
          <div><MapPin size={28} aria-hidden="true" /><h3>Atención en Rafaela</h3><p>Bv. Roca 529, Santa Fe.<br />Venta mayorista y minorista.</p></div>
        </div>
      </div>
    </section>
    <ContactBand />
  </main>;
}

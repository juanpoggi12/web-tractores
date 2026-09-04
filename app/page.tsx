import type { Metadata } from 'next';
import { ArrowUpRight, Search } from 'lucide-react';
import { products } from '@/lib/catalog';
import { ProductCard } from '@/components/product-card';
import { ServiceStrip, ContactBand } from '@/components/site-sections';

export const metadata: Metadata = {
  title: 'Tractopartes Orlandini | Repuestos para tractores',
  description: 'Tractopartes Alejandro Orlandini, en Rafaela. Conocé nuestra propuesta, explorá el catálogo y consultá por tu repuesto.',
};
export default function Home() {
  return <main id="contenido" tabIndex={-1}>
        <section className="hero" aria-labelledby="hero-title">
          <div className="hero-media">
            <img src="/tractor-campo.png" alt="Ilustración fotográfica de un tractor azul trabajando en el campo" width="1672" height="941" fetchPriority="high" />
          </div>
          <div className="shell hero-inner">
            <div className="hero-copy">
              <h1 id="hero-title">El campo no para.<br />Tu tractor, tampoco.</h1>
              <p>Encontrá la pieza que necesitás.<br />Nosotros te ayudamos a elegirla.</p>
              <form className="search" role="search" action="/catalogo" method="get">
                <label className="sr-only" htmlFor="product-search">Buscar repuestos</label>
                <Search size={21} className="search-icon" />
                <input id="product-search" name="q" placeholder="¿Qué repuesto necesitás?" type="search" autoComplete="off" />
                <button className="search-submit" type="submit">Buscar <ArrowUpRight size={18} /></button>
              </form>
            </div>
            <a className="hero-explore" href="/catalogo"><ArrowUpRight size={19} /><span>Explorar repuestos</span></a>
          </div>
        </section>


    <ServiceStrip />
    <section className="catalog shell home-selection" aria-labelledby="selection-title">
      <div className="catalog-heading">
        <div><h2 id="selection-title">Cada pieza cuenta.</h2><p>Un primer vistazo a nuestros repuestos de muestra.</p></div>
        <a className="text-link" href="/catalogo">Ver catálogo completo <ArrowUpRight size={20} /></a>
      </div>
      <div className="product-grid preview-grid">{products.slice(0, 3).map(product => <ProductCard product={product} key={product.id} />)}</div>
      <p className="catalog-note">Catálogo demostrativo. Las imágenes son ilustrativas; disponibilidad y compatibilidad se confirman por consulta.</p>
    </section>
    <section className="about">
      <div className="shell about-inner">
        <div className="about-main"><h2>De Rafaela,<br />para tu próximo trabajo.</h2><p>Somos Tractopartes Alejandro Orlandini. Repuestos para tractores y atención para quienes trabajan con ellos: productores, talleres y comercios.</p></div>
        <div className="about-right"><h3>Conocé Orlandini.</h3><p>El modelo de tu tractor, una foto o el código de una pieza. Así empieza una consulta con nosotros.</p><a href="/nosotros" className="button button-yellow">Más sobre nosotros <ArrowUpRight size={19} /></a></div>
      </div>
    </section>
    <ContactBand />
  </main>;
}

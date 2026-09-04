import type { Metadata } from 'next';
import { ArrowUpRight } from 'lucide-react';
import { ContactBand, ServiceStrip } from '@/components/site-sections';
export const metadata: Metadata = {
  title: 'Nosotros | Tractopartes Alejandro Orlandini',
  description: 'Conocé Tractopartes Alejandro Orlandini. Repuestos para tractores, venta mayorista y minorista desde Rafaela, Santa Fe.',
};
export default function AboutPage() {
  return <main id="contenido" tabIndex={-1}>
    <section className="institutional-cover">
      <div className="shell institutional-intro">
        <h1>Detrás de cada pieza,<br />está Orlandini.</h1>
        <div><p>Somos Tractopartes Alejandro Orlandini. Desde Rafaela, Santa Fe, acompañamos las consultas de quienes trabajan con tractores.</p><a className="text-link light-link" href="/contacto">Conversemos sobre tu repuesto <ArrowUpRight size={20} /></a></div>
      </div>
      <figure className="institutional-photo">
        <img src="/tractor-campo.png" alt="Escena ilustrativa de un tractor azul trabajando la tierra" width="1672" height="941" fetchPriority="high" />
        <figcaption>El trabajo sigue. Nosotros te ayudamos a encontrar la pieza.<span>Imagen ilustrativa</span></figcaption>
      </figure>
    </section>
    <ServiceStrip />
    <section className="shell story-section" aria-labelledby="story-title">
      <div className="story-intro"><h2 id="story-title">Entender qué necesitás.<br />Ese es el comienzo.</h2><p>No todas las piezas tienen la misma aplicación. Por eso, el modelo de tu tractor, una referencia o una foto hacen la diferencia al consultar.</p><a href="/catalogo" className="button">Explorar el catálogo <ArrowUpRight size={19} /></a></div>
      <div className="audience-list">
        <article><h3>Para el productor</h3><p>Consultá por la pieza que necesitás para tu tractor. Te ayudamos a identificar su aplicación antes de avanzar.</p></article>
        <article><h3>Para el taller</h3><p>Compartinos el código, las medidas o una foto del repuesto para orientar la consulta.</p></article>
        <article><h3>Para el comercio</h3><p>Atendemos consultas mayoristas y minoristas. Escribinos con el detalle de las piezas que buscás.</p></article>
      </div>
    </section>
    <section className="shipping-band"><div className="shell shipping-inner"><h2>Desde Rafaela.<br />A todo el país.</h2><div><p>Realizamos envíos a todo el país. Consultanos por disponibilidad y coordiná con nosotros las condiciones de entrega.</p><a href="/contacto" className="text-link light-link">Contactar a Orlandini <ArrowUpRight size={20} /></a></div></div></section>
    <ContactBand />
  </main>;
}

import type { Metadata } from 'next';
import { CatalogBrowser } from '@/components/catalog-browser';
import { ContactBand } from '@/components/site-sections';
export const metadata: Metadata = {
 title: 'Catálogo de repuestos | Tractopartes Orlandini',
 description: 'Explorá piezas para tractores por categoría. Catálogo de muestra sin precios, con consultas de disponibilidad y compatibilidad por WhatsApp.',
};
export default function CatalogPage() {
 return <main id="contenido" tabIndex={-1}>
   <section className="catalog shell catalog-page" aria-labelledby="catalog-title">
     <div className="catalog-heading"><div><h1 id="catalog-title">Repuestos para seguir.</h1><p>Encontrá la pieza. Consultá su aplicación para tu tractor.</p></div></div>
     <CatalogBrowser />
   </section>
   <ContactBand />
 </main>;
}

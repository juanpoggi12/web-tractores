import type { Metadata } from 'next';
import { CatalogBrowser } from '@/components/catalog-browser';
import { ContactBand } from '@/components/site-sections';
export const metadata: Metadata = {
 title: 'Catálogo de repuestos | Tractopartes Orlandini',
 description: 'Buscá repuestos para tractores por nombre, código, marca, modelo o categoría y consultá su aplicación por WhatsApp.',
};
export default function CatalogPage() {
 return <main id="contenido" tabIndex={-1}>
   <section className="catalog shell catalog-page" aria-labelledby="catalog-title">
     <div className="catalog-heading"><div><h1 id="catalog-title">Encontrá el repuesto.</h1><p>Buscá por nombre, código, marca o modelo. Confirmamos cada aplicación antes de tu compra.</p></div></div>
     <CatalogBrowser />
   </section>
   <ContactBand />
 </main>;
}

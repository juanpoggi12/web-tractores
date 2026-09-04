import { ArrowUpRight, MessageCircle } from 'lucide-react';
import { whatsapp, navigation, mapsUrl, facebookUrl } from '@/lib/catalog';

export function SiteFooter() {
  return <>
    <footer className="site-footer">
      <div className="shell footer-top">
        <div className="footer-brand-block">
          <a className="footer-logo" href="/" aria-label="Tractopartes Alejandro Orlandini, inicio"><img src="/orlandini-logo.webp" alt="Alejandro Orlandini Tractopartes" width="270" height="90" loading="lazy" /></a>
          <p>Repuestos para tractores.<br />Personas que te ayudan a encontrarlos.</p>
        </div>
        <nav className="footer-pages" aria-label="Páginas del sitio">{navigation.map(item => <a href={item.href} key={item.href}>{item.label}</a>)}</nav>
        <div className="footer-contact">
          <a className="footer-phone" href={whatsapp()} target="_blank" rel="noopener noreferrer"><span>WhatsApp</span><strong>03492 41-4532</strong><ArrowUpRight size={20} aria-hidden="true" /></a>
          <a href={mapsUrl} target="_blank" rel="noopener noreferrer">Bv. Roca 529, Rafaela<br />Santa Fe, Argentina <ArrowUpRight size={16} aria-hidden="true" /></a>
          <a href={facebookUrl} target="_blank" rel="noopener noreferrer">Facebook <ArrowUpRight size={16} aria-hidden="true" /></a>
        </div>
      </div>
      <div className="shell footer-bottom"><span>© {new Date().getFullYear()} Alejandro Orlandini · Tractopartes</span><p>Prototipo · Productos de muestra · Contacto sujeto a confirmación.</p></div>
    </footer>
    <a className="floating-whatsapp" href={whatsapp()} target="_blank" rel="noopener noreferrer" aria-label="Consultar a Orlandini por WhatsApp"><MessageCircle size={26} /></a>
  </>;
}

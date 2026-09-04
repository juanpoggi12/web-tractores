import { ArrowUpRight, MessageCircle } from 'lucide-react';
import { whatsapp, navigation } from '@/lib/catalog';
export function SiteFooter() { return <><footer>
        <div className="shell footer-main">
          <nav className="footer-navigation" aria-label="Páginas del sitio">{navigation.map(item => <a href={item.href} key={item.href}>{item.label}</a>)}</nav>
          <span>© {new Date().getFullYear()} Alejandro Orlandini · Tractopartes</span>
          <div className="footer-links">
            <a href="https://www.facebook.com/orlandinitractopartes/" target="_blank" rel="noopener noreferrer">Facebook <ArrowUpRight size={16} /></a>
            <a href="/catalogo">Ver catálogo <ArrowUpRight size={16} /></a>
          </div>
        </div>
        <p className="shell prototype-note">Prototipo de presentación · Productos de muestra · Datos de contacto sujetos a confirmación.</p>
      </footer>
      <a className="floating-whatsapp" href={whatsapp()} target="_blank" rel="noopener noreferrer" aria-label="Consultar a Orlandini por WhatsApp"><MessageCircle size={26} /></a></>; }

'use client';
import { usePathname } from 'next/navigation';
import { MapPin, ArrowUpRight, MessageCircle } from 'lucide-react';
import { navigation, whatsapp } from '@/lib/catalog';
export function SiteHeader() {
 const pathname = usePathname();
 return <><a className="skip-link" href="#contenido">Ir al contenido</a>
      <div className="utility">
        <div className="shell utility-inner">
          <span><MapPin size={14} /> Rafaela, Santa Fe</span>
          <span>Repuestos para el trabajo de todos los días</span>
          <a href={whatsapp()} target="_blank" rel="noopener noreferrer">Atención personalizada <ArrowUpRight size={14} /></a>
        </div>
      </div>

      <header className="header">
        <div className="shell header-inner">
          <a href="/" className="brand" aria-label="Tractopartes Alejandro Orlandini, inicio">
            <img src="/orlandini-logo.webp" alt="Alejandro Orlandini Tractopartes" width="270" height="90" />
          </a>
          <nav aria-label="Navegación principal">
            {navigation.map(item => <a key={item.href} href={item.href} className={pathname === item.href ? 'nav-active' : undefined} aria-current={pathname === item.href ? 'page' : undefined}>{item.label}</a>)}
          </nav>
          <a className="button header-cta" aria-label="Hablemos por WhatsApp" href={whatsapp()} target="_blank" rel="noopener noreferrer">
            <MessageCircle size={20} /><span>Hablemos por WhatsApp</span>
          </a>
        </div>
      </header></>;
}

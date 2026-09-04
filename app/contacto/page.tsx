import type { Metadata } from 'next';
import { ArrowUpRight, MessageCircle, MapPin } from 'lucide-react';
import { whatsapp, mapsUrl, facebookUrl } from '@/lib/catalog';
export const metadata: Metadata = {
  title: 'Contacto | Tractopartes Orlandini en Rafaela',
  description: 'Consultá por WhatsApp a Tractopartes Alejandro Orlandini o encontranos en Bv. Roca 529, Rafaela, Santa Fe.',
};
export default function ContactPage() {
  return <main id="contenido" tabIndex={-1}>
    <section className="contact-cover">
      <div className="shell contact-cover-inner">
        <div><h1>Hablemos<br />de tu repuesto.</h1><p>Una consulta concreta.<br />Atención de persona a persona.</p></div>
        <div className="direct-contact">
          <MessageCircle size={38} aria-hidden="true" />
          <h2>Escribinos por WhatsApp</h2>
          <a className="direct-phone" href={whatsapp()} target="_blank" rel="noopener noreferrer">03492 41-4532</a>
          <p>Contanos qué pieza necesitás y para qué tractor.</p>
          <a className="button" href={whatsapp()} target="_blank" rel="noopener noreferrer">Iniciar una consulta <ArrowUpRight size={20} /></a>
        </div>
      </div>
    </section>
    <section className="shell contact-content">
      <div className="visit-block">
        <MapPin size={32} aria-hidden="true" />
        <h2>Encontranos<br />en Rafaela.</h2>
        <address><strong>Bv. Roca 529</strong><span>Rafaela, Santa Fe<br />Argentina</span></address>
        <a className="button" href={mapsUrl} target="_blank" rel="noopener noreferrer">Cómo llegar <ArrowUpRight size={19} /></a>
        <a className="text-link" href={facebookUrl} target="_blank" rel="noopener noreferrer">Orlandini en Facebook <ArrowUpRight size={18} /></a>
      </div>
      <div className="inquiry-guide">
        <h2>Nos ayuda saber…</h2>
        <p>Con estos datos podemos orientar mejor tu consulta. No hace falta que tengas todos.</p>
        <dl>
          <div><dt>La marca y el modelo</dt><dd>Del tractor en el que se va a utilizar el repuesto.</dd></div>
          <div><dt>La pieza que buscás</dt><dd>Su nombre, código o una referencia que tengas a mano.</dd></div>
          <div><dt>Una foto, si la tenés</dt><dd>Podés enviarla directamente en la conversación de WhatsApp.</dd></div>
        </dl>
        <p className="inquiry-note">¿Todavía no sabés cómo se llama? <a href="/catalogo">Explorá las categorías del catálogo.</a></p>
      </div>
    </section>
    <section className="contact-bottom"><div className="shell"><h2>La próxima pieza está a una consulta.</h2><a className="text-link" href="/catalogo">Volver al catálogo <ArrowUpRight size={20} /></a></div></section>
  </main>;
}

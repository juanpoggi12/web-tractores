import { ArrowUpRight, MapPin, MessageCircle, Truck, Wrench } from 'lucide-react';
import { whatsapp } from '@/lib/catalog';
export function ServiceStrip() { return (<div className="service-strip">
          <div className="shell service-inner">
            <span><Wrench size={20} /> Asesoramiento en repuestos</span>
            <span><Truck size={20} /> Envíos a todo el país</span>
            <span><MessageCircle size={20} /> Venta mayorista y minorista</span>
          </div>
        </div>); }
export function ContactBand() { return (<section className="contact">
          <div className="shell contact-inner">
            <div className="contact-heading">
              <h2>Hablemos<br />de tu repuesto.</h2>
              <p>Atención directa, de persona a persona.</p>
            </div>
            <div className="contact-details">
              <a className="contact-phone" href={whatsapp()} target="_blank" rel="noopener noreferrer">
                <MessageCircle size={29} />
                <span>WhatsApp<strong>03492 41-4532</strong></span>
                <ArrowUpRight size={26} />
              </a>
              <div className="contact-location">
                <MapPin size={25} />
                <div><h3>Encontranos en Rafaela</h3><p>Bv. Roca 529 · Santa Fe, Argentina</p>
                  <a href="https://www.google.com/maps/search/?api=1&query=Bv.+Roca+529+Rafaela+Santa+Fe+Argentina" target="_blank" rel="noopener noreferrer">Cómo llegar <ArrowUpRight size={17} /></a>
                </div>
              </div>
            </div>
          </div>
        </section>); }

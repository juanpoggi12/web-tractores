'use client';

import { useState } from 'react';
import { ArrowUpRight, Search, MessageCircle, MapPin, Truck, Wrench, X, ChevronRight, SlidersHorizontal } from 'lucide-react';

const products = [
  { id: 'disco-embrague', name: 'Disco de embrague', category: 'Embrague y transmisión', position: '0% 0%' },
  { id: 'bomba-hidraulica', name: 'Bomba hidráulica', category: 'Sistema hidráulico', position: '50% 0%' },
  { id: 'rodamiento-conico', name: 'Rodamiento cónico', category: 'Tren delantero', position: '100% 0%' },
  { id: 'filtro-aire', name: 'Filtro de aire', category: 'Motor y filtros', position: '0% 100%' },
  { id: 'bomba-agua', name: 'Bomba de agua', category: 'Motor y filtros', position: '50% 100%' },
  { id: 'conjunto-pistones', name: 'Conjunto de pistones', category: 'Motor y filtros', position: '100% 100%' },
];
const categories = ['Todos los productos', 'Embrague y transmisión', 'Sistema hidráulico', 'Tren delantero', 'Motor y filtros'];
function whatsapp(name?: string) {
  const message = name ? `Hola, Tractopartes Orlandini. Vi “${name}” en su catálogo de muestra y quisiera consultar disponibilidad y compatibilidad. Mi tractor es: ` : 'Hola, Tractopartes Orlandini. Necesito asesoramiento para encontrar un repuesto para mi tractor.';
  return 'https://wa.me/543492414532?text=' + encodeURIComponent(message);
}
function normalize(value: string) { return value.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase(); }

export default function Home() {
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState(categories[0]);
  const filtered = products.filter(p => (category === categories[0] || p.category === category) && normalize(p.name + ' ' + p.category).includes(normalize(query.trim())));
  return (
    <>
      <a className="skip-link" href="#catalogo">Ir al catálogo</a>
      <div className="utility"><div className="shell"><span><MapPin size={13} /> Rafaela, Santa Fe</span><span>Repuestos para el trabajo de todos los días</span><a href={whatsapp()} target="_blank" rel="noopener noreferrer">Atención personalizada <ArrowUpRight size={13} /></a></div></div>
      <header className="header"><div className="shell header-inner">
        <a href="#" className="brand" aria-label="Tractopartes Alejandro Orlandini, inicio"><img src="/orlandini-logo.webp" alt="Alejandro Orlandini Tractopartes" width="270" height="90" /></a>
        <nav aria-label="Navegación principal"><a className="nav-active" href="#catalogo">Catálogo</a><a href="#nosotros">Nosotros</a><a href="#contacto">Contacto</a></nav>
        <a className="button header-cta" aria-label="Consultar por WhatsApp" href={whatsapp()} target="_blank" rel="noopener noreferrer"><MessageCircle size={18} /><span>Hablemos por WhatsApp</span></a>
      </div></header>
      <main>
        <section className="hero" aria-labelledby="hero-title">
          <div className="hero-photo"><img src="/tractor-campo.png" alt="Ilustración fotográfica de un tractor azul trabajando en el campo" width="1672" height="941" fetchPriority="high" /></div>
          <div className="shell hero-inner"><div className="hero-copy"><h1 id="hero-title">El campo no para.<br /><span>Tu tractor, tampoco.</span></h1><p>Encontrá la pieza que necesitás.<br />Nosotros te ayudamos a elegirla.</p><a href="#catalogo" className="hero-link">Explorar repuestos <ArrowUpRight size={20} /></a></div><span className="hero-caption">Tractopartes Orlandini · Rafaela</span></div>
        </section>
        <div className="service-strip"><div className="shell"><span><Wrench size={18} /> Asesoramiento en repuestos</span><span><Truck size={18} /> Envíos a todo el país</span><span><MessageCircle size={18} /> Venta mayorista y minorista</span></div></div>
        <section id="catalogo" className="catalog shell" aria-labelledby="catalog-title">
          <div className="catalog-heading"><div><h2 id="catalog-title">Cada pieza cuenta.</h2><p>Explorá el catálogo y consultanos por tu repuesto.</p></div><label className="search"><Search size={20} /><span className="sr-only">Buscar repuestos</span><input value={query} onChange={e=>setQuery(e.target.value)} placeholder="¿Qué repuesto estás buscando?" type="search" />{query && <button aria-label="Borrar búsqueda" onClick={()=>setQuery('')}><X size={18} /></button>}</label></div>
          <div className="catalog-layout">
            <aside className="filters" aria-label="Filtrar productos"><h3><SlidersHorizontal size={17} /> Categorías</h3><div className="category-list">{categories.map(c=><button key={c} className={category===c?'category selected':'category'} aria-pressed={category===c} onClick={()=>setCategory(c)}><span>{c}</span><span className="category-count">{c===categories[0]?products.length:products.filter(p=>p.category===c).length}</span></button>)}</div><div className="parts-help"><Wrench size={27} /><h4>¿No encontrás<br />tu repuesto?</h4><p>Mandanos una foto o el modelo de tu tractor.</p><a href={whatsapp()} target="_blank" rel="noopener noreferrer">Te ayudamos <ArrowUpRight size={16} /></a></div></aside>
            <div className="catalog-results"><div className="results-bar"><p role="status" aria-live="polite">{filtered.length} {filtered.length===1?'producto':'productos'}</p><span>Selección de muestra</span></div>
              <div className="product-grid">{filtered.map(p=><article className="product-card" key={p.id} id={p.id}><div className="product-image" role="img" aria-label={p.name+' — imagen ilustrativa'} style={{backgroundPosition:p.position}}><span className="image-note">Imagen ilustrativa</span></div><div className="product-info"><p className="product-category">{p.category}</p><h3>{p.name}</h3><p className="compatibility">Consultá la aplicación para tu tractor</p><a className="product-cta" href={whatsapp(p.name)} target="_blank" rel="noopener noreferrer" aria-label={'Consultar por WhatsApp: '+p.name}><MessageCircle size={17} />Consultar por WhatsApp<ArrowUpRight size={16} /></a></div></article>)}</div>
              {filtered.length===0 && <div className="empty-state"><Search size={32}/><h3>No encontramos ese repuesto</h3><p>Probá con otro nombre o consultanos. Podemos ayudarte a identificarlo.</p><button className="button" onClick={()=>{setQuery('');setCategory(categories[0]);}}>Ver todos los productos</button><a href={whatsapp()} target="_blank" rel="noopener noreferrer">Consultar por WhatsApp <ArrowUpRight size={16}/></a></div>}
              <p className="catalog-note">Catálogo demostrativo. Las imágenes son ilustrativas; disponibilidad y compatibilidad se confirman por consulta.</p>
            </div>
          </div>
        </section>
        <section id="nosotros" className="about"><div className="shell about-inner"><div><h2>De Rafaela,<br />para tu próximo trabajo.</h2><p>Somos Tractopartes Alejandro Orlandini. Repuestos para tractores y atención para quienes trabajan con ellos: productores, talleres y comercios.</p></div><div className="about-right"><h3>Una consulta. La pieza correcta.</h3><p>Compartinos el modelo de tu tractor, el código o una foto de la pieza. Te ayudamos a consultar su aplicación y disponibilidad.</p><a className="button button-yellow" href={whatsapp()} target="_blank" rel="noopener noreferrer"><MessageCircle size={19}/> Consultar un repuesto <ArrowUpRight size={17}/></a></div></div></section>
        <section id="contacto" className="contact shell"><div><h2>Hablemos de tu repuesto.</h2><p>Atención directa, de persona a persona.</p></div><div className="contact-location"><MapPin size={22}/><div><h3>Encontranos en Rafaela</h3><p>Bv. Roca 529 · Santa Fe, Argentina</p><a href="https://www.google.com/maps/search/?api=1&query=Bv.+Roca+529+Rafaela+Santa+Fe+Argentina" target="_blank" rel="noopener noreferrer">Cómo llegar <ArrowUpRight size={15}/></a></div></div><a className="contact-phone" href={whatsapp()} target="_blank" rel="noopener noreferrer"><MessageCircle size={24}/><span>WhatsApp<strong>03492 41-4532</strong></span><ArrowUpRight size={20}/></a></section>
      </main>
      <footer><div className="shell footer-main"><span>© {new Date().getFullYear()} Alejandro Orlandini · Tractopartes</span><a href="https://www.facebook.com/orlandinitractopartes/" target="_blank" rel="noopener noreferrer">Facebook <ArrowUpRight size={14}/></a><a href="#catalogo">Volver al catálogo <ChevronRight size={14}/></a></div><div className="shell prototype-note">Prototipo de presentación · Productos de muestra · Datos de contacto sujetos a confirmación.</div></footer>
      <a className="floating-whatsapp" href={whatsapp()} target="_blank" rel="noopener noreferrer" aria-label="Consultar a Orlandini por WhatsApp"><MessageCircle size={25}/></a>
    </>
  );
}

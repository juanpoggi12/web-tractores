export const products = [
  { id: 'disco-embrague', name: 'Disco de embrague', category: 'Embrague y transmisión', position: '0% 0%' },
  { id: 'bomba-hidraulica', name: 'Bomba hidráulica', category: 'Sistema hidráulico', position: '50% 0%' },
  { id: 'rodamiento-conico', name: 'Rodamiento cónico', category: 'Tren delantero', position: '100% 0%' },
  { id: 'filtro-aire', name: 'Filtro de aire', category: 'Motor y filtros', position: '0% 100%' },
  { id: 'bomba-agua', name: 'Bomba de agua', category: 'Motor y filtros', position: '50% 100%' },
  { id: 'conjunto-pistones', name: 'Conjunto de pistones', category: 'Motor y filtros', position: '100% 100%' },
];
export const categories = ['Todos los productos', 'Embrague y transmisión', 'Sistema hidráulico', 'Tren delantero', 'Motor y filtros'];

export function whatsapp(name?: string) {
  const message = name
    ? `Hola, Tractopartes Orlandini. Vi “${name}” en su catálogo de muestra y quisiera consultar disponibilidad y compatibilidad. Mi tractor es: `
    : 'Hola, Tractopartes Orlandini. Necesito asesoramiento para encontrar un repuesto para mi tractor.';
  return 'https://wa.me/543492414532?text=' + encodeURIComponent(message);
}

export function normalize(value: string) {
  return value.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();
}


export type Product = typeof products[number];
export const mapsUrl = 'https://www.google.com/maps/search/?api=1&query=Bv.+Roca+529+Rafaela+Santa+Fe+Argentina';
export const facebookUrl = 'https://www.facebook.com/orlandinitractopartes/';
export const navigation = [
  { href: '/', label: 'Inicio' },
  { href: '/nosotros', label: 'Nosotros' },
  { href: '/catalogo', label: 'Catálogo' },
  { href: '/contacto', label: 'Contacto' },
];
export function filterProducts(query: string, category: string) {
  return products.filter(product =>
    (category === categories[0] || product.category === category) &&
    normalize(product.name + ' ' + product.category).includes(normalize(query.trim()))
  );
}

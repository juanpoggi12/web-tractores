export interface ProductImage {
  src: string;
  position: string;
}

export interface Product {
  id: string;
  name: string;
  code: string;
  categoryId: string;
  brand: string;
  models: string[];
  compatibility: string;
  partType: string;
  dimensions: string;
  specifications: string[];
  notes: string;
  aliases?: string[];
  image?: ProductImage;
}

export interface Category {
  id: string;
  name: string;
  description: string;
  imagePosition: string;
}

export interface CatalogSearch {
  query?: string;
  categoryId?: string;
  brand?: string;
  model?: string;
}

export const categories: Category[] = [
  { id: 'motor', name: 'Motor', description: 'Componentes internos, bombas y refrigeración.', imagePosition: '0% 0%' },
  { id: 'filtros', name: 'Filtros', description: 'Aire, aceite, combustible e hidráulicos.', imagePosition: '33.333% 0%' },
  { id: 'transmision', name: 'Transmisión', description: 'Embrague, engranajes y mando final.', imagePosition: '66.667% 0%' },
  { id: 'hidraulica', name: 'Hidráulica', description: 'Bombas, válvulas, cilindros y conexiones.', imagePosition: '100% 0%' },
  { id: 'electricidad', name: 'Electricidad', description: 'Arranque, carga, luces y sensores.', imagePosition: '0% 100%' },
  { id: 'rodamientos', name: 'Rodamientos', description: 'Rulemanes, retenes y conjuntos de apoyo.', imagePosition: '33.333% 100%' },
  { id: 'correas', name: 'Correas', description: 'Transmisión auxiliar y juegos de correas.', imagePosition: '66.667% 100%' },
  { id: 'frenos', name: 'Frenos', description: 'Discos, cintas, bombas y reparación.', imagePosition: '100% 100%' },
];

const image = (position: string): ProductImage => ({ src: '/productos-muestra.png', position });

export const products: Product[] = [
  {
    id: 'conjunto-pistones', name: 'Conjunto de pistones', code: 'MOT-1042', categoryId: 'motor', brand: 'Fiat', models: ['780', '800'],
    compatibility: 'Aplicación de muestra para tractores Fiat 780 y 800.', partType: 'Conjunto interno de motor', dimensions: 'Diámetro 100 mm',
    specifications: ['Juego de 4 pistones', 'Incluye pernos y seguros'], notes: 'Confirmar diámetro, cilindrada y número de motor antes de solicitar.', image: image('100% 100%'), aliases: ['piston', 'aros'],
  },
  {
    id: 'bomba-agua', name: 'Bomba de agua', code: 'MOT-2180', categoryId: 'motor', brand: 'Deutz', models: ['A 65', 'A 85'],
    compatibility: 'Aplicación de muestra para motores Deutz refrigerados por agua.', partType: 'Sistema de refrigeración', dimensions: 'Polea de 125 mm',
    specifications: ['Cuerpo de fundición', 'Eje con rodamiento sellado'], notes: 'Comparar la posición de las fijaciones con la pieza original.', image: image('50% 100%'), aliases: ['refrigeracion', 'water pump'],
  },
  {
    id: 'juego-juntas-motor', name: 'Juego de juntas de motor', code: 'MOT-3305', categoryId: 'motor', brand: 'Massey Ferguson', models: ['1175', '1185'],
    compatibility: 'Referencia demostrativa para motores de cuatro cilindros.', partType: 'Sellado de motor', dimensions: 'Juego completo',
    specifications: ['Junta de tapa', 'Juntas de admisión y escape'], notes: 'La composición del juego varía según la serie del motor.', aliases: ['juntas', 'empaquetaduras'],
  },
  {
    id: 'camisa-cilindro', name: 'Camisa de cilindro', code: 'MOT-4412', categoryId: 'motor', brand: 'John Deere', models: ['2420', '2850'],
    compatibility: 'Aplicación ilustrativa sujeta a verificación por número de motor.', partType: 'Componente interno', dimensions: 'Diámetro exterior 108 mm',
    specifications: ['Camisa húmeda', 'Acabado rectificado'], notes: 'Medir la pieza original y confirmar sobremedida.', aliases: ['cilindro', 'camisa motor'],
  },
  {
    id: 'filtro-aire', name: 'Filtro de aire primario', code: 'FIL-1008', categoryId: 'filtros', brand: 'New Holland', models: ['TT55', 'TT75'],
    compatibility: 'Aplicación de muestra para la familia New Holland TT.', partType: 'Filtro de aire', dimensions: 'Alto 310 mm · Ø 160 mm',
    specifications: ['Elemento seco', 'Papel plisado'], notes: 'Verificar medidas y forma de las tapas.', image: image('0% 100%'), aliases: ['filtro aire', 'elemento'],
  },
  {
    id: 'filtro-aceite', name: 'Filtro de aceite', code: 'FIL-2041', categoryId: 'filtros', brand: 'Fiat', models: ['600', '780'],
    compatibility: 'Referencia demostrativa para motores Fiat seleccionados.', partType: 'Filtro roscado', dimensions: 'Rosca 3/4–16 UNF',
    specifications: ['Válvula antidrenaje', 'Carcasa metálica'], notes: 'Confirmar rosca y altura antes de solicitar.', aliases: ['lubricacion', 'filtro motor'],
  },
  {
    id: 'filtro-combustible', name: 'Filtro de combustible', code: 'FIL-3156', categoryId: 'filtros', brand: 'John Deere', models: ['2140', '2850'],
    compatibility: 'Aplicación ilustrativa para sistemas diésel.', partType: 'Filtro de gasoil', dimensions: 'Alto 145 mm · Ø 85 mm',
    specifications: ['Elemento reemplazable', 'Separación primaria de partículas'], notes: 'Consultar si corresponde versión con decantador.', aliases: ['gasoil', 'diesel'],
  },
  {
    id: 'filtro-hidraulico', name: 'Filtro hidráulico', code: 'FIL-4270', categoryId: 'filtros', brand: 'Massey Ferguson', models: ['1175', '1195'],
    compatibility: 'Referencia de muestra para circuitos hidráulicos de tractor.', partType: 'Filtro hidráulico', dimensions: 'Alto 175 mm · Ø 95 mm',
    specifications: ['Medio filtrante reforzado', 'Carcasa metálica'], notes: 'Confirmar presión de trabajo y tipo de conexión.', aliases: ['hidraulica', 'aceite hidraulico'],
  },
  {
    id: 'disco-embrague', name: 'Disco de embrague', code: 'TRA-1120', categoryId: 'transmision', brand: 'Fiat', models: ['780', '800'],
    compatibility: 'Aplicación de muestra para embrague seco de tractor.', partType: 'Embrague', dimensions: 'Ø 310 mm · 10 estrías',
    specifications: ['Forro de fricción remachado', 'Centro amortiguado'], notes: 'Confirmar diámetro, estriado y altura del cubo.', image: image('0% 0%'), aliases: ['clutch', 'placa'],
  },
  {
    id: 'placa-embrague', name: 'Placa de embrague', code: 'TRA-2248', categoryId: 'transmision', brand: 'Deutz', models: ['A 65', 'A 85'],
    compatibility: 'Referencia demostrativa para conjunto de embrague Deutz.', partType: 'Placa de presión', dimensions: 'Ø 310 mm',
    specifications: ['Mecanismo de diafragma', 'Superficie mecanizada'], notes: 'Se recomienda comparar con disco y rulemán de empuje.', aliases: ['prensa', 'embrague'],
  },
  {
    id: 'engranaje-caja', name: 'Engranaje de caja', code: 'TRA-3374', categoryId: 'transmision', brand: 'Zanello', models: ['V-210', 'V-220'],
    compatibility: 'Aplicación ilustrativa; confirmar cantidad de dientes.', partType: 'Caja de velocidades', dimensions: '32 dientes',
    specifications: ['Acero tratado', 'Dentado recto'], notes: 'Enviar fotografía y medidas de la pieza original.', aliases: ['piñon', 'cambio'],
  },
  {
    id: 'cruceta-cardan', name: 'Cruceta de cardán', code: 'TRA-4490', categoryId: 'transmision', brand: 'Aplicación universal', models: ['Serie agrícola'],
    compatibility: 'Uso demostrativo en transmisiones cardánicas agrícolas.', partType: 'Junta universal', dimensions: '30 × 82 mm',
    specifications: ['Cuatro cubetas', 'Engrase central'], notes: 'Medir diámetro de cubeta y largo total.', aliases: ['cardan', 'junta'],
  },
  {
    id: 'bomba-hidraulica', name: 'Bomba hidráulica', code: 'HID-1055', categoryId: 'hidraulica', brand: 'Massey Ferguson', models: ['1175', '1195'],
    compatibility: 'Aplicación de muestra para sistema de levante hidráulico.', partType: 'Bomba de engranajes', dimensions: 'Desplazamiento 16 cm³/vuelta',
    specifications: ['Giro derecho', 'Cuerpo de aluminio'], notes: 'Confirmar sentido de giro, eje y conexiones.', image: image('50% 0%'), aliases: ['levante', 'bomba aceite'],
  },
  {
    id: 'cilindro-direccion', name: 'Cilindro de dirección', code: 'HID-2176', categoryId: 'hidraulica', brand: 'John Deere', models: ['2420', '2850'],
    compatibility: 'Referencia demostrativa para dirección asistida.', partType: 'Cilindro de doble efecto', dimensions: 'Carrera 210 mm',
    specifications: ['Vástago cromado', 'Extremos articulados'], notes: 'Comparar carrera y distancia entre centros.', aliases: ['direccion hidraulica', 'piston'],
  },
  {
    id: 'valvula-control-remoto', name: 'Válvula de control remoto', code: 'HID-3292', categoryId: 'hidraulica', brand: 'New Holland', models: ['TT55', 'TT75'],
    compatibility: 'Aplicación ilustrativa para circuitos auxiliares.', partType: 'Válvula distribuidora', dimensions: '2 vías · rosca 1/2 pulgada',
    specifications: ['Retorno por resorte', 'Palanca manual'], notes: 'Confirmar caudal y configuración del circuito.', aliases: ['distribuidor', 'comando'],
  },
  {
    id: 'kit-reparacion-bomba', name: 'Kit de reparación de bomba', code: 'HID-4318', categoryId: 'hidraulica', brand: 'Fiat', models: ['780', '800'],
    compatibility: 'Referencia de muestra para bombas hidráulicas seleccionadas.', partType: 'Kit de sellos', dimensions: 'Juego específico',
    specifications: ['Retenes', 'Juntas tóricas', 'Sellos de respaldo'], notes: 'Identificar modelo y placa de la bomba.', aliases: ['retenes', 'sellos'],
  },
  {
    id: 'alternador', name: 'Alternador', code: 'ELE-1014', categoryId: 'electricidad', brand: 'Deutz', models: ['A 65', 'A 85'],
    compatibility: 'Aplicación demostrativa para sistema eléctrico de 12 V.', partType: 'Sistema de carga', dimensions: '12 V · 55 A',
    specifications: ['Regulador incorporado', 'Polea simple'], notes: 'Confirmar amperaje, anclajes y ficha eléctrica.', aliases: ['carga', 'generador'],
  },
  {
    id: 'motor-arranque', name: 'Motor de arranque', code: 'ELE-2139', categoryId: 'electricidad', brand: 'Fiat', models: ['600', '780'],
    compatibility: 'Referencia de muestra para motores diésel seleccionados.', partType: 'Arranque eléctrico', dimensions: '12 V · 10 dientes',
    specifications: ['Solenoide incorporado', 'Giro horario'], notes: 'Confirmar cantidad de dientes, giro y brida.', aliases: ['burro', 'arranque'],
  },
  {
    id: 'sensor-temperatura', name: 'Sensor de temperatura', code: 'ELE-3265', categoryId: 'electricidad', brand: 'New Holland', models: ['TT55', 'TT75'],
    compatibility: 'Aplicación ilustrativa para indicador de temperatura.', partType: 'Sensor resistivo', dimensions: 'Rosca M14 × 1,5',
    specifications: ['Terminal simple', 'Cuerpo de latón'], notes: 'Verificar rosca y rango del instrumento.', aliases: ['bulbo', 'temperatura agua'],
  },
  {
    id: 'optica-delantera', name: 'Óptica delantera de trabajo', code: 'ELE-4381', categoryId: 'electricidad', brand: 'Aplicación universal', models: ['Serie agrícola'],
    compatibility: 'Uso demostrativo en tractores con instalación de 12 V.', partType: 'Iluminación', dimensions: '110 × 95 mm',
    specifications: ['Haz de trabajo', 'Carcasa sellada'], notes: 'Confirmar espacio de montaje y tipo de conexión.', aliases: ['faro', 'luz'],
  },
  {
    id: 'rodamiento-conico', name: 'Rodamiento cónico', code: 'ROD-1026', categoryId: 'rodamientos', brand: 'Aplicación universal', models: ['Maza delantera'],
    compatibility: 'Referencia demostrativa para mazas y ejes agrícolas.', partType: 'Rodamiento de rodillos cónicos', dimensions: '35 × 72 × 18 mm',
    specifications: ['Pista interior y exterior', 'Acero para rodamientos'], notes: 'Confirmar las tres medidas y la referencia grabada.', image: image('100% 0%'), aliases: ['ruleman', 'bolillero'],
  },
  {
    id: 'ruleman-empuje', name: 'Rulemán de empuje', code: 'ROD-2152', categoryId: 'rodamientos', brand: 'Massey Ferguson', models: ['1175', '1185'],
    compatibility: 'Aplicación ilustrativa para accionamiento de embrague.', partType: 'Rodamiento axial', dimensions: 'Ø exterior 85 mm',
    specifications: ['Porta-rulemán integrado', 'Giro sellado'], notes: 'Comparar altura total y puntos de apoyo.', aliases: ['collarin', 'embrague'],
  },
  {
    id: 'reten-bancada', name: 'Retén de bancada', code: 'ROD-3278', categoryId: 'rodamientos', brand: 'John Deere', models: ['2140', '2420'],
    compatibility: 'Referencia de muestra para cigüeñal trasero.', partType: 'Retén radial', dimensions: '110 × 130 × 12 mm',
    specifications: ['Labio con resorte', 'Compuesto resistente al aceite'], notes: 'Confirmar medidas y sentido de montaje.', aliases: ['sello', 'cigueñal'],
  },
  {
    id: 'rodamiento-aguja', name: 'Rodamiento de agujas', code: 'ROD-4404', categoryId: 'rodamientos', brand: 'Zanello', models: ['V-210', 'V-220'],
    compatibility: 'Aplicación demostrativa para conjuntos de transmisión.', partType: 'Rodamiento de agujas', dimensions: '28 × 35 × 20 mm',
    specifications: ['Jaula metálica', 'Perfil compacto'], notes: 'Verificar medidas del alojamiento y del eje.', aliases: ['ruleman agujas', 'jaula'],
  },
  {
    id: 'correa-ventilador', name: 'Correa de ventilador', code: 'COR-1091', categoryId: 'correas', brand: 'Fiat', models: ['600', '780'],
    compatibility: 'Referencia demostrativa para ventilador y alternador.', partType: 'Correa trapezoidal', dimensions: 'Perfil A · 1120 mm',
    specifications: ['Caucho reforzado', 'Una vía'], notes: 'Comparar perfil y desarrollo con la correa original.', aliases: ['alternador', 'ventilador'],
  },
  {
    id: 'correa-doble', name: 'Juego de correas dobles', code: 'COR-2217', categoryId: 'correas', brand: 'Deutz', models: ['A 65', 'A 85'],
    compatibility: 'Aplicación ilustrativa para transmisión auxiliar.', partType: 'Juego apareado', dimensions: 'Perfil B · 1450 mm',
    specifications: ['Dos correas calibradas', 'Refuerzo textil'], notes: 'Las correas apareadas deben reemplazarse juntas.', aliases: ['doble', 'pareja'],
  },
  {
    id: 'correa-dentada', name: 'Correa dentada auxiliar', code: 'COR-3343', categoryId: 'correas', brand: 'New Holland', models: ['TT55', 'TT75'],
    compatibility: 'Referencia de muestra para accionamientos auxiliares.', partType: 'Correa sincronizada', dimensions: '22 mm × 128 dientes',
    specifications: ['Dentado interior', 'Cordón de alta resistencia'], notes: 'Confirmar ancho, paso y cantidad de dientes.', aliases: ['sincronizada', 'dentada'],
  },
  {
    id: 'tensor-correa', name: 'Tensor de correa', code: 'COR-4469', categoryId: 'correas', brand: 'John Deere', models: ['2420', '2850'],
    compatibility: 'Aplicación demostrativa para sistema auxiliar de motor.', partType: 'Tensor mecánico', dimensions: 'Polea Ø 76 mm',
    specifications: ['Rodamiento sellado', 'Brazo reforzado'], notes: 'Comparar posición del brazo y ancho de polea.', aliases: ['polea tensora', 'tensor'],
  },
  {
    id: 'disco-freno', name: 'Disco de freno', code: 'FRE-1077', categoryId: 'frenos', brand: 'Massey Ferguson', models: ['1175', '1195'],
    compatibility: 'Aplicación de muestra para freno de transmisión.', partType: 'Disco de fricción', dimensions: 'Ø 220 mm · 18 estrías',
    specifications: ['Material de fricción segmentado', 'Núcleo de acero'], notes: 'Confirmar diámetro, espesor y estriado.', aliases: ['freno seco', 'placa'],
  },
  {
    id: 'cinta-freno', name: 'Cinta de freno', code: 'FRE-2203', categoryId: 'frenos', brand: 'Fiat', models: ['600', '780'],
    compatibility: 'Referencia demostrativa para conjunto de freno mecánico.', partType: 'Banda de fricción', dimensions: 'Ancho 55 mm',
    specifications: ['Soporte de acero', 'Forro remachado'], notes: 'Enviar fotografía del anclaje y medir el ancho.', aliases: ['banda', 'patin'],
  },
  {
    id: 'bomba-freno', name: 'Bomba de freno', code: 'FRE-3329', categoryId: 'frenos', brand: 'Zanello', models: ['V-210', 'V-220'],
    compatibility: 'Aplicación ilustrativa para circuito hidráulico de freno.', partType: 'Cilindro maestro', dimensions: 'Pistón Ø 22 mm',
    specifications: ['Cuerpo de fundición', 'Salida roscada'], notes: 'Confirmar diámetro, carrera y posición de las conexiones.', aliases: ['cilindro freno', 'maestra'],
  },
  {
    id: 'kit-reparacion-freno', name: 'Kit de reparación de freno', code: 'FRE-4455', categoryId: 'frenos', brand: 'John Deere', models: ['2140', '2850'],
    compatibility: 'Referencia de muestra para actuadores de freno.', partType: 'Kit de sellos', dimensions: 'Juego específico',
    specifications: ['Cubetas', 'Guardapolvos', 'Juntas'], notes: 'Identificar el modelo del cilindro antes de solicitar.', aliases: ['gomas', 'reparacion'],
  },
];

export const mapsUrl = 'https://www.google.com/maps/search/?api=1&query=Bv.+Roca+529+Rafaela+Santa+Fe+Argentina';
export const facebookUrl = 'https://www.facebook.com/orlandinitractopartes/';
export const navigation = [
  { href: '/', label: 'Inicio' },
  { href: '/nosotros', label: 'Nosotros' },
  { href: '/catalogo', label: 'Catálogo' },
  { href: '/contacto', label: 'Contacto' },
];

export function normalize(value: string) {
  return value.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase().trim().replace(/\s+/g, ' ');
}

function scoreProduct(product: Product, query: string) {
  const needle = normalize(query);
  if (!needle) return 1;
  const code = normalize(product.code);
  const name = normalize(product.name);
  const brandAndModels = normalize([product.brand, ...product.models].join(' '));
  const compatibility = normalize(product.compatibility);
  const aliases = normalize((product.aliases ?? []).join(' '));

  if (code === needle) return 100;
  if (code.startsWith(needle)) return 90;
  if (name.startsWith(needle)) return 80;
  if (name.includes(needle)) return 70;
  if (brandAndModels.includes(needle)) return 50;
  if (compatibility.includes(needle)) return 30;
  if (aliases.includes(needle)) return 20;
  return 0;
}

export function searchProducts({ query = '', categoryId = '', brand = '', model = '' }: CatalogSearch) {
  return products
    .map(product => ({ product, score: scoreProduct(product, query) }))
    .filter(({ product, score }) =>
      score > 0 &&
      (!categoryId || product.categoryId === categoryId) &&
      (!brand || product.brand === brand) &&
      (!model || product.models.includes(model))
    )
    .sort((a, b) => b.score - a.score || a.product.name.localeCompare(b.product.name, 'es'))
    .map(({ product }) => product);
}

export function getCategory(categoryId: string) {
  return categories.find(category => category.id === categoryId);
}

export function getBrands(categoryId = '') {
  return Array.from(new Set(products.filter(product => !categoryId || product.categoryId === categoryId).map(product => product.brand)))
    .sort((a, b) => a.localeCompare(b, 'es'));
}

export function getModels(categoryId = '', brand = '') {
  return Array.from(new Set(products
    .filter(product => (!categoryId || product.categoryId === categoryId) && (!brand || product.brand === brand))
    .flatMap(product => product.models)))
    .sort((a, b) => a.localeCompare(b, 'es', { numeric: true }));
}

export function readCatalogLocation(search: string) {
  const params = new URLSearchParams(search);
  const categoryId = params.get('categoria') ?? '';
  return {
    query: params.get('q') ?? '',
    categoryId: categories.some(category => category.id === categoryId) ? categoryId : '',
    brand: params.get('marca') ?? '',
    model: params.get('modelo') ?? '',
  };
}

export function catalogLocation({ query = '', categoryId = '', brand = '', model = '' }: CatalogSearch) {
  const params = new URLSearchParams();
  if (query) params.set('q', query);
  if (categoryId) params.set('categoria', categoryId);
  if (brand) params.set('marca', brand);
  if (model) params.set('modelo', model);
  const encoded = params.toString();
  return encoded ? `/catalogo?${encoded}` : '/catalogo';
}

export function whatsapp(product?: Product, query = '') {
  const message = product
    ? `Hola, Tractopartes Orlandini. Vi “${product.name}” (código ${product.code}) en su catálogo de muestra y quisiera consultar disponibilidad y compatibilidad. Mi tractor es: `
    : query
      ? `Hola, Tractopartes Orlandini. Busqué “${query}” en su catálogo y necesito ayuda para identificar el repuesto. Mi tractor es: `
      : 'Hola, Tractopartes Orlandini. Necesito asesoramiento para encontrar un repuesto para mi tractor.';
  return 'https://wa.me/543492414532?text=' + encodeURIComponent(message);
}

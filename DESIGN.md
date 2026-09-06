# Sistema visual de Tractopartes Orlandini

## Identidad
Azul #142f4b, amarillo #f8ce44, blanco #ffffff y gris #f1f4f6. Texto #142a41 y secundario #5b6976. Verde #176b50 solo para WhatsApp flotante.
Barlow Condensed 600 para títulos y Manrope 400/600 para cuerpo e interfaz, autoalojadas. Cuerpo 16 px; etiquetas frecuentes 14–16 px y metadatos 12–13 px. Contenedor de 1320 px.

## Inicio vigente
El usuario rechazó el inicio largo por mezclar todas las páginas y pidió eliminarlo. Fue reemplazado por una sola portada institucional. La referencia https://carlosandretich.com/ abre con fondo audiovisual, identidad, descripción de actividad y enlaces institucionales. Orlandini adapta ese formato inicial con su fotografía ilustrativa existente, nombre, actividad, breve descripción y enlaces a Nosotros y Catálogo; no replica todo el scroll de la referencia, datos comerciales ajenos ni video que no posee.

La portada cubre como mínimo el alto disponible bajo el encabezado, con fotografía a sangre y velo azul para lectura. Titular hasta 6 rem; descripción hasta 45ch. Dos accesos, uno principal amarillo y otro delineado. En móvil el contenido ocupa el ancho disponible y los botones se apilan en pantallas estrechas. La altura puede crecer con el texto.

Se retiraron del Inicio: eslogan, buscador, franja de servicios, presentación duplicada, familias visuales, fichas, cobertura y banda de contacto. Las funciones y datos permanecen en sus páginas dedicadas. El inicio anterior y sus estilos específicos quedan recuperables en Git. No se cambiaron las demás páginas ni el pie compartido.

## Páginas y componentes compartidos
Navegación Inicio, Nosotros, Catálogo y Contacto; aria-current para página activa, idioma es-AR, un h1 por ruta, salto al contenido y metadatos independientes. Pie azul con logo original, páginas, ubicación y WhatsApp.
Nosotros mantiene presentación institucional, imagen ilustrativa, públicos atendidos y cobertura. Contacto mantiene WhatsApp, domicilio y guía de consulta sin formulario ficticio ni horarios inventados.
Catálogo es una superficie Operate orientada a localizar repuestos, no una vidriera de productos. El buscador ocupa la máxima jerarquía y activa resultados globales desde tres caracteres sin instrucción permanente. En reposo se muestran ocho accesos visuales: Motor, Filtros, Transmisión, Hidráulica, Electricidad, Rodamientos, Correas y Frenos. Una categoría seleccionada muestra búsqueda contextual, filtros dependientes de marca/modelo y un listado compacto. Las URL conservan q, categoria, marca y modelo.

Los resultados se presentan en una sola columna con miniatura, nombre, código, familia, marca y compatibilidad resumida. El bloque informativo abre una ficha modal accesible con especificaciones; WhatsApp permanece como acción independiente. En móvil la ficha se apoya en el borde inferior y su acción queda visible. El atlas técnico de categorías se reutiliza cuando un repuesto no tiene imagen propia.

## Interacción y verdad
Búsqueda ponderada sin distinguir tildes o mayúsculas: primero código exacto, luego comienzo de código o nombre, nombre parcial, marca/modelo, compatibilidad y alias. Filtros combinados, contador aria-live y estado vacío con recuperación. Consulta específica por WhatsApp con nombre y código. Foco visible y reduced-motion respetado. Fuentes y activos locales, procedencia en ASSETS.md.
No inventar stock, plazos, historia, cifras, marcas representadas o testimonios. Los 32 repuestos, códigos, aplicaciones, medidas e imágenes del prototipo son demostrativos y se declaran como tales; deben reemplazarse por datos confirmados antes de publicar.

## Revisión y skills
frontend-design guía jerarquía y composición; Impeccable distill/craft-floor guía quitar redundancias conservando las funciones en sus destinos. No se inició una ronda de alternativas.
Compilación estática, TypeScript y nueve pruebas de contratos y filtros. Revisión en navegador real en escritorio y móvil: portada, búsqueda global, categoría, filtros dependientes, modal, Escape y devolución de foco. El defecto de traslación del modal móvil detectado en esa pasada fue corregido y verificado. Un pase del detector de Impeccable, cero hallazgos mecánicos.

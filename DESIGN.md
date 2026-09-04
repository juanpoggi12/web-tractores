# Sistema visual implementado — versión premium

La mejora amplifica la identidad existente de Tractopartes Orlandini. No cambia logo, fuentes, datos comerciales ni el flujo de consultas. Anthropic frontend-design e Impeccable (bolder, craft-floor y polish) guían jerarquía, escala y consistencia.

## Paleta

Azul #142f4b: portada, categorías activas, consultas y sección institucional. Amarillo #f8ce44: acciones principales, ayuda contextual y sección de contacto. Blanco #ffffff: lectura del catálogo. Gris frío #f1f4f6: superficies auxiliares. Texto #142a41, secundario #5b6976. Verde #176b50 reservado al acceso flotante a WhatsApp.

La portada usa una transición de opacidad sobre la fotografía para separar texto y maquinaria; no se aplica gradiente al texto.

## Tipografía

Barlow Condensed 600 en títulos. Manrope 400/600 en cuerpo e interfaz, autoalojadas. Escala en rem; cuerpo 16 px, controles frecuentes 14–16 px y metadatos 12–13 px. Título principal hasta 88 px, catálogo hasta 64 px y contacto hasta 76 px. El buscador móvil mantiene 16 px.

## Composición

Contenedor máximo 1320 px. Fotografía de tractor a la derecha, titular blanco a la izquierda y búsqueda integrada en la portada. El buscador filtra al escribir; enviarlo desplaza hasta los resultados. No hay video, carrusel, métricas ficticias ni elementos flotantes decorativos.

El catálogo utiliza columna de categorías de 224 px y tres productos por fila en pantallas amplias. Bajo 1250 px, dos columnas; bajo 960 px, categorías horizontales; bajo 560 px, una pieza amplia por fila. Se mantiene completa cada celda cuadrada del atlas.

Las fotografías tienen esquinas de 14 px; los botones son más rectos. Las fichas no se envuelven en cajas anidadas. Cada consulta tiene un botón sólido; cambia a amarillo al interactuar. El bloque de contacto amarillo cierra el recorrido.

## Interacción y accesibilidad

Búsqueda combinada por nombre y categoría, sin distinguir tildes o mayúsculas; contador aria-live; filtros aria-pressed. Estado vacío con limpieza de filtros y consulta. Idioma es-AR, salto al contenido, etiquetas para iconos y foco interior en las categorías desplazables. Enlaces externos con noopener noreferrer.

Una única apertura de la fotografía en la portada; acercamiento moderado de piezas solo con puntero preciso. Toda animación y desplazamiento suave se desactivan con prefers-reduced-motion.

## Verdad del contenido

Logo original. Seis productos de muestra con indicación de imagen ilustrativa. Ningún precio, código, stock, compatibilidad, testimonio o cifra comercial inventado. Mensajes desde cada ficha incluyen el nombre del producto; consultas generales solicitan asesoramiento. WhatsApp tomado del enlace de la página comercial, pendiente de confirmación del cliente.

## Alcance de la revisión

En este turno el usuario eligió explícitamente «Solo mejorá el diseño por ahora». Por eso no se hicieron capturas, clics ni pruebas de navegador; no se certifica QA visual. Se verifican compilación, tipos y contratos de la exportación estática.

El detector de Impeccable se ejecutó una vez y devolvió una lista vacía junto con una advertencia de una ronda de composiciones heredada sin cerrar. Esa advertencia no se ocultó ni se tomó como prueba de calidad. No se reinició aquel flujo ni se alteró su estado como efecto lateral de esta mejora.

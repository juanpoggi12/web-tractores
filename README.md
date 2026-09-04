# Tractopartes Orlandini — prototipo

Catálogo responsive sin precios, con búsqueda por nombre/familia, categorías y mensajes específicos de WhatsApp. Proyecto independiente de GymNode.

## Ejecutar

`npm install`, `npm run dev`. Producción estática: `npm run build`. Pruebas sobre la exportación: `node --test tests/site.test.mjs`.

## Contenido pendiente de aprobación

- Los seis productos y sus imágenes son demostrativos. No representan un inventario verificado ni prometen compatibilidad.
- El WhatsApp +543492414532 fue tomado literalmente del enlace de la página comercial; confirmar vigencia con el cliente. No se envió ningún mensaje.
- Confirmar domicilio, condiciones de envío y nombre comercial definitivo.
- Sustituir muestras por catálogo y fotografías aprobados. No se incluye carrito, pagos ni precios.
- Sitio privado de presentación, con metadatos noindex.

## Fuentes

- Página comercial, logo azul/amarillo y contacto: https://tractopartes-orlandini.laguia.online/ (consultada 03/09/2026).
- Logo corroborado en perfil: https://www.agroads.com.ar/e/alejandro-orlandini-tractopartes/
- Facebook enlazado por la página comercial: https://www.facebook.com/orlandinitractopartes/ . No se confirmó Instagram.
- Inspiración exclusivamente funcional (familias de productos): https://carlosandretich.com/productos . No se reutilizó su diseño, código ni imágenes.

## Skills y decisiones

- Anthropic frontend-design: https://github.com/anthropics/skills/tree/main/skills/frontend-design . Dirección industrial específica, jerarquía tipográfica, contenido concreto.
- Paul Bakaus Impeccable: https://github.com/pbakaus/impeccable . Contexto de producto, criterios craft-floor, estados vacíos, foco, adaptación responsive y revisión de fuente.
- OpenAI Sites: estructura, exportación estática, alojamiento privado. OpenAI Imagegen: fotografía agrícola e imágenes ilustrativas de piezas.
- Se aplicaron criterios de ambas skills de diseño; no se completó el flujo opcional de elección de tres composiciones de Impeccable. No se afirma aprobación visual ni prueba de navegador. La revisión está limitada a fuente, compilación y pruebas de salida estática.

## Recursos
## Mantenimiento

La plantilla fijada por Sites conserva avisos de npm audit en herramientas de desarrollo/servidor (incluidos vinext, Vite y react-server-dom-webpack). Se publica únicamente la exportación estática, sin Worker, endpoints de servidor ni subida de imágenes. No usar este prototipo como base de un servidor público sin actualizar y volver a auditar esas dependencias. No se ejecutó audit fix --force.

## Recursos

Logo: https://static.landkit.engeni.com/assets/1116/b08f1c9d-28a3-4b3b-8ace-43f70bdf9938/optimized.webp

Avatar: https://static2.aastatic.com.ar/files/variants/150/29435d753e974fbba03911b6b979da03.jpg

Tipografías autoalojadas: Barlow Condensed (600) y Manrope (400/600), descargadas de Google Fonts; sus licencias SIL Open Font License se conservan en public/fonts.

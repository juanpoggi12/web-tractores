import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync, existsSync } from 'node:fs';
import { resolve } from 'node:path';

const root = resolve(import.meta.dirname, '..');
const html = readFileSync(resolve(root, 'dist/client/catalogo.html'), 'utf8');

test('Catálogo exportado: búsqueda primero, ocho categorías y sin importes', () => {
  assert.ok(html.includes('placeholder="Buscar por nombre, código, marca o modelo"'));
  assert.equal([...html.matchAll(/class="category-card"/g)].length, 8);
  assert.equal(html.includes('product-result'), false, 'La portada no debe renderizar todos los repuestos');
  for (const category of ['Motor', 'Filtros', 'Transmisión', 'Hidráulica', 'Electricidad', 'Rodamientos', 'Correas', 'Frenos']) {
    assert.ok(html.includes(category), 'Categoría ausente: ' + category);
  }
  const visibleText = html.replace(/<script\b[^>]*>[\s\S]*?<\/script>/g, '').replace(/<[^>]*>/g, ' ');
  assert.equal(/(?:ARS|USD|\$)\s*\d[\d.,]*/.test(visibleText), false, 'No deben mostrarse importes');
});

test('Idioma, contenido y recursos locales presentes', () => {
  assert.match(html, /lang="es-AR"/);
  for (const id of ['contenido', 'catalog-title', 'category-title']) assert.ok(html.includes('id="' + id + '"'));
  for (const asset of ['orlandini-logo.webp', 'productos-muestra.png', 'categorias-repuestos.png', 'tractor-campo.png', 'fonts/barlow-600.ttf', 'fonts/manrope-400.ttf', 'fonts/manrope-600.ttf']) {
    assert.ok(existsSync(resolve(root, 'dist/client', asset)), 'Recurso ausente: ' + asset);
  }
  assert.ok(html.includes('Catálogo demostrativo'));
});

const routes = { '/': 'index.html', '/nosotros': 'nosotros.html', '/catalogo': 'catalogo.html', '/contacto': 'contacto.html' };
for (const [route, file] of Object.entries(routes)) {
  test('Página ' + route + ': estructura, navegación y enlaces internos', () => {
    const page = readFileSync(resolve(root, 'dist/client', file), 'utf8');
    const rendered = page.replace(/<script\b[^>]*>[\s\S]*?<\/script>/g, '');
    assert.equal([...rendered.matchAll(/<h1\b/g)].length, 1);
    assert.equal([...rendered.matchAll(/<main\b/g)].length, 1);
    assert.match(rendered, /lang="es-AR"/);
    assert.match(rendered, /name="robots" content="noindex, nofollow"/);
    assert.ok(rendered.includes('id="contenido"'));
    const nav = rendered.match(/<nav aria-label="Navegación principal">([\s\S]*?)<\/nav>/)?.[1];
    assert.ok(nav);
    for (const href of Object.keys(routes)) assert.ok(nav.includes('href="' + href + '"'));
    const active = [...nav.matchAll(/<a\b([^>]*)>/g)].filter(m => m[1].includes('aria-current="page"'));
    assert.equal(active.length, 1);
    assert.ok(active[0][1].includes('href="' + route + '"'));
    for (const [, href] of rendered.matchAll(/href="(\/[^"]*)"/g)) {
      const path = href.split(/[?#]/)[0];
      assert.ok(path in routes || existsSync(resolve(root, 'dist/client', path.slice(1))), 'Destino interno ausente: ' + path);
    }
    const visibleText = rendered.replace(/<[^>]*>/g, ' ');
    assert.equal(/(?:ARS|USD|\$)\s*\d[\d.,]*/.test(visibleText), false);
  });
}

test('Inicio institucional sin mezclar herramientas o secciones del catálogo', () => {
  const home = readFileSync(resolve(root, 'dist/client/index.html'), 'utf8').replace(/<script\b[^>]*>[\s\S]*?<\/script>/g, '');
  const main = home.match(/<main\b[^>]*>([\s\S]*?)<\/main>/)?.[1];
  assert.ok(main);
  assert.equal([...main.matchAll(/<section\b/g)].length, 1);
  assert.equal(main.includes('<form'), false);
  assert.equal(main.includes('product-card'), false);
  assert.equal(main.includes('family-grid'), false);
  assert.equal(main.includes('service-strip'), false);
  assert.ok(main.includes('Alejandro'));
  assert.ok(main.includes('Orlandini'));
  assert.ok(main.includes('href="/nosotros"'));
  assert.ok(main.includes('href="/catalogo"'));
});

test('Búsqueda ponderada y filtros toleran tildes, espacios y mayúsculas', async () => {
  const ts = await import('typescript');
  const source = readFileSync(resolve(root, 'lib/catalog.ts'), 'utf8');
  const { outputText } = ts.transpileModule(source, { compilerOptions: { module: ts.ModuleKind.ESNext } });
  const { searchProducts, categories, products, getBrands, getModels, whatsapp } = await import('data:text/javascript;base64,' + Buffer.from(outputText).toString('base64'));
  assert.equal(categories.length, 8);
  assert.equal(products.length, 32);
  assert.equal(searchProducts({ categoryId: 'motor' }).length, 4);
  assert.equal(searchProducts({ query: '  HIDRAULICA  ' })[0].id, 'bomba-hidraulica');
  assert.equal(searchProducts({ query: 'MOT-1042' })[0].id, 'conjunto-pistones');
  assert.equal(searchProducts({ query: 'bomba', categoryId: 'motor' })[0].id, 'bomba-agua');
  assert.equal(searchProducts({ query: 'zzzz' }).length, 0);
  assert.equal(searchProducts({ categoryId: 'filtros', brand: 'Fiat', model: '780' })[0].id, 'filtro-aceite');
  assert.ok(getBrands('motor').includes('Fiat'));
  assert.deepEqual(getModels('motor', 'Fiat'), ['780', '800']);
  const product = products[0];
  const message = new URL(whatsapp(product)).searchParams.get('text');
  assert.ok(message.includes(product.name));
  assert.ok(message.includes(product.code));
  assert.ok(products.some(item => !item.image), 'Debe haber repuestos que usen imagen genérica de categoría');
});

test('El catálogo conserva búsqueda y filtros en la URL', async () => {
  const ts = await import('typescript');
  const source = readFileSync(resolve(root, 'lib/catalog.ts'), 'utf8');
  const { outputText } = ts.transpileModule(source, { compilerOptions: { module: ts.ModuleKind.ESNext } });
  const { readCatalogLocation, catalogLocation, categories } = await import('data:text/javascript;base64,' + Buffer.from(outputText).toString('base64'));
  for (const category of categories) {
    assert.equal(readCatalogLocation('?categoria=' + category.id).categoryId, category.id);
  }
  const state = { query: 'bomba', categoryId: 'hidraulica', brand: 'Massey Ferguson', model: '1175' };
  assert.deepEqual(readCatalogLocation(catalogLocation(state).split('?')[1] ? '?' + catalogLocation(state).split('?')[1] : ''), state);
  assert.deepEqual(readCatalogLocation('?q=bomba&categoria=inexistente'), { query: 'bomba', categoryId: '', brand: '', model: '' });
  assert.deepEqual(readCatalogLocation(''), { query: '', categoryId: '', brand: '', model: '' });
});

import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync, existsSync } from 'node:fs';
import { resolve } from 'node:path';

const root = resolve(import.meta.dirname, '..');
const html = readFileSync(resolve(root, 'dist/client/catalogo.html'), 'utf8');

test('Catálogo exportado: seis consultas específicas, sin importes', () => {
  const anchors = [...html.matchAll(/<a\b([^>]*)>([\s\S]*?)<\/a>/g)];
  const products = anchors.filter(m => m[1].includes('Consultar por WhatsApp:'));
  assert.equal(products.length, 6);
  for (const anchor of products) {
    const href = anchor[1].match(/href="([^"]+)"/)?.[1];
    assert.ok(href);
    const url = new URL(href.replaceAll('&amp;', '&'));
    assert.equal(url.hostname, 'wa.me');
    assert.equal(url.pathname, '/543492414532');
    const message = url.searchParams.get('text');
    assert.ok(message.includes('catálogo de muestra'));
    assert.ok(message.includes('compatibilidad'));
    assert.match(message, /Vi “[^”]+”/);
  }
  const visibleText = html.replace(/<script\b[^>]*>[\s\S]*?<\/script>/g, '').replace(/<[^>]*>/g, ' ');
  assert.equal(/(?:ARS|USD|\$)\s*\d[\d.,]*/.test(visibleText), false, 'No deben mostrarse importes');
});

test('Idioma, contenido y recursos locales presentes', () => {
  assert.match(html, /lang="es-AR"/);
  for (const id of ['contenido', 'catalog-title', 'resultados']) assert.ok(html.includes('id="' + id + '"'));
  for (const asset of ['orlandini-logo.webp', 'productos-muestra.png', 'tractor-campo.png', 'fonts/barlow-600.ttf', 'fonts/manrope-400.ttf', 'fonts/manrope-600.ttf']) {
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

test('Búsqueda desde Inicio abre el catálogo con el término ingresado', () => {
  const home = readFileSync(resolve(root, 'dist/client/index.html'), 'utf8');
  assert.match(home, /<form[^>]*action="\/catalogo"[^>]*method="get"/);
  assert.match(home, /<input[^>]*name="q"/);
});

test('Filtros combinados toleran tildes, espacios y mayúsculas', async () => {
  const ts = await import('typescript');
  const source = readFileSync(resolve(root, 'lib/catalog.ts'), 'utf8');
  const { outputText } = ts.transpileModule(source, { compilerOptions: { module: ts.ModuleKind.ESNext } });
  const { filterProducts, categories, products } = await import('data:text/javascript;base64,' + Buffer.from(outputText).toString('base64'));
  assert.equal(filterProducts('', categories[0]).length, products.length);
  assert.equal(filterProducts('  HIDRAULICA  ', categories[0])[0].id, 'bomba-hidraulica');
  assert.equal(filterProducts('bomba', 'Motor y filtros')[0].id, 'bomba-agua');
  assert.equal(filterProducts('zzzz', categories[0]).length, 0);
  assert.equal(filterProducts('bomba', 'Tren delantero').length, 0);
});

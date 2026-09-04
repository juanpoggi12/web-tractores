import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync, existsSync } from 'node:fs';
import { resolve } from 'node:path';

const root = resolve(import.meta.dirname, '..');
const html = readFileSync(resolve(root, 'dist/client/index.html'), 'utf8');

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

test('Idioma, secciones y recursos locales presentes', () => {
  assert.match(html, /lang="es-AR"/);
  for (const id of ['catalogo', 'nosotros', 'contacto']) assert.ok(html.includes('id="' + id + '"'));
  for (const asset of ['orlandini-logo.webp', 'productos-muestra.png', 'tractor-campo.png', 'fonts/barlow-600.ttf', 'fonts/manrope-400.ttf', 'fonts/manrope-600.ttf']) {
    assert.ok(existsSync(resolve(root, 'dist/client', asset)), 'Recurso ausente: ' + asset);
  }
  assert.ok(html.includes('Catálogo demostrativo'));
});

'use client';

import type { CSSProperties } from 'react';
import { ArrowUpRight, MessageCircle } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { getCategory, whatsapp, type Product } from '@/lib/catalog';

function artworkStyle(product: Product): CSSProperties {
  const category = getCategory(product.categoryId);
  return product.image
    ? {
        backgroundImage: `url(${product.image.src})`,
        backgroundPosition: product.image.position,
        backgroundSize: '300% 200%',
      }
    : {
        backgroundImage: "url('/categorias-repuestos.png')",
        backgroundPosition: category?.imagePosition ?? '0% 0%',
        backgroundSize: '400% 200%',
      };
}

export function ProductArtwork({ product, className = '' }: { product: Product; className?: string }) {
  return <span className={`catalog-artwork ${className}`.trim()} aria-hidden="true" style={artworkStyle(product)} />;
}

export function ProductResult({ product, onSelect }: { product: Product; onSelect: (product: Product) => void }) {
  const category = getCategory(product.categoryId);
  return (
    <article className="product-result" id={product.id}>
      <button className="product-result-main" type="button" aria-haspopup="dialog" onClick={() => onSelect(product)}>
        <ProductArtwork product={product} className="product-result-artwork" />
        <span className="product-result-copy">
          <span className="product-result-kicker">{category?.name} · {product.brand}</span>
          <strong>{product.name}</strong>
          <span className="product-code">Código {product.code}</span>
          <span className="product-compatibility">{product.compatibility}</span>
          <span className="product-more">Ver ficha completa</span>
        </span>
      </button>
      <a
        className="product-result-whatsapp"
        href={whatsapp(product)}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Consultar por WhatsApp: ${product.name}, código ${product.code}`}
      >
        <MessageCircle size={19} />
        <span>Consultar por WhatsApp</span>
        <ArrowUpRight size={17} />
      </a>
    </article>
  );
}

export function ProductDetailDialog({ product, onClose }: { product: Product | null; onClose: () => void }) {
  const category = product ? getCategory(product.categoryId) : undefined;
  return (
    <Dialog open={product !== null} onOpenChange={open => { if (!open) onClose(); }}>
      {product && (
        <DialogContent className="product-dialog" closeLabel="Cerrar">
          <div className="product-dialog-grid">
            <div className="product-dialog-visual">
              <ProductArtwork product={product} className="product-dialog-artwork" />
              <span>{product.image ? 'Imagen ilustrativa' : `Imagen genérica · ${category?.name}`}</span>
            </div>
            <div className="product-dialog-content">
              <DialogHeader>
                <DialogTitle className="product-dialog-title">{product.name}</DialogTitle>
                <DialogDescription className="product-dialog-code">Código {product.code}</DialogDescription>
              </DialogHeader>
              <dl className="product-detail-list">
                <div><dt>Categoría</dt><dd>{category?.name}</dd></div>
                <div><dt>Marca de aplicación</dt><dd>{product.brand}</dd></div>
                <div><dt>Modelos de referencia</dt><dd>{product.models.join(', ')}</dd></div>
                <div><dt>Tipo</dt><dd>{product.partType}</dd></div>
                <div><dt>Medidas</dt><dd>{product.dimensions}</dd></div>
                <div><dt>Compatibilidad</dt><dd>{product.compatibility}</dd></div>
              </dl>
              <div className="product-specifications">
                <h3>Características</h3>
                <ul>{product.specifications.map(item => <li key={item}>{item}</li>)}</ul>
              </div>
              <div className="product-notes">
                <h3>Antes de consultar</h3>
                <p>{product.notes}</p>
              </div>
              <p className="demo-warning">Información demostrativa; confirmar aplicación y disponibilidad.</p>
            </div>
          </div>
          <DialogFooter className="product-dialog-footer">
            <a className="button product-dialog-cta" href={whatsapp(product)} target="_blank" rel="noopener noreferrer">
              <MessageCircle size={19} /> Consultar por WhatsApp <ArrowUpRight size={18} />
            </a>
          </DialogFooter>
        </DialogContent>
      )}
    </Dialog>
  );
}

import { ArrowUpRight, MessageCircle } from 'lucide-react';
import { whatsapp, type Product } from '@/lib/catalog';
export function ProductCard({product}: {product: Product}) { return (                  <article className="product-card" id={product.id}>
                    <div className="product-image">
                      <div className="product-art" role="img" aria-label={product.name + ' — imagen ilustrativa'} style={{ backgroundPosition: product.position }} />
                      <span className="image-note">Imagen ilustrativa</span>
                    </div>
                    <div className="product-info">
                      <h3>{product.name}</h3>
                      <p className="product-category">{product.category}</p>
                      <p className="compatibility">Consultá la aplicación para tu tractor.</p>
                      <a className="product-cta" href={whatsapp(product.name)} target="_blank" rel="noopener noreferrer" aria-label={'Consultar por WhatsApp: ' + product.name}>
                        <MessageCircle size={18} /><span>Consultar por WhatsApp</span><ArrowUpRight size={17} />
                      </a>
                    </div>
                  </article>); }

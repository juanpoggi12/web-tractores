import type { Metadata } from 'next';
import { ArrowUpRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Alejandro Orlandini | Tractopartes',
  description: 'Alejandro Orlandini. Repuestos para tractores en Rafaela, Santa Fe. Conocé la empresa o consultá nuestro catálogo.',
};

export default function Home() {
  return (
    <main id="contenido" tabIndex={-1}>
      <section className="welcome-cover" aria-labelledby="welcome-title">
        <div className="welcome-image">
          <img src="/tractor-campo.png" alt="Escena ilustrativa de un tractor azul trabajando en el campo" width="1672" height="941" fetchPriority="high" />
        </div>
        <div className="shell welcome-inner">
          <div className="welcome-copy">
            <h1 id="welcome-title">Alejandro<br />Orlandini.</h1>
            <p className="welcome-business">Repuestos para tractores</p>
            <p className="welcome-description">Somos Tractopartes Alejandro Orlandini, en Rafaela, Santa Fe. Venta mayorista y minorista de repuestos para productores, talleres y comercios.</p>
            <div className="welcome-actions">
              <a className="button welcome-primary" href="/nosotros">Conocé la empresa <ArrowUpRight size={19} aria-hidden="true" /></a>
              <a className="button welcome-secondary" href="/catalogo">Ver catálogo <ArrowUpRight size={19} aria-hidden="true" /></a>
            </div>
          </div>
          <span className="welcome-image-note">Imagen ilustrativa</span>
        </div>
      </section>
    </main>
  );
}

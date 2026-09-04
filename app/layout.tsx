import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata = {
  title: 'Tractopartes Orlandini | Repuestos para tractores',
  description: 'Catálogo de muestra de Alejandro Orlandini. Repuestos para tractores, sin precios publicados y con consulta directa por WhatsApp. Rafaela, Santa Fe.',
  robots: { index: false, follow: false },
  icons: { icon: '/orlandini-logo.jpg' },
};
export default function RootLayout({ children }: Readonly<{children: React.ReactNode}>) {
  return <html lang="es-AR"><body>{children}</body></html>;
}

import type { Metadata, Viewport } from "next";
import Link from "next/link";
import { SiteHeader } from "./components/site-header";
import { SiteFooter } from "./components/site-footer";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://transporte-directo-sevilla.vercel.app"),
  title: { default: "Transporte directo para empresas en Sevilla", template: "%s | Transporte Directo Sevilla" },
  description: "Transporte directo, dedicado y urgente para empresas en Sevilla y Andalucía. Recogidas, palés y mercancía industrial con vehículo exclusivo.",
  keywords: ["transporte mercancías Sevilla", "portes Sevilla empresas", "transporte urgente Sevilla", "transporte industrial Sevilla", "transporte palés Sevilla", "transporte dedicado Sevilla"],
  authors: [{ name: "Transporte Directo Sevilla" }],
  creator: "Transporte Directo Sevilla",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website", locale: "es_ES", url: "/", siteName: "Transporte Directo Sevilla",
    title: "Transporte directo para empresas en Sevilla",
    description: "Recogida, transporte directo y entrega con vehículo exclusivo para empresas.",
    images: [{ url: "/og.webp", width: 1200, height: 630, alt: "Transporte directo para empresas en Sevilla" }],
  },
  twitter: { card: "summary_large_image", title: "Transporte directo para empresas en Sevilla", description: "Recogida, transporte directo y entrega con vehículo exclusivo para empresas.", images: ["/og.webp"] },
  robots: { index: true, follow: true },
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
};

export const viewport: Viewport = { width: "device-width", initialScale: 1, themeColor: "#08182b" };

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Transporte Directo Sevilla",
  url: "https://transporte-directo-sevilla.vercel.app",
  image: "https://transporte-directo-sevilla.vercel.app/og.webp",
  description: "Transporte directo, dedicado y urgente para empresas en Sevilla y Andalucía.",
  areaServed: ["Sevilla", "Huelva", "Cádiz", "Córdoba", "Málaga", "Andalucía"],
  serviceType: ["Transporte directo", "Transporte urgente", "Transporte industrial", "Transporte de palés", "Vehículo dedicado"],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es">
      <body>
        <a className="skip-link" href="#contenido">Saltar al contenido</a>
        <SiteHeader />
        {children}
        <SiteFooter />
        <Link className="whatsapp-float" href="/contacto#datos-pendientes" aria-label="Contactar por WhatsApp" title="WhatsApp pendiente de activar"><span>WA</span><em>WhatsApp</em></Link>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { PageHero } from "../components/page-hero";
import { QuoteForm } from "../components/quote-form";

export const metadata: Metadata = { title: "Contacto", description: "Contacto para portes y transporte directo de mercancías para empresas en Sevilla." };

export default function ContactoPage() {
  return <main id="contenido">
    <PageHero eyebrow="Contacto" title="Hablemos de tu próximo transporte." text="Indica qué mercancía necesitas mover, desde dónde, hasta dónde y cuándo. Confirmaremos disponibilidad antes de aceptar el servicio." />
    <section className="content-section alt"><div className="container contact-layout">
      <aside className="contact-card" id="datos-pendientes"><p className="eyebrow eyebrow-light">Atención directa</p><h2>Canales de contacto</h2><div className="contact-detail"><span>Teléfono</span><strong>Pendiente de confirmar</strong></div><div className="contact-detail"><span>WhatsApp</span><strong>Pendiente de activar</strong></div><div className="contact-detail"><span>Email</span><strong>Pendiente de confirmar</strong></div><div className="contact-detail"><span>Zona principal</span><strong>Sevilla y provincia</strong></div><div className="contact-detail"><span>Horario</span><strong>Servicios bajo disponibilidad</strong></div><p className="config-note">Los datos de contacto y fiscales se incorporarán cuando hayan sido confirmados. No se ha publicado ninguna información inventada.</p></aside>
      <div><p className="eyebrow">Solicita información</p><QuoteForm compact /></div>
    </div></section>
  </main>;
}

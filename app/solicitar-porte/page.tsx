import type { Metadata } from "next";
import { PageHero } from "../components/page-hero";
import { QuoteForm } from "../components/quote-form";

export const metadata: Metadata = { title: "Solicitar un porte", description: "Solicita presupuesto para transporte directo de mercancías en Sevilla y Andalucía." };

export default function SolicitarPortePage() {
  return <main id="contenido">
    <PageHero eyebrow="Presupuesto" title="Dinos qué hay que recoger y dónde entregarlo." text="Completa los datos de la ruta y de la mercancía. Revisaremos si el servicio encaja y te confirmaremos disponibilidad y precio." />
    <section className="content-section alt"><div className="container quote-layout">
      <div className="quote-copy"><p className="eyebrow">Antes de enviar</p><h2>La información que acelera la respuesta.</h2><p>Indica el peso y las medidas con la mayor precisión posible. Si hay muelle, carretilla, acceso limitado o un horario cerrado, añádelo en observaciones.</p><div className="quote-note"><strong>Servicios urgentes</strong><span>Marca la opción “Sí” y contacta directamente por teléfono o WhatsApp cuando estos datos estén activados.</span></div><ul className="check-list"><li>Recogida y entrega</li><li>Fecha y franja horaria</li><li>Mercancía, peso y medidas</li><li>Palés o número de bultos</li></ul></div>
      <QuoteForm />
    </div></section>
  </main>;
}

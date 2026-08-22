import Link from "next/link";
import { siteConfig } from "../site-config";

export function ContactActions({ compact = false, light = false }: { compact?: boolean; light?: boolean }) {
  const callHref = siteConfig.phone ? `tel:${siteConfig.phone}` : "/contacto#datos-pendientes";
  const whatsappHref = siteConfig.whatsapp ? `https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent("Hola, necesito presupuesto para un transporte.")}` : "/contacto#datos-pendientes";
  return (
    <div className={`contact-actions ${compact ? "compact" : ""}`}>
      <Link className="button button-primary" href="/solicitar-porte">Solicitar porte <span aria-hidden="true">↗</span></Link>
      <Link className={`button ${light ? "button-ghost-light" : "button-secondary"}`} href={whatsappHref}>WhatsApp <span aria-hidden="true">↗</span></Link>
      {!compact && <Link className={`text-link ${light ? "text-link-light" : ""}`} href={callHref}>Llamar ahora <span aria-hidden="true">→</span></Link>}
    </div>
  );
}

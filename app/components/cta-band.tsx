import Link from "next/link";
export function CtaBand({ title = "¿Tienes una mercancía que mover?", text = "Cuéntanos origen, destino y tipo de carga. Confirmamos disponibilidad y precio antes de salir." }) {
  return <section className="cta-band"><div className="container cta-band-inner"><div><p className="eyebrow eyebrow-light">Respuesta directa</p><h2>{title}</h2><p>{text}</p></div><div className="cta-band-actions"><Link className="button button-light" href="/solicitar-porte">Solicitar porte <span aria-hidden="true">↗</span></Link><Link className="button button-ghost-light" href="/contacto">Consultar disponibilidad</Link></div></div></section>;
}

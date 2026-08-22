import Link from "next/link";
export function PageHero({ eyebrow, title, text }: { eyebrow: string; title: string; text: string }) {
  return <section className="page-hero"><div className="container page-hero-grid"><div><p className="eyebrow eyebrow-light">{eyebrow}</p><h1>{title}</h1></div><div className="page-hero-aside"><p>{text}</p><Link className="button button-primary" href="/solicitar-porte">Solicitar presupuesto <span aria-hidden="true">↗</span></Link></div></div></section>;
}

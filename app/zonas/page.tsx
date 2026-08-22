import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "../components/page-hero";
import { CtaBand } from "../components/cta-band";

export const metadata: Metadata = { title: "Zonas de servicio", description: "Transporte de mercancías con base en Sevilla y servicios regionales hacia Huelva, Cádiz, Córdoba y Málaga." };

const areas = [
  ["Base principal", "Sevilla", "Sevilla capital, La Rinconada, Dos Hermanas, Alcalá de Guadaíra, Aljarafe y polígonos industriales de la provincia."],
  ["Oeste", "Huelva", "Servicios directos desde Sevilla hacia empresas, almacenes, industria y destinos profesionales de Huelva."],
  ["Sur", "Cádiz", "Recogidas y entregas empresariales bajo disponibilidad en Cádiz y sus principales áreas industriales."],
  ["Noreste", "Córdoba", "Transporte directo de piezas, palés y mercancía general desde o hacia Sevilla."],
  ["Este", "Málaga", "Servicios regionales cuando la ruta, la carga y el horario encajan con la operativa."],
  ["Bajo consulta", "Resto de Andalucía", "Valoramos otros orígenes y destinos según distancia, mercancía, acceso y disponibilidad."],
];

export default function ZonasPage() {
  return <main id="contenido">
    <PageHero eyebrow="Zona de servicio" title="Sevilla primero. Andalucía cuando tu servicio lo necesita." text="Nuestra prioridad operativa es Sevilla y provincia, con rutas regionales directas bajo disponibilidad." />
    <section className="content-section"><div className="container">
      <div className="content-intro"><h2>Conocemos la importancia de llegar a tiempo.</h2><p>La disponibilidad y el precio dependen del origen, el destino, el horario, la mercancía y las condiciones de carga. Por eso valoramos cada porte antes de confirmarlo.</p></div>
      <div className="detail-grid">{areas.map(([label, title, text], index) => <article className="detail-card" key={title}><span className="card-number">{String(index + 1).padStart(2, "0")} · {label}</span><h2>{title}</h2><p>{text}</p><Link href="/solicitar-porte">Consultar ruta ↗</Link></article>)}</div>
    </div></section>
    <section className="content-section alt"><div className="container feature-split">
      <div><p className="eyebrow">Valoración del servicio</p><h2>No publicamos tarifas genéricas.</h2><p>Dos portes con los mismos kilómetros pueden requerir tiempos y operativas muy diferentes. Te damos un precio después de conocer los datos reales del servicio.</p></div>
      <div className="number-list"><article><span>01</span><div><h3>Ruta</h3><p>Origen, destino y posibles paradas intermedias.</p></div></article><article><span>02</span><div><h3>Carga</h3><p>Tipo, cantidad, peso y dimensiones aproximadas.</p></div></article><article><span>03</span><div><h3>Operativa</h3><p>Fecha, horario, accesos y urgencia del servicio.</p></div></article></div>
    </div></section>
    <CtaBand title="¿Tu destino no aparece en la lista?" text="Envíanos la ruta. Valoramos otros puntos de Andalucía según disponibilidad." />
  </main>;
}

import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "../components/page-hero";
import { CtaBand } from "../components/cta-band";

export const metadata: Metadata = { title: "Servicios de transporte directo", description: "Transporte urgente, industrial, de palés y dedicado para empresas en Sevilla y Andalucía." };

const services = [
  ["01", "Transporte directo", "Recogemos la mercancía y la llevamos al destino acordado sin rutas de reparto ni paradas ajenas al servicio.", "directo"],
  ["02", "Transporte urgente", "Para piezas, pedidos o materiales que necesitan salir cuanto antes y llegar sin esperas innecesarias.", "urgente"],
  ["03", "Transporte industrial", "Piezas, utillaje, componentes, herramientas, recambios y suministros para talleres, fábricas y obra.", "industrial"],
  ["04", "Transporte de palés", "Uno o varios palés y cargas empresariales que pueden viajar en un furgón cerrado de hasta 3.500 kg MMA.", "pales"],
  ["05", "Recogida en almacenes", "Coordinamos accesos, horarios y referencias para recoger en almacenes, plataformas o proveedores.", "almacenes"],
  ["06", "Varias recogidas + una entrega", "Reunimos materiales de varios proveedores y los entregamos conjuntamente en tu empresa.", "multirrecogida"],
  ["07", "Vehículo dedicado", "El furgón se destina exclusivamente a tu mercancía durante el servicio contratado.", "dedicado"],
  ["08", "Transporte entre empresas", "Movimientos B2B entre talleres, fábricas, almacenes, distribuidores, obras y clientes profesionales.", "b2b"],
  ["09", "Transporte regional", "Salidas desde Sevilla hacia Huelva, Cádiz, Córdoba, Málaga y otras localidades bajo disponibilidad.", "regional"],
  ["10", "Apoyo a operadores logísticos", "Capacidad adicional para incidencias, excesos de carga, servicios express y entregas especiales.", "operadores"],
];

export default function ServiciosPage() {
  return <main id="contenido">
    <PageHero eyebrow="Servicios" title="Una furgoneta para cada necesidad de transporte empresarial." text="Servicios urgentes o programados con un planteamiento sencillo: coordinamos la recogida, dedicamos el vehículo y entregamos directamente." />
    <section className="content-section"><div className="container">
      <div className="content-intro"><h2>Transporte pensado para mercancía, no para paquetería.</h2><p>Trabajamos con empresas que necesitan mover una carga concreta entre puntos definidos. El servicio se valora según origen, destino, mercancía, horario y necesidades de carga o descarga.</p></div>
      <div className="detail-grid">{services.map(([number, title, text, id]) => <article className="detail-card" id={id} key={title}><span className="card-number">{number}</span><h2>{title}</h2><p>{text}</p><Link href="/solicitar-porte">Solicitar presupuesto ↗</Link></article>)}</div>
    </div></section>
    <section className="content-section alt"><div className="container feature-split">
      <div><p className="eyebrow">Recogidas coordinadas</p><h2>Proveedor A, proveedor B, proveedor C… y una sola entrega.</h2><p>Una solución útil cuando compras piezas, materiales o suministros a varios proveedores y quieres recibirlos juntos en tu taller, fábrica o almacén.</p><ul className="check-list"><li>Un único interlocutor para la ruta</li><li>Recogidas ordenadas por horario</li><li>Entrega final consolidada</li></ul></div>
      <div className="feature-panel"><h3>Antes de confirmar</h3><p>Revisamos los datos necesarios para saber si el servicio encaja con el vehículo y la operativa.</p><ul><li>Origen y destino</li><li>Fecha y horario</li><li>Tipo de mercancía</li><li>Peso aproximado</li><li>Dimensiones</li><li>Acceso de carga</li></ul></div>
    </div></section>
    <CtaBand />
  </main>;
}

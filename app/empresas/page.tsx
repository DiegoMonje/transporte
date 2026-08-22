import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "../components/page-hero";
import { CtaBand } from "../components/cta-band";

export const metadata: Metadata = { title: "Transporte para empresas", description: "Una furgoneta disponible cuando tu empresa la necesita: industria, talleres, recambistas, almacenes y operadores logísticos." };

const sectors = [
  ["01", "Suministros industriales", "Rodamientos, motores, bombas, válvulas, neumática, hidráulica, soldadura, herramientas y material eléctrico."],
  ["02", "Recambios", "Automoción, vehículo industrial, maquinaria, concesionarios, talleres y maquinaria agrícola."],
  ["03", "Fabricantes y talleres", "Mecanizado, estructuras metálicas, aluminio, madera, componentes, instalaciones y fabricación industrial."],
  ["04", "Almacenes y distribuidores", "Pedidos urgentes, movimientos entre almacenes y entregas que no salieron con el transporte habitual."],
  ["05", "Construcción e instalaciones", "Materiales, herramientas, piezas y suministros necesarios para mantener una obra o instalación en marcha."],
  ["06", "Industria aeronáutica", "Componentes, utillaje, herramientas y material industrial en el entorno productivo de Sevilla."],
];

export default function EmpresasPage() {
  return <main id="contenido">
    <PageHero eyebrow="Soluciones B2B" title="Una furgoneta disponible cuando tu empresa la necesita." text="Para responsables de logística, almacenes, fábricas, talleres, distribuidores, recambistas y agencias de transporte." />
    <section className="content-section"><div className="container">
      <div className="content-intro"><h2>Resolvemos movimientos que no pueden esperar a la ruta habitual.</h2><p>Un pedido adicional, una pieza crítica, una recogida en proveedor o una entrega directa al cliente. Coordinamos el servicio con la persona responsable y mantenemos el foco en la mercancía.</p></div>
      <div className="detail-grid">{sectors.map(([number, title, text]) => <article className="detail-card" key={title}><span className="card-number">{number}</span><h2>{title}</h2><p>{text}</p><Link href="/solicitar-porte">Consultar servicio ↗</Link></article>)}</div>
    </div></section>
    <section className="content-section alt"><div className="container feature-split">
      <div className="number-list"><article><span>01</span><div><h3>Incidencia logística</h3><p>Tu transporte habitual no puede asumir una recogida o entrega.</p></div></article><article><span>02</span><div><h3>Necesidad productiva</h3><p>Una pieza, recambio o material condiciona la actividad de tu empresa.</p></div></article><article><span>03</span><div><h3>Cliente prioritario</h3><p>Necesitas entregar un pedido directamente y con un vehículo exclusivo.</p></div></article></div>
      <div><p className="eyebrow">Clientes recurrentes</p><h2>Un recurso flexible para tu operativa.</h2><p>Podemos valorar servicios puntuales y colaboraciones recurrentes para empresas que necesitan transporte varias veces al mes. Cada servicio se confirma según disponibilidad.</p><Link className="button button-primary" href="/contacto">Hablar sobre colaboración ↗</Link></div>
    </div></section>
    <section className="content-section" id="operadores"><div className="container feature-split">
      <div><p className="eyebrow">Operadores y agencias</p><h2>Capacidad adicional sin desviar tu equipo.</h2><p>Apoyo profesional para excesos de carga, incidencias, rutas puntuales, recogidas especiales y servicios dedicados.</p></div>
      <div className="feature-panel"><h3>Colaboración operativa</h3><ul><li>Servicios express</li><li>Entregas directas</li><li>Vehículo exclusivo</li><li>Recogidas urgentes</li><li>Exceso de carga</li><li>Incidencias</li></ul><Link className="button button-primary" href="/solicitar-porte">Solicitar disponibilidad ↗</Link></div>
    </div></section>
    <CtaBand title="¿Necesitas cubrir un servicio?" text="Envíanos los datos de la ruta y la mercancía. Te confirmamos si podemos asumirlo." />
  </main>;
}

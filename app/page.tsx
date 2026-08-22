import type { Metadata } from "next";
import Link from "next/link";
import { ContactActions } from "./components/contact-actions";
import { QuoteForm } from "./components/quote-form";

export const metadata: Metadata = {
  title: "Transporte directo y urgente para empresas en Sevilla",
  description: "Furgón exclusivo para recogidas, palés, mercancía industrial y entregas directas en Sevilla y Andalucía.",
};

const serviceCards = [
  ["01", "Transporte urgente", "Recogidas que necesitan salir cuanto antes, con comunicación directa durante el servicio."],
  ["02", "Vehículo exclusivo", "Tu mercancía viaja en un furgón dedicado, directamente desde el origen hasta el destino."],
  ["03", "Palés y mercancía", "Carga industrial y comercial que no necesita contratar un camión completo."],
  ["04", "Recogidas en almacenes", "Una o varias recogidas coordinadas en proveedores, almacenes o fábricas."],
  ["05", "Transporte B2B", "Servicios entre empresas, talleres, distribuidores, operadores y centros productivos."],
  ["06", "Transporte programado", "Servicios acordados con antelación para cubrir necesidades puntuales o recurrentes."],
];

const sectors = ["Industria", "Talleres", "Automoción", "Recambios", "Suministros industriales", "Almacenes", "Distribuidores", "Construcción", "Aeronáutica", "Operadores logísticos"];

export default function Home() {
  return (
    <main id="contenido">
      <section className="hero">
        <div className="hero-media" aria-hidden="true" /><div className="hero-overlay" />
        <div className="container hero-content">
          <div className="hero-copy">
            <p className="eyebrow eyebrow-light"><span className="status-dot" /> Transporte B2B · Sevilla y provincia</p>
            <h1>Transporte directo y urgente para empresas en Sevilla</h1>
            <p className="hero-lead">Furgón exclusivo para recogidas, palés, mercancía industrial y entregas directas en Sevilla y Andalucía.</p>
            <ContactActions light />
            <div className="hero-proof"><span><strong>01</strong> Recogida</span><i /><span><strong>02</strong> Transporte directo</span><i /><span><strong>03</strong> Entrega</span></div>
          </div>
          <aside className="hero-panel"><p className="panel-kicker">Una solución clara</p><h2>Tu mercancía no da vueltas.</h2><p>Recogemos en el punto acordado y entregamos directamente. Sin rutas de reparto innecesarias ni transbordos.</p><Link href="/servicios">Ver cómo trabajamos <span aria-hidden="true">→</span></Link></aside>
        </div>
      </section>

      <section className="signal-strip" aria-label="Ventajas del servicio"><div className="container signal-grid"><span>Vehículo dedicado</span><span>Servicio directo</span><span>Atención empresarial</span><span>Urgente o programado</span></div></section>

      <section className="section section-light" id="servicios"><div className="container">
        <div className="section-heading split-heading"><div><p className="eyebrow">Servicios a medida</p><h2>¿Necesitas mover mercancía sin contratar un camión?</h2></div><p>Un furgón cerrado grande puede ser la solución más ágil cuando necesitas mover palés, piezas, suministros o materiales directamente entre dos puntos.</p></div>
        <div className="service-grid">{serviceCards.map(([number, title, text]) => <article className="service-card" key={title}><span className="card-number">{number}</span><h3>{title}</h3><p>{text}</p><Link href="/solicitar-porte" aria-label={`Solicitar ${title}`}>Solicitar porte <span aria-hidden="true">↗</span></Link></article>)}</div>
      </div></section>

      <section className="section section-ink"><div className="container industry-layout">
        <div className="industry-image" role="img" aria-label="Operativa de mercancía en un almacén industrial"><span className="image-tag">Operativa B2B</span></div>
        <div className="industry-copy"><p className="eyebrow eyebrow-light">Especialistas en empresas</p><h2>Un apoyo de transporte cuando tu operativa lo necesita.</h2><p>No hacemos reparto domiciliario ni rutas de paquetería. Nos centramos en cargas empresariales que necesitan un vehículo, una recogida coordinada y una entrega directa.</p><div className="sector-list">{sectors.map((sector) => <span key={sector}>{sector}</span>)}</div><Link className="button button-ghost-light" href="/empresas">Soluciones para empresas →</Link></div>
      </div></section>

      <section className="section process-section"><div className="container">
        <div className="section-heading"><p className="eyebrow">Proceso simple</p><h2>De la solicitud a la entrega, sin complicaciones.</h2></div>
        <div className="process-grid">{[["01", "Solicita el transporte", "Indica origen, destino, mercancía, peso, medidas y horario."], ["02", "Confirmamos", "Revisamos disponibilidad, condiciones del servicio y precio."], ["03", "Recogemos", "Vamos al proveedor, almacén, fábrica, taller o empresa."], ["04", "Entrega directa", "Llevamos la carga al destino acordado, sin desvíos innecesarios."]].map(([n, title, text]) => <article className="process-step" key={n}><span>{n}</span><h3>{title}</h3><p>{text}</p></article>)}</div>
        <div className="center-cta"><Link className="button button-primary" href="/solicitar-porte">Solicitar un transporte ↗</Link></div>
      </div></section>

      <section className="section multi-stop-section"><div className="container multi-stop-grid">
        <div><p className="eyebrow">Coordinación flexible</p><h2>Varias recogidas, una sola entrega.</h2><p className="lead">Podemos recoger diferentes materiales o pedidos en varios almacenes de Sevilla y entregarlos conjuntamente en tu fábrica, taller o almacén.</p><ul className="check-list"><li>Agrupa compras de varios proveedores</li><li>Reduce coordinaciones y esperas</li><li>Un único vehículo hasta tu empresa</li></ul><Link className="button button-primary" href="/solicitar-porte">Planificar recogidas ↗</Link></div>
        <div className="route-card" aria-label="Ejemplo de ruta con varias recogidas"><div className="route-head"><span>RUTA DEDICADA</span><strong>3 recogidas · 1 entrega</strong></div><div className="route-flow"><div><b>A</b><span>Almacén A</span></div><i /><div><b>B</b><span>Almacén B</span></div><i /><div><b>C</b><span>Almacén C</span></div><i /><div className="route-destination"><b>✓</b><span>Tu empresa</span></div></div></div>
      </div></section>

      <section className="section zones-section"><div className="container zones-grid">
        <div className="zone-copy"><p className="eyebrow eyebrow-light">Zona de servicio</p><h2>Sevilla como base. Andalucía cuando el servicio lo requiere.</h2><p>Priorizamos Sevilla capital, provincia y sus principales áreas industriales. También coordinamos servicios regionales bajo disponibilidad.</p><div className="zone-columns"><div><span>Zona principal</span><strong>Sevilla y provincia</strong><p>La Rinconada · Dos Hermanas<br />Alcalá de Guadaíra · Aljarafe<br />Polígonos industriales</p></div><div><span>Servicios regionales</span><strong>Andalucía</strong><p>Huelva · Cádiz · Córdoba<br />Málaga · Otras localidades</p></div></div><Link className="button button-light" href="/zonas">Consultar zonas ↗</Link></div>
        <div className="map-card" aria-label="Área de servicio con base en Sevilla"><div className="map-grid" /><span className="map-label huelva">Huelva</span><span className="map-label cadiz">Cádiz</span><span className="map-label cordoba">Córdoba</span><span className="map-label malaga">Málaga</span><div className="map-pin"><i /><strong>SEVILLA</strong><small>Base principal</small></div><div className="map-legend"><span className="status-dot" /> Radio de servicio bajo disponibilidad</div></div>
      </div></section>

      <section className="urgent-section"><div className="container urgent-grid">
        <div><p className="eyebrow eyebrow-light">Transporte industrial urgente</p><h2>Cuando esperar no es una opción.</h2><p>Una pieza crítica, una máquina parada o un pedido que no salió con el transporte habitual. Respondemos con un vehículo dedicado y una ruta directa.</p><Link className="button button-primary" href="/contacto">Consultar disponibilidad ↗</Link></div>
        <div className="urgent-questions"><span>¿Una máquina parada?</span><span>¿Una pieza urgente?</span><span>¿Un pedido adicional?</span><span>¿Una entrega para hoy?</span></div>
      </div></section>

      <section className="section operators-section"><div className="container operators-grid">
        <div><p className="eyebrow">Para operadores logísticos</p><h2>Capacidad adicional cuando la necesitas.</h2><p>Colaboración puntual o recurrente para incidencias, excesos de carga, recogidas especiales y servicios dedicados.</p></div>
        <div className="operator-tags"><span>Exceso de carga</span><span>Incidencias</span><span>Express</span><span>Recogidas urgentes</span><span>Vehículo exclusivo</span><span>Entregas directas</span></div>
        <Link className="button button-dark" href="/empresas#operadores">Colaborar con nosotros ↗</Link>
      </div></section>

      <section className="section quote-section" id="presupuesto"><div className="container quote-layout">
        <div className="quote-copy"><p className="eyebrow">Solicita presupuesto</p><h2>Cuéntanos qué necesitas mover.</h2><p>Cuanta más información tengamos sobre la recogida, la entrega y la mercancía, más rápido podremos valorar el servicio.</p><div className="quote-note"><strong>¿Es urgente?</strong><span>Indícalo en el formulario y utiliza el contacto directo cuando esté disponible.</span></div></div>
        <QuoteForm compact />
      </div></section>
    </main>
  );
}

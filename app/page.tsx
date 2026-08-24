import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ContactActions } from "./components/contact-actions";
import { QuoteForm } from "./components/quote-form";

export const metadata: Metadata = {
  title: "Transporte directo y urgente para empresas en Sevilla",
  description: "Furgón exclusivo para recogidas, palés, mercancía industrial y entregas directas en Sevilla y Andalucía.",
};

const services = [
  {
    number: "01",
    title: "Urgencias industriales",
    text: "Una pieza, un repuesto o un pedido que tiene que salir hoy. Coordinamos la recogida y vamos directos al destino.",
  },
  {
    number: "02",
    title: "Vehículo dedicado",
    text: "El furgón se reserva para tu carga. Sin consolidarla con mercancía ajena y sin paradas de reparto intermedias.",
  },
  {
    number: "03",
    title: "Palés y carga comercial",
    text: "La alternativa ágil cuando una mensajería se queda corta y contratar un camión completo resulta excesivo.",
  },
  {
    number: "04",
    title: "Recogidas coordinadas",
    text: "Pasamos por uno o varios proveedores y reunimos el material para entregarlo conjuntamente en tu empresa.",
  },
  {
    number: "05",
    title: "Apoyo a operadores",
    text: "Capacidad adicional para incidencias, excesos de carga, servicios express y recogidas fuera de ruta.",
  },
  {
    number: "06",
    title: "Servicios programados",
    text: "Transportes puntuales o recurrentes acordados con antelación para integrarnos en tu operativa.",
  },
];

const steps = [
  ["01", "Nos das la ruta", "Origen, destino, carga y horario."],
  ["02", "Confirmamos el servicio", "Disponibilidad, condiciones y precio."],
  ["03", "Recogemos", "En almacén, fábrica, taller o proveedor."],
  ["04", "Entregamos directo", "El mismo vehículo llega al destino."],
];

const sectors = ["Industria", "Automoción", "Aeronáutica", "Construcción", "Distribución", "Operadores logísticos"];

export default function Home() {
  return (
    <main id="contenido" className="td-home">
      <section className="td-hero">
        <div className="container td-hero-grid">
          <div className="td-hero-copy">
            <p className="td-kicker"><span /> Servicio B2B · Base operativa en Sevilla</p>
            <h1>Transporte directo.<br /><em>Sin rodeos.</em></h1>
            <p className="td-hero-lead">Recogemos en tu proveedor, almacén o fábrica y entregamos en destino con el mismo vehículo. Palés, piezas y mercancía industrial para empresas.</p>
            <ContactActions />
            <p className="td-availability">Servicios urgentes y programados · Sevilla y Andalucía</p>
          </div>

          <figure className="td-hero-figure">
            <Image
              src="/hero-transport.webp"
              alt="Furgón de transporte preparado para una ruta empresarial directa"
              fill
              priority
              sizes="(max-width: 860px) 100vw, 48vw"
            />
            <figcaption><span>Operativa 01</span> Recogida · Ruta directa · Entrega</figcaption>
            <div className="td-route-ticket" aria-label="Resumen del servicio">
              <span>Parte de ruta</span>
              <dl>
                <div><dt>Origen</dt><dd>Sevilla</dd></div>
                <div><dt>Destino</dt><dd>Directo</dd></div>
                <div><dt>Transbordos</dt><dd>0</dd></div>
              </dl>
            </div>
          </figure>
        </div>
        <div className="container td-manifest" aria-label="Características del transporte">
          <span><small>01</small> Vehículo exclusivo</span>
          <span><small>02</small> Una carga, una ruta</span>
          <span><small>03</small> Atención empresarial</span>
          <span><small>04</small> Urgente o programado</span>
        </div>
      </section>

      <section className="td-services" id="servicios">
        <div className="container td-services-layout">
          <header className="td-section-intro">
            <p className="td-kicker">Lo que movemos</p>
            <h2>Cuando la carga necesita algo más serio que un reparto.</h2>
            <p>Trabajamos para empresas que necesitan control, comunicación y una entrega sin desvíos innecesarios.</p>
            <Link className="td-arrow-link" href="/servicios">Ver todos los servicios <span aria-hidden="true">↗</span></Link>
          </header>

          <div className="td-service-list">
            {services.map((service) => (
              <Link className="td-service-row" href="/solicitar-porte" key={service.number} aria-label={`Solicitar ${service.title}`}>
                <span className="td-service-number">{service.number}</span>
                <span className="td-service-body"><strong>{service.title}</strong><small>{service.text}</small></span>
                <span className="td-row-arrow" aria-hidden="true">↗</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="td-b2b">
        <div className="container td-b2b-grid">
          <div className="td-b2b-image">
            <Image
              src="/warehouse-logistics.webp"
              alt="Carga empresarial preparada en un almacén industrial"
              fill
              sizes="(max-width: 860px) 100vw, 48vw"
            />
            <span>Mercancía de empresa a empresa</span>
          </div>
          <div className="td-b2b-copy">
            <p className="td-kicker td-kicker-light">Una operativa concreta</p>
            <h2>No somos una mensajería generalista.</h2>
            <p className="td-b2b-lead">Nos centramos en transportes empresariales que necesitan un vehículo, una recogida coordinada y una entrega directa.</p>
            <p>No hacemos rutas de paquetería ni reparto domiciliario. Hablamos con quien prepara la carga, coordinamos el acceso y llevamos la mercancía al punto acordado.</p>
            <div className="td-sector-line" aria-label="Sectores con los que trabajamos">
              {sectors.map((sector) => <span key={sector}>{sector}</span>)}
            </div>
            <Link className="button button-ghost-light" href="/empresas">Transporte para empresas <span aria-hidden="true">↗</span></Link>
          </div>
        </div>
      </section>

      <section className="td-process">
        <div className="container">
          <div className="td-process-head">
            <div><p className="td-kicker">Cómo funciona</p><h2>Pedir un porte no debería darte más trabajo.</h2></div>
            <p>Nos facilitas los datos esenciales. Nosotros coordinamos la ruta y mantenemos una comunicación clara hasta la entrega.</p>
          </div>
          <div className="td-process-rail">
            {steps.map(([number, title, text]) => (
              <article key={number}>
                <span>{number}</span>
                <div><h3>{title}</h3><p>{text}</p></div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="td-route-section">
        <div className="container td-route-layout">
          <div className="td-route-board" aria-label="Ejemplo de una ruta dedicada con varias recogidas">
            <div className="td-board-head"><span>Ruta dedicada</span><strong>SEV / 03—01</strong></div>
            <div className="td-route-points">
              <div><b>A</b><span>Proveedor</span></div><i />
              <div><b>B</b><span>Almacén</span></div><i />
              <div><b>C</b><span>Recogida</span></div><i />
              <div className="is-destination"><b>✓</b><span>Tu empresa</span></div>
            </div>
            <p><strong>3 recogidas</strong><span>Un solo vehículo</span><strong>1 entrega</strong></p>
          </div>
          <div className="td-route-copy">
            <p className="td-kicker">Coordinación flexible</p>
            <h2>Varias recogidas. Una sola llegada.</h2>
            <p>Podemos recoger pedidos o materiales en distintos proveedores de Sevilla y llevarlos juntos hasta tu fábrica, taller o almacén.</p>
            <ul>
              <li>Agrupa compras de varios proveedores</li>
              <li>Reduce coordinaciones y tiempos de espera</li>
              <li>La carga permanece en el mismo vehículo</li>
            </ul>
            <Link className="button button-primary" href="/solicitar-porte">Planificar una ruta <span aria-hidden="true">↗</span></Link>
          </div>
        </div>
      </section>

      <section className="td-coverage">
        <div className="container td-coverage-grid">
          <div className="td-coverage-title">
            <p className="td-kicker td-kicker-light">Radio de servicio</p>
            <h2>Sevilla es la base.<br />La ruta marca el destino.</h2>
          </div>
          <div className="td-coverage-locations">
            <div><span>Base principal</span><strong>Sevilla y provincia</strong><p>Capital · La Rinconada · Dos Hermanas · Alcalá de Guadaíra · Aljarafe · Áreas industriales</p></div>
            <div><span>Servicios regionales</span><strong>Andalucía</strong><p>Huelva · Cádiz · Córdoba · Málaga · Otras localidades bajo disponibilidad</p></div>
          </div>
          <Link className="td-arrow-link td-arrow-light" href="/zonas">Consultar una ruta <span aria-hidden="true">↗</span></Link>
        </div>
      </section>

      <section className="td-urgent">
        <div className="container td-urgent-grid">
          <span className="td-urgent-mark">!</span>
          <div><p>Transporte industrial urgente</p><h2>Si una pieza no puede esperar, la ruta tampoco.</h2></div>
          <p>Máquinas paradas, recambios críticos, pedidos adicionales o entregas que deben salir en la misma jornada.</p>
          <Link className="button button-dark" href="/contacto">Consultar disponibilidad <span aria-hidden="true">↗</span></Link>
        </div>
      </section>

      <section className="td-operators">
        <div className="container td-operators-inner">
          <span>¿Eres operador logístico?</span>
          <p>Ofrecemos capacidad adicional para incidencias, exceso de carga y servicios dedicados.</p>
          <Link href="/empresas#operadores">Hablemos de colaboración <span aria-hidden="true">→</span></Link>
        </div>
      </section>

      <section className="td-quote" id="presupuesto">
        <div className="container td-quote-layout">
          <div className="td-quote-copy">
            <p className="td-kicker">Presupuesto de transporte</p>
            <h2>¿Qué necesitas mover?</h2>
            <p>Indica la ruta, el tipo de mercancía y el horario. Con esos datos podremos valorar el servicio con más precisión.</p>
            <dl>
              <div><dt>01</dt><dd>Origen y destino</dd></div>
              <div><dt>02</dt><dd>Mercancía, peso y medidas</dd></div>
              <div><dt>03</dt><dd>Fecha y nivel de urgencia</dd></div>
            </dl>
          </div>
          <QuoteForm compact />
        </div>
      </section>
    </main>
  );
}

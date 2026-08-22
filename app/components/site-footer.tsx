import Link from "next/link";
import { siteConfig } from "../site-config";
import { BrandLogo } from "./brand-logo";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div className="footer-intro">
          <BrandLogo light />
          <p>Transporte directo de mercancías para empresas en Sevilla y Andalucía.</p>
          <div className="footer-status"><span className="status-dot" /> {siteConfig.availability}</div>
        </div>
        <div><h2>Servicios</h2><Link href="/servicios#urgente">Transporte urgente</Link><Link href="/servicios#pales">Transporte de palés</Link><Link href="/servicios#industrial">Transporte industrial</Link><Link href="/servicios#dedicado">Vehículo dedicado</Link></div>
        <div><h2>Empresa</h2><Link href="/empresas">Soluciones B2B</Link><Link href="/zonas">Zonas de servicio</Link><Link href="/solicitar-porte">Solicitar porte</Link><Link href="/contacto">Contacto</Link></div>
        <div><h2>Información</h2><Link href="/aviso-legal">Aviso legal</Link><Link href="/privacidad">Privacidad</Link><Link href="/cookies">Cookies</Link><span className="footer-note">Datos fiscales y contacto pendientes de confirmar.</span></div>
      </div>
      <div className="container footer-bottom"><span>© {new Date().getFullYear()} Transporte Directo Sevilla</span><span>Mercancía de empresa a empresa. Sin rutas de reparto domiciliario.</span></div>
    </footer>
  );
}

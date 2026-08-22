"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { navItems } from "../site-config";
import { BrandLogo } from "./brand-logo";
import { SocialLinks } from "./social-links";

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="utility-bar">
        <div className="container utility-inner">
          <span><span className="status-dot" />Base operativa en Sevilla</span>
          <span className="utility-detail">Transporte directo · Vehículo exclusivo · Sin transbordos</span>
          <div className="utility-actions">
            <SocialLinks className="utility-socials" />
            <Link className="utility-contact" href="/contacto">Atención directa <span aria-hidden="true">→</span></Link>
          </div>
        </div>
      </div>
      <header className="site-header">
        <div className="container header-inner">
          <BrandLogo priority />
          <button className="menu-toggle" type="button" aria-expanded={open} aria-controls="main-navigation" onClick={() => setOpen((value) => !value)}>
            <span className="sr-only">Abrir menú</span><span /><span /><span />
          </button>
          <nav id="main-navigation" className={`main-nav ${open ? "is-open" : ""}`} aria-label="Navegación principal">
            {navItems.map((item) => <Link key={item.href} href={item.href} className={pathname === item.href ? "active" : ""} onClick={() => setOpen(false)}>{item.label}</Link>)}
          </nav>
          <Link className="button button-primary header-cta" href="/solicitar-porte">Solicitar porte <span aria-hidden="true">↗</span></Link>
        </div>
      </header>
    </>
  );
}

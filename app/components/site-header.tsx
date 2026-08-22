"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { navItems, siteConfig } from "../site-config";

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="utility-bar">
        <div className="container utility-inner">
          <span><span className="status-dot" />Base operativa en Sevilla</span>
          <span className="utility-detail">Transporte directo · Vehículo exclusivo · Sin transbordos</span>
          <Link href="/contacto">Atención directa <span aria-hidden="true">→</span></Link>
        </div>
      </div>
      <header className="site-header">
        <div className="container header-inner">
          <Link className="brand" href="/" aria-label="Transporte Directo, inicio">
            <span className="brand-mark" aria-hidden="true"><span>TD</span></span>
            <span className="brand-copy"><strong>{siteConfig.descriptor}</strong><small>{siteConfig.location}</small></span>
          </Link>
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

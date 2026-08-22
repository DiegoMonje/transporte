import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "../site-config";

type BrandLogoProps = {
  light?: boolean;
  priority?: boolean;
};

export function BrandLogo({ light = false, priority = false }: BrandLogoProps) {
  return (
    <Link
      className={`brand${light ? " brand-light" : ""}`}
      href="/"
      aria-label="Transporte Directo Sevilla, ir al inicio"
    >
      <span className="brand-logo-frame" aria-hidden="true">
        <Image
          className="brand-logo-image"
          src="/logo-transporte-directo.svg"
          alt=""
          width={64}
          height={64}
          priority={priority}
        />
      </span>
      <span className="brand-copy">
        <strong>{siteConfig.descriptor}</strong>
        <small>{siteConfig.location}</small>
      </span>
    </Link>
  );
}

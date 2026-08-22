import Image from "next/image";
import Link from "next/link";

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
      <span className="brand-wordmark-logo" aria-hidden="true">
        <Image
          className="brand-wordmark-image"
          src={light ? "/logo-transporte-directo-wordmark-light.svg" : "/logo-transporte-directo-wordmark.svg"}
          alt=""
          width={850}
          height={100}
          priority={priority}
          sizes={light ? "280px" : "(max-width: 560px) 210px, 260px"}
        />
      </span>
    </Link>
  );
}

import type { MetadataRoute } from "next";
const routes = ["", "/servicios", "/empresas", "/zonas", "/solicitar-porte", "/contacto"];
export default function sitemap(): MetadataRoute.Sitemap { const now = new Date(); return routes.map((route) => ({ url: `https://transporte-directo-sevilla.vercel.app${route}`, lastModified: now, changeFrequency: route === "" ? "weekly" : "monthly", priority: route === "" ? 1 : route === "/solicitar-porte" ? .9 : .8 })); }

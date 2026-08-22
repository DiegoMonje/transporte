import type { MetadataRoute } from "next";
export default function robots(): MetadataRoute.Robots { return { rules: { userAgent: "*", allow: "/", disallow: [] }, sitemap: "https://transporte-directo-sevilla.vercel.app/sitemap.xml" }; }

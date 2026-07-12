import type { MetadataRoute } from "next";
import { siteContent } from "@/content/site-content";

export default function manifest(): MetadataRoute.Manifest {
    return {
        name: siteContent.brand.pwaName,
        short_name: siteContent.brand.shortName,
        description: siteContent.brand.description,
        start_url: "/",
        display: "standalone",
        background_color: "#0a0a0f",
        theme_color: "#F5A623",
        icons: [
            {
                src: "/images/favicon-32x32.png",
                sizes: "32x32",
                type: "image/png",
            },
            {
                src: "/images/apple-touch-icon.png",
                sizes: "180x180",
                type: "image/png",
            },
            {
                src: "/images/pwa-icon-512.png",
                sizes: "512x512",
                type: "image/png",
            },
        ],
    };
}

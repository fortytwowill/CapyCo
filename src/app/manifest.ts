import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
    return {
        name: "CapyCo - Vibe Coding & Marketing Agency",
        short_name: "CapyCo",
        description: "Build. Ship. Grow. A vibe-first coding & marketing agency founded by Brazilians in Canada.",
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

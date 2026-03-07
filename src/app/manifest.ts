import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
    return {
        name: "CapyCo - Vibe Coding & Marketing Agency",
        short_name: "CapyCo",
        description: "Build. Ship. Grow. A vibe-first coding & marketing agency founded by Brazilians in Canada.",
        start_url: "/",
        display: "standalone",
        background_color: "#FDF6EC",
        theme_color: "#D4952B",
        icons: [
            {
                src: "/icon",
                sizes: "32x32",
                type: "image/png",
            },
            {
                src: "/apple-icon",
                sizes: "180x180",
                type: "image/png",
            },
        ],
    };
}

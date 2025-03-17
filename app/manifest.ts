import type { MetadataRoute } from "next"

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Bhavya Kandhari Portfolio",
    short_name: "Bhavya Kandhari",
    description: "Personal portfolio of Bhavya Kandhari, Software Developer and Data Engineer",
    start_url: "/",
    display: "standalone",
    background_color: "#111827",
    theme_color: "#4d94ff",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
  }
}


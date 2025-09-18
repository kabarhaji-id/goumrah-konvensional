import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "GoUmrah.id",
    short_name: "GoUmrah.id",
    description: "Jelajahi berbagai pilihan paket umrah 2025 terbaik dengan biaya umrah murah, hotel dekat, dan penerbangan tanpa transit.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#1b8386",
    orientation: "portrait",
    lang: "id-ID",
    scope: "/",
    id: "/",
    icons: [
      {
        src: "icons/-48x48.png",
        sizes: "48x48",
        type: "image/png"
      },
      {
        src: "icons/-72x72.png",
        sizes: "72x72",
        type: "image/png"
      },
      {
        src: "icons/-96x96.png",
        sizes: "96x96",
        type: "image/png"
      },
      {
        src: "icons/-128x128.png",
        sizes: "128x128",
        type: "image/png"
      },
      {
        src: "icons/-144x144.png",
        sizes: "144x144",
        type: "image/png"
      },
      {
        src: "icons/-152x152.png",
        sizes: "152x152",
        type: "image/png"
      },
      {
        src: "icons/-192x192.png",
        sizes: "192x192",
        type: "image/png"
      },
      {
        src: "icons/-256x256.png",
        sizes: "256x256",
        type: "image/png"
      },
      {
        src: "icons/-384x384.png",
        sizes: "384x384",
        type: "image/png"
      },
      {
        src: "icons/-512x512.png",
        sizes: "512x512",
        type: "image/png"
      }
    ],
  }
}
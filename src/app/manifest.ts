import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Mayuri Sharma",
    short_name: "Mayuri Sharma",
    start_url: "/",
    description:
      "With a fair mix of spirituality and science, I help individuals reclaim their lives and step into their own healing",
    icons: [
      {
        src: "/android-chrome-96x96.png",
        sizes: "96x96",
        type: "image/png",
      },
    ],
    theme_color: "#ffffff",
    background_color: "#EB334A",
    display: "standalone",
  };
}

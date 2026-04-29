import { dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

/** @type {import("next").NextConfig} */
const nextConfig = {
  turbopack: {
    root: __dirname,
  },
  async redirects() {
    return [
      {
        source: "/projects/slant-house",
        destination: "/projects/slant-house.pdf",
        permanent: false,
      },
      {
        source: "/projects/interlock",
        destination: "/projects/interlock.pdf",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;


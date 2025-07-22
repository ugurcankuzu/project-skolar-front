import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        port: "",
        pathname: "/djsnccirv/image/upload/**",
      },
    ],
  },
  /* config options here */
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          {
            key: "Cross-Origin-Opener-Policy",
            // Bu değer, kendi açtığımız pop-up'ların bizimle iletişim kurmasına izin verir.
            // Google OAuth için gerekli olan ayar budur.
            value: "same-origin-allow-popups",
          },
        ],
      },
    ];
  },
};

export default nextConfig;

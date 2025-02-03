import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  trailingSlash: false,
  basePath: "",
  reactStrictMode: true, // Enforce React best practices
  images: {
    // Use remotePatterns for image domains
    remotePatterns: [
      {
        protocol: "https", // Protocol (http or https)
        hostname: "goumrah.id", // Your image domain
        pathname: "/assets/image/**", // Optional path to restrict image source
      },
    ],
    formats: ["image/avif", "image/webp"], // Enable modern image formats for better performance
    deviceSizes: [320, 420, 768, 1024, 1200], // Define breakpoints for responsive images
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384], // Define sizes for static images
  },
  assetPrefix: "/", // Ensure static assets are served correctly from the root path
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          {
            key: "Content-Security-Policy",
            value: "default-src 'self'; img-src 'self' https://www.facebook.com data:;",
          },
        ],
      },
    ];
  },
  webpack(config) {
    // Grab the existing rule that handles SVG imports
    const fileLoaderRule = config.module.rules.find(
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (rule: { test: { test: (arg0: string) => any } }) =>
        rule.test?.test?.(".svg"),
    );

    // Reapply the existing rule for handling svg imports
    config.module.rules.push(
      {
        ...fileLoaderRule,
        test: /\.svg$/i,
        resourceQuery: /url/, // *.svg?url
      },
      {
        test: /\.svg$/i,
        issuer: fileLoaderRule.issuer,
        resourceQuery: {
          not: [...fileLoaderRule.resourceQuery.not, /url/],
        }, // exclude *.svg?url
        use: ["@svgr/webpack"],
      },
    );

    // Modify the file loader rule to ignore *.svg
    fileLoaderRule.exclude = /\.svg$/i;

    // Add support for MP3, WAV, and OGG files
    config.module.rules.push({
      test: /\.(mp3|wav|ogg)$/i,
      type: "asset/resource",
      generator: {
        filename: "static/media/[name].[hash][ext]",
      },
    });

    // Add support for fonts (woff, woff2, eot, ttf, otf)
    config.module.rules.push({
      test: /\.(woff|woff2|eot|ttf|otf)$/i,
      type: "asset/resource",
      generator: {
        filename: "static/media/[name].[hash][ext]",
      },
    });

    return config;
  },
};

export default nextConfig;

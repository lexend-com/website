const withMDX = require("@next/mdx")({
  extension: /\.mdx?$/
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Produce a fully static site in ./out (replaces the old `next export`).
  output: "export",
  pageExtensions: ["js", "jsx", "mdx"],
  // Let Next's SWC compiler handle Emotion (replaces babel-plugin-emotion).
  compiler: {
    emotion: true
  },
  // Static export can't use the Image Optimization server.
  images: {
    unoptimized: true
  }
};

module.exports = withMDX(nextConfig);

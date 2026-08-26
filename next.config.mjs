/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  devIndicators: false,
  async redirects() {
    return [
      // The catalogue moved from /shop to /products so it sits above the
      // /products/[slug] detail pages. Keep the old path working for any
      // existing inbound links.
      { source: "/shop", destination: "/products", permanent: true },
    ];
  },
  images: {
    // Next 16 requires every `quality` passed to <Image> to be declared here.
    qualities: [75, 90, 95],
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "plus.unsplash.com" },
      { protocol: "https", hostname: "alluvi.bz" },
    ],
  },
};

export default nextConfig;

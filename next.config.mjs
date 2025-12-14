/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "not-indro.github.io",
      },
    ],
  },
};

export default nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  experimental: {
    // Esto obliga a Next.js a tratar la librería problemática como externa del servidor
    serverExternalPackages: ['rebrowser-playwright-core', 'playwright-core'],
  },
  output: 'standalone',
};

export default nextConfig;

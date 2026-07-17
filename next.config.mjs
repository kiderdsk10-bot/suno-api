/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  experimental: {
    // Corregido para Next.js 14.1.4
    serverComponentsExternalPackages: ['rebrowser-playwright-core', 'playwright-core'],
  },
  output: 'standalone',
};

export default nextConfig;

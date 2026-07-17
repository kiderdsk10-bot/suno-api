/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    // Ignora los errores de TypeScript al compilar
    ignoreBuildErrors: true,
  },
  eslint: {
    // Ignora ESLint al compilar
    ignoreDuringBuilds: true,
  },
  // Evita que Next.js intente pre-renderizar las rutas de API como páginas estáticas
  output: 'standalone',
};

export default nextConfig;

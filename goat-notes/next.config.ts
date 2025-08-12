/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  experimental: {
    forceSwcTransforms: true,
  },
}

const nextConfig: NextConfig = {
  eslint: {
    
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
module.exports = nextConfig

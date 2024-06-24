/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'standalone',
    eslint: {
      dirs: ['src/app', 'src/components', 'src/utils', 'src/constants', 'src/hooks']
    },
  };

export default nextConfig;

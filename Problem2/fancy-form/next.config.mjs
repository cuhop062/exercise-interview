/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'standalone',
    eslint: {
      dirs: ['src/app', 'src/components', 'src/utils', 'src/hooks', 'src/constants', 'src/providers']
    },
  };

export default nextConfig;

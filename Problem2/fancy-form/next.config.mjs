/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'standalone',
    eslint: {
      dirs: ['src/app', 'src/components', 'src/utils', 'src/constants']
    },
  };

export default nextConfig;

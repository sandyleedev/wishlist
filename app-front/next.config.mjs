/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  compiler: {
    styledComponents: {
      ssr: true,
    },
  },
};

export default nextConfig;

 const nextConfig = {
  images: {
    domains: ["codcupon.nyc3.digitaloceanspaces.com"],
  },
  async redirects() {
    return [
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'codcupon.ro' }],
        destination: 'https://www.codcupon.ro/:path*',
        permanent: true,
      },
    ];
  },
};
 
export default nextConfig;
 const nextConfig = {
  images: {
    domains: ["codcupon.nyc3.digitaloceanspaces.com"],
  },
  async redirects() {
    return [
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'codedereduc.ro' }],
        destination: 'https://www.codedereduc.ro/:path*',
        permanent: true,
      },
    ];
  },
};
 
export default nextConfig;
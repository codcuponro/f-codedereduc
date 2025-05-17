 const nextConfig = {
  images: {
    domains: ["codcupon.nyc3.digitaloceanspaces.com", "codedereduc-space.nyc3.digitaloceanspaces.com"],
  },
  async redirects() {
    return [
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'codedereduc.ro' }],
        destination: 'https://www.codedereduc.fr/:path*',
        permanent: true,
      },
    ];
  },
};
 
export default nextConfig;
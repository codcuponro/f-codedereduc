import createNextIntlPlugin from 'next-intl/plugin';
 
const nextConfig = {
  images: {
    domains: ["codcupon.nyc3.digitaloceanspaces.com"],
  },
};
 
const withNextIntl = createNextIntlPlugin();
export default withNextIntl(nextConfig);
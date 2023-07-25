/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  images: {
    newNextLinkBehavior: true,
    domains: ["files.stripe.com"],
  },
};

module.exports = nextConfig;

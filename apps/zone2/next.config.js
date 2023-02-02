/** @type {import('next').NextConfig} */
module.exports = {
  basePath: '/zone2',
  reactStrictMode: true,
  i18n: {
    locales: ['en-CA', 'fr-CA'],
    defaultLocale: 'en-CA',
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

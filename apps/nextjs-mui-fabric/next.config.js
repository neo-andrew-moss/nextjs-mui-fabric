/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  i18n: {
    locales: ['en-CA', 'fr-CA'],
    defaultLocale: 'en-CA',
  },
  async rewrites() {
    return [
        {
            source: "/zone2",
            destination: `http://localhost:3001/zone2`,
        },
        {
            source: "/zone2/:path*",
            destination: `http://localhost:3001/zone2/:path*`,
        },
    ];
},
};

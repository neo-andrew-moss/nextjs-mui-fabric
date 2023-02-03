const { ZONE_2_URL } = process.env

/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  i18n: {
    locales: ['en-CA', 'fr-CA'],
    defaultLocale: 'en-CA',
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  async rewrites() {
    return [
      {
        source: '/zone2',
        destination: `${ZONE_2_URL}/zone2`,
      },
      {
        source: '/zone2/:path*',
        destination: `${ZONE_2_URL}/zone2/:path*`,
      },
    ];
  },
};

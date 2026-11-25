import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  poweredByHeader: false,
  transpilePackages: ['@les9/domain', '@les9/i18n'],
  experimental: {
    // 404 hors des langues connues, sans layout racine à côté de [locale].
    globalNotFound: true,
  },
};

export default nextConfig;

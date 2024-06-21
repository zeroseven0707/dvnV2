// next.config.mjs
import i18n from './i18next.config.mjs';

const nextConfig = {
  reactStrictMode: true,
  i18n: {
    locales: ['en', 'id'],
    defaultLocale: 'en',
    localeDetection: false
  },
};

export default nextConfig;

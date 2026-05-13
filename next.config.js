/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: '**' }
    ]
  },
  i18n: {
    locales: ['en', 'ja', 'zh', 'ar', 'es', 'fr', 'de', 'hi'],
    defaultLocale: 'en',
    localeDetection: true
  }
}

module.exports = nextConfig

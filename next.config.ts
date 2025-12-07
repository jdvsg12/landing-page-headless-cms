import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  i18n: {
    locales: ['en', 'fr', 'es'],
    defaultLocale: 'es'
  }
}

export default nextConfig

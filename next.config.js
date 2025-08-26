/** @type {import('next').NextConfig} */
const nextConfig = {
  // Optimizaciones de producción
  reactStrictMode: true,
  
  // Compresión y optimización de imágenes
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 31536000, // 1 año
    dangerouslyAllowSVG: false,
  },

  // Headers de seguridad y performance mejorados
  async headers() {
    const securityHeaders = [
      {
        key: 'Content-Security-Policy',
        value: "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com https://www.google-analytics.com https://cal.com; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; img-src 'self' data: blob: https:; font-src 'self' https://fonts.gstatic.com; connect-src 'self' https://www.google-analytics.com https://vitals.vercel-insights.com; frame-src 'self' https://www.youtube.com https://cal.com; object-src 'none'; base-uri 'self'; form-action 'self'; frame-ancestors 'self'; upgrade-insecure-requests;"
      },
      {
        key: 'Strict-Transport-Security',
        value: 'max-age=31536000; includeSubDomains; preload'
      },
      {
        key: 'Cross-Origin-Opener-Policy',
        value: 'same-origin'
      },
      {
        key: 'Cross-Origin-Embedder-Policy',
        value: 'require-corp'
      },
      {
        key: 'X-DNS-Prefetch-Control',
        value: 'on'
      },
      {
        key: 'X-XSS-Protection',
        value: '1; mode=block'
      },
      {
        key: 'X-Frame-Options',
        value: 'SAMEORIGIN'
      },
      {
        key: 'X-Content-Type-Options',
        value: 'nosniff'
      },
      {
        key: 'Referrer-Policy',
        value: 'origin-when-cross-origin'
      },
      {
        key: 'Permissions-Policy',
        value: 'camera=(), microphone=(), geolocation=(), browsing-topics=()'
      }
    ];

    return [
      {
        source: '/:path*',
        headers: securityHeaders,
      },
      // Cache estático agresivo para assets optimizados
      {
        source: '/optimized/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable'
          }
        ]
      },
      // Cache para otras imágenes
      {
        source: '/:path*.(png|jpg|jpeg|gif|webp|avif|svg|ico)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable'
          }
        ]
      },
      // Cache para fuentes
      {
        source: '/_next/static/fonts/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable'
          }
        ]
      },
    ]
  },


  // Configuración de compilación
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },

  // Variables de entorno disponibles en el cliente
  env: {
    NEXT_PUBLIC_WHATSAPP_NUMBER: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '56932417147',
    NEXT_PUBLIC_CALENDAR_LINK: process.env.NEXT_PUBLIC_CALENDAR_LINK || 'https://cal.com/www.cognitiva-ai.agency',
    NEXT_PUBLIC_SITE_URL: process.env.NEXT_PUBLIC_SITE_URL || 'https://cognitiva-ai.agency',
  },

  // Experimental features para performance
  experimental: {
    optimizePackageImports: [
      'lucide-react',
      'framer-motion',
    ],
    scrollRestoration: true,
  },

  // Webpack config para optimizaciones adicionales
  webpack: (config, { dev, isServer }) => {
    // Optimizaciones de bundle
    if (!isServer) {
      config.optimization.splitChunks = {
        chunks: 'all',
        cacheGroups: {
          default: false,
          vendors: false,
          // Vendor chunk específico
          vendor: {
            name: 'vendor',
            chunks: 'all',
            test: /node_modules/,
            priority: 20
          },
          // Common chunk para código compartido
          common: {
            name: 'common',
            minChunks: 2,
            chunks: 'all',
            priority: 10,
            reuseExistingChunk: true,
            enforce: true
          },
          // Chunk específico para React
          react: {
            name: 'react',
            chunks: 'all',
            test: /[\\\\/]node_modules[\\\\/](react|react-dom)[\\\\/]/,
            priority: 30
          }
        }
      };
    }

    // Optimizar importaciones
    if (!dev) {
      config.optimization.usedExports = true;
      config.optimization.sideEffects = false;
    }

    return config;
  },

  // Configuración de salida estática para mejor rendimiento
  output: 'standalone',
  
  // Compresión
  compress: true,
  
  // Power-ups de Next.js 14+
  poweredByHeader: false,
  
  // Configuración adicional para mejor tree-shaking
  modularizeImports: {
    'lucide-react': {
      transform: 'lucide-react/dist/esm/icons/{{member}}',
    },
  },
}

module.exports = nextConfig
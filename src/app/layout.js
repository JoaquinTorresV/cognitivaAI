import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
  preload: true,
  fallback: ['ui-sans-serif', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Arial', 'sans-serif'],
  adjustFontFallback: true
});

export const metadata = {
  title: 'Cognitiva AI - Agentes de IA que Multiplican tus Ventas 24/7',
  description: 'Transforma tu negocio con IA conversacional. Automatización inteligente, chatbots multicanal, integraciones empresariales. ROI garantizado desde el día 1.',
  keywords: 'inteligencia artificial, chatbots, automatización, CRM, ventas, WhatsApp Business, agentes IA',
  authors: [{ name: 'Cognitiva AI' }],
  creator: 'Cognitiva AI',
  publisher: 'Cognitiva AI',
  metadataBase: new URL('https://cognitiva-ai.agency'),
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: 'Cognitiva AI - Multiplica tus Ventas con IA',
    description: 'Agentes de IA que venden, atienden y escalan tu negocio 24/7. Implementación en 7 días.',
    url: 'https://cognitiva-ai.agency',
    siteName: 'Cognitiva AI',
    images: [
      {
        url: '/logo-cognitiva-rrss.png',
        width: 1200,
        height: 630,
        alt: 'Cognitiva AI - Inteligencia Artificial para Negocios',
      }
    ],
    locale: 'es_CL',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Cognitiva AI - Agentes de IA para Empresas',
    description: 'Automatización inteligente que multiplica tus resultados',
    images: ['/logo-cognitiva-rrss.png'],
    creator: '@cognitiva',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  viewportFit: 'cover',
  themeColor: '#0a0a0a',
  colorScheme: 'dark'
};

export default function RootLayout({ children }) {
  return (
    <html lang="es" className={inter.variable} style={{margin: 0, padding: 0, border: 'none'}}>
      <head>
        {/* Preload critical font */}
        <link
          rel="preload"
          href="/_next/static/media/inter-latin.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        {/* Critical CSS inlined - Above fold optimization */}
        <style dangerouslySetInnerHTML={{__html: `
          *{box-sizing:border-box;margin:0;padding:0}
          html{scroll-behavior:smooth}
          body{font-family:${inter.style.fontFamily},ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Arial,sans-serif;background-color:#0a0a0a;color:white;line-height:1.6;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;text-rendering:optimizeLegibility}
          h1,h2,h3,h4,h5,h6{font-family:${inter.style.fontFamily},ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,'Segoe UI',Inter,Roboto,Arial,sans-serif;font-weight:300;line-height:1.2}
          .hero{background:linear-gradient(135deg,#0a0a0a 0%,#0f1419 50%,#0a0a0a 100%);min-height:100vh}
          .animate-gradient{background:linear-gradient(45deg,#3b82f6,#06b6d4,#8b5cf6,#3b82f6);background-size:300% 300%;animation:gradient 6s ease infinite}
          @keyframes gradient{0%,100%{background-position:0% 50%}50%{background-position:100% 50%}}
          section[data-below-fold]{content-visibility:auto;contain-intrinsic-size:1000px}
          @media(prefers-reduced-motion:reduce){*{animation-duration:.01ms!important;animation-iteration-count:1!important;transition-duration:.01ms!important;scroll-behavior:auto!important}}
          @media(max-width:640px){body{font-size:14px}h1{font-size:1.75rem}h2{font-size:1.5rem}}
        `}} />
        {/* DNS prefetch for external resources */}
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <link rel="dns-prefetch" href="//www.google-analytics.com" />
        <link rel="dns-prefetch" href="//cal.com" />
        
        {/* Preconnect to critical origins */}
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://www.google-analytics.com" />
      </head>
      <body className={inter.className} style={{margin: 0, padding: 0, border: 'none', background: 'rgb(10, 10, 10)'}}>
        {children}
      </body>
    </html>
  );
}
import sharp from 'sharp';
import { promises as fs } from 'fs';

// Crear imágenes temporales para integraciones que faltan
const createPlaceholderImage = async (name, output) => {
  // Create a simple colored square with text
  const colors = {
    'Zoom': '#2D8CFF',
    'GitHub': '#24292e',
    'Calendly': '#006BFF'
  };
  
  const color = colors[name] || '#6B7280';
  
  const svg = `
    <svg width="32" height="32" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
      <rect width="32" height="32" fill="${color}" rx="4"/>
      <text x="16" y="20" font-family="Arial, sans-serif" font-size="8" fill="white" text-anchor="middle" font-weight="bold">${name.charAt(0)}</text>
    </svg>
  `;
  
  await sharp(Buffer.from(svg))
    .avif({ quality: 85 })
    .toFile(output);
    
  console.log(`✅ Created placeholder: ${output}`);
};

// Crear imágenes para integraciones faltantes
const missingIntegrations = [
  { name: 'Zoom', output: 'public/optimized/zoom-32x32.avif' },
  { name: 'GitHub', output: 'public/optimized/github-32x32.avif' },
  { name: 'Calendly', output: 'public/optimized/calendly-32x32.avif' }
];

async function createMissingImages() {
  console.log('🎨 Creando imágenes para integraciones faltantes...');
  
  for (const integration of missingIntegrations) {
    await createPlaceholderImage(integration.name, integration.output);
  }
  
  console.log('🎉 Imágenes placeholder creadas!');
}

createMissingImages().catch(console.error);
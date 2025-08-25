import sharp from 'sharp';
import { promises as fs } from 'fs';
import { join } from 'path';

// Imágenes faltantes para optimizar
const tasks = [
  { src: "public/logos herramientas/HTML.png", out: "public/optimized/html-32x32.avif", w: 32, h: 32 },
  { src: "public/logos herramientas/Meta.png", out: "public/optimized/meta-32x32.avif", w: 32, h: 32 },
  { src: "public/logos herramientas/n8n.png", out: "public/optimized/n8n-32x32.avif", w: 32, h: 32 },
  { src: "public/logos herramientas/Node Js.png", out: "public/optimized/nodejs-32x32.avif", w: 32, h: 32 },
  { src: "public/logos herramientas/Siteground.png", out: "public/optimized/siteground-32x32.avif", w: 32, h: 32 },
  { src: "public/logos herramientas/TikTok.png", out: "public/optimized/tiktok-32x32.avif", w: 32, h: 32 }
];

async function optimizeImages() {
  console.log(`🖼️  Optimizando ${tasks.length} imágenes faltantes...`);
  
  for (let i = 0; i < tasks.length; i++) {
    const task = tasks[i];
    console.log(`📸 [${i + 1}/${tasks.length}] ${task.src} -> ${task.out} (${task.w}x${task.h})`);
    
    try {
      // Check if source file exists
      await fs.access(task.src);
      
      // Optimize image
      await sharp(task.src)
        .resize(task.w, task.h, { 
          fit: 'inside',
          withoutEnlargement: true,
          background: { r: 255, g: 255, b: 255, alpha: 0 }
        })
        .avif({ 
          quality: 85,
          effort: 6
        })
        .toFile(task.out);
        
      console.log(`✅ Optimizada: ${task.out}`);
    } catch (error) {
      console.log(`❌ Error con ${task.src}:`, error.message);
    }
  }
  
  console.log('🎉 Optimización de imágenes faltantes completada!');
}

optimizeImages().catch(console.error);
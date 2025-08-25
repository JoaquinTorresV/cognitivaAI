import sharp from "sharp";
import { promises as fs } from "fs";
import path from "path";

const tasks = [
  // herramientas (mostrar a ~32px)
  { src:"public/logos herramientas/Instagram.png", out:"public/optimized/instagram-32.avif", w:32, h:32 },
  { src:"public/logos herramientas/HubSpot.png",   out:"public/optimized/hubspot-32x9.avif", w:32, h:9 },
  { src:"public/logos herramientas/WhatsApp.png",  out:"public/optimized/whatsapp-32x27.avif", w:32, h:27 },
  { src:"public/logos herramientas/Shopify 2.png", out:"public/optimized/shopify-32x9.avif", w:32, h:9 },
  { src:"public/logos herramientas/Salesforce.png",out:"public/optimized/salesforce-32x23.avif", w:32, h:23 },
  { src:"public/logos herramientas/Google.png", out:"public/optimized/google-32x32.avif", w:32, h:32 },
  { src:"public/logos herramientas/Microsoft.png", out:"public/optimized/microsoft-32x32.avif", w:32, h:32 },
  { src:"public/logos herramientas/AWS.png", out:"public/optimized/aws-32x19.avif", w:32, h:19 },
  { src:"public/logos herramientas/Zapier.png", out:"public/optimized/zapier-32x32.avif", w:32, h:32 },
  { src:"public/logos herramientas/Make.png", out:"public/optimized/make-32x32.avif", w:32, h:32 },
  { src:"public/logos herramientas/Mailchimp.png", out:"public/optimized/mailchimp-32x32.avif", w:32, h:32 },
  { src:"public/logos herramientas/Slack.png", out:"public/optimized/slack-32x32.avif", w:32, h:32 },
  { src:"public/logos herramientas/Pipedrive.png", out:"public/optimized/pipedrive-32x32.avif", w:32, h:32 },
  { src:"public/logos herramientas/WordPress.png", out:"public/optimized/wordpress-32x32.avif", w:32, h:32 },
  { src:"public/logos herramientas/Paypal.png", out:"public/optimized/paypal-32x27.avif", w:32, h:27 },
  { src:"public/logos herramientas/stripe.png", out:"public/optimized/stripe-32x14.avif", w:32, h:14 },
  { src:"public/logos herramientas/mercadolibre.png", out:"public/optimized/mercadolibre-32x32.avif", w:32, h:32 },

  // clientes (cards ~180–224x48)
  { src:"public/logo empresas/Letralogoazul.png",      out:"public/optimized/letralogo-173x48.avif", w:173, h:48 },
  { src:"public/logo empresas/Logoynombre .png",       out:"public/optimized/logoynombre-159x48.avif", w:159, h:48 },
  { src:"public/logo empresas/TriTechAlargado.png",    out:"public/optimized/tritech-181x48.avif", w:181, h:48 },
  { src:"public/ProCasa.png",                          out:"public/optimized/procasa-142x48.avif", w:142, h:48 },
  { src:"public/Capitalizarme.png",                    out:"public/optimized/capitalizarme-224x48.avif", w:224, h:48 },
  { src:"public/WalmartChile.png",                     out:"public/optimized/walmart-142x48.avif", w:142, h:48 },
  { src:"public/logo empresas/turbotuninglogo.png",    out:"public/optimized/turbotuning-85x48.avif", w:85, h:48 },
  { src:"public/agrak.png",                            out:"public/optimized/agrak-128x48.avif", w:128, h:48 },
  { src:"public/DrGadget.png",                         out:"public/optimized/drgadget-48x48.avif", w:48, h:48 },

  // logo principal
  { src:"public/logo-cognitiva.png", out:"public/optimized/logo-cognitiva-200.avif", w:200 },
  { src:"public/logo-cognitiva.png", out:"public/optimized/logo-cognitiva-120.avif", w:120 },

  // WebP fallbacks para compatibilidad
  { src:"public/logos herramientas/Instagram.png", out:"public/optimized/instagram-32.webp", w:32, h:32, format:'webp' },
  { src:"public/logos herramientas/HubSpot.png",   out:"public/optimized/hubspot-32x9.webp", w:32, h:9, format:'webp' },
  { src:"public/logos herramientas/WhatsApp.png",  out:"public/optimized/whatsapp-32x27.webp", w:32, h:27, format:'webp' },
  { src:"public/logos herramientas/Shopify 2.png", out:"public/optimized/shopify-32x9.webp", w:32, h:9, format:'webp' },
  { src:"public/logos herramientas/Salesforce.png",out:"public/optimized/salesforce-32x23.webp", w:32, h:23, format:'webp' },
  
  { src:"public/logo empresas/Letralogoazul.png",      out:"public/optimized/letralogo-173x48.webp", w:173, h:48, format:'webp' },
  { src:"public/logo empresas/Logoynombre .png",       out:"public/optimized/logoynombre-159x48.webp", w:159, h:48, format:'webp' },
  { src:"public/logo empresas/TriTechAlargado.png",    out:"public/optimized/tritech-181x48.webp", w:181, h:48, format:'webp' },
  { src:"public/ProCasa.png",                          out:"public/optimized/procasa-142x48.webp", w:142, h:48, format:'webp' },
  { src:"public/Capitalizarme.png",                    out:"public/optimized/capitalizarme-224x48.webp", w:224, h:48, format:'webp' },
  
  { src:"public/logo-cognitiva.png", out:"public/optimized/logo-cognitiva-200.webp", w:200, format:'webp' },
  { src:"public/logo-cognitiva.png", out:"public/optimized/logo-cognitiva-120.webp", w:120, format:'webp' },
];

async function optimizeImages() {
  console.log('🎯 Iniciando optimización de imágenes...');
  
  // Crear directorio optimized si no existe
  await fs.mkdir("public/optimized", { recursive: true });
  
  let processed = 0;
  
  for (const t of tasks) {
    try {
      // Verificar si el archivo fuente existe
      await fs.access(t.src);
      
      // Crear directorio de destino si no existe
      await fs.mkdir(path.dirname(t.out), { recursive: true });
      
      // Procesar imagen
      let pipeline = sharp(t.src).resize({ 
        width: t.w, 
        height: t.h, 
        fit: "inside", 
        withoutEnlargement: true 
      });
      
      // Aplicar formato
      if (t.format === 'webp') {
        await pipeline.webp({ quality: 80 }).toFile(t.out);
      } else {
        await pipeline.avif({ quality: 50 }).toFile(t.out);
      }
      
      processed++;
      console.log(`✅ ${processed}/${tasks.length}: ${t.out}`);
      
    } catch (error) {
      console.log(`⚠️  Skipped ${t.src}: ${error.message}`);
    }
  }
  
  console.log(`🎉 Optimización completada: ${processed}/${tasks.length} imágenes procesadas`);
}

optimizeImages().catch(console.error);
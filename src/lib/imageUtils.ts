// src/lib/imageUtils.ts
import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

export async function optimizeImage(inputPath: string, outputPath: string) {
  try {
    console.log(`Processing image: ${inputPath}`);
    
    // Çıktı dizinini oluştur
    const outputDir = path.dirname(outputPath);
    if (!fs.existsSync(outputDir)) {
      fs.mkdirSync(outputDir, { recursive: true });
    }

    // Görseli optimize et
    const image = sharp(inputPath);
    const metadata = await image.metadata();

    // Orijinal en-boy oranını koru
    let width = 600;
    let height = 300;
    
    if (metadata.width && metadata.height) {
      const aspectRatio = metadata.width / metadata.height;
      if (aspectRatio > 2) {
        // Çok geniş görsel
        height = Math.round(width / aspectRatio);
      } else if (aspectRatio < 1) {
        // Çok uzun görsel
        width = Math.round(height * aspectRatio);
      }
    }

    await image
     .resize(600, 300, { fit: 'cover', position: 'center' })
     .toFormat('webp', { quality: 90 })
     .toFile(outputPath);

    console.log(`Successfully optimized: ${outputPath}`);
    return true;
  } catch (error) {
    console.error('Image optimization failed:', error);
    return false;
  }
}
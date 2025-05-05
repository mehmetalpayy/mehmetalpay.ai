// src/scripts/optimizeImages.ts
import { optimizeImage } from '../lib/imageUtils';
import fs from 'fs';
import path from 'path';

async function optimizeAllImages() {
  const projectsDir = path.join(process.cwd(), 'public', 'images', 'projects');
  const optimizedDir = path.join(projectsDir, 'optimized');

  console.log('Starting image optimization...');
  console.log('Projects directory:', projectsDir);
  console.log('Optimized directory:', optimizedDir);

  // Tüm proje klasörlerini tara
  const dirs = fs.readdirSync(projectsDir);
  
  for (const dir of dirs) {
    const fullPath = path.join(projectsDir, dir);
    if (fs.statSync(fullPath).isDirectory() && dir !== 'optimized') {
      console.log(`Processing directory: ${dir}`);
      const files = fs.readdirSync(fullPath);
      
      for (const file of files) {
        if (file.match(/\.(jpg|jpeg|png|PNG|webp)$/i)) {
          const inputPath = path.join(fullPath, file);
          const outputPath = path.join(optimizedDir, dir, `${path.parse(file).name}.webp`);
          
          console.log(`\nProcessing file: ${file}`);
          const success = await optimizeImage(inputPath, outputPath);
          if (success) {
            console.log(`Successfully optimized: ${file}`);
          } else {
            console.error(`Failed to optimize: ${file}`);
          }
        }
      }
    }
  }
}

optimizeAllImages().catch(console.error);
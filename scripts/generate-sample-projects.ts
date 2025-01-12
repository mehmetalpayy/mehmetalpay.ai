import fs from "fs";
import path from "path";
import sharp from "sharp";

const PROJECTS_DIR = path.join(process.cwd(), "src/content/projects");
const IMAGES_DIR = path.join(process.cwd(), "public/images/projects/sample");

// Ensure directories exist
if (!fs.existsSync(PROJECTS_DIR)) {
  fs.mkdirSync(PROJECTS_DIR, { recursive: true });
}
if (!fs.existsSync(IMAGES_DIR)) {
  fs.mkdirSync(IMAGES_DIR, { recursive: true });
}

// Generate sample cover image if it doesn't exist
const coverImagePath = path.join(IMAGES_DIR, "cover.png");
if (!fs.existsSync(coverImagePath)) {
  // Create a simple colored rectangle as cover image
  sharp({
    create: {
      width: 800,
      height: 400,
      channels: 4,
      background: { r: 100, g: 100, b: 100, alpha: 1 },
    },
  })
    .png()
    .toFile(coverImagePath);
}

// Generate projects
for (let i = 100; i <= 199; i++) {
  const projectContent = `---
title: "Project ${i}"
description: "This is sample project ${i}. A demonstration project for testing pagination and search functionality."
coverImage: "/images/projects/sample/cover.png"
---

# Project ${i}

This is a sample project to test pagination and search functionality.

## Features

- Feature 1 of Project ${i}
- Feature 2 of Project ${i}
- Feature 3 of Project ${i}

## Technical Details

Sample technical details for project ${i}.

\`\`\`typescript
interface Project {
  id: ${i};
  name: string;
  features: string[];
}
\`\`\`

## Screenshots

Project screenshots would go here.

## Conclusion

This is a sample project ${i} conclusion.
`;

  const fileName = `${i.toString().padStart(3, "0")}-sample-project.md`;
  const filePath = path.join(PROJECTS_DIR, fileName);
  fs.writeFileSync(filePath, projectContent);
}

console.log("Generated 100 sample projects!");

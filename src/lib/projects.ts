import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

interface ProjectMetadata {
  title: string;
  slug: string;
  description: string;
  date: string;
  tags: string[];
  image: string;
  features: string[];
}

interface ProjectContent {
  metadata: ProjectMetadata;
  content: string;
  htmlContent: string;
}

export function getAllProjects(): ProjectMetadata[] {
  const projectsDirectory = path.join(process.cwd(), 'src/content/projects');
  const fileNames = fs.readdirSync(projectsDirectory);
  
  return fileNames
    .filter((fileName: string) => fileName.endsWith('.md'))
    .map((fileName: string) => {
      const fullPath = path.join(projectsDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, 'utf8');
      const { data } = matter(fileContents);
      
      return {
        ...data,
        slug: data.slug || fileName.replace(/\.md$/, '')
      } as ProjectMetadata;
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export async function getProjectBySlug(slug: string): Promise<ProjectContent> {
    if (!slug) {
      throw new Error('Slug is required');
    }
  
    try {
      const fullPath = path.join(process.cwd(), 'src/content/projects', `${slug}.md`);
      const fileContents = await fs.promises.readFile(fullPath, 'utf8');
      const { data, content } = matter(fileContents);
      
      const processedContent = await remark()
        .use(html)
        .process(content);
      const htmlContent = processedContent.toString();
  
      return {
        metadata: data as ProjectMetadata,
        content,
        htmlContent
      };
    } catch (error) {
      throw new Error(`Failed to load project: ${error.message}`);
    }
}
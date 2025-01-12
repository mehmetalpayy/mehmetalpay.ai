"use server";

import fs from "fs";
import path from "path";
import matter from "gray-matter";
import remarkParse from "remark-parse";
import remarkGfm from "remark-gfm";
import rehypeHighlight from "rehype-highlight";
import rehypeSlug from "rehype-slug";
import { unified } from "unified";
import remarkRehype from "remark-rehype";
import rehypeStringify from "rehype-stringify";
import { Project } from "../types";

const projectsDirectory = path.join(process.cwd(), "src/content/projects");

export async function getAllProjects(): Promise<Project[]> {
  const fileNames = fs.readdirSync(projectsDirectory);
  return fileNames
    .map((fileName) => {
      const slug = fileName.replace(/\.md$/, "");
      const fullPath = path.join(projectsDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, "utf8");
      const { data, content } = matter(fileContents);

      return {
        slug,
        title: data.title,
        description: data.description,
        coverImage: data.coverImage,
        content,
      };
    })
    .sort((a, b) => (a.slug < b.slug ? 1 : -1));
}

export async function getProjectBySlug(slug: string): Promise<Project | null> {
  try {
    const fullPath = path.join(projectsDirectory, `${slug}.md`);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const { data, content } = matter(fileContents);

    const file = await unified()
      .use(remarkParse)
      .use(remarkGfm)
      .use(remarkRehype, { allowDangerousHtml: true })
      .use(rehypeSlug)
      .use(rehypeHighlight)
      .use(rehypeStringify, { allowDangerousHtml: true })
      .process(content);

    return {
      slug,
      title: data.title,
      description: data.description,
      coverImage: data.coverImage,
      content: String(file),
    };
  } catch {
    return null;
  }
}

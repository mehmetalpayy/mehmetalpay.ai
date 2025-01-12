export interface Project {
  slug: string;
  title: string;
  description: string;
  content: string;
  coverImage?: string;
}

export interface PaginatedProjects {
  projects: Project[];
  totalPages: number;
  currentPage: number;
}

export function paginateProjects(projects: Project[], page: number): PaginatedProjects {
  const PROJECTS_PER_PAGE = 10;
  const totalProjects = projects.length;
  const totalPages = Math.ceil(totalProjects / PROJECTS_PER_PAGE);
  const currentPage = Math.min(Math.max(1, page), totalPages || 1);
  const startIndex = (currentPage - 1) * PROJECTS_PER_PAGE;
  const endIndex = startIndex + PROJECTS_PER_PAGE;

  return {
    projects: projects.slice(startIndex, endIndex),
    totalPages,
    currentPage,
  };
}

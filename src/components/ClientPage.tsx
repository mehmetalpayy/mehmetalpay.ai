"use client";

import Link from "next/link";
import { useSearchParams, useRouter } from "next/navigation";
import ProjectCard from "@/components/ProjectCard";
import Pagination from "@/components/Pagination";
import SearchProjects from "@/components/SearchProjects";
import ScrollToTop from "@/components/ScrollToTop";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { useState, useEffect } from "react";
import { Project, paginateProjects } from "@/lib/types";

interface ClientPageProps {
  initialData: Project[];
}

export default function ClientPage({ initialData }: ClientPageProps) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const page = searchParams.get("page");
    if (page) {
      setCurrentPage(Number(page));
    }
  }, [searchParams]);

  const filteredProjects = initialData.filter((project) => {
    if (!searchQuery.trim()) return true;

    const searchContent = `${project.title} ${project.description} ${project.slug}`.toLowerCase();
    const searchTerms = searchQuery.toLowerCase().split(/\s+/).filter(Boolean);

    // Her bir terimin içerikte geçmesi gerekiyor
    // Terimin tam eşleşmesi veya sayı içeriyorsa sayının eşleşmesi yeterli
    return searchTerms.every((term) => {
      // Eğer terim bir sayı içeriyorsa, sayıyı bağımsız olarak ara
      const numberMatch = term.match(/\d+/);
      if (numberMatch) {
        return searchContent.includes(numberMatch[0]);
      }
      return searchContent.includes(term);
    });
  });

  const paginatedData = paginateProjects(filteredProjects, currentPage);

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    setCurrentPage(1);
    router.push("/"); // Reset URL to homepage
  };

  return (
    <>
      <main className="min-h-screen p-8 md:p-24 pb-24 max-w-3xl mx-auto">
        {/* Hero Section */}
        <section className="mb-16 text-center">
          <h1 className="text-4xl font-bold mb-4">Umut ISIK</h1>
          <div className="flex gap-4 mb-4 justify-center items-center text-sm">
            <Link href="https://github.com/penguenumut" className="text-gray-700 hover:text-blue-600 transition-colors flex items-center gap-1.5" target="_blank">
              <FaGithub className="text-lg" />
              <span>GitHub</span>
            </Link>
            <Link href="https://linkedin.com/in/umutisik1" className="text-gray-700 hover:text-blue-600 transition-colors flex items-center gap-1.5" target="_blank">
              <FaLinkedin className="text-lg" />
              <span>LinkedIn</span>
            </Link>
            <Link href="mailto:me@umut.ai" className="text-gray-700 hover:text-blue-600 transition-colors flex items-center gap-1.5">
              <MdEmail className="text-lg" />
              <span>Email</span>
            </Link>
          </div>
          <p className="text-lg text-gray-600">Senior Full-Stack Developer & AI Enthusiast</p>
        </section>

        {/* Projects Section */}
        <section>
          <SearchProjects onSearch={handleSearch} />
          <div className="space-y-6">
            {paginatedData.projects.map((project) => (
              <ProjectCard key={project.slug} title={project.title} description={project.description} slug={project.slug} coverImage={project.coverImage} />
            ))}
            {filteredProjects.length === 0 && <p className="text-center text-gray-500">No projects found matching your search.</p>}
          </div>
          {filteredProjects.length > 0 && <Pagination currentPage={paginatedData.currentPage} totalPages={paginatedData.totalPages} />}
        </section>
      </main>
      <ScrollToTop />
    </>
  );
}

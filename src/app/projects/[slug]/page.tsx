import { getProjectBySlug } from "@/lib/server/projects";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { HiArrowLeft } from "react-icons/hi";
import ScrollToTop from "@/components/ScrollToTop";

interface ProjectPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = await getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return (
    <>
      <main className="min-h-screen p-8 pb-24 md:p-24">
        <Link href="/" className="text-gray-700 hover:text-blue-600 transition-colors mb-8 inline-flex items-center gap-2">
          <HiArrowLeft className="text-xl" />
          <span>Back</span>
        </Link>

        <article className="max-w-3xl mx-auto">
          <header className="mb-8">
            <h1 className="text-4xl font-bold mb-4">{project.title}</h1>
            <p className="text-gray-600 mb-4 text-lg">{project.description}</p>
            {project.coverImage && (
              <div className="relative w-full h-[400px] mb-8 rounded-lg overflow-hidden">
                <Image
                  src={project.coverImage}
                  alt={`${project.title} cover image`}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  priority
                  fill
                  className="rounded-lg object-contain"
                />
              </div>
            )}
          </header>

          <div
            className="prose prose-lg max-w-none prose-headings:text-gray-900 prose-p:text-gray-600 prose-a:text-blue-600"
            dangerouslySetInnerHTML={{ __html: project.content }}
          />
        </article>
      </main>
      <ScrollToTop />
    </>
  );
}

// src/app/projects/[slug]/page.tsx
import { notFound } from 'next/navigation';
import { getProjectBySlug } from '@/lib/projects';
import { Metadata } from 'next';
import Image from 'next/image';


// Metadata için yeni yaklaşım
export async function generateMetadata(
  { params }: { params: Promise<{ slug: string }> }
): Promise<Metadata> {
  const { slug } = await params;               // 👉 await eklendi

  try {
    const project = await getProjectBySlug(slug);
    return {
      title: `${project.metadata.title} | Mehmet Alpay`,
      description: project.metadata.description,
    };
  } catch {
    return {
      title: 'Project Not Found',
      description: 'The requested project could not be found.',
    };
  }
}

export default async function ProjectPage(
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params;
  if (!slug) notFound();

  try {
    const project = await getProjectBySlug(slug);

    return (
      <div className="max-w-4xl mx-auto px-4 py-12">
        <article className="prose prose-lg">
          <h1 className="text-4xl font-bold text-center mb-12">
            {project.metadata.title}
          </h1>

          {project.metadata.image && (
            <div className="my-12 mx-auto w-[600px] h-[300px] relative">
              <Image
                src={project.metadata.image}
                alt={project.metadata.title}
                fill
                className="object-contain rounded-lg"
                sizes="600px"
                quality={90}
                priority
              />
            </div>
          )}

          <div
            className="mt-12"
            dangerouslySetInnerHTML={{
              __html: project.htmlContent.replace(/<h1[^>]*>.*?<\/h1>/, ''),
            }}
          />
        </article>
      </div>
    );
  } catch {
    notFound();
  }
}
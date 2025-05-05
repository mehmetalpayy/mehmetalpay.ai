// src/components/ProjectContent.tsx
'use client';

import Link from 'next/link';
import Image from 'next/image';
import { FaArrowLeft } from 'react-icons/fa';

interface ProjectContentProps {
  project: {
    metadata: {
      title: string;
      tags: string[];
      image: string;
    };
    htmlContent: string;
  };
}

export default function ProjectContent({ project }: ProjectContentProps) {
  return (
    <article className="bg-white/50 backdrop-blur-sm rounded-xl p-8 shadow-lg">
      {/* Proje Başlığı */}
      <h1 className="text-4xl font-bold text-primary-800 mb-4">
        {project.metadata.title}
      </h1>

      {/* Teknolojiler */}
      <div className="flex flex-wrap gap-2 mb-6">
        {project.metadata.tags.map((tag, index) => (
          <span
            key={index}
            className="px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-sm"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Proje Görseli */}
      <div className="relative h-[400px] rounded-lg overflow-hidden mb-8">
        <Image
          src={project.metadata.image}
          alt={project.metadata.title}
          fill
          className="object-cover"
          priority
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.src = '/images/coming-soon-background.jpg';
          }}
        />
      </div>

      {/* Markdown İçeriği */}
      <div 
        className="prose prose-lg max-w-none prose-primary"
        dangerouslySetInnerHTML={{ __html: project.htmlContent }}
      />
    </article>
  );
}
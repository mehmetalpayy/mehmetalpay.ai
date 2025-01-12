"use client";

import Link from "next/link";
import Image from "next/image";
import { HiArrowRight } from "react-icons/hi";
import { useState } from "react";

interface ProjectCardProps {
  title: string;
  description: string;
  slug: string;
  coverImage?: string;
}

export default function ProjectCard({ title, description, slug, coverImage }: ProjectCardProps) {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <Link href={`/projects/${slug}`} className={`block group relative ${isLoading ? "cursor-wait" : ""}`} onClick={() => setIsLoading(true)}>
      <div className={`border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-all duration-300 bg-white ${isLoading ? "opacity-60" : ""}`}>
        <div className="flex flex-col md:flex-row gap-6">
          {coverImage && (
            <div className="relative w-full md:w-48 h-48 flex-shrink-0">
              <Image src={coverImage} alt={`${title} cover image`} fill className="rounded-lg object-contain" sizes="(max-width: 768px) 100vw, 192px" />
            </div>
          )}
          <div className="flex-grow">
            <h3 className="text-2xl font-semibold mb-3 group-hover:text-blue-600 transition-colors">{title}</h3>
            <p className="text-gray-600 mb-4">{description}</p>
            <span className="text-blue-600 inline-flex items-center gap-1 group-hover:gap-2 transition-all">
              Details
              <HiArrowRight className="text-lg" />
            </span>
          </div>
        </div>
      </div>
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-white bg-opacity-50 rounded-lg">
          <div className="w-6 h-6 border-2 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
        </div>
      )}
    </Link>
  );
}

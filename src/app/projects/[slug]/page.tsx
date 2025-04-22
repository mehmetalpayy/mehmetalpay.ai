'use client';

import Link from 'next/link';
import { FaArrowLeft } from 'react-icons/fa';
import { useParams } from 'next/navigation';

const projectDetails = {
  'encoder-transformer': {
    title: 'Encoder Transformer Block Implementation'
  },
  'gpt2-fastapi': {
    title: 'GPT2 FastAPI Integration'
  },
  'lora-sd': {
    title: 'LoRA Stable Diffusion'
  },
  'diet-chatbot': {
    title: 'Contextual Diet ChatBot'
  },
  'llm-agent': {
    title: 'LLM-based AI Agent System'
  }
} as const;

export default function Page() {
  const params = useParams();
  const slug = params?.slug as string;
  const project = projectDetails[slug as keyof typeof projectDetails];

  return (
    <div className="min-h-screen bg-[#F8F3ED] py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link 
          href="/#projects" // Projects bölümüne scroll etmesi için
          className="flex items-center space-x-2 text-primary-600 hover:text-primary-800 transition-colors mb-8 group"
        >
          <FaArrowLeft className="group-hover:-translate-x-1 transition-transform" />
          <span>Back to Projects</span>
        </Link>

        <div className="bg-white/50 rounded-xl p-8 shadow-lg">
          <h1 className="text-3xl font-bold text-primary-800 text-center">
            {project?.title || 'Project Page'}
          </h1>
        </div>
      </div>
    </div>
  );
}
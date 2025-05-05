'use client';

import Image from 'next/image';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { SiHuggingface } from 'react-icons/si';

const Hero = () => {
  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen bg-[#F8F3ED] px-4">
      {/* Background Pattern */}
      <div className="absolute inset-0 pattern-dots pattern-primary-100 pattern-bg-transparent pattern-size-4 pattern-opacity-10" />

      <div className="relative z-10 flex flex-col items-center text-center mt-20">
        {/* Profile Image */}
        <div className="relative w-40 h-40 md:w-48 md:h-48 mb-10 rounded-full overflow-hidden border-4 border-primary-100 shadow-2xl">
          <Image
            src="/profile.jpg"
            alt="Mehmet Alpay"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Name and Title */}
        <div className="space-y-6 mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-primary-800 font-heading animate-fade-in">
            Mehmet Alpay
          </h1>
          
          {/* Title and Company in same line */}
          <div className="flex items-center justify-center space-x-3 text-xl text-primary-600 font-heading animate-fade-in-delay">
            <span>Machine Learning Engineer</span>
            <span className="text-primary-400">-</span>
            <span>Novus</span>
          </div>
        </div>

        {/* Social Links */}
        <div className="flex space-x-6 mt-2 animate-fade-in-delay-2">
          <a
            href="https://github.com/mehmetalpayy"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary-600 hover:text-primary-800 transition-colors"
            aria-label="GitHub Profile"
          >
            <FaGithub className="w-6 h-6" />
          </a>
          <a
            href="https://www.linkedin.com/in/mehmet-alpay/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary-600 hover:text-primary-800 transition-colors"
            aria-label="LinkedIn Profile"
          >
            <FaLinkedin className="w-6 h-6" />
          </a>
          <a
            href="https://huggingface.co/mehmetalpy"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary-600 hover:text-primary-800 transition-colors"
            aria-label="Hugging Face Profile"
          >
            <SiHuggingface className="w-6 h-6" />
          </a>
          <a
            href="mailto:mehmetcompeng@gmail.com"
            className="text-primary-600 hover:text-primary-800 transition-colors"
            aria-label="Email"
          >
            <FaEnvelope className="w-6 h-6" />
          </a>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 animate-bounce">
          <svg
            className="w-6 h-6 text-primary-600"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Hero;
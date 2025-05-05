'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useState } from 'react';

const DEFAULT_PROJECT_IMAGE = '/images/coming-soon-background.jpg';

const projects = [
  {
    id: 'encoder-transformer',
    title: 'Encoder Transformer Block',
    description: 'Implementation and testing of encoder transformer block. This project focuses on developing and evaluating transformer-based architectures for various NLP tasks.',
    technologies: ['Python', 'PyTorch', 'Transformers', 'NLP'],
    image: '/images/projects/encoder-transformer/Encoder_Transformer_Block.png',
    link: '/projects/encoder-transformer',
    features: [
      'Custom transformer implementation',
      'Performance evaluation on NLP tasks',
      'Modular architecture design'
    ]
  },
  {
    id: 'gpt2-fastapi',
    title: 'GPT2 FastAPI Integration',
    description: 'FastAPI Text Generation with Fine-Tuned GPT2 model. A robust API service that provides text generation capabilities using a custom-trained GPT2 model.',
    technologies: ['FastAPI', 'GPT2', 'Python', 'Docker'],
    image: DEFAULT_PROJECT_IMAGE,
    link: '/projects/gpt2-fastapi',
    features: [
      'RESTful API implementation',
      'GPT2 model fine-tuning',
      'Docker containerization'
    ]
  },
  {
    id: 'lora-sd',
    title: 'LoRA Stable Diffusion',
    description: 'Text to Image project using Stable Diffusion, LoRA, ChatGPT, and Gradio. Creating custom book illustrations with fine-tuned models.',
    technologies: ['Stable Diffusion', 'LoRA', 'ChatGPT', 'Gradio'],
    image: '/images/projects/lora-sd/lora.PNG',
    link: '/projects/lora-sd',
    features: [
      'Custom model fine-tuning',
      'Interactive Gradio interface',
      'Integration with ChatGPT'
    ]
  },
  {
    id: 'diet-chatbot',
    title: 'Contextual Diet ChatBot',
    description: 'Diet Chatbot using Neural Networks and Recommendation System. Providing personalized diet suggestions based on user context and preferences.',
    technologies: ['Neural Networks', 'NLP', 'Python', 'Recommendation Systems'],
    image: DEFAULT_PROJECT_IMAGE,
    link: '/projects/diet-chatbot',
    features: [
      'Contextual understanding',
      'Personalized recommendations',
      'Neural network-based processing'
    ]
  },
  {
    id: 'img2txt2story',
    title: 'Image to Text to Story Generator',
    description: 'An interactive web application that uses deep learning models to generate creative stories from images using Gradio interface.',
    technologies: ['Python', 'Gradio', 'Deep Learning', 'NLP', 'Image Processing'],
    image: '/images/projects/img2txt2story/img2txt.png',
    link: '/projects/img2txt2story',
    features: [
      'Image to text conversion using deep learning',
      'Story generation with genre selection',
      'Interactive Gradio web interface'
    ]
  }
];


const ProjectImage = ({ src, alt, priority }: { src: string, alt: string, priority?: boolean }) => {
  const [error, setError] = useState(false);
  
  // Görsel yolunu düzelt - artık ../optimized yerine direkt optimized klasörüne bakacak
  const optimizedSrc = src === DEFAULT_PROJECT_IMAGE 
    ? src 
    : src.replace(
        '/images/projects/',
        '/images/projects/optimized/'
      ).replace(/\.(png|jpg|jpeg|PNG)$/, '.webp');

  return (
    <div className="relative w-full h-full flex items-center justify-center">
      <Image
        src={error ? DEFAULT_PROJECT_IMAGE : optimizedSrc}
        alt={alt}
        width={600}
        height={300}
        className="rounded-lg"
        onError={(e) => {
          console.error('Image load error:', optimizedSrc);
          setError(true);
        }}
        priority={priority}
        style={{ 
          width: '100%',
          height: '100%',
          objectFit: 'contain'
        }}
      />
    </div>
  );
};


const Projects = () => {
  return (
    <div id="projects" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl font-bold mb-8 text-primary-900 text-center">Projects</h2>
      <div className="space-y-6">
        {projects.map((project, index) => (
          <Link href={project.link} key={project.id} className="block">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="card hover:shadow-xl transition-all duration-300 cursor-pointer
                       grid grid-cols-1 md:grid-cols-2 gap-6
                       transform hover:scale-[1.01] hover:translate-y-0"
            >
              <div className="flex flex-col justify-between">
                <div>
                  <h3 className="text-2xl font-semibold mb-4 text-primary-900 group-hover:text-primary-700 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-primary-700 mb-6">{project.description}</p>
                  <ul className="space-y-2 mb-6">
                    {project.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <span className="text-primary-600 mr-2">•</span>
                        <span className="text-primary-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-[#DCB894]/20 text-primary-700 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <div className="relative h-[300px] rounded-lg overflow-hidden bg-white/50 flex items-center justify-center">
                <div className="w-full h-full">
                  <ProjectImage
                    src={project.image || DEFAULT_PROJECT_IMAGE}
                    alt={project.title}
                    priority={index < 2}
                  />
                </div>
              </div>
            </motion.div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Projects;
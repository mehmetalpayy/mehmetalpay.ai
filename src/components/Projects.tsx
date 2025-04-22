'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

const projects = [
  {
    id: 'encoder-transformer',
    title: 'Encoder Transformer Block',
    description: 'Implementation and testing of encoder transformer block. This project focuses on developing and evaluating transformer-based architectures for various NLP tasks.',
    technologies: ['Python', 'PyTorch', 'Transformers', 'NLP'],
    image: '/profile.jpg',
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
    image: '/profile.jpg',
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
    image: '/profile.jpg',
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
    image: '/profile.jpg',
    link: '/projects/diet-chatbot',
    features: [
      'Contextual understanding',
      'Personalized recommendations',
      'Neural network-based processing'
    ]
  }
];

const Projects = () => {
  return (
    <div id="projects" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> {/* id="projects" eklendi */}
      <h2 className="text-3xl font-bold mb-12 text-primary-900 text-center">Projects</h2>
      <div className="space-y-12">
        {projects.map((project, index) => (
          <Link href={project.link} key={project.id} className="block"> {/* block eklendi */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-[#F3E8DD] backdrop-blur-sm rounded-xl shadow-lg p-8 
                       hover:shadow-xl transition-all duration-300 cursor-pointer
                       border border-[#DCB894]/30 grid grid-cols-1 md:grid-cols-2 gap-8
                       transform hover:scale-[1.01] hover:translate-y-0" /* transform ve scale eklendi */
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
              <div className="relative h-[300px] rounded-lg overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </motion.div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Projects;
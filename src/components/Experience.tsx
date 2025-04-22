'use client';

import { motion } from 'framer-motion';

const experiences = [
  {
    company: "NOVUS",
    position: "Machine Learning Engineer",
    period: "August 2024 - Present",
    description: [
      "Actively contributed to the development of agent orchestration and RAG pipelines within DOT.",
      "Took part in designing and implementing scalable API integrations.",
      "Played a key role in building robust LLM workflows using LangChain, LangGraph, and LlamaIndex.",
      "Focused on performance and privacy in AI system implementations."
    ],
    technologies: ["LangChain", "LangGraph", "LlamaIndex", "RAG", "API Integration"]
  },
  {
    company: "ASELSAN",
    position: "Intern",
    period: "June 2024 - July 2024",
    description: [
      "Developed a web application to analyze system logs and JSON files.",
      "Implemented frontend solutions using modern web technologies.",
      "Integrated the application with existing company systems."
    ],
    technologies: ["React", "Redux", "TypeScript", "Ant Design"]
  },
  {
    company: "CBOT",
    position: "Intern",
    period: "February 2024 - June 2024",
    description: [
      "Gained experience in report preparation and chatbot testing.",
      "Designed conversation flows and managed intent operations.",
      "Contributed to chatbot development and optimization."
    ],
    technologies: ["Chatbot Development", "Flow Design", "Testing"]
  },
  {
    company: "SMARTMIND",
    position: "Intern",
    period: "August 2023 - September 2023",
    description: [
      "Developed a project for detecting personal identifiable information.",
      "Worked with NER-BERT model for information extraction.",
      "Contributed to both development and implementation phases."
    ],
    technologies: ["NER-BERT", "Information Extraction", "Privacy"]
  }
];

const Experience = () => {
  return (
    <div className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          <h2 className="text-4xl font-bold text-primary-800 mb-12 text-center">
            Work Experience
          </h2>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-[#DCB894]/30 rounded-xl p-8 shadow-md backdrop-blur-sm"
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-primary-800">
                      {exp.company}
                    </h3>
                    <p className="text-xl text-primary-700 mt-1">
                      {exp.position}
                    </p>
                  </div>
                  <p className="text-primary-600 font-medium mt-2 md:mt-0">
                    {exp.period}
                  </p>
                </div>

                <ul className="list-disc list-inside space-y-2 text-primary-700 mb-6">
                  {exp.description.map((item, i) => (
                    <li key={i} className="leading-relaxed">
                      {item}
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2 mt-4">
                  {exp.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-[#DCB894]/20 text-primary-800 rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Experience;
'use client';

import { motion } from 'framer-motion';
import { 
  FaBrain, 
  FaCode, 
  FaDatabase, 
  FaTools,
  FaCloud,
  FaRobot
} from 'react-icons/fa';
import { SiPytorch, SiTensorflow, SiHuggingface } from 'react-icons/si';

const skillsData = [
  {
    category: "AI & Machine Learning",
    icon: <FaBrain className="w-8 h-8" />,
    description: "Expertise in developing and implementing advanced AI solutions, with a focus on deep learning and natural language processing.",
    skills: [
      "Deep Learning",
      "Machine Learning",
      "Natural Language Processing",
      "Large Language Models (LLMs)",
      "Retrieval-Augmented Generation (RAG)",
      "Agent Orchestration",
      "Prompt Engineering",
      "Fine-Tuning"
    ]
  },
  {
    category: "Deep Learning Frameworks",
    icon: <SiPytorch className="w-8 h-8" />,
    description: "Proficient in major deep learning frameworks and AI development platforms.",
    skills: [
      "PyTorch",
      "TensorFlow",
      "Hugging Face",
      "LangChain",
      "LlamaIndex",
      "LangGraph",
      "CrewAI"
    ]
  },
  {
    category: "Programming",
    icon: <FaCode className="w-8 h-8" />,
    description: "Strong foundation in programming languages and software development.",
    skills: [
      "Python",
      "C",
      "SQL",
      "FastAPI",
      "REST APIs",
      "Streamlit",
      "Gradio"
    ]
  },
  {
    category: "MLOps & Tools",
    icon: <FaTools className="w-8 h-8" />,
    description: "Experience with ML operations and development tools.",
    skills: [
      "Git",
      "Docker",
      "FastAPI",
      "MLflow",
      "Weights & Biases",
      "CI/CD",
      "Model Deployment",
      "Model Monitoring"
    ]
  },
  {
    category: "Database & Cloud",
    icon: <FaCloud className="w-8 h-8" />,
    description: "Knowledge of database systems and cloud platforms.",
    skills: [
      "PostgreSQL",
      "AWS"
    ]
  }
];

const Skills = () => {
  return (
    <div className="py-20 bg-[#F8F3ED]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-primary-900 mb-4">Skills & Expertise</h2>
          <p className="text-xl text-primary-700">Specialized in AI and Machine Learning technologies</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillsData.map((category, index) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="card"
            >
              <div className="flex items-center mb-4 text-primary-700">
                {category.icon}
                <h3 className="text-xl font-semibold ml-3">{category.category}</h3>
              </div>
              
              <p className="text-primary-600 mb-4 text-sm">
                {category.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 bg-[#DCB894]/20 text-primary-700 rounded-full text-sm
                             hover:bg-[#DCB894]/30 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
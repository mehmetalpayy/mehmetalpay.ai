'use client';

import { motion } from 'framer-motion';

const About = () => {
  return (
    <div className="py-20 bg-[#F8F3ED]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start"
        >
          {/* Sol taraf - Skills ve Education */}
          <div className="lg:col-span-4 flex flex-col items-center lg:items-start space-y-8">
            {/* Skills Section */}
            <div className="w-full bg-[#DCB894]/30 rounded-xl p-6 shadow-md backdrop-blur-sm">
              <h2 className="text-2xl font-semibold text-primary-800 mb-4">Skills</h2>
              
              {/* AI & Machine Learning Group */}
              <div className="mb-6">
                <h3 className="text-lg font-medium text-primary-800 mb-3">AI & Machine Learning:</h3>
                <div className="flex flex-wrap gap-3">
                  {[
                    'Deep Learning',
                    'Machine Learning',
                    'Natural Language Processing',
                    'Large Language Models (LLMs)',
                    'Retrieval-Augmented Generation (RAG)',
                    'Agent Orchestration',
                    'Prompt Engineering'
                  ].map((skill, index) => (
                    <span
                      key={index}
                      className="px-4 py-2 bg-[#DCB894]/20 rounded-full text-primary-800 text-sm font-medium shadow-sm hover:bg-[#DCB894]/30 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Frameworks & Libraries Group */}
              <div className="mb-6">
                <h3 className="text-lg font-medium text-primary-800 mb-3">Frameworks & Libraries:</h3>
                <div className="flex flex-wrap gap-3">
                  {[
                    'TensorFlow',
                    'PyTorch',
                    'HuggingFace',
                    'LangChain',
                    'LangGraph',
                    'LlamaIndex'
                  ].map((skill, index) => (
                    <span
                      key={index}
                      className="px-4 py-2 bg-[#DCB894]/20 rounded-full text-primary-800 text-sm font-medium shadow-sm hover:bg-[#DCB894]/30 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Programming Languages Group */}
              <div>
                <h3 className="text-lg font-medium text-primary-800 mb-3">Programming Languages:</h3>
                <div className="flex flex-wrap gap-3">
                  {[
                    'Python',
                    'C',
                    'SQL'
                  ].map((skill, index) => (
                    <span
                      key={index}
                      className="px-4 py-2 bg-[#DCB894]/20 rounded-full text-primary-800 text-sm font-medium shadow-sm hover:bg-[#DCB894]/30 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Education Section */}
            <div className="w-full bg-[#DCB894]/30 rounded-xl p-6 shadow-md backdrop-blur-sm">
              <h2 className="text-2xl font-semibold text-primary-800 mb-4">Education</h2>
              <ul className="space-y-4 text-primary-700">
                <li className="flex items-start space-x-3">
                  <span className="mt-1">🎓</span>
                  <span>Bachelor's Degree in Computer Engineering from Ankara University</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="mt-1">📝</span>
                  <span>IELTS Academic: Overall Band Score 6.5</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="mt-1">🌐</span>
                  <span>TÖMER English Course: Achieved B2 and C1 English Diploma</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="mt-1">📚</span>
                  <span>Preparatory School: Completed University English Preparatory program</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Sağ taraf - Bilgiler */}
          <div className="lg:col-span-8 space-y-8">
            {/* Intro Section */}
            <div className="card">
              <h1 className="text-4xl font-bold text-primary-800 mb-6">
                Hi 👋 I'm a Machine Learning Engineer
              </h1>

              <div className="space-y-6 text-lg text-primary-700">
                <p className="leading-relaxed">
                  I am deeply passionate about artificial intelligence and committed to advancing my skills. 
                  I approach tasks with precision and stay updated on the latest advancements in AI. 
                  I strive for excellence and continuously seek self-improvement.
                </p>

                <p className="leading-relaxed">
                  My focus is on AI research, particularly in deep learning model development, NLP, and 
                  large language models. I am always eager to explore new ideas and innovations, aiming 
                  to make a meaningful impact in the field.
                </p>

                <div className="flex items-center space-x-2 text-primary-600">
                  <span>🌍</span>
                  <span>Based in Ankara, Turkey</span>
                </div>
              </div>
            </div>

            {/* Experience Section */}
            <div className="card">
              <h2 className="text-2xl font-semibold text-primary-800 mb-6">Experience</h2>
              <ul className="space-y-4 list-disc list-inside text-primary-700">
                <li>Worked on NLP and AI projects with expertise in models like BERT and ChatGPT, including personal information detection and fine-tuning large language models (LLMs).</li>
                <li>Knowledgeable in NLP, with experience spanning from foundational concepts like Naive Bayes, Markov Decision Processes, LSTM, and GRU, to advanced topics including Transformers, LLM fine-tuning, quantization, and LLM agents.</li>
                <li>Experienced with technologies and tools including Python, FastAPI, PostgreSQL, PyTorch, TensorFlow, and Langchain.</li>
                <li>Gained practical experience in chatbot design, testing, and flow management.</li>
                <li>Developed web applications using modern technologies such as React, Redux, TypeScript, and Ant Design.</li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
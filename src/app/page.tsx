import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Projects from '@/components/Projects';
import Experience from '@/components/Experience';
import Skills from '@/components/Skills';
import Contact from '@/components/Contact';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section id="home" className="min-h-screen bg-[#F8F3ED] relative">
        <Hero />
        <div className="absolute bottom-0 w-full h-16 bg-gradient-to-b from-transparent to-[#F3E8DD]" />
      </section>

      {/* About Section */}
      <section id="about" className="min-h-screen bg-[#F3E8DD] relative py-16">
        <About />
        <div className="absolute bottom-0 w-full h-16 bg-gradient-to-b from-transparent to-[#EDE7E1]" />
      </section>

      {/* Projects Section */}
      <section id="projects" className="min-h-screen bg-[#EDE7E1] relative py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Projects />
        </div>
        <div className="absolute bottom-0 w-full h-16 bg-gradient-to-b from-transparent to-[#E8D0B9]" />
      </section>

      {/* Experience Section */}
      <section id="experience" className="min-h-screen bg-[#E8D0B9] relative py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Experience />
        </div>
        <div className="absolute bottom-0 w-full h-16 bg-gradient-to-b from-transparent to-[#E2C4A6]" />
      </section>

      {/* Skills Section - Güncellendi */}
      <section id="skills" className="min-h-screen bg-[#E2C4A6] relative py-16">
        <Skills />
        <div className="absolute bottom-0 w-full h-16 bg-gradient-to-b from-transparent to-[#DCB894]" />
      </section>

      {/* Contact Section */}
      <section id="contact" className="bg-[#DCB894] relative py-12">
        <Contact />
      </section>
    </main>
  );
}
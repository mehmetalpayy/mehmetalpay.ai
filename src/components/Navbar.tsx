'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
// FaFilePdf'i kaldırıyoruz çünkü artık kullanmayacağız

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-[#D4B69B]/95 backdrop-blur-sm shadow-md' 
        : 'bg-[#F8F3ED]'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center h-16">
          <div className="hidden md:block">
            <div className="flex items-center space-x-12">
              {[
                { name: 'Home', id: 'home' },
                { name: 'About', id: 'about' },
                { name: 'Projects', id: 'projects' },
                { name: 'Experience', id: 'experience' },
                { name: 'Skills', id: 'skills' },
                { name: 'Contact', id: 'contact' },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`font-medium transition-colors duration-200 ${
                    isScrolled 
                      ? 'text-primary-900 hover:text-primary-800' 
                      : 'text-primary-800 hover:text-primary-900'
                  }`}
                >
                  {item.name}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
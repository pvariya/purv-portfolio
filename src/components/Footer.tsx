import React from 'react';
import { Github, Linkedin, Mail, ArrowUp } from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-gray-900 dark:bg-gray-950 text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="mb-6 md:mb-0">
            <h3 className="text-2xl font-bold text-blue-400 mb-2">Purv Variya</h3>
            <p className="text-gray-400 max-w-md">
              Full Stack Developer specializing in building exceptional digital experiences
              with modern web technologies.
            </p>
          </div>
          
          <div className="flex flex-col items-center md:items-end">
            <div className="flex space-x-4 mb-4">
              <a
                href="https://github.com/pvariya" 
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-gray-800 hover:bg-gray-700 rounded-full transition-colors duration-300"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
              <a
                href="https://linkedin.com/in/pvariya" 
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-gray-800 hover:bg-gray-700 rounded-full transition-colors duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="mailto:variyapurv@gmail.com"
                className="p-2 bg-gray-800 hover:bg-gray-700 rounded-full transition-colors duration-300"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
            </div>
            
            <button
              onClick={scrollToTop}
              className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg flex items-center transition-colors duration-300"
              aria-label="Back to top"
            >
              <ArrowUp size={18} className="mr-1" />
              Back to top
            </button>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} Purv Variya. All rights reserved.
          </p>
          <p className="text-gray-500 text-xs mt-2 md:mt-0">
            Built with React & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
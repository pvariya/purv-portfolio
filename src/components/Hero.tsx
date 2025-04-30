import React from 'react';
import { Github as GitHub, Linkedin, Mail, MapPin } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="pt-24 lg:pt-32 pb-24 relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-[70vh] bg-gradient-to-br from-blue-100/40 to-purple-100/40 dark:from-blue-900/20 dark:to-purple-900/20 -z-10 rounded-bl-[25%] md:rounded-bl-[40%]"></div>

      <div className="container mx-auto px-4 pt-12 md:pt-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1 animate-fadeIn">
            <div className="flex items-center space-x-3 mb-4">
              <span className="bg-blue-100 dark:bg-blue-900/50 text-blue-700 dark:text-blue-300 px-4 py-1 rounded-full text-sm font-medium">
                MERN Stack Developer
              </span>
              <div className="h-1 w-1 rounded-full bg-gray-400 dark:bg-gray-600"></div>
              <span className="text-gray-600 dark:text-gray-400 flex items-center">
                <MapPin size={16} className="mr-1" /> India
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight tracking-tight">
              Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">Purv Variya</span>
            </h1>

            <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 mb-8 leading-relaxed max-w-2xl">
              Full Stack Developer specializing in building exceptional digital experiences
              with the MERN stack. Currently focused on creating responsive and user-friendly
              web applications.
            </p>

            <div className="flex flex-wrap gap-4 mb-8">
              <a
                href="#contact"
                className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors duration-300 shadow-lg hover:shadow-xl flex items-center text-base font-medium"
              >
                Contact Me
              </a>
              <a
                href="#projects"
                className="px-6 py-3 bg-white dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-900 dark:text-white border border-gray-300 dark:border-gray-700 rounded-lg transition-colors duration-300 shadow-md hover:shadow-lg flex items-center text-base font-medium"
              >
                View Projects
              </a>
            </div>

            <div className="flex items-center space-x-4">
              <a
                href="https://github.com/pvariya"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full transition-colors duration-300"
                aria-label="GitHub"
              >
                <GitHub size={22} />
              </a>
              <a
                href="https://www.linkedin.com/in/variya-purv-3049a32a4/a"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full transition-colors duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin size={22} />
              </a>
              <a
                href="mailto:variyapurv@gmail.com"
                className="p-2 text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full transition-colors duration-300"
                aria-label="Email"
              >
                <Mail size={22} />
              </a>
            </div>
          </div>

          <div className="order-1 lg:order-2 flex justify-center">
            <div className="relative">
              <div className="w-64 h-64 sm:w-80 sm:h-80 bg-gradient-to-br  rounded-full overflow-hidden flex items-center justify-center animate-float">
<img
  src="/p-2.jpg"
  alt="Purv Variya"
  className="w-full h-full object-cover mix-blend-overlay"
/>
                
                <div className="absolute inset-0 bg-black/20 dark:bg-black/40"></div>
              </div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-orange-500 rounded-full animate-pulse-slow opacity-70"></div>
              <div className="absolute -top-4 -left-4 w-16 h-16 bg-blue-400 rounded-full animate-pulse-slow opacity-70"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

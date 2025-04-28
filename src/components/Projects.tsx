import React, { useState } from 'react';
import { ExternalLink, Github, ShoppingCart, Car } from 'lucide-react';
import SectionTitle from './common/SectionTitle';

const Projects: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'all' | 'frontend' | 'fullstack'>('all');
  
  const projects = [
    {
      id: 1,
      title: 'E-Commerce Website',
      description: 'A full-stack e-commerce clothing website with secure authentication, product management, and payment integration.',
      image: 'https://images.pexels.com/photos/5632402/pexels-photo-5632402.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      technologies: ['React', 'Redux Toolkit', 'Node.js', 'Express.js', 'MongoDB', 'JWT', 'Stripe'],
      features: [
        'JWT-based authentication with bcrypt password hashing',
        'Role-based access control (Admin, Customer)',
        'Redux Toolkit-powered cart system',
        'Stripe/PayPal payment integration',
        'Order tracking functionality',
        'Admin dashboard for managing users, orders, and inventory',
        'Responsive UI using React and Tailwind CSS'
      ],
      category: 'fullstack',
      demo: '#',
      code: '#',
      icon: <ShoppingCart className="w-10 h-10 text-blue-500 dark:text-blue-400" />
    },
    {
      id: 2,
      title: 'Uber Clone',
      description: 'A full-stack Uber-like ride-hailing application with real-time ride booking, driver-rider matching, and secure payment integration.',
      image: 'https://images.pexels.com/photos/244206/pexels-photo-244206.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      technologies: ['React', 'Node.js', 'Express.js', 'MongoDB', 'Socket.io', 'JWT', 'Stripe'],
      features: [
        'JWT-based authentication with bcrypt password hashing',
        'Role-based access control (Driver, Rider, Admin)',
        'Real-time location tracking using Google Maps API & Socket.io',
        'Stripe payment integration for ride fare transactions',
        'Admin dashboard to manage users, trips, and payments',
        'Responsive UI with React & Tailwind CSS'
      ],
      category: 'fullstack',
      demo: '#',
      code: '#',
      icon: <Car className="w-10 h-10 text-blue-500 dark:text-blue-400" />
    }
  ];

  const filteredProjects = activeTab === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeTab);

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <SectionTitle>My Projects</SectionTitle>
        
        <div className="flex justify-center mt-8 mb-12">
          <div className="inline-flex bg-white dark:bg-gray-800 p-1 rounded-lg shadow-sm">
            <button
              onClick={() => setActiveTab('all')}
              className={`px-4 py-2 text-sm font-medium rounded-md ${
                activeTab === 'all' 
                  ? 'bg-blue-500 text-white' 
                  : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
              } transition-colors duration-200`}
            >
              All Projects
            </button>
            <button
              onClick={() => setActiveTab('frontend')}
              className={`px-4 py-2 text-sm font-medium rounded-md ${
                activeTab === 'frontend' 
                  ? 'bg-blue-500 text-white' 
                  : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
              } transition-colors duration-200`}
            >
              Frontend
            </button>
            <button
              onClick={() => setActiveTab('fullstack')}
              className={`px-4 py-2 text-sm font-medium rounded-md ${
                activeTab === 'fullstack' 
                  ? 'bg-blue-500 text-white' 
                  : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
              } transition-colors duration-200`}
            >
              Full Stack
            </button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <div 
              key={project.id}
              className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col"
            >
              <div className="relative overflow-hidden group">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-60 object-cover object-center transform group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-6 w-full">
                    <div className="flex gap-3 mb-4">
                      <a 
                        href={project.demo} 
                        className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg shadow-lg flex items-center gap-1 text-sm transition-colors duration-300"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink size={16} />
                        Live Demo
                      </a>
                      <a 
                        href={project.code} 
                        className="px-4 py-2 bg-gray-900 hover:bg-gray-800 text-white rounded-lg shadow-lg flex items-center gap-1 text-sm transition-colors duration-300"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github size={16} />
                        View Code
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="p-6 flex-grow">
                <div className="flex items-center gap-4 mb-3">
                  <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
                    {project.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                    {project.title}
                  </h3>
                </div>
                
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {project.description}
                </p>
                
                <div className="mb-4">
                  <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">Key Features:</h4>
                  <ul className="pl-5 space-y-1">
                    {project.features.slice(0, 3).map((feature, index) => (
                      <li key={index} className="text-gray-600 dark:text-gray-400 text-sm list-disc">
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="flex flex-wrap gap-2 mt-4">
                  {project.technologies.map((tech, index) => (
                    <span 
                      key={index}
                      className="text-xs font-medium px-2.5 py-0.5 rounded-full bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
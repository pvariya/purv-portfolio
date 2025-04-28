import React from 'react';
import { Briefcase } from 'lucide-react';
import SectionTitle from './common/SectionTitle';

const Experience: React.FC = () => {
  const experiences = [
    {
      position: 'MERN Stack Developer',
      company: 'FRESHER',
      period: 'FRESHER',
      responsibilities: [
        'Developed responsive web applications using React.js and Tailwind CSS, improving user engagement by 15%',
        'Implemented RESTful APIs using Node.js and Express',
        'Optimized database queries in MongoDB, reducing query response time by 20%',
        'Integrated JWT-based authentication, securing user access',
        'Collaborated with cross-functional teams to deliver high-quality web applications'
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-white dark:bg-gray-800/50">
      <div className="container mx-auto px-4">
        <SectionTitle>Experience</SectionTitle>
        
        <div className="mt-12">
          {experiences.map((exp, index) => (
            <div key={index} className="relative pl-8 sm:pl-32 py-6 group">
              {/* Timeline line */}
              {index < experiences.length - 1 && (
                <div className="absolute top-0 left-0 sm:left-24 h-full w-1 bg-gray-200 dark:bg-gray-700 group-hover:bg-blue-500 dark:group-hover:bg-blue-400 transition-colors duration-300"></div>
              )}
              
              {/* Timeline dot */}
              <div className="absolute left-0 sm:left-24 top-7 p-2.5 rounded-full bg-gray-100 dark:bg-gray-800 border-2 border-gray-300 dark:border-gray-600 group-hover:border-blue-500 dark:group-hover:border-blue-400 transition-colors duration-300">
                <Briefcase size={20} className="text-gray-500 dark:text-gray-400 group-hover:text-blue-500 dark:group-hover:text-blue-400 transition-colors duration-300" />
              </div>
              
              {/* Content */}
              <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100">
                    {exp.position}
                  </h3>
                  <span className="mt-2 sm:mt-0 px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-sm font-medium">
                    {exp.period}
                  </span>
                </div>
                
                <p className="text-lg font-medium text-gray-700 dark:text-gray-300 mb-4">
                  {exp.company}
                </p>
                
                <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                  {exp.responsibilities.map((item, i) => (
                    <li key={i} className="flex items-start">
                      <span className="mr-2 mt-1 h-1.5 w-1.5 rounded-full bg-blue-500 dark:bg-blue-400 flex-shrink-0"></span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
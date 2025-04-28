import React from 'react';
import { GraduationCap, BookOpen } from 'lucide-react';
import SectionTitle from './common/SectionTitle';

const Education: React.FC = () => {
  const educations = [
    {
      title: 'Full Stack Web Development Course',
      institution: 'Online Learning Platform',
      period: '2023 - Present',
      description: 'Currently pursuing a comprehensive full stack web development course focusing on MERN stack technologies and modern web development practices.',
      icon: <BookOpen size={24} className="text-blue-500 dark:text-blue-400" />
    },
    {
      title: 'Higher Secondary Education (12th)',
      institution: 'Secondary Education Board',
      period: 'Completed',
      description: 'Completed higher secondary education with focus on science and mathematics.',
      icon: <GraduationCap size={24} className="text-blue-500 dark:text-blue-400" />
    }
  ];

  return (
    <section id="education" className="py-20 bg-white dark:bg-gray-800/50">
      <div className="container mx-auto px-4">
        <SectionTitle>Education</SectionTitle>
        
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
          {educations.map((edu, index) => (
            <div 
              key={index}
              className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300 border-t-4 border-blue-500 dark:border-blue-400"
            >
              <div className="flex items-start gap-4">
                <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg shrink-0">
                  {edu.icon}
                </div>
                
                <div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                    {edu.title}
                  </h3>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-gray-700 dark:text-gray-300 font-medium">
                      {edu.institution}
                    </span>
                    <span className="text-sm text-blue-600 dark:text-blue-400 font-medium">
                      {edu.period}
                    </span>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400">
                    {edu.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
import React from 'react';
import SectionTitle from './common/SectionTitle';

const Skills: React.FC = () => {
  const frontendSkills = [
    { name: 'HTML', level: 90 },
    { name: 'CSS', level: 85 },
    { name: 'JavaScript', level: 90 },
    { name: 'React.js', level: 85 },
    { name: 'Redux Toolkit', level: 80 },
    { name: 'Tailwind CSS', level: 85 },
    { name: 'Bootstrap', level: 80 },
  ];

  const backendSkills = [
    { name: 'Node.js', level: 85 },
    { name: 'Express.js', level: 90 },
    { name: 'MongoDB', level: 85 },
    { name: 'Mongoose', level: 80 },
    { name: 'JWT', level: 75 },
    { name: 'RESTful API', level: 90 },
  ];

  const otherSkills = [
    { name: 'Git', level: 80 },
    { name: 'GitHub', level: 80 },
    { name: 'C', level: 70 },
    { name: 'C++', level: 75 },
    { name: 'Stripe/PayPal', level: 70 },
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <SectionTitle>My Skills</SectionTitle>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {/* Frontend Skills */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
            <h3 className="text-xl font-bold mb-6 text-blue-600 dark:text-blue-400">Frontend Development</h3>
            <div className="space-y-5">
              {frontendSkills.map((skill, index) => (
                <div key={index}>
                  <div className="flex justify-between mb-1">
                    <span className="text-gray-700 dark:text-gray-300 font-medium">{skill.name}</span>
                    <span className="text-gray-500 dark:text-gray-400 text-sm">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                    <div 
                      className="bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-500 dark:to-purple-500 h-2 rounded-full"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Backend Skills */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
            <h3 className="text-xl font-bold mb-6 text-blue-600 dark:text-blue-400">Backend Development</h3>
            <div className="space-y-5">
              {backendSkills.map((skill, index) => (
                <div key={index}>
                  <div className="flex justify-between mb-1">
                    <span className="text-gray-700 dark:text-gray-300 font-medium">{skill.name}</span>
                    <span className="text-gray-500 dark:text-gray-400 text-sm">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                    <div 
                      className="bg-gradient-to-r from-green-500 to-teal-500 dark:from-green-400 dark:to-teal-400 h-2 rounded-full"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Other Skills */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
            <h3 className="text-xl font-bold mb-6 text-blue-600 dark:text-blue-400">Other Skills</h3>
            <div className="space-y-5">
              {otherSkills.map((skill, index) => (
                <div key={index}>
                  <div className="flex justify-between mb-1">
                    <span className="text-gray-700 dark:text-gray-300 font-medium">{skill.name}</span>
                    <span className="text-gray-500 dark:text-gray-400 text-sm">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                    <div 
                      className="bg-gradient-to-r from-orange-500 to-amber-500 dark:from-orange-400 dark:to-amber-400 h-2 rounded-full"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
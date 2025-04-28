import React from 'react';
import { Code, Globe, Server, Rocket } from 'lucide-react';
import SectionTitle from './common/SectionTitle';

const About: React.FC = () => {
  const features = [
    {
      icon: <Code className="w-6 h-6 text-blue-600 dark:text-blue-400" />,
      title: 'Frontend Development',
      description: 'Creating responsive and intuitive user interfaces with React.js and modern CSS frameworks.'
    },
    {
      icon: <Server className="w-6 h-6 text-blue-600 dark:text-blue-400" />,
      title: 'Backend Development',
      description: 'Building robust server-side applications with Node.js, Express, and MongoDB.'
    },
    {
      icon: <Globe className="w-6 h-6 text-blue-600 dark:text-blue-400" />,
      title: 'Full Stack Solutions',
      description: 'Developing end-to-end web applications with seamless integration between frontend and backend.'
    },
    {
      icon: <Rocket className="w-6 h-6 text-blue-600 dark:text-blue-400" />,
      title: 'Performance Optimization',
      description: 'Optimizing applications for speed and efficiency, reducing load times and improving user experience.'
    }
  ];

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-800/50">
      <div className="container mx-auto px-4">
        <SectionTitle>About Me</SectionTitle>

        <div className="flex flex-col md:flex-row gap-12 mt-12">
          <div className="md:w-1/2">
            <h3 className="text-2xl font-bold mb-4">
              A passionate Full Stack Developer based in India
            </h3>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
              I am a passionate Full Stack Developer based in India, specializing in the MERN Stack. I am dedicated to building modern, user-friendly web applications, with a strong focus on creating clean and efficient solutions that deliver exceptional digital experiences.
            </p>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
            Currently, I am pursuing a Full Stack Web Development course to further enhance my skills. I am committed to continuous learning and staying updated with the latest technologies and best practices in the field of web development.
            </p>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            My goal is to grow as a developer and contribute to innovative projects that create a positive impact. I enjoy tackling complex problems and transforming ideas into reality through code
            </p>
          </div>
          <div className="md:w-1/2">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300"
                >
                  <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-xl flex items-center justify-center mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
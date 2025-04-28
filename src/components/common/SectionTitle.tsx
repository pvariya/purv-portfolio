import React from 'react';

interface SectionTitleProps {
  children: React.ReactNode;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ children }) => {
  return (
    <div className="flex flex-col items-center mb-10">
      <h2 className="text-3xl md:text-4xl font-bold relative pb-4 text-center">
        {children}
        <span className="block h-1 w-24 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 mt-3 mx-auto rounded-full"></span>
      </h2>
    </div>
  );
};

export default SectionTitle;
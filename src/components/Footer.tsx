import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="w-full border-t border-hacker-gray-light py-4 text-hacker-green-dark text-xs">
      <div className="container mx-auto px-4">
        <div className="flex flex-col sm:flex-row justify-between items-center">
          <div className="mb-2 sm:mb-0">
            <span className="text-hacker-green-dark">&copy; {new Date().getFullYear()} undefined. </span>
            <span className="opacity-50">all rights reserved_</span>
          </div>
          
          <div className="flex items-center space-x-4">
            <span className="cursor-pointer hover:text-hacker-green transition-colors">terms</span>
            <span className="cursor-pointer hover:text-hacker-green transition-colors">privacy</span>
            <span className="cursor-pointer hover:text-hacker-green transition-colors">security</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
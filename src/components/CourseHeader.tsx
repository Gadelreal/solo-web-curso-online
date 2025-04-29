
import React from 'react';
import { Link } from 'react-router-dom';

const CourseHeader: React.FC = () => {
  return (
    <header className="sticky top-0 z-50 w-full bg-white shadow-sm">
      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 py-4 flex flex-col sm:flex-row justify-between items-center">
        <div className="flex items-center mb-2 sm:mb-0">
          <a href="https://www.ie.edu" target="_blank" rel="noopener noreferrer" className="mr-4">
            <img 
              src="/ie-logo.svg" 
              alt="IE University" 
              className="h-10 w-auto" 
              onError={(e) => {
                e.currentTarget.src = '/ie-logo-fallback.png';
              }} 
            />
          </a>
          <Link to="/" className="text-2xl font-bold">Curso Online</Link>
        </div>
        <nav className="flex space-x-4">
          <Link to="/" className="px-3 py-2 rounded-md hover:bg-gray-100 transition-colors">Inicio</Link>
          <Link to="/capitulo-1" className="px-3 py-2 rounded-md hover:bg-gray-100 transition-colors">Capítulo 1</Link>
          <Link to="/capitulo-2" className="px-3 py-2 rounded-md hover:bg-gray-100 transition-colors">Capítulo 2</Link>
        </nav>
      </div>
    </header>
  );
};

export default CourseHeader;

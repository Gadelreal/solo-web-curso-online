
import React from 'react';
import { Link } from 'react-router-dom';

const CourseHeader: React.FC = () => {
  return (
    <header className="sticky top-0 z-50 w-full bg-white shadow-sm">
      <div className="container mx-auto px-4 py-4 flex flex-col sm:flex-row justify-between items-center">
        <Link to="/" className="text-2xl font-bold mb-2 sm:mb-0">Curso Online</Link>
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


import React from 'react';
import { Link } from 'react-router-dom';

const CourseFooter: React.FC = () => {
  return (
    <footer className="w-full bg-gray-100 py-6 mt-auto">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-600 mb-4 md:mb-0">© 2025 Curso Online</p>
          <nav className="flex space-x-4">
            <Link to="/" className="text-gray-600 hover:text-gray-900 transition-colors">Inicio</Link>
            <Link to="/capitulo-1" className="text-gray-600 hover:text-gray-900 transition-colors">Capítulo 1</Link>
            <Link to="/capitulo-2" className="text-gray-600 hover:text-gray-900 transition-colors">Capítulo 2</Link>
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default CourseFooter;


import React from 'react';
import { Link } from 'react-router-dom';

interface CourseFooterProps {
  year: number;
}

const CourseFooter: React.FC<CourseFooterProps> = ({ year }) => {
  return (
    <footer className="w-full bg-gray-100 py-6 mt-auto">
      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-600 mb-4 md:mb-0">© {year} IE University. Todos los derechos reservados.</p>
          <nav className="flex space-x-4">
            <Link to="/" className="text-gray-600 hover:text-gray-900 transition-colors">Inicio</Link>
            <Link to="/capitulo-1" className="text-gray-600 hover:text-gray-900 transition-colors">Capítulo 1</Link>
            <Link to="/capitulo-2" className="text-gray-600 hover:text-gray-900 transition-colors">Capítulo 2</Link>
          </nav>
        </div>
        
        <div className="mt-4 text-center text-sm text-gray-500">
          <p>Este material educativo cumple con los estándares de accesibilidad WCAG 2.2 nivel AA</p>
        </div>
      </div>
    </footer>
  );
};

export default CourseFooter;

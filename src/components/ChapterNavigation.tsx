
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const ChapterNavigation: React.FC = () => {
  const location = useLocation();
  const path = location.pathname;
  
  const getPrevLink = () => {
    if (path === '/capitulo-2') return '/capitulo-1';
    if (path === '/capitulo-1') return '/';
    return null;
  };
  
  const getNextLink = () => {
    if (path === '/') return '/capitulo-1';
    if (path === '/capitulo-1') return '/capitulo-2';
    return null;
  };
  
  const prevLink = getPrevLink();
  const nextLink = getNextLink();
  
  return (
    <div className="flex justify-between mt-12 pt-8 border-t border-gray-200">
      {prevLink ? (
        <Link 
          to={prevLink} 
          className="flex items-center text-gray-600 hover:text-gray-900 transition-colors"
        >
          <ChevronLeft className="mr-2 h-5 w-5" />
          {prevLink === '/' ? 'Inicio' : 'Capítulo anterior'}
        </Link>
      ) : (
        <div></div>
      )}
      
      {nextLink && (
        <Link 
          to={nextLink} 
          className="flex items-center text-gray-600 hover:text-gray-900 transition-colors"
        >
          {nextLink === '/capitulo-1' ? 'Capítulo 1' : 'Capítulo siguiente'}
          <ChevronRight className="ml-2 h-5 w-5" />
        </Link>
      )}
    </div>
  );
};

export default ChapterNavigation;

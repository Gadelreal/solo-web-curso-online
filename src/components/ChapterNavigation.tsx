
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface ChapterNavigationProps {
  onComplete?: () => void;
  isLastChapter?: boolean;
}

const ChapterNavigation: React.FC<ChapterNavigationProps> = ({ 
  onComplete, 
  isLastChapter = false 
}) => {
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
  
  const handleComplete = () => {
    if (onComplete) {
      onComplete();
    }
  };
  
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
      
      {isLastChapter ? (
        <Button onClick={handleComplete}>
          Finalizar curso
          <ChevronRight className="ml-2 h-5 w-5" />
        </Button>
      ) : nextLink ? (
        <Link 
          to={nextLink} 
          className="flex items-center text-gray-600 hover:text-gray-900 transition-colors"
          onClick={nextLink ? handleComplete : undefined}
        >
          {nextLink === '/capitulo-1' ? 'Capítulo 1' : 'Capítulo siguiente'}
          <ChevronRight className="ml-2 h-5 w-5" />
        </Link>
      ) : null}
    </div>
  );
};

export default ChapterNavigation;

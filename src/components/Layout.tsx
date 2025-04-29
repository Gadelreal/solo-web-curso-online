
import React from 'react';
import CourseHeader from './CourseHeader';
import CourseFooter from './CourseFooter';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const currentYear = new Date().getFullYear();
  
  return (
    <div className="flex flex-col min-h-screen">
      <CourseHeader />
      <main className="flex-grow container mx-auto px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 py-8">
        {children}
      </main>
      <CourseFooter year={currentYear} />
    </div>
  );
};

export default Layout;


import React from 'react';
import CourseHeader from './CourseHeader';
import CourseFooter from './CourseFooter';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <CourseHeader />
      <main className="flex-grow container mx-auto px-4 py-8">
        {children}
      </main>
      <CourseFooter />
    </div>
  );
};

export default Layout;

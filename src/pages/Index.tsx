
import React from 'react';
import Layout from '../components/Layout';
import ChapterNavigation from '../components/ChapterNavigation';
import { Card } from '@/components/ui/card';

const Index = () => {
  return (
    <Layout>
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-6 text-center">Bienvenido al Curso</h1>
        
        <Card className="mb-8 p-6">
          <h2 className="text-2xl font-semibold mb-4">Sobre este curso</h2>
          <p className="text-gray-700 mb-4">
            [Aquí irá la descripción del curso]
          </p>
        </Card>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <Card className="p-6 hover:shadow-md transition-shadow">
            <h3 className="text-xl font-semibold mb-2">Capítulo 1</h3>
            <p className="text-gray-600 mb-4">[Descripción breve del capítulo 1]</p>
          </Card>
          
          <Card className="p-6 hover:shadow-md transition-shadow">
            <h3 className="text-xl font-semibold mb-2">Capítulo 2</h3>
            <p className="text-gray-600 mb-4">[Descripción breve del capítulo 2]</p>
          </Card>
        </div>
        
        <ChapterNavigation />
      </div>
    </Layout>
  );
};

export default Index;

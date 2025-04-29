
import React from 'react';
import Layout from '../components/Layout';
import ChapterNavigation from '../components/ChapterNavigation';
import { Card } from '@/components/ui/card';

const Chapter2 = () => {
  return (
    <Layout>
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Capítulo 2</h1>
        
        <Card className="mb-8 p-6">
          <h2 className="text-2xl font-semibold mb-4">Introducción</h2>
          <p className="text-gray-700 mb-4">
            [Aquí irá el contenido de la introducción]
          </p>
        </Card>
        
        <Card className="mb-8 p-6">
          <h2 className="text-2xl font-semibold mb-4">Contenido del capítulo</h2>
          <div className="space-y-4">
            <p className="text-gray-700">
              [Aquí irá el contenido principal]
            </p>
          </div>
        </Card>
        
        <Card className="mb-8 p-6">
          <h2 className="text-2xl font-semibold mb-4">Resumen</h2>
          <p className="text-gray-700">
            [Aquí irá el resumen del capítulo]
          </p>
        </Card>
        
        <ChapterNavigation />
      </div>
    </Layout>
  );
};

export default Chapter2;

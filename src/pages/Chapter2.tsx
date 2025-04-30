
import React from 'react';
import Layout from '../components/Layout';
import ChapterNavigation from '../components/ChapterNavigation';
import VideoPlayer from '../components/VideoPlayer';
import { Card } from '@/components/ui/card';

const Chapter2 = () => {
  // Esta función activará el modal de feedback al final del capítulo
  const triggerFeedback = () => {
    document.dispatchEvent(new CustomEvent('ie-feedback-widget-openModal'));
  };
  
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
          <h2 className="text-2xl font-semibold mb-4">Contenido en Video</h2>
          <div className="mb-4">
            <VideoPlayer 
              src="/Test video.mp4" 
              type="video/mp4" 
              poster="/lovable-uploads/f61d8aad-7e54-4ad4-baf4-5d81ac0eb07b.png"
              subtitles={[
                { src: "/subtitles/es.vtt", srclang: "es", label: "Español", default: true },
                { src: "/subtitles/en.vtt", srclang: "en", label: "English" }
              ]}
            />
          </div>
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
        
        <ChapterNavigation onComplete={triggerFeedback} isLastChapter={true} />
      </div>
    </Layout>
  );
};

export default Chapter2;

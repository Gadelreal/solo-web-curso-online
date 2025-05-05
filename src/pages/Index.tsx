
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ChevronRight } from 'lucide-react';
import ParticleBackground from '@/components/ParticleBackground';

const Index = () => {
  const currentYear = new Date().getFullYear();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 300);
    return () => clearTimeout(timer);
  }, []);

  return <div className="relative h-screen w-screen overflow-hidden flex flex-col lg:flex-row">
      {/* Left side with particle background and content */}
      <div className="relative w-full lg:w-1/2 h-full flex items-center">
        {/* Particles background fills the left side */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
          <ParticleBackground />
        </div>
        
        {/* Content positioned in front of animation */}
        <div className="relative z-10 px-6 md:px-12 lg:px-16 w-full">
          <div className={`w-full transition-opacity duration-700 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
            <div className="w-full max-w-xl">
              <a href="https://www.ie.edu" target="_blank" rel="noopener noreferrer" className="block mb-8">
                <img src="/ie-logo-blue.svg" alt="IE University" className="h-8 w-auto" onError={e => {
                e.currentTarget.src = '/ie-logo-fallback.png';
              }} />
              </a>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-gray-900 leading-tight">Human Flourishing</h1>
              
              {/* Información del autor */}
              <div className="mb-8 p-4 border-l-4 border-coral-red">
                <h3 className="text-xl font-semibold mb-2">Autor</h3>
                <p className="text-gray-700">Dra. María Rodríguez</p>
                <p className="text-sm text-gray-500">Profesora de Innovación Educativa</p>
                <p className="text-sm text-gray-500">Facultad de Ciencias Sociales y Comunicación</p>
                <p className="text-sm text-gray-500 mt-2">Duración del curso: 8 semanas</p>
              </div>
              
              <Button asChild className="bg-coral-red hover:bg-coral-red/90 text-white rounded-md px-8 py-3 text-base font-medium transition-all duration-200">
                <Link to="/capitulo-1" className="flex items-center gap-2">
                  Comenzar curso <ChevronRight className="h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
        
        {/* Copyright - positioned at bottom of left side */}
        <div className="absolute bottom-4 left-0 w-full text-left z-10 px-[60px]">
          <p className="text-xs text-gray-500 bg-white/50 py-1 inline-block px-4 rounded">
            © {currentYear} IE University. Todos los derechos reservados.
          </p>
          {/* Comentario HTML para el widget de encuesta de retroalimentación */}
          {/* SurveyAppProperties {"position":"right", "variant":"LateralAndPopUp"} SurveyAppProperties */}
          {/* InjectionCode SurveyApp */}
        </div>
      </div>
      
      {/* Right side with the uploaded image */}
      <div className="w-full lg:w-1/2 h-full">
        <img 
          src="/lovable-uploads/7e6cb268-92ec-43c6-a62b-fd6e4f7bf969.png" 
          alt="Person with sunglasses in bright sunlight" 
          className="w-full h-full object-cover" 
        />
      </div>
    </div>;
};

export default Index;

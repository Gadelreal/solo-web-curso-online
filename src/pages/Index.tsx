import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ChevronRight, Search } from 'lucide-react';
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
  return <div className="relative h-screen w-screen overflow-hidden flex items-center bg-white">
      {/* Particles background fills the entire screen */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <ParticleBackground />
      </div>
      
      {/* Header con logo de IE Universidad */}
      <header className="absolute top-0 left-0 right-0 z-20 px-6 py-4">
        <div className="flex justify-between items-center max-w-7xl mx-auto">
          <a href="https://www.ie.edu" target="_blank" rel="noopener noreferrer">
            <img src="/ie-logo-blue.svg" alt="IE University" className="h-8 w-auto" onError={e => {
            e.currentTarget.src = '/ie-logo-fallback.png';
          }} />
          </a>
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-800 hover:text-gray-600 transition-colors text-sm font-medium">Inicio</Link>
            <Link to="/capitulo-1" className="text-gray-800 hover:text-gray-600 transition-colors text-sm font-medium">Capítulo 1</Link>
            <Link to="/capitulo-2" className="text-gray-800 hover:text-gray-600 transition-colors text-sm font-medium">Capítulo 2</Link>
            <Link to="/about" className="text-gray-800 hover:text-gray-600 transition-colors text-sm font-medium">Acerca de</Link>
            <button className="text-gray-800 hover:text-gray-600 transition-colors">
              <Search className="h-4 w-4" />
            </button>
          </nav>
        </div>
      </header>

      {/* Contenido principal alineado a la izquierda con fondo semitransparente para mejorar legibilidad */}
      <div className={`w-full max-w-7xl mx-auto pl-6 md:pl-16 lg:pl-24 transition-opacity duration-700 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
        <div className="w-full md:w-1/2 lg:w-5/12 p-6 shadow-sm backdrop-blur-sm bg-transparent rounded-none py-0 px-0 mx-0 my-0">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-gray-900 leading-tight mx-0">Descubre las nuevas 
tendencias educativas</h1>
          
          
          
          {/* Información del autor */}
          <div className="mb-8 p-4 border-l-4 border-coral-red bg-white/90 rounded-r-md">
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

          <div className="mt-14">
            
            <div className="flex items-center space-x-6 opacity-80">
              
              
              
            </div>
          </div>
        </div>
      </div>

      {/* Copyright y feedback survey widget (según requerimientos) */}
      <div className="absolute bottom-4 left-0 w-full text-center z-10">
        <p className="text-xs text-gray-500">
          © {currentYear} IE University. Todos los derechos reservados.
        </p>
        {/* Comentario HTML para el widget de encuesta de retroalimentación */}
        {/* SurveyAppProperties {"position":"right", "variant":"LateralAndPopUp"} SurveyAppProperties */}
        {/* InjectionCode SurveyApp */}
      </div>
    </div>;
};
export default Index;
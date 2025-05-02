
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ChevronRight, Search } from 'lucide-react';

const Index = () => {
  const currentYear = new Date().getFullYear();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 300);
    
    return () => clearTimeout(timer);
  }, []);
  
  return (
    <div className="relative h-screen w-screen overflow-hidden flex items-center bg-white">
      {/* Fondo de imagen asegurándonos que carga correctamente */}
      <div 
        className="absolute top-0 right-0 w-1/2 h-full hero-background" 
        style={{
          backgroundImage: "url('/lovable-uploads/45fc87be-a022-4df4-8d80-2bf40922896c.png')"
        }}
      ></div>
      
      {/* Header con logo de IE Universidad */}
      <header className="absolute top-0 left-0 right-0 z-20 px-6 py-4">
        <div className="flex justify-between items-center max-w-7xl mx-auto">
          <a 
            href="https://www.ie.edu" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <img 
              src="/ie-logo-blue.svg" 
              alt="IE University" 
              className="h-8 w-auto" 
              onError={(e) => {
                e.currentTarget.src = '/ie-logo-fallback.png';
              }} 
            />
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

      {/* Contenido principal alineado a la izquierda */}
      <div className={`w-full max-w-7xl mx-auto pl-6 md:pl-16 lg:pl-24 transition-opacity duration-700 ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}>
        <div className="w-full md:w-1/2 lg:w-5/12">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-gray-900 leading-tight">
            Descubre las nuevas tendencias educativas
          </h1>
          
          <p className="text-lg md:text-xl mb-8 text-gray-700 leading-relaxed">
            Creemos que la educación y el desarrollo profesional funcionan mejor cuando están respaldados por la innovación y la excelencia académica.
          </p>
          
          {/* Información del autor */}
          <div className="mb-8 p-4 border-l-4 border-coral-red bg-gray-50 rounded-r-md">
            <h3 className="text-xl font-semibold mb-2">Autor</h3>
            <p className="text-gray-700">Dra. María Rodríguez</p>
            <p className="text-sm text-gray-500">Profesora de Innovación Educativa</p>
            <p className="text-sm text-gray-500">Facultad de Ciencias Sociales y Comunicación</p>
            <p className="text-sm text-gray-500 mt-2">Duración del curso: 8 semanas</p>
          </div>
          
          <Button 
            asChild 
            className="bg-coral-red hover:bg-coral-red/90 text-white rounded-md px-8 py-3 text-base font-medium transition-all duration-200"
          >
            <Link to="/capitulo-1" className="flex items-center gap-2">
              Comenzar curso <ChevronRight className="h-5 w-5" />
            </Link>
          </Button>

          <div className="mt-14">
            <p className="text-sm text-gray-500 mb-4">Reconocido por más de 10 instituciones internacionales</p>
            <div className="flex items-center space-x-6 opacity-80">
              <span className="text-lg font-serif italic text-gray-700">Financial Times</span>
              <span className="text-lg font-bold text-gray-700">Bloomberg</span>
              <span className="text-lg font-sans text-gray-700">Forbes</span>
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
    </div>
  );
};

export default Index;

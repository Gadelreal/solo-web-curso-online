
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ChevronRight } from 'lucide-react';

const Index = () => {
  const currentYear = new Date().getFullYear();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Añadir animación de entrada
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 300);
    
    return () => clearTimeout(timer);
  }, []);
  
  return (
    <div className="relative h-screen w-screen overflow-hidden flex items-center justify-center">
      {/* Fondo con gradiente */}
      <div 
        className="absolute inset-0 bg-gradient-to-br from-[#FEC6A1] to-[#F97316] z-0"
        style={{
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      ></div>
      
      {/* Overlay sutil */}
      <div className="absolute inset-0 bg-black/5 z-10"></div>
      
      {/* Header minimal */}
      <header className="absolute top-0 left-0 right-0 z-20 px-6 py-4">
        <div className="flex justify-between items-center max-w-7xl mx-auto">
          <a 
            href="https://www.ie.edu" 
            target="_blank" 
            rel="noopener noreferrer"
            className="transition-transform hover:scale-105"
          >
            <img 
              src="/ie-logo-blue.svg" 
              alt="IE University" 
              className="h-12 w-auto" 
              onError={(e) => {
                e.currentTarget.src = '/ie-logo-fallback.png';
              }} 
            />
          </a>
        </div>
      </header>

      {/* Contenido principal con efecto glassmorphism */}
      <div 
        className={`relative z-20 backdrop-blur-md bg-white/20 border border-white/30 rounded-2xl p-10 md:p-12 shadow-2xl max-w-3xl mx-auto transform transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="flex justify-center mb-8">
          <img 
            src="/ie-logo-blue.svg" 
            alt="IE University" 
            className="h-20 w-auto" 
            onError={(e) => {
              e.currentTarget.src = '/ie-logo-fallback.png';
            }} 
          />
        </div>
        
        <h1 className="text-4xl md:text-6xl font-bold mb-6 text-center text-white drop-shadow-md">
          Título del Curso
        </h1>
        
        <p className="text-xl md:text-2xl mb-4 text-center text-white/90">
          Autor del Curso
        </p>
        
        <div className="flex flex-col md:flex-row md:justify-center md:space-x-8 space-y-2 md:space-y-0 mb-8 text-white/80">
          <p className="text-lg">Duración: XX horas</p>
          <p className="text-lg">Código de material: XXX-XXX</p>
        </div>
        
        <div className="flex justify-center mt-8">
          <Button 
            asChild 
            size="lg" 
            className="text-lg px-10 py-6 h-auto hover:scale-105 transition-all duration-300 bg-white/20 hover:bg-white/30 backdrop-blur border-white/40 shadow-lg"
          >
            <Link to="/capitulo-1" className="flex items-center gap-2">
              Comenzar curso <ChevronRight />
            </Link>
          </Button>
        </div>
        
        <p className="text-sm text-white/70 mt-12 text-center">
          © {currentYear} IE University. Todos los derechos reservados.
        </p>
      </div>
    </div>
  );
};

export default Index;

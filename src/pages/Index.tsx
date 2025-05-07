import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ChevronRight } from 'lucide-react';
import ParticleBackground from '@/components/ParticleBackground';
import { useIsMobile } from '@/hooks/use-mobile';
const Index = () => {
  const currentYear = new Date().getFullYear();
  const [isVisible, setIsVisible] = useState(false);
  const isMobile = useIsMobile();
  useEffect(() => {
    // Set elements to visible with a slight delay for a smoother entrance
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 300);
    return () => clearTimeout(timer);
  }, []);
  return <div className="relative min-h-screen w-full overflow-hidden flex flex-col">
      {/* Logo positioned to align with content - first element to appear */}
      <div className={`absolute top-8 left-6 md:top-12 md:left-12 lg:left-[120px] z-20 transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-8'}`}>
        <a href="https://www.ie.edu" target="_blank" rel="noopener noreferrer">
          <img src="/IE University logo.svg" alt="IE University" className="h-16 md:h-20 w-auto" onError={e => {
          e.currentTarget.src = '/ie-logo-fallback.png';
        }} />
        </a>
      </div>
      
      {/* Content section - full height on mobile, half width on desktop */}
      <div className={`relative ${isMobile ? 'h-auto py-8' : 'h-screen lg:w-1/2'} w-full flex flex-col justify-center`}>
        {/* Particles background fills this section */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
          <ParticleBackground />
        </div>
        
        {/* Content positioned in front of animation */}
        <div className="relative z-10 px-6 md:px-12 w-full lg:px-[120px]">
          <div className={`w-full transition-all duration-1000 ease-out delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="w-full max-w-xl mx-auto lg:mx-0">
              <div className="mt-24 md:mt-28 lg:mt-24"></div> {/* Increased spacer for the larger logo */}
              
              {/* Title - appears second after logo */}
              <h1 className={`text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-gray-900 leading-tight transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>Human Flourishing</h1>
              
              {/* Author information - appears third */}
              <div className={`mb-8 p-4 border-l-4 border-coral-red transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                
                <p className="text-gray-700">Author: Cristina Vicedo</p>
                <p className="text-gray-700 text-base">Code: 1234567</p>
                <p className="text-gray-700 text-base">Time estimate: 60-90 minutes</p>
                
              </div>
              
              {/* Button - appears fourth */}
              <Button asChild className={`bg-coral-red hover:bg-coral-red/90 text-white rounded-md px-8 py-3 text-base font-medium transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                <Link to="/capitulo-1" className="flex items-center gap-2">
                  Comenzar curso <ChevronRight className="h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
        
        {/* Copyright - appears last on desktop, fifth on mobile */}
        <div className={`${isMobile ? 'relative mt-8' : 'absolute bottom-4 left-0'} w-full text-left z-10 px-6 md:px-12 lg:px-[60px] transition-all duration-1000 delay-900 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <p className="text-xs text-gray-500 bg-white/50 py-1 inline-block rounded px-[60px]">
            © {currentYear} IE University. Todos los derechos reservados.
          </p>
          {/* Comentario HTML para el widget de encuesta de retroalimentación */}
          {/* SurveyAppProperties {"position":"right", "variant":"LateralAndPopUp"} SurveyAppProperties */}
          {/* InjectionCode SurveyApp */}
        </div>
      </div>
      
      {/* Image section - appears fifth on desktop, last on mobile */}
      <div className={`${isMobile ? 'h-[60vh]' : 'h-screen lg:absolute lg:right-0 lg:top-0 lg:w-1/2'} w-full transition-all duration-1500 ease-out delay-800 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
        <img src="/lovable-uploads/7e6cb268-92ec-43c6-a62b-fd6e4f7bf969.png" alt="Person with sunglasses in bright sunlight" className={`w-full h-full object-cover ${isVisible ? 'scale-100 filter-none' : 'scale-105 filter blur-sm'} transition-all duration-2000 ease-out`} />
      </div>
    </div>;
};
export default Index;
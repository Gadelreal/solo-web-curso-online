
import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '../components/Layout';
import { Button } from '@/components/ui/button';

const Index = () => {
  const currentYear = new Date().getFullYear();

  return (
    <Layout>
      <div className="max-w-4xl mx-auto">
        {/* Portada */}
        <section className="mb-12 text-center">
          <div className="flex justify-center mb-6">
            <img 
              src="/ie-logo-blue.svg" 
              alt="IE University" 
              className="h-16 w-auto" 
              onError={(e) => {
                e.currentTarget.src = '/ie-logo-fallback.png';
              }} 
            />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Título del Curso</h1>
          <p className="text-xl mb-4">Autor del Curso</p>
          <p className="text-gray-600 mb-2">Duración: XX horas</p>
          <p className="text-gray-600 mb-8">Código de material: XXX-XXX</p>
          
          <div className="flex justify-center">
            <Button asChild size="lg">
              <Link to="/capitulo-1">Comenzar curso</Link>
            </Button>
          </div>
          
          <p className="text-sm text-gray-500 mt-12">© {currentYear} IE University. Todos los derechos reservados.</p>
        </section>
      </div>
    </Layout>
  );
};

export default Index;

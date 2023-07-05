import React from 'react'
import { NextSeo } from 'next-seo';
import Navbar from '../../components/es/Navbar';
import Footer from '../../components/es/Footer';

const Servicios = () => {
  return (
    <> 
      <NextSeo
        title="Garúa | Servicios"
        description="Estudio de arquitectura, diseño urbano y construcción."
        openGraph={{
          url: 'https://www.estudiogarua.com/es/servicios',
          title: 'Garúa',
          description: 'Estudio de arquitectura, diseño urbano y construcción.',
          siteName: 'Garúa',
        }}
      />
      <Navbar />
       <main className="flex flex-col w-full max-w-6xl mx-auto justify-between lg:pl-28 sm: py-8 pl-4 pr-4">
        {/* Header */}
        <header className="relative h-screen my-0 py-0">
          <h1 className="absolute bottom-80 sm:bottom-60 text-5xl md:text-6xl font-bold leading-snug mb-4 fade-in-up">Servicios del estudio</h1>
        </header>
        {/* Contenido */}
        <div className="w-full mt-10 sm:mt-0 h-full sm:min-h-screen flex flex-col justify-center">
          <div className="w-full h-full sm:h-screen flex flex-col justify-center">
            <h2 className="mb-10 text-xs">Arquitectura</h2>
            <p className="text-4xl md:text-6xl leading-normal md:leading-snug	mb-20">Diseño arquitectónico + Interiores + Restauración + Diseño de paisaje + Estudio de viabilidad</p>
          </div>
          <div className="w-full h-full sm:h-screen flex flex-col justify-center">
            <h2 className="mb-10 text-xs">Diseño urbano</h2>
            <p className="text-4xl md:text-6xl leading-normal md:leading-snug	mb-20">Planificación + Espacio público + Revitalización de zonas urbanas</p>
          </div>
          <div className="w-full h-full sm:h-screen flex flex-col justify-center">
            <h2 className="mb-10 text-xs">Construcción</h2>
            <p className="text-4xl md:text-6xl leading-normal md:leading-snug	mb-20">Administración de obra + Supervisión de obra + Estimación de costos + Gestión de permisos</p>
          </div>
        </div>
      </main>
      <Footer />
      <style jsx>{`
        .fade-in-up {
          animation: fade-in-up 0.8s ease-out;
          opacity: 1;
          transform: translateY(0);
        }

        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(50px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </>
  )
}
export default Servicios

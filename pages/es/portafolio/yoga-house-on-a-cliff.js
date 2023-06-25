import React from 'react'
import { NextSeo } from 'next-seo';
import Layout from '../../../components/es/Layout.js'

const YHOAC = () => {
  return (
    <Layout> 
      <NextSeo
        title="Garúa | Mayukwayukwa Refugee Camp"
        description="Estudio de arquitectura, diseño urbano y construcción."
        openGraph={{
          url: 'https://www.estudiogarua.com/es/blog',
          title: 'Garúa',
          description: 'Estudio de arquitectura, diseño urbano y construcción.',
          siteName: 'Garúa',
        }}
      />
     <main className="flex flex-col w-full max-w-6xl mx-auto justify-between lg:pl-28 sm: py-8 pl-4 pr-4">
        {/* Header */}
        <header className="relative h-screen my-0 py-0">
          <h1 className="absolute bottom-60 text-5xl md:text-6xl font-bold leading-snug mb-4 hyphens-auto fade-in-up" lang="es">Yoga House on a Cliff</h1>
        </header>
        {/* Contenido */}
        <div className="w-full mt-10 sm:mt-0 md:w-1/2 h-full sm:min-h-screen flex flex-col justify-center">
          <p className="text-base leading-relaxed	">Contenido</p>
        <br />
        
        </div>
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
      </main>
    </Layout>
  )
}
export default YHOAC

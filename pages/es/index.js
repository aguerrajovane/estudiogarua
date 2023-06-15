import React from 'react'
import { NextSeo } from 'next-seo';

const Home = () => {
  return (
    <> 
      <NextSeo
        title="Garúa | Inicio"
        description="Estudio de arquitectura, diseño urbano y construcción."
        openGraph={{
          url: 'https://www.estudiogarua.com/es',
          title: 'Garúa',
          description: 'Estudio de arquitectura, diseño urbano y construcción.',
          siteName: 'Garúa',
        }}
      />
      <main className="flex flex-col w-full max-w-6xl mx-auto justify-between p-24 sm: py-8 px-4">
        <div className="min-h-screen">
          <h1 className="text-3xl font-bold mb-4">Inicio</h1>
          <p className="text-base">Contenido</p>
          </div>
      </main>
    </>
  )
}
export default Home

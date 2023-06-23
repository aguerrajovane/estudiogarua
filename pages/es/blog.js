import React from 'react'
import { NextSeo } from 'next-seo';
import Layout from '../../components/es/Layout.js'

const Blog = () => {
  return (
    <Layout> 
      <NextSeo
        title="Garúa | Blog"
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
          <h1 className="absolute bottom-60 text-5xl md:text-6xl font-bold leading-snug mb-4 fade-in-up">Blog</h1>
        </header>
        {/* Contenido */}
        <div className="w-full mt-10 sm:mt-0 md:w-1/2 h-full sm:min-h-screen flex flex-col justify-center">
          <p className="text-base leading-relaxed	">Contenido</p>
        <br />
        
        </div>
      </main>
    </Layout>
  )
}
export default Blog

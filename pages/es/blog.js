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
        <div className="min-h-screen">
          <h1 className="text-3xl font-bold mb-4">Blog</h1>
          <p className="text-base">Contenido</p>
          </div>
      </main>
    </Layout>
  )
}
export default Blog

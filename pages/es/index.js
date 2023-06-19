import React from 'react'
import { NextSeo } from 'next-seo';
import Layout from '../../components/Layout.js'
import dynamic from "next/dynamic";

const DynamicButtonHoverRight = dynamic(() => import("../../components/ButtonHoverRight"), { ssr: false });
const DynamicDatepicker = dynamic(() => import("../../components/myDatepicker"), { ssr: false });

const Home = () => {
  return (
    <Layout> 
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
      <main className="flex flex-col w-full max-w-6xl mx-auto justify-between lg:pl-28 sm: py-8 pl-4 pr-4">
        <div className="min-h-screen">
          <h1 className="text-3xl font-bold mb-4">Inicio</h1>
          <p className="text-base">Contenido</p>
          <DynamicButtonHoverRight> Ver más </DynamicButtonHoverRight>
          </div>
          <DynamicDatepicker />

      </main>
    </Layout>
  )
}
export default Home

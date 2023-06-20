import React from 'react'
import { NextSeo } from 'next-seo';
import Layout from '../../components/en/LayoutEn.js'
import dynamic from "next/dynamic";

const DynamicButtonHoverRight = dynamic(() => import("../../components/es/ButtonHoverRight"), { ssr: false });

const Home = () => {
  return (
    <Layout> 
      <NextSeo
        title="Garúa | Inicio"
        description="Architecture, Urban design and Construction Studio."
        openGraph={{
          url: 'https://www.estudiogarua.com/en',
          title: 'Garúa',
          description: 'Architecture, Urban design and Construction Studio.',
          siteName: 'Garúa',
          locale: 'en',
        }}
      />
      <main className="flex flex-col w-full max-w-6xl mx-auto justify-between lg:pl-28 sm: py-8 pl-4 pr-4">
        <div className="min-h-screen">
          <h1 className="text-3xl font-bold mb-4">We create tropical spaces</h1>
          <p className="text-base">Architecture + Urban design + Construction Studio</p>
          <DynamicButtonHoverRight> Ver más </DynamicButtonHoverRight>
          </div>

      </main>
    </Layout>
  )
}
export default Home

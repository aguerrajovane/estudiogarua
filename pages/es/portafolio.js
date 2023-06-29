import React from 'react'
import { NextSeo } from 'next-seo';
import Layout from '../../components/es/Layout.js'
import Link from 'next/link.js';
import Image from 'next/image'

import MuseoNomada from '../../public/images/portafolio/museo-nomada/mn-tn-min.jpg'
import CPRDV from '../../public/images/portafolio/centro-pastoral-red-de-vida/cprdv-tn-min.jpeg'
import MRC from '../../public/images/portafolio/mayukwayukwa-refugee-camp/wrc-tn-min.jpeg'
import YHOAC from '../../public/images/portafolio/yoga-house-on-a-cliff/yhoac-tn-min.jpg'
const Portafolio = () => {
  return (
    <Layout> 
      <NextSeo
        title="Garúa | Portafolio"
        description="Estudio de arquitectura, diseño urbano y construcción."
        openGraph={{
          url: 'https://www.estudiogarua.com/es/portafolio',
          title: 'Garúa',
          description: 'Estudio de arquitectura, diseño urbano y construcción.',
          siteName: 'Garúa',
        }}
      />
      <main className="flex flex-col w-full max-w-6xl mx-auto justify-between lg:pl-28 sm: py-8 pl-4 pr-4">
        {/* Header */}
        <header className="relative h-screen my-0 py-0">
          <h1 className="absolute bottom-80 sm:bottom-60 text-5xl md:text-6xl font-bold leading-snug mb-4 fade-in-up">Nuestro trabajo</h1>
        </header>
        {/* Portafolio */}
        <div className="w-full h-full flex flex-col justify-center">

          {/* Proyecto 1 */}
          <Link href="/es/portafolio/museo-nomada">
            <div className="w-full flex flex-col justify-center sm:flex-row leading-normal md:leading-snug my-6">
              <div className="w-full sm:w-1/3">
              <Image
                src={MuseoNomada}
                width={640}
                height={640}
                alt="Museo Nómada"
              />
              </div>
              <div className="mt-4 ml-0 w-full sm:w-1/3 sm:ml-32 sm: flex flex-col justify-end">
                <h3 className="text-2xl md:text-4xl mb-2 md:mb-6 mt-2 md:mt-6 hover:underline hover:underline-offset-8">Museo Nómada</h3>
                <p className="text-xs">Ciudad de Panamá, Panamá</p>
              </div>
            </div>
          </Link>
          
          {/* Proyecto 2 */}
          <Link href="/es/portafolio/centro-pastoral-red-de-vida">
            <div className="w-full flex flex-col justify-center sm:flex-row leading-normal md:leading-snug my-6">
              <div className="w-full sm:w-1/3">
              <Image
                src={CPRDV}
                width={640}
                height={640}
                alt="Centro Pastoral Red de Vida"
              />
              </div>
              <div className="mt-4 ml-0 w-full sm:w-1/3 sm:ml-32 sm: flex flex-col justify-end">
                
                <h3 className="text-2xl md:text-4xl mb-2 md:mb-6 mt-2 md:mt-6 hover:underline hover:underline-offset-8">Centro Pastoral Red de Vida</h3>
                <p className="text-xs">Darién, Panamá</p>
              </div>
            </div>
          </Link>

           {/* Proyecto 3 */}
           <Link href="/es/portafolio/mayukwayukwa-refugee-camp">
            <div className="w-full flex flex-col justify-center sm:flex-row leading-normal md:leading-snug my-6">
              <div className="w-full sm:w-1/3">
              <Image
                src={MRC}
                width={640}
                height={640}
                alt="Mayukwayukwa Refugee Camp"
              />
              </div>
              <div className="mt-4 ml-0 w-full sm:w-1/3 sm:ml-32 sm: flex flex-col justify-end">
                
                <h3 className="text-2xl md:text-4xl mb-2 md:mb-6 mt-2 md:mt-6 hover:underline hover:underline-offset-8">Mayukwayukwa Refugee Camp</h3>
                <p className="text-xs">Provincia del Oeste, Zambia</p>
              </div>
            </div>
          </Link>

           {/* Proyecto 4 */}
           <Link href="/es/portafolio/yoga-house-on-a-cliff">
            <div className="w-full flex flex-col justify-center sm:flex-row leading-normal md:leading-snug my-6">
              <div className="w-full sm:w-1/3">
              <Image
                src={YHOAC}
                width={640}
                height={640}
                alt="Centro Pastoral Red de Vida"
              />
              </div>
              <div className="mt-4 ml-0 w-full sm:w-1/3 sm:ml-32 sm: flex flex-col justify-end">
                
                <h3 className="text-2xl md:text-4xl mb-2 md:mb-6 mt-2 md:mt-6 hover:underline hover:underline-offset-8">Yoga House on a Cliff</h3>
                <p className="text-xs">Oleiros, Portugal</p>
              </div>
            </div>
          </Link>
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
export default Portafolio

import React from 'react'
import { NextSeo } from 'next-seo';

import Navbar from '../../components/es/Navbar';
import Footer from '../../components/es/Footer';
import dynamic from "next/dynamic";
import Link from 'next/link.js';
import Image from 'next/image'
import CarouselImages from '../../components/es/CarouselImages'

import MuseoNomada from '../../public/images/portafolio/museo-nomada/mn-tn.jpg'
import CPRDV from '../../public/images/portafolio/centro-pastoral-red-de-vida/cprdv-tn.jpg'
import DiaDeLaTierra from '../../public/images/blog/dia-de-la-tierra-2023/DSC08385.jpg'

const DynamicButtonHoverRight = dynamic(() => import("../../components/es/ButtonHoverRight"), { ssr: false });

const DynamicCallToAction = dynamic(() => import("../../components/es/CallToAction.js"), { ssr: false });

const Home = () => {
  const images = [
    "/images/portafolio/museo-nomada/mn-tn.jpg",
    "/images/portafolio/mayukwayukwa-refugee-camp/wrc-tn.jpg",
    "/images/portafolio/centro-pastoral-red-de-vida/cprdv-tn.jpg",
    "/images/portafolio/yoga-house-on-a-cliff/yhoac-tn.jpg",
  ];
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
      <Navbar />
      <main className="">
        
        {/* Header */}
        <header className="flex flex-col w-full max-w-6xl mx-auto justify-between lg:pl-28 sm: py-8 pl-4 pr-4">
          <div className="w-full md:w-3/4  pb-12 pt-0 md:pb-24 md:pt-10">
            <h1 
            className="text-5xl md:text-6xl font-bold leading-snug mb-4 fade-in-up"
            
            >
              Diseñamos y construimos espacios sostenibles.</h1>
            <p className="text-base leading-relaxed">Estudio de arquitectura + diseño urbano + construcción</p>
          </div>
        </header>
        <div className="w-full mx-auto xl:max-w-7xl h-96 sm:h-screen">
          <CarouselImages images={images} />
        </div>

        <div className="flex flex-col w-full max-w-6xl mx-auto justify-between lg:pl-28 sm: py-8 pl-4 pr-4">
          {/* Nosotros */}
          <div className="w-full mt-10 sm:mt-0 md:w-1/2 h-full sm:h-screen flex flex-col justify-center">
            <h2 className="mb-10 text-xs">El estudio</h2>
            <p className="text-base leading-relaxed	">Garúa es un estudio de arquitectura, diseño urbano y construcción fundado en Panamá. Nos dedicamos a brindar soluciones eficientes a las mejores marcas, organizaciones sin fines de lucro, clientes privados y más.</p>
            <br />
            <p className="text-base leading-relaxed	">Desde el concepto hasta la ejecución, trabajamos estrechamente con nuestros clientes para convertir sus ideas en realidades concretas y experiencias memorables.</p>
            <br />
            <p className="mb-10 text-base leading-relaxed">Creemos en un futuro en armonía con la naturaleza, donde la belleza arquitectónica se fusiona con la conservación del medio ambiente.</p>
            <Link href="/es/nosotros">
              <DynamicButtonHoverRight> Ver más </DynamicButtonHoverRight>
            </Link>
          </div>

          {/* Servicios */}
          <div className="w-full h-full sm:h-screen flex flex-col justify-center">
            <h2 className="mb-10 text-xs">Servicios</h2>
            <p className="text-4xl md:text-6xl leading-normal md:leading-snug	mb-20">Arquitectura + Diseño urbano + Construcción</p>
            
            <Link href="/es/servicios">
              <DynamicButtonHoverRight> Ver todos </DynamicButtonHoverRight>
            </Link>
          </div>

          {/* Portafolio */}
          <div className="w-full h-full sm:h-screen flex flex-col justify-center">
            <h2 className="mb-10 text-xs">Portafolio</h2>

            {/* Proyecto 1 */}
            <Link href="/es/portafolio/museo-nomada">
              <div className="w-full flex flex-col justify-center sm:flex-row leading-normal md:leading-snug">
                <div className="w-full sm:w-1/3">
                <Image
                  src={MuseoNomada}
                  width={640}
                  height={640}
                  alt="Museo Nómada"
                />
                </div>
                <div className="mt-4 ml-0 w-full sm:w-1/3 sm:ml-32 sm: flex flex-col justify-end">
                  <span className="text-xs">01</span>
                  <h3 className="text-2xl md:text-4xl mb-2 md:mb-6 mt-2 md:mt-6 hover:underline hover:underline-offset-8">Museo Nómada</h3>
                  <p className="text-xs">Ancón, Panamá</p>
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
                  <span className="text-xs">02</span>
                  <h3 className="text-2xl md:text-4xl mb-2 md:mb-6 mt-2 md:mt-6 hover:underline hover:underline-offset-8">Centro Pastoral Red de Vida</h3>
                  <p className="text-xs">Santa Fe, Darién</p>
                </div>
              </div>
            </Link>
            
            <Link href="/es/servicios">
              <div className="mt-6 sm:mt-10">
              <DynamicButtonHoverRight> Ver todos </DynamicButtonHoverRight>
              </div>
            </Link>
          </div>
        </div>
      
        {/* Call to Action */}
        <DynamicCallToAction />

        {/* Blog */}
        <div className="flex flex-col mx-auto w-full max-w-6xl mt-10 pl-4 pr-0 sm:pr-4 lg:pl-28 justify-center text-white">
          <span className="mb-10 text-xs mt-0 sm:mt-10">Noticias del estudio</span>
          <h2 className="mb-10 text-4xl sm:6xl">Blog</h2>
          <div className="flex flex-col sm:flex-row">
            {/* Entrada 1 */}
            <Link href="/es/blog/dia-de-la-tierra-2023">
                <div className="w-full sm:w-1/3 pr-4 flex flex-col justify-center mb-10 leading-normal">
                  <div className="w-full">
                  <Image
                    src={DiaDeLaTierra}
                    width={640}
                    height={640}
                    alt="Museo Nómada"
                  />
                  </div>
                  <div className="mt-4 ml-0 w-full ">
                    <span className="text-xs">22 de abril de 2023</span>
                    <h3 className="text-xl mb-2 mt-2 hover:underline hover:underline-offset-8">Comprometidos con la sostenibilidad: Garúa comparte su experiencia en el Día de la Tierra</h3>
                  </div>
                </div>
              </Link>
              {/* Entrada 2 */}
            <Link href="/es/blog/dia-de-la-tierra-2023">
                <div className="hidden w-full pr-4 flex flex-col justify-center mb-10 leading-normal">
                  <div className="w-full">
                  <Image
                    src={MuseoNomada}
                    width={640}
                    height={640}
                    alt="Museo Nómada"
                  />
                  </div>
                  <div className="mt-4 ml-0 w-full">
                    <span className="text-xs">22 de abril de 2023</span>
                    <h3 className="text-xl mb-2 mt-2 hover:underline hover:underline-offset-8">Comprometidos con la sostenibilidad: Garúa comparte su experiencia en el Día de la Tierra</h3>
                  </div>
                </div>
              </Link>
              {/* Entrada 3 */}
            <Link href="/es/blog/dia-de-la-tierra-2023">
                <div className="hidden w-full pr-4 flex flex-col justify-center mb-10 leading-normal">
                  <div className="w-full">
                  <Image
                    src={MuseoNomada}
                    width={640}
                    height={640}
                    alt="Museo Nómada"
                  />
                  </div>
                  <div className="mt-4 ml-0 w-full">
                    <span className="text-xs">22 de abril de 2023</span>
                    <h3 className="text-xl mb-2 mt-2 hover:underline hover:underline-offset-8">Comprometidos con la sostenibilidad: Garúa comparte su experiencia en el Día de la Tierra</h3>
                  </div>
                </div>
              </Link>
          </div>
            
            <Link href="/es/blog">
              <DynamicButtonHoverRight> Ver más </DynamicButtonHoverRight>
            </Link>
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
export default Home

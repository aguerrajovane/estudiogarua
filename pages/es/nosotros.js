import React from 'react'
import { NextSeo } from 'next-seo';
import Navbar from '../../components/es/Navbar.js';
import Footer from '../../components/es/Footer.js';
import Link from 'next/link.js';
import dynamic from "next/dynamic";
import Image from 'next/image'

const DynamicButtonHoverRight = dynamic(() => import("../../components/es/ButtonHoverRight"), { ssr: false });
const DynamicCallToAction = dynamic(() => import("../../components/es/CallToAction.js"), { ssr: false });

import ayarzah from '../../public/images/nosotros/ayarzah.jpeg'
import aguerrajovane from '../../public/images/nosotros/aguerrajovane.jpeg'

const Nosotros = () => {
  return (
    <> 
      <NextSeo
        title="Nosotros  | Garúa"
        description="Estudio de arquitectura, diseño urbano y construcción."
        openGraph={{
          url: 'https://www.estudiogarua.com/es/nosotros',
          title: 'Nosotros | Garúa',
          description: 'Estudio de arquitectura, diseño urbano y construcción.',
          siteName: 'Garúa',
        }}
      />
      <Navbar />
      <main className="flex flex-col w-full max-w-6xl mx-auto justify-between lg:pl-28 sm: py-8 pl-4 pr-4">
        {/* Header */}
        <header className="relative h-screen my-0 py-0">
          <h1 className="absolute bottom-80 sm:bottom-60 text-5xl md:text-6xl font-bold leading-snug mb-4 fade-in-up">El estudio</h1>
        </header>
        {/* Contenido */}
        <div className="w-full mt-10 sm:mt-0 md:w-1/2 h-full sm:min-h-screen flex flex-col justify-center">
          <p className="text-base leading-relaxed	">En Garúa, nos apasiona la creación de espacios arquitectónicos que reflejen la belleza y la funcionalidad en perfecta armonía. Nuestro enfoque integral abarca desde el diseño urbano hasta la construcción, brindando soluciones eficientes a una amplia gama de clientes, incluyendo marcas reconocidas, organizaciones sin fines de lucro y clientes privados.</p>
        <br />
        <p className="text-base leading-relaxed	">Nos enorgullece ser un estudio de arquitectura comprometido con la excelencia en cada proyecto que emprendemos. Nos esforzamos por comprender las necesidades y visiones de nuestros clientes, colaborando estrechamente con ellos desde la etapa conceptual hasta la ejecución final. Nos consideramos facilitadores de sueños, transformando ideas en realidades tangibles y creando experiencias memorables para aquellos que interactúan con nuestros espacios.</p>
        <br />
        <p className="text-base leading-relaxed	">Nuestra filosofía de trabajo se basa en un profundo respeto por el entorno natural y la sostenibilidad. Creemos firmemente en el diseño responsable, donde la belleza arquitectónica se fusiona con la conservación del medio ambiente. Buscamos integrar soluciones innovadoras que minimicen el impacto ambiental, aprovechando al máximo los recursos disponibles y promoviendo la eficiencia energética.</p>
        <br />
        <p className="text-base leading-relaxed	">Con un equipo altamente capacitado y experimentado en diversos campos del diseño y la construcción, Garúa se destaca por su enfoque multidisciplinario y su pasión por la excelencia. Nos enorgullece ofrecer servicios de calidad que superen las expectativas de nuestros clientes y que den vida a proyectos arquitectónicos únicos y funcionales.</p>
        <br />
        </div>
        <Link href="/es/servicios">
          <DynamicButtonHoverRight> Servicios </DynamicButtonHoverRight>
        </Link>
        {/* Fundadores */}
        <div className="w-full h-full sm:h-screen flex flex-col justify-center">
            <h2 className="mb-10 text-xs">Fundadores</h2>
            <div className='flex flex-col sm:flex-row'>
              {/* Founder 1 */}
              <div className="w-full max-w-sm flex flex-col justify-center leading-normal md:leading-snug my-6 sm:mr-8">
                <div className="w-full">
                <Image
                  src={ayarzah}
                  width={640}
                  height={640}
                  alt="Héctor Ayarza"
                />
                </div>
                <div className="mt-4 ml-0 w-full  sm: flex flex-col justify-end">
                  <h3 className="text-2xl md:text-4xl mb-2 md:mb-6 mt-2 md:mt-6" >Héctor Ayarza</h3>
                  <p className="text-xs leading-relaxed">Héctor es un arquitecto y profesor, su pasión radica en el diseño social y cultural, centrándose en espacios públicos y explorando nuevas formas de entender la arquitectura.</p>
                </div>
              </div>
              
              {/* Founder 2 */}
              <div className="w-full max-w-sm flex flex-col justify-center leading-normal md:leading-snug my-6 sm:ml-8">
                <div className="w-full">
                <Image
                  src={aguerrajovane}
                  width={640}
                  height={640}
                  alt="Álvaro Guerra Jované"
                />
                </div>
                <div className="mt-4 ml-0 w-full sm: flex flex-col justify-end">
                  <h3 className="text-2xl md:text-4xl mb-2 md:mb-6 mt-2 md:mt-6">Álvaro Guerra Jované</h3>
                  <p className="text-xs leading-relaxed">Álvaro es arquitecto apasionado por el diseño innovador, dispuesto a hacer realidad tus ideas y convertirlas en increíbles creaciones arquitectónicas.</p>
                </div>
              </div>

            </div>
            
        </div>
      </main>
      <DynamicCallToAction />
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
export default Nosotros

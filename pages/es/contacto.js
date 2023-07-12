import React, { useState }  from 'react'
import { NextSeo } from 'next-seo';
import '../../app/global.css'
import NavbarContacto from '../../components/es/NavbarContacto'

import FooterContacto from '../../components/es/FooterContacto'
import ContactForm from '../../components/es/ContactForm'

const contacto = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };
  const [showMenuMobile, setShowMenuMobile] = useState(false);

  const toggleMenuMobile = () => {
    setShowMenuMobile(!showMenuMobile);
  };
  
  return (
    <>
      <NextSeo
        title="Contacto | Garúa"
        description="Estudio de arquitectura, diseño urbano y construcción."
        openGraph={{
          url: 'https://www.estudiogarua.com/es/contacto',
          title: 'Contacto | Garúa',
          description: 'Estudio de arquitectura, diseño urbano y construcción.',
          siteName: 'Garúa',
        }}
      />
      <div className="es-contacto text-black">
      {/* Navbar */}
      <NavbarContacto />
      {/* Contact page*/}
      <main className="flex flex-col w-full max-w-6xl mx-auto justify-between lg:pl-28 sm: py-8 pl-4 pr-4 pb-24">
        {/* Header */}
        <header className="relative h-screen my-0 py-0">
          <h1 className="absolute bottom-80 sm:bottom-60 text-5xl md:text-6xl font-bold leading-snug mb-4 fade-in-up">Contacto</h1>
        </header>
        {/* Contenido */}
        <div className="w-full h-full flex flex-col justify-center">
          <ContactForm />
        </div>
      </main>
        <div className="text-black">
          <FooterContacto />
        </div>
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
    </>
  )
}

export default contacto

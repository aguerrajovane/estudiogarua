import React, { useState }  from 'react'
import '../../app/global.css'
import Link from 'next/link';
import DesktopMenu from '../../components/DesktopMenu';

import Footer from '../../components/Footer.js'
import ContactForm from '../../components/ContactForm'

const contacto = () => {
  const [showMenuMobile, setShowMenuMobile] = useState(false);

  const toggleMenuMobile = () => {
    setShowMenuMobile(!showMenuMobile);
  };
  return (
    <div className="es-contacto text-black">
    {/* Navbar */}
    <nav className="z-10 sticky top-0 pb-6 pt-8 text-sm lg:flex">
      <div className="flex w-full max-w-6xl mx-auto items-center justify-between">
        <Link href="/es">
          <img src="/logo.svg" alt="Logo" className="relative mx-3 h-4 lg:h-6" />
        </Link>
        <div className="block lg:hidden justify-items-end">
          <button
            className="flex items-center px-3 py-2 rounded"
            onClick={toggleMenuMobile}
            >
            <svg
              className="fill-current h-5 w-5"
              viewBox="0 0 20 20"
              xmlns="<http://www.w3.org/2000/svg>"
              >
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>
        <div
          className="w-full hidden block lg:flex lg:items-center lg:w-auto"
          >
          <div className="text-sm lg:justify-end">
            <Link
              href="/es/nosotros"
              className="block mt-4 lg:inline-block lg:mt-0 ml-12 p-2"
              >
              Estudio
            </Link>
            <Link
              href="/es/servicios"
              className="block mt-4 lg:inline-block lg:mt-0 ml-12 p-2"
              >
              Servicios
            </Link>
            <Link
              href="/es/portafolio"
              className="block mt-4 lg:inline-block lg:mt-0 ml-12 p-2"
              >
              Portafolio
            </Link>
            <Link
              href="/es/contacto"
              className="block mt-4 lg:inline-block lg:mt-0 lg:px-2 lg:mt-0 lg:last:ml-12"
              >
              Contacto
            </Link>
          </div>
          {/*  Desktop menu */}
          <div className="ml-12 stroke-black">
            <DesktopMenu />
          </div>
        </div>
      </div>
      
      


      {/*  Mobile menu */}
      <div
          className={`${
            showMenuMobile ? 'block' : 'hidden'
          } w-full block lg:hidden lg:flex lg:items-center lg:w-auto`}
          >
          <div className="text-sm">
            <Link
              href="es/nosotros"
              className="block text-left px-4 mt-6 lg:inline-block lg:mt-0 lg:ml-4 lg:pr-4 lg:mt-0 lg:last:ml-0"
              >
              Estudio
            </Link>
            <Link
              href="es/servicios"
              className="block text-left px-4 mt-6 lg:inline-block lg:mt-0 lg:ml-4 lg:pr-4 lg:mt-0 lg:last:ml-0"
              >
              Servicios
            </Link>
            <Link
              href="es/portafolio"
              className="block text-left px-4 mt-6 lg:inline-block lg:mt-0 lg:ml-4 lg:pr-4 lg:mt-0 lg:last:ml-0"
              >
              Portafolio
            </Link>
            <Link
              href="es/blog"
              className="block text-left px-4 mt-6 lg:inline-block lg:mt-0 lg:ml-4 lg:pr-4 lg:mt-0 lg:last:ml-0"
              >
              Blog
            </Link>
            <Link
              href="es/contacto"
              className="block text-left px-4 mt-6 lg:inline-block lg:mt-0 lg:px-2 lg:mt-0 lg:last:ml-0"
              >
              Contacto
            </Link>
          </div>
        </div>
    </nav>
    {/* Contact page*/}
      <main className="flex flex-col w-full max-w-6xl mx-auto justify-between lg:pl-28 sm: py-8 pl-4 pr-4">
        <div className="min-h-screen">
          <h1 className="text-3xl font-bold mb-4">Contacto</h1>
          <ContactForm />
        </div>
      </main>
    <Footer />
    </div>
  )
}

export default contacto

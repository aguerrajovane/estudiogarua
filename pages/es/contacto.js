import React, { useState }  from 'react'
import '../../app/global.css'
import Link from 'next/link';

import Footer from '../../components/Footer.js'
import ContactForm from '../../components/ContactForm'


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

            <div className="ml-12">
              {/* DesktopMenu */}
              {/* Botón de activación del modal */}
        <button
          className="w-12 h-12 flex items-center justify-center text-white stroke-white"
          onClick={toggleModal}
        >
          {/* Ícono de hamburguesa */}
          <svg
            className="w-6 h-6"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="black"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M3 12h18M3 6h18M3 18h18" />
          </svg>
        </button>

        {/* Modal */}
        {isOpen && (
          <div className="fixed top-0 left-0 right-0">
            <div className="flex items-center justify-center text-center">
              <div className="fixed" onClick={toggleModal}></div>

              <div className="bg-black text-white w-full mx-auto min-h-screen">
                {/* Cabezera del modal */}
                <div className="flex items-center justify-between pt-8 pb-6 w-full max-w-6xl mx-auto">
                  {/* Logotipo */}
                  <Link href="/es">
                    <img src="/logo.svg" alt="Logo" className="relative invert mx-3 h-4 lg:h-6" />
                  </Link>
                  <div className="flex w-1/2 justify-between items-center">
                      {/* Botón de idioma */}
                    <button className="flex items-end">
                      <p>Es</p>
                      <svg
                        className="w-4 h-4 ml-4"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
                      </svg>
                    </button>
                    {/* Botón para cerrar el modal */}
                    <button className="pr-4 h-12 rounded focus:outline-none" onClick={toggleModal}>
                      {/* Ícono de "x" */}
                      <svg
                        className="w-6 h-6"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M18 6L6 18M6 6l12 12" />
                      </svg>
                    </button>
                  </div>
                </div>
                {/* Contenido del modal */}
                <div className="flex flex-col items-end">
                <div className="flex w-1/2 right-0 py-6">
                  {/* Lista de navegación */}
                  <nav className="flex flex-col items-start gap-2">
                    <Link
                      href="/es/nosotros"
                      className="block px-0 py-4 text-5xl hover:underline hover:underline-offset-8"
                      >
                      Estudio
                    </Link>
                    <Link
                      href="/es/servicios"
                      className="block px-0 py-4 text-5xl hover:underline hover:underline-offset-8"
                      >
                      Servicios
                    </Link>
                    <Link
                      href="/es/portafolio"
                      className="block px-0 py-4 text-5xl hover:underline hover:underline-offset-8"
                      >
                      Portafolio
                    </Link>
                    <Link
                      href="/es/blog"
                      className="block px-0 py-4 text-5xl hover:underline hover:underline-offset-8"
                      >
                      Blog
                    </Link>
                    <Link
                      href="/es/contacto"
                      className="block px-0 py-4 text-5xl hover:underline hover:underline-offset-8"
                      >
                      Contacto
                    </Link>
                  </nav>
                </div>
                </div>
                {/* Footer */}
                <div class="relative h-32 w-full max-w-6xl mx-auto">
                  <p class="absolute bottom-0 pb-6"> 
                    © 2023. Estudio Garúa SA.
                  </p>
                  <a class="absolute bottom-0 right-0 pb-6" href="mailto:info@estudiogarua.com">hola@estudiogarua.com</a>
                </div>
              </div>
            </div>
          </div>
        )}
            {/* End of DesktopMenu*/}
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

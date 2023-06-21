import React from 'react'
import Link from 'next/link'

const Footer = () => {
  return (
    <div className="z-10 w-full items-center text-sm border-t border-gray-800">
      <div className="flex flex-col sm:flex-row w-full max-w-6xl mx-auto justify-between px-4 pb-6 pt-8">
        {/* Logo */}
        <Link href="/es">
          <img src="/logo.svg" alt="Logo" className="relative invert h-10 lg:h-14 mb-6" />
        {/* Paginas */}
        </Link>
        <div className="flex flex-col items-start gap-1 my-16 sm:my-0">
          <Link
            href="/es/nosotros"
            className="block px-0 py-1 text-base hover:underline hover:underline-offset-8"
          >
            Estudio
          </Link>
          <Link
            href="/es/servicios"
            className="block px-0 py-1 text-base hover:underline hover:underline-offset-8"
          >
            Servicios
          </Link>
          <Link
            href="/es/portafolio"
            className="block px-0 py-1 text-base hover:underline hover:underline-offset-8"
          >
            Portafolio
          </Link>
          <Link
            href="/es/blog"
            className="block px-0 py-1 text-base hover:underline hover:underline-offset-8"
          >
            Blog
          </Link>
          <Link
            href="/es/contacto"
            className="block px-0 py-1 text-base hover:underline hover:underline-offset-8"
          >
            Contacto
          </Link>
          <Link
            href="/es/privacidad"
            className="block px-0 py-1 text-base hover:underline hover:underline-offset-8"
          >
            Politica de privacidad
          </Link>
          <Link
            href="https://www.instagram.com/estudiogarua"
            target="_blank"
            className="block px-0 py-1 text-base hover:underline hover:underline-offset-8"
          >
            Instagram
          </Link>
          <Link
            href="https://www.linkedin.com/company/estudiogarua"
            target="_blank"
            className="block px-0 py-1 text-base hover:underline hover:underline-offset-8"
          >
            LinkedIn
          </Link>
        </div>
      </div>
        { /* Idioma */}
        <div className="flex text-white text-center px-4 w-full max-w-6xl mx-auto">
          <Link href="/es">
            <button className="w-10 py-2 pr-4 mr-4">Es</button>
          </Link>
          <Link href="/en">
            <button className="w-full py-2 px-4 text-gray-500">En</button>
          </Link>
        </div>
        { /* Fotter */}
        <div className="relative h-32 w-full max-w-6xl mx-auto px-4">
          <p className="absolute bottom-0 pb-6">© 2023. Estudio Garúa SA.</p>
          <a className="invisible sm:visible absolute bottom-0 right-4 pb-6" href="mailto:hola@estudiogarua.com">
            hola@estudiogarua.com
          </a>
        </div>
      </div>

  )
}

export default Footer

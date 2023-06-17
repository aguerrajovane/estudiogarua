import React, { useState } from 'react';
import Link from 'next/link';
import DesktopMenu from './DesktopMenu';

function Navbar() {
  const [showMenuMobile, setShowMenuMobile] = useState(false);

  const toggleMenuMobile = () => {
    setShowMenuMobile(!showMenuMobile);
  };
  let isMenuOpen = false;
  const handleToggleMenu = () => {
    isMenuOpen = !isMenuOpen;
    const menuElement = document.getElementById("desktop-menu");

    if (menuElement) {
      if (isMenuOpen) {
        menuElement.classList.remove("hidden");
      } else {
        menuElement.classList.add("hidden");
      }
    }
  };

  return (
    <nav className="z-10 border-b border-gray-300 bg-gradient-to-b pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:dark:bg-zinc-800/30 text-sm lg:flex">
      <div className="flex w-full max-w-6xl mx-auto items-center justify-between">
        <Link href="/es">
          <img src="/logo.svg" alt="Logo" className="relative dark:invert mx-3 h-4 lg:h-6" />
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
              className="block mt-4 lg:inline-block lg:mt-0 hover:border-b ml-12 p-2"
              >
              Estudio
            </Link>
            <Link
              href="/es/servicios"
              className="block mt-4 lg:inline-block lg:mt-0 hover:border-b ml-12 p-2"
              >
              Servicios
            </Link>
            <Link
              href="/es/portafolio"
              className="block mt-4 lg:inline-block lg:mt-0 hover:border-b ml-12 p-2"
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
          <div className="ml-12 ">
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
    
  );
}

export default Navbar;

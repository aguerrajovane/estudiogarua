import React, { useState } from 'react';
import Link from 'next/link';
import dynamic from "next/dynamic";

const DynamicDesktopMenu= dynamic(() => import("../es/DesktopMenu"), { ssr: false });
const DynamicMobileMenu= dynamic(() => import("../es/MobileMenu"), { ssr: false });

function Navbar() {
  const [showMenuMobile] = useState(false);


  return (
    <nav className="z-10 sticky top-0 pb-6 pt-8 text-sm lg:flex">
      <div className="flex w-full max-w-6xl mx-auto items-center justify-between">
        <Link href="/es">
          <img src="/logo.svg" alt="Logo" className="relative invert mx-3 h-4 lg:h-6" />
        </Link>
        <div className="block lg:hidden justify-items-end">
          <div className="ml-12 mr-2">
            <DynamicMobileMenu />
          </div>
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
          <div className="ml-12 mr-2">
            <DynamicDesktopMenu />
          </div>
        </div>
      </div>
      
      


      {/*  Mobile menu */}
      <div
          className={`${
            showMenuMobile ? 'block' : 'hidden'
          } w-full block lg:hidden lg:flex lg:items-center lg:w-auto`}
          >
          <DynamicMobileMenu />
        </div>
    </nav>
    
  );
}

export default Navbar;

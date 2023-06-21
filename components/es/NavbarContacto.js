import React, { useState } from 'react';
import Link from 'next/link';
import dynamic from "next/dynamic";

const DynamicDesktopMenuContacto= dynamic(() => import("../es/DesktopMenuContacto"), { ssr: false });
const DynamicMobileMenuContacto= dynamic(() => import("../es/MobileMenuContacto"), { ssr: false });

function Navbar() {
  const [showMenuMobile] = useState(false);

 

  return (
    <nav className="z-10 sticky top-0 pb-6 pt-8 text-sm lg:flex">
      <div className="flex w-full max-w-6xl mx-auto items-center justify-between">
        <Link href="/es">
          <img src="/logo.svg" alt="Logo" className="relative mx-3 h-4 lg:h-6" />
        </Link>
        <div className="ml-12 mr-2">
            <DynamicMobileMenuContacto />
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
            <DynamicDesktopMenuContacto />
          </div>
        </div>
      </div>
      
      


      {/*  Mobile menu */}
      <div
          className={`${
            showMenuMobile ? 'block' : 'hidden'
          } w-full block lg:hidden lg:flex lg:items-center lg:w-auto`}
          >
          <DynamicMobileMenuContacto />
        </div>
    </nav>
    
  );
}

export default Navbar;

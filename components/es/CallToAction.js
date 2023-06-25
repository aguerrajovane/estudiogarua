import React from 'react'
import dynamic from "next/dynamic";
import Link from 'next/link';

const DynamicButtonHoverRightBlack = dynamic(() => import("../../components/es/ButtonHoverRightBack"), { ssr: false });

const CallToAction = () => {
  return (
    <div className="bg-white py-10">
      <div className="flex flex-col mx-auto w-full max-w-6xl h-screen pl-4 pr-0 sm:pr-4 sm:pl-28 justify-center text-black">
        <h2 className="text-4xl sm:text-7xl sm:leading-snug font-bold leading-snug mb-20 w-full sm:w-3/4 md:w-8/12 ">Comencemos a construir el futuro que imaginas.</h2>
        <Link href="/es/contacto">
            <DynamicButtonHoverRightBlack> Contáctanos hoy </DynamicButtonHoverRightBlack>
        </Link>
      </div>
    </div>
  )
}

export default CallToAction

 
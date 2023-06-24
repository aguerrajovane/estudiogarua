import React from 'react'
import Link from 'next/link'
import Navbar from '../components/es/Navbar'
import Footer from '../components/es/Footer'

const errorPage = () => {
  return (
    <>
        <Navbar />
        <main className="flex flex-col w-full max-w-6xl mx-auto justify-between lg:pl-28 sm: py-8 pl-4 pr-4">
            <div className="min-h-screen">
            <h1 className="text-3xl font-bold mb-4">Error 404</h1>
            <p>No encontramos la página que estás buscando. Haz clic <Link href="/" className="underline underline-offset-4">aquí</Link> para volver al inicio.</p>
            </div>
        </main>
        <Footer />
    </>
  )
}

export default errorPage

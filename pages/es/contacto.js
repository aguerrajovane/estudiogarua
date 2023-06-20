import React, { useState }  from 'react'
import '../../app/global.css'
import NavbarContacto from '../../components/NavbarContacto'

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
    <NavbarContacto />
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

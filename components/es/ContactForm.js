import React, { useState } from 'react';
import ButtonPrimary from './ButtonPrimary';
import Link from 'next/link';
import dynamic from "next/dynamic";

const DynamicButtonHoverRightBlack = dynamic(() => import("../../components/es/ButtonHoverRightBack"), { ssr: false });

export default function ContactForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [showPopup, setShowPopup] = useState(false);
  const [privacyChecked, setPrivacyChecked] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    // Realizar cualquier validación o lógica adicional aquí

    // Mostrar el popup
    setShowPopup(true);

    // Reiniciar los valores del formulario
    setName('');
    setEmail('');
    setMessage('');
    setPrivacyChecked(false);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  const handleOutsideClick = (event) => {
    if (event.target.classList.contains('modal-overlay')) {
      setShowPopup(false);
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Escape') {
      setShowPopup(false);
    }
  };

  const handleCheckboxChange = () => {
    setPrivacyChecked(!privacyChecked);
  };

  return (
    <div>
      <form
        className="w-full max-w-6xl lg:w-1/2"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        name="contact"
        method="POST"
        onSubmit={handleSubmit}
      >
        <input type="hidden" name="form-name" value="contact" />
        <p className="hidden">
          <label>
            No llenar si eres humano: <input name="bot-field" />
          </label>
        </p>

        <label htmlFor="name">Nombre y apellido</label>
        <input
          id="name"
          className="form-field text-base my-6 p-5 w-full border-b border-gray-200 focus:outline-none bg-transparent"
          type="text"
          name="name"
          value={name}
          onChange={(event) => setName(event.target.value)}
          required
          autoComplete="name"
        />

        <label htmlFor="email">Correo</label>
        <input
          id="email"
          className="form-field text-base my-6 p-5 w-full border-b border-gray-200 focus:outline-none bg-transparent"
          type="email"
          name="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          required
          autoComplete="email"
        />

        <label htmlFor="feedback">Mensaje</label>
        <textarea
          id="feedback"
          className="form-field text-base my-6 p-5 w-full border-b border-gray-200 focus:outline-none bg-transparent"
          wrap="soft"
          name="message"
          value={message}
          onChange={(event) => setMessage(event.target.value)}
          required
        ></textarea>

        <div className="mb-6">
          <label className="">
            <input
              type="checkbox"
              className="form-checkbox mr-2 h-4 w-4"
              name="privacy"
              checked={privacyChecked}
              onChange={handleCheckboxChange}
              required
            />
            Al marcar esta casilla, acepta nuestra
            <Link href="/es/privacidad" target="_blank" className="underline underline-offset-4 ml-2">
              política de privacidad
            </Link>
          </label>
        </div>

        <ButtonPrimary className="" type="submit">
          Enviar
        </ButtonPrimary>
      </form>

      {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center w-full">
          <div
            className="modal-overlay bg-black bg-opacity-50 fixed inset-0"
            onClick={handleOutsideClick}
            onKeyDown={handleKeyDown}
            tabIndex={-1}
            role="button"
            aria-label="Cerrar"
          ></div>
          <div className="z-10 modal-content bg-white p-8 flex flex-col max-w-[32rem] justify-center rounded-lg mx-2">
            <p className="text-2xl mb-6">¡Gracias por contactarnos!</p>
            <p className="text-base mb-4">
              Hemos recibido tu mensaje y estamos emocionados por atenderte. Nuestro equipo se pondrá en contacto contigo
              lo antes posible para responder a todas tus preguntas y brindarte la ayuda que necesites.
            </p>
            <p className="text-basemb-4">Mientras tanto, te invitamos a explorar nuestro sitio web y conocer más sobre nuestros productos y servicios.</p>
            <Link href="/" className="mt-8 text-lg ">
              <DynamicButtonHoverRightBlack  onClick={handleClosePopup}>
                Ir a inicio
              </DynamicButtonHoverRightBlack>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}

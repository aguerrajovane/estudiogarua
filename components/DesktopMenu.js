import { useState, useEffect } from 'react';
import Link from 'next/link';

const Modal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [animationClass, setAnimationClass] = useState('');

  const toggleModal = () => {
    setIsAnimating(true);
    setTimeout(() => {
      setIsOpen(!isOpen);
    }, 100); // Ajusta el tiempo de espera según tus necesidades
  };

  useEffect(() => {
    if (isOpen) {
      setAnimationClass('slideInDown');
    } else {
      setAnimationClass('slideOutUp');
      setTimeout(() => {
        setIsAnimating(false);
      }, 500); // Ajusta el tiempo de espera según la duración de la animación
    }
  }, [isOpen]);

  return (
    <>
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
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M3 12h18M3 6h18M3 18h18" />
        </svg>
      </button>

      {/* Modal */}
      {isOpen && (
        <div className={`fixed top-0 left-0 right-0 ${animationClass}`}>
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
                      <path d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z" />
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
              <div className="relative h-32 w-full max-w-6xl mx-auto">
                <p className="absolute bottom-0 pb-6">© 2023. Estudio Garúa SA.</p>
                <a className="absolute bottom-0 right-0 pb-6" href="mailto:info@estudiogarua.com">
                  hola@estudiogarua.com
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;

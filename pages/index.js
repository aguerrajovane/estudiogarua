import React, { useEffect, useRef } from 'react';
import { useRouter } from 'next/router';

const IndexPage = () => {
  const router = useRouter();
  const containerRef = useRef(null);

  useEffect(() => {
    const timeout = setTimeout(() => {
      containerRef.current.classList.add('fade-out');

      setTimeout(() => {
        router.push('/es');
      }, 500);
    }, 1000);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <>
      <div className="bg-black min-h-screen flex items-center justify-center">
        <div ref={containerRef}>
          <img
            src="/logo.svg"
            alt="Logo"
            className="relative invert h-4 lg:h-6 mx-auto opacity-100 mb-10 sm:mb-0"
            key="logo"
          />
        </div>

        <style jsx>{`
          .fade-out {
            animation: fade-out 0.5s ease-out;
            opacity: 0;
          }

          @keyframes fade-out {
            from {
              opacity: 1;
            }
            to {
              opacity: 0;
            }
          }
        `}</style>
      </div>
    </>
  );
};

export default IndexPage;

import React from 'react'
import { useEffect } from 'react';
import { useRouter } from 'next/router';

const index = () => {
    const router = useRouter();

  useEffect(() => {
    const timeout = setTimeout(() => {
      router.push('/es');
    }, 1000);

    return () => clearTimeout(timeout);
  }, []);
  return (
    <div className="bg-black min-h-screen flex items-center">
        <img 
            src="/logo.svg" 
            alt="Logo" 
            className="relative invert mx-3 h-4 lg:h-6 mx-auto" />
    </div>
  )
}

export default index

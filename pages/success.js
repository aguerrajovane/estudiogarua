import React from 'react'
import Link from 'next/link'

const success = () => {
  return (
    <>
      <main className="flex flex-col w-full max-w-6xl mx-auto justify-between p-24 sm: py-8 px-4">
        <div className="min-h-screen">
          <h1 className="text-3xl font-bold mb-4">Contacto</h1>
          <p>Gracias por contactarnos. Haz clic <Link href="/" className="underline underline-offset-4">aquí</Link> para volver al inicio.</p>
        </div>
      </main>
    </>
  )
}

export default success

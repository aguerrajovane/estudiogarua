import React from 'react'
import Link from 'next/link'
import Layout from '../../components/es/Layout'
const gracias = () => {
  return (
    <Layout>
      <main className="flex flex-col w-full  max-w-6xl mx-auto justify-between lg:pl-28 sm: py-8 pl-4 pr-4 pb-24">
        <div className="min-h-screen w-full sm:w-3/5">
          <h1 className="text-3xl font-bold mb-8">¡Gracias por contactarnos!</h1>
          <p className="text-base mb-20">Hemos recibido tu mensaje y estamos emocionados por atenderte. Nuestro equipo se pondrá en contacto contigo lo antes posible para responder a todas tus preguntas y brindarte la ayuda que necesites. </p>
            <p className="text-base">Haz clic <Link href="/" className="underline underline-offset-4">aquí</Link> para volver al inicio.</p>
        </div>
      </main>
    </Layout>
  )
}

export default gracias
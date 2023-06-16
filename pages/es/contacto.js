import React from 'react'

import Layout from '../../components/Layout.js'
import ContactForm from '../../components/ContactForm'

const contacto = () => {
  return (
    <Layout>
      <main className="flex flex-col w-full max-w-6xl mx-auto justify-between p-24 sm: py-8 px-4">
        <div className="min-h-screen">
          <h1 className="text-3xl font-bold mb-4">Contacto</h1>
          <ContactForm />
        </div>
      </main>
    </Layout>
  )
}

export default contacto

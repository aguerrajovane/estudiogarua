import React from 'react'
import { NextSeo } from 'next-seo';
import Layout from '../../components/es/Layout.js'

const fecha = "3 de julio de 2023"
const web = "www.estudiogarua.com"


const Privacidad = () => {
  return (
    <Layout> 
      <NextSeo
        title="Política de Privacidad | Garúa"
        description="Estudio de arquitectura, diseño urbano y construcción."
        openGraph={{
          url: 'https://www.estudiogarua.com/es/privacidad',
          title: 'Política de Privacidad | Garúa',
          description: 'Estudio de arquitectura, diseño urbano y construcción.',
          siteName: 'Garúa',
        }}
      />
     <main className="flex flex-col w-full max-w-6xl mx-auto justify-between lg:pl-28 sm: py-8 pl-4 pr-4">
        {/* Header */}
        <header className="relative h-screen my-0 py-0">
          <h1 className="absolute bottom-80 sm:bottom-60 text-5xl md:text-6xl font-bold leading-snug mb-4 fade-in-up">Política de Privacidad</h1>
        </header>
        {/* Contenido */}
        <div className="w-full mt-10 pl-4 sm:mt-0 md:w-1/2 h-full sm:min-h-screen flex flex-col justify-center">
  <p className="text-base leading-relaxed">Fecha de entrada en vigor: {fecha}</p>
  <br />
  <p>Esta Política de Privacidad describe cómo se recopila, utiliza y protege la información personal que se obtiene a través de nuestro sitio web <span className="underline underline-offset-4">{web}</span>. Por favor, lee detenidamente esta política antes de utilizar o proporcionar cualquier información en este sitio web.</p>
  <br />
  <ul className="list-decimal">
    <li className="text-xl font-bold">Información personal recopilada</li>
    <br />
    <p>Recopilamos la siguiente información personal de los usuarios que visitan nuestro sitio web:</p>
    <ul className="list-disc ml-6">
      <li>Nombre</li>
      <li>Apellido</li>
      <li>Correo electrónico</li>
    </ul>
    <br />
    <li className="text-xl font-bold">Uso de la información recopilada</li>
    <br />
    <p>Utilizamos la información personal recopilada para los siguientes fines:</p>
    <ul className="list-disc ml-6">
      <li>Comprender mejor a nuestro público objetivo y mejorar nuestros servicios.</li>
      <li>Personalizar la experiencia del usuario y ofrecer contenido relevante.</li>
      <li>Responder a consultas, preguntas o solicitudes de los usuarios.</li>
      <li>Enviar correos electrónicos promocionales o boletines informativos relacionados con nuestros servicios, siempre y cuando el usuario haya dado su consentimiento para recibirlos.</li>
    </ul>
    <br />
    <li className="text-xl font-bold">Compartir información con terceros</li>
    <br />
    <p>Compartimos la siguiente información personal con los siguientes terceros:</p>
    <ul className="list-disc ml-6">
      <li>
        Google Analytics: Compartimos los datos recopilados con Google Analytics para analizar el tráfico y la interacción de los usuarios en nuestro sitio web.
      </li>
      <li>
        Google Ads y Facebook Ads: Compartimos la información personal recopilada con Google Ads y Facebook Ads para ofrecer anuncios personalizados a nuestros usuarios.
      </li>
    </ul>
    <br />
    <li className="text-xl font-bold">Cookies y tecnologías de seguimiento</li>
    <br />
    <p>
      Utilizamos cookies y otras tecnologías de seguimiento para recopilar información y mejorar la experiencia del usuario. Al utilizar nuestro sitio web, estás de acuerdo con el uso de estas tecnologías. Puedes administrar tus preferencias de cookies a través de la configuración de tu navegador.
    </p>
    <br />
    <li className="text-xl font-bold">Derechos del usuario</li>
    <br />
    <p>Los usuarios tienen derecho a:</p>
    <ul className="list-disc ml-6">
      <li>Acceder, corregir, actualizar o solicitar la eliminación de su información personal.</li>
      <li>Optar por no participar en la recopilación de datos o en la recepción de anuncios personalizados.</li>
      <li>Retirar su consentimiento en cualquier momento para el procesamiento de su información personal.</li>
      <li>Presentar una queja ante la autoridad de protección de datos correspondiente.</li>
    </ul>
    <br />
    <li className="text-xl font-bold">Seguridad de la información</li>
    <br />
    <p>
      Implementamos medidas de seguridad adecuadas para proteger la información personal contra pérdidas, mal uso o acceso no autorizado. Sin embargo, ten en cuenta que ninguna transmisión por Internet o método de almacenamiento electrónico es 100% seguro.
    </p>
    <br />
    <li className="text-xl font-bold">Retención de la información</li>
    <br />
    <p>
      Mantendremos la información personal recopilada durante el tiempo necesario para cumplir con los fines descritos en esta política, a menos que se requiera o permita un período de retención más largo por ley.
    </p>
    <br />
    <li className="text-xl font-bold">Cambios en la política de privacidad</li>
    <br />
    <p>
      Nos reservamos el derecho de actualizar o modificar esta política de privacidad en cualquier momento. Se notificarán los cambios mediante una publicación destacada en nuestro sitio web. Se recomienda revisar esta política periódicamente para estar informado sobre cómo protegemos la información personal recopilada.
    </p>
  </ul>
</div>

      </main>
    </Layout>
  )
}
export default Privacidad

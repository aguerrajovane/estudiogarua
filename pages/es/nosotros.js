import React from 'react'
import { NextSeo } from 'next-seo';
import Layout from '../../components/es/Layout.js'

const Nosotros = () => {
  return (
    <Layout> 
      <NextSeo
        title="Garúa | Nosotros"
        description="Estudio de arquitectura, diseño urbano y construcción."
        openGraph={{
          url: 'https://www.estudiogarua.com/es/nosotros',
          title: 'Garúa',
          description: 'Estudio de arquitectura, diseño urbano y construcción.',
          siteName: 'Garúa',
        }}
      />
      <main className="flex flex-col w-full max-w-6xl mx-auto justify-between lg:pl-28 sm: py-8 pl-4 pr-4">
        {/* Header */}
        <header className="relative h-screen my-0 py-0">
          <h1 className="absolute bottom-60 text-5xl md:text-6xl font-bold leading-snug mb-4 fade-in-up">El estudio</h1>
        </header>
        {/* Contenido */}
        <div className="w-full mt-10 sm:mt-0 md:w-1/2 h-full sm:min-h-screen flex flex-col justify-center">
          <p className="text-base leading-relaxed	">En Garúa, nos apasiona la creación de espacios arquitectónicos que reflejen la belleza y la funcionalidad en perfecta armonía. Nuestro enfoque integral abarca desde el diseño urbano hasta la construcción, brindando soluciones eficientes a una amplia gama de clientes, incluyendo marcas reconocidas, organizaciones sin fines de lucro y clientes privados.</p>
        <br />
        <p className="text-base leading-relaxed	">Nos enorgullece ser un estudio de arquitectura comprometido con la excelencia en cada proyecto que emprendemos. Nos esforzamos por comprender las necesidades y visiones de nuestros clientes, colaborando estrechamente con ellos desde la etapa conceptual hasta la ejecución final. Nos consideramos facilitadores de sueños, transformando ideas en realidades tangibles y creando experiencias memorables para aquellos que interactúan con nuestros espacios.</p>
        <br />
        <p className="text-base leading-relaxed	">Nuestra filosofía de trabajo se basa en un profundo respeto por el entorno natural y la sostenibilidad. Creemos firmemente en el diseño responsable, donde la belleza arquitectónica se fusiona con la conservación del medio ambiente. Buscamos integrar soluciones innovadoras que minimicen el impacto ambiental, aprovechando al máximo los recursos disponibles y promoviendo la eficiencia energética.</p>
        <br />
        <p className="text-base leading-relaxed	">Con un equipo altamente capacitado y experimentado en diversos campos del diseño y la construcción, Garúa se destaca por su enfoque multidisciplinario y su pasión por la excelencia. Nos enorgullece ofrecer servicios de calidad que superen las expectativas de nuestros clientes y que den vida a proyectos arquitectónicos únicos y funcionales.</p>
        <br />
        </div>
      </main>
    </Layout>
  )
}
export default Nosotros

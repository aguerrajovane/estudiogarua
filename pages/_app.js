import { DefaultSeo } from 'next-seo';
import "tw-elements/dist/css/tw-elements.min.css";

import '../app/global.css'

export default function MyApp({ Component, pageProps }) {
    return (
        <>
            <DefaultSeo
                title= "Garúa"
                description="Estudio de arquitectura, diseño urbano y construcción"
                openGraph={{
                    type: 'website',
                    locale: 'es_PA',
                    url: 'https://www.estudiogarua.com/es/',
                    siteName: 'Garúa',
                    images: [
                        {
                          url: "https://raw.githubusercontent.com/aguerrajovane/estudiogarua/main/public/images/logo.png",
                          width: 500,
                          height: 500,
                          alt: "Garúa",
                        },
                      ],
                  }}
                twitter={{
                    handle: '@estudiogarua',
                    site: 'Garúa',
                    cardType: 'summary_large_image',
                }}
            />
            
            <Component {...pageProps} />
        </>
    )
  }
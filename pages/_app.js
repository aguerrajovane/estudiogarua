import { DefaultSeo } from 'next-seo';
import { useEffect } from "react";
import TagManager from "react-gtm-module";
import "tw-elements/dist/css/tw-elements.min.css";
import '../app/global.css'

function MyApp({ Component, pageProps }) {
    const gtmId = process.env.NEXT_PUBLIC_GTM_ID;
    const tagManagerArgs = {
        gtmId,
    };

    useEffect(() => {
        TagManager.initialize(tagManagerArgs);
    }, []);

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
                          url: `${process.env.NEXT_PUBLIC_BASE_URL}/images/logo.png`,
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

export default MyApp;
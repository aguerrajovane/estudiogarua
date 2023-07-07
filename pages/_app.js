import { DefaultSeo } from 'next-seo';
import "tw-elements/dist/css/tw-elements.min.css";
import Script from 'next/script';
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
                <Script 
                    strategy="afterInteractive"
                    scr={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
                />
                <Script 
                    id="google-analytics" strategy="afterInteractive">
                        {`
                            window.dataLayer = window.dataLayer || [];
                            function gtag(){dataLayer.push(arguments);}
                            gtag('js', new Date());
                            gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
                                page_path:window.location.pathname
                            });
                        `}
                        
                </Script>,
                
            <Component {...pageProps} />
        </>
    )
  }
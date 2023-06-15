import { DefaultSeo } from 'next-seo';
import Layout from '../components/Layout.js'
import '../app/global.css'

export default function MyApp({ Component, pageProps }) {
    return (
        <Layout>
            <DefaultSeo
                title= "Garúa" 
                openGraph={{
                    type: 'website',
                    locale: 'es_PA',
                    url: 'https://www.estudiogarua.com/es/',
                    siteName: 'Garúa',
                  }}
            />
            <Component {...pageProps} />
        </Layout>
    )
  }
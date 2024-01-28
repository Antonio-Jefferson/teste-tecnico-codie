import type { AppProps } from 'next/app'
import '../styles/global.css'
import Header from '../Components/Header/Header'
import Footer from '../Components/Footer/Footer'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
       <Header />
       <Component {...pageProps} />
       <Footer />
    </>
  )
}

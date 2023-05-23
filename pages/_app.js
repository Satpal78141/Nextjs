import '@/styles/globals.css'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

export default function App({ Component, pageProps }) {
  return (
  <div  className='container m-auto' >
  <Nav />
  <Component {...pageProps} />
  <Footer />
  </div>
  )
}

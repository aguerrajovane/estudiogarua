import Navbar from '../es/Navbar.js'
import Footer from '../es/Footer.js'

export default function Layout({ children }) {
  return (
    <div>
        <Navbar />
        <main>{children}</main>
        <Footer />
    </div>
  )
}
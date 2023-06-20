import NavbarEn from '../en/NavbarEn.js'
import FooterEn from '../en/FooterEn.js'

export default function Layout({ children }) {
  return (
    <div>
        <NavbarEn />
        <main>{children}</main>
        <FooterEn />
    </div>
  )
}
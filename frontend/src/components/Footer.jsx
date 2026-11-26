import Icon from './Icon.jsx'
import Brand from './Brand.jsx'
import { ContactMethods, OfficeAddress } from './ContactDetails.jsx'
import { Link } from 'react-router-dom'
import { MAPS_DIRECTIONS_URL } from '../data/contactInfo.js'

const serviceLinks = ['Software Development', 'Web Applications', 'Mobile Applications', 'Cloud Solutions']
const pageLinks = [
  ['About us', '/about'],
  ['Services', '/services'],
  ['Industries', '/industries'],
  ['Projects', '/projects'],
  ['Contact', '/contact'],
]

function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-main">
        <div className="footer-about">
          <Link className="brand footer-brand" to="/" aria-label="Delfine India Technology home"><Brand footer /></Link>
          <p>Thoughtful technology. Meaningful progress. We help businesses move forward with purposeful digital solutions.</p>
          <div className="social-links"><Link to="/contact" aria-label="LinkedIn placeholder"><span>in</span></Link><Link to="/contact" aria-label="Instagram placeholder"><span>ig</span></Link><Link to="/contact" aria-label="Facebook placeholder"><span>f</span></Link></div>
          <small className="social-note">Social profile links to be confirmed.</small>
        </div>
        <div className="footer-column"><h3>Explore</h3>{pageLinks.map(([label, path]) => <Link to={path} key={path}>{label}</Link>)}</div>
        <div className="footer-column"><h3>Services</h3>{serviceLinks.map((item) => <Link to="/services" key={item}>{item}</Link>)}<Link to="/services">IT Consulting</Link><Link to="/services">Digital Transformation</Link></div>
        <div className="footer-column footer-contact"><h3>Find us</h3><p><OfficeAddress /></p><ContactMethods /><a className="footer-map-link" href={MAPS_DIRECTIONS_URL} target="_blank" rel="noreferrer">Get Directions <Icon name="arrowUpRight" size={14} /></a></div>
      </div>
      <div className="container footer-bottom"><span>© {new Date().getFullYear()} Delfine India Technology. All rights reserved.</span><Link to="/">Back to top ↑</Link></div>
    </footer>
  )
}

export default Footer

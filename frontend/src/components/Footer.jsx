import Icon from './Icon.jsx'
import Brand from './Brand.jsx'

const serviceLinks = ['Software Development', 'Web Applications', 'Mobile Applications', 'Cloud Solutions']

function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-main">
        <div className="footer-about">
          <a className="brand footer-brand" href="#home" aria-label="Delfine India Technology home"><Brand footer /></a>
          <p>Thoughtful technology. Meaningful progress. We help businesses move forward with purposeful digital solutions.</p>
          <div className="social-links"><a href="#contact" aria-label="LinkedIn placeholder"><span>in</span></a><a href="#contact" aria-label="Instagram placeholder"><span>ig</span></a><a href="#contact" aria-label="Facebook placeholder"><span>f</span></a></div>
          <small className="social-note">Social profile links to be confirmed.</small>
        </div>
        <div className="footer-column"><h3>Explore</h3><a href="#about">About us</a><a href="#services">Services</a><a href="#industries">Industries</a><a href="#projects">Projects</a><a href="#contact">Contact</a></div>
        <div className="footer-column"><h3>Services</h3>{serviceLinks.map((item) => <a href="#services" key={item}>{item}</a>)}<a href="#services">IT Consulting</a><a href="#services">Digital Transformation</a></div>
        <div className="footer-column footer-contact"><h3>Find us</h3><p>Office No. 105, 1st Floor, Krishnai Plaza, above Domino's Pizza, near Kakde City, Karve Nagar, Pune, Maharashtra 411052, India.</p><a href="#contact">[Phone number to be added]</a><a href="#contact">[Email address to be added]</a><a className="footer-map-link" href="https://maps.google.com/?q=Krishnai+Plaza+Karve+Nagar+Pune" target="_blank" rel="noreferrer">View location <Icon name="arrowUpRight" size={14} /></a></div>
      </div>
      <div className="container footer-bottom"><span>© {new Date().getFullYear()} Delfine India Technology. All rights reserved.</span><a href="#home">Back to top ↑</a></div>
    </footer>
  )
}

export default Footer

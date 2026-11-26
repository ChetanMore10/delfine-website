import { Contact as ContactSection } from '../components/HomeSections.jsx'
import { PageHero } from '../components/PageComponents.jsx'
import { OfficeAddress } from '../components/ContactDetails.jsx'
import Icon from '../components/Icon.jsx'
import { MAPS_DIRECTIONS_URL } from '../data/contactInfo.js'

function Contact() {
  return (
    <>
      <PageHero
        eyebrow="CONTACT DELFINE"
        title="Let’s start a conversation."
        description="Share a little about your project or challenge. Our team will be glad to hear from you."
      />
      <ContactSection showHeading={false} />
      <section className="page-location-section">
        <div className="container location-card">
          <span className="location-icon"><Icon name="compass" size={23} /></span>
          <div><span className="eyebrow">FIND OUR OFFICE</span><h2>Visit us in Pune</h2><p><OfficeAddress /></p></div>
          <a className="button button-outline" href={MAPS_DIRECTIONS_URL} target="_blank" rel="noreferrer">Get Directions <Icon name="arrowUpRight" size={16} /></a>
        </div>
      </section>
    </>
  )
}

export default Contact

import { BUSINESS_HOURS, EMAIL_ADDRESS, EMAIL_LINK, MAPS_DIRECTIONS_URL, OFFICE_ADDRESS_LINES, PHONE_LINK, PHONE_NUMBER } from '../data/contactInfo.js'

function OfficeAddress({ className = '' }) {
  return (
    <a className={`contact-info-link ${className}`} href={MAPS_DIRECTIONS_URL} target="_blank" rel="noreferrer">
      {OFFICE_ADDRESS_LINES.map((line) => <span className="contact-address-line" key={line}>{line}</span>)}
    </a>
  )
}

function BusinessHours() {
  return (
    <section className="business-hours" aria-labelledby="business-hours-heading">
      <h3 id="business-hours-heading">Business hours</h3>
      <dl>
        {BUSINESS_HOURS.map(([day, hours]) => (
          <div className="business-hours-row" key={day}>
            <dt>{day}</dt>
            <dd className={hours === 'Closed' ? 'closed' : ''}>{hours}</dd>
          </div>
        ))}
      </dl>
    </section>
  )
}

function ContactMethods() {
  return (
    <>
      <a className="contact-info-link" href={PHONE_LINK}>{PHONE_NUMBER}</a>
      <a className="contact-info-link" href={EMAIL_LINK}>{EMAIL_ADDRESS}</a>
    </>
  )
}

export { BusinessHours, ContactMethods, OfficeAddress }

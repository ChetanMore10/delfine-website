import { Link } from 'react-router-dom'
import Icon from './Icon.jsx'

function PageHero({ eyebrow, title, description }) {
  return (
    <section className="page-hero">
      <div className="container page-hero-inner">
        <span className="eyebrow"><span className="eyebrow-dot" />{eyebrow}</span>
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
    </section>
  )
}

function PageCTA({ title, text, buttonText = 'Get in Touch' }) {
  return (
    <section className="page-cta">
      <div className="container page-cta-inner">
        <div><h2>{title}</h2><p>{text}</p></div>
        <Link className="button button-light" to="/contact">{buttonText}<Icon name="arrowUpRight" size={17} /></Link>
      </div>
    </section>
  )
}

function InfoCard({ icon, title, description }) {
  return (
    <article className="page-info-card">
      <span className="icon-tile"><Icon name={icon} /></span>
      <h3>{title}</h3>
      <p>{description}</p>
    </article>
  )
}

export { InfoCard, PageCTA, PageHero }

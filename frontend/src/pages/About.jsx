import { Link } from 'react-router-dom'
import Icon from '../components/Icon.jsx'
import { PageCTA, PageHero } from '../components/PageComponents.jsx'
import { WhyChooseUs } from '../components/HomeSections.jsx'

const values = [
  { icon: 'heart', title: 'People first', description: 'We listen carefully and build relationships based on respect, clarity, and collaboration.' },
  { icon: 'check', title: 'Quality in the details', description: 'We care about the reliability, usability, and craftsmanship of the work we deliver.' },
  { icon: 'sparkles', title: 'Curious by nature', description: 'We stay open to new ideas and thoughtful ways to solve meaningful problems.' },
  { icon: 'support', title: 'Dependable partnership', description: 'We aim to communicate openly and support progress at every step.' },
]

function About() {
  return (
    <>
      <PageHero
        eyebrow="ABOUT DELFINE"
        title="Technology should move business forward."
        description="We partner with businesses to turn ideas into practical digital solutions, built around the people who use them."
      />
      <section className="page-section">
        <div className="container about-intro">
          <div>
            <span className="eyebrow">WHO WE ARE</span>
            <h2>A thoughtful technology partner for your next chapter.</h2>
          </div>
          <div className="about-copy">
            <p>Delfine India Technology works with organizations to shape useful, reliable digital experiences. We bring together engineering, design thinking, and practical collaboration to help address real business needs.</p>
            <p>Our company story and milestones will be shared here as verified details are confirmed. For now, our focus is on listening, building with care, and helping teams make confident progress.</p>
            <Link className="text-link" to="/contact">Talk with our team <Icon name="arrowUpRight" size={17} /></Link>
          </div>
        </div>
      </section>
      <section className="page-section page-section-muted">
        <div className="container mission-grid">
          <article className="mission-card"><span className="eyebrow">OUR MISSION</span><h2>Make technology useful, thoughtful, and accessible to the teams it serves.</h2><p>We work to understand the challenge first, then deliver solutions with purpose and care.</p></article>
          <article className="mission-card mission-card-blue"><span className="eyebrow">OUR VISION</span><h2>Help businesses move confidently into a more connected digital future.</h2><p>This is an aspirational statement, not a claim of a completed achievement.</p></article>
        </div>
      </section>
      <section className="page-section">
        <div className="container">
          <div className="page-section-heading"><span className="eyebrow">WHAT GUIDES US</span><h2>Values behind the work</h2><p>Principles that shape how we approach each conversation and solution.</p></div>
          <div className="page-card-grid page-card-grid-four">{values.map((value) => <article className="page-info-card" key={value.title}><span className="icon-tile"><Icon name={value.icon} /></span><h3>{value.title}</h3><p>{value.description}</p></article>)}</div>
        </div>
      </section>
      <WhyChooseUs />
      <PageCTA title="Let’s explore what we can build together." text="Share your idea or challenge, and start a conversation with our team." />
    </>
  )
}

export default About

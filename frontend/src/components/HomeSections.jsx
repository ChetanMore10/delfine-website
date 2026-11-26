import { useState } from 'react'
import { Link } from 'react-router-dom'
import Icon from './Icon.jsx'
import { BusinessHours, ContactMethods, OfficeAddress } from './ContactDetails.jsx'
import { industries, projects } from '../data/homepageData.js'

const services = [
  { icon: 'code', title: 'Software Development', text: 'Purpose-built software designed around your workflows, goals, and future growth.' },
  { icon: 'monitor', title: 'Web Applications', text: 'Fast, intuitive web experiences that make complex work feel simple.' },
  { icon: 'phone', title: 'Mobile Applications', text: 'Thoughtful mobile products that keep your customers connected on the go.' },
  { icon: 'globe', title: 'Cloud Solutions', text: 'Flexible cloud foundations built for resilience, performance, and scale.' },
  { icon: 'compass', title: 'IT Consulting', text: 'Clear technical direction to help you make confident, future-ready decisions.' },
  { icon: 'sparkles', title: 'Digital Transformation', text: 'Modernize processes and unlock better ways of working with technology.' },
]

const benefits = [
  ['Experienced professionals', 'A collaborative team bringing practical knowledge to every stage of your project.'],
  ['Quality-focused development', 'Careful engineering and thoughtful testing help deliver dependable products.'],
  ['Customer-centric approach', 'Your people, priorities, and outcomes guide how we shape each solution.'],
  ['Innovative thinking', 'We explore modern tools and approaches to solve real business challenges.'],
  ['Reliable support', 'A committed partner to help your solutions keep moving forward.'],
]

function SectionHeading({ eyebrow, title, text, centered = false }) {
  return (
    <div className={`section-heading${centered ? ' centered' : ''}`}>
      <span className="eyebrow">{eyebrow}</span>
      <h2>{title}</h2>
      {text && <p>{text}</p>}
    </div>
  )
}

function Hero() {
  return (
    <section className="hero-section" id="home">
      <div className="hero-grid-pattern" aria-hidden="true" />
      <div className="container hero-layout">
        <div className="hero-copy">
          <span className="eyebrow"><span className="eyebrow-dot" /> TECHNOLOGY WITH PURPOSE</span>
          <h1>Building what’s next, <span>together.</span></h1>
          <p>We help ambitious businesses turn bold ideas into thoughtful digital solutions—built for today and ready for what comes next.</p>
          <div className="hero-actions">
            <a className="button button-primary" href="#services">Explore Our Services <Icon name="arrow" size={17} /></a>
            <a className="button button-outline" href="#contact">Contact Us</a>
          </div>
          <div className="hero-note"><span className="note-line" /> A technology partner for your next chapter</div>
        </div>
        <div className="hero-visual" aria-label="Abstract technology network illustration" role="img">
          <div className="visual-orbit orbit-one" /><div className="visual-orbit orbit-two" />
          <div className="visual-glow" />
          <div className="visual-core"><span className="core-symbol">D</span><span className="core-caption">DIGITAL<br />POSSIBILITY</span></div>
          <div className="visual-node node-code"><Icon name="code" size={23} /></div>
          <div className="visual-node node-cloud"><Icon name="globe" size={23} /></div>
          <div className="visual-node node-data"><Icon name="layers" size={23} /></div>
          <div className="visual-node node-spark"><Icon name="sparkles" size={21} /></div>
          <div className="visual-label label-top">IDEAS INTO IMPACT <span>↗</span></div>
          <div className="visual-label label-bottom"><span className="status-dot" /> BUILT AROUND YOU</div>
          <div className="visual-cross cross-one">+</div><div className="visual-cross cross-two">+</div>
        </div>
      </div>
      <div className="container hero-bottom">
        <span>YOUR IDEAS, ENGINEERED FOR TOMORROW</span>
        <a href="#about">Discover Delfine <Icon name="arrow" size={15} /></a>
      </div>
    </section>
  )
}

function CompanyIntro() {
  return (
    <section className="intro-section section-pad" id="about">
      <div className="container intro-layout">
        <div className="intro-art">
          <div className="intro-art-grid" />
          <div className="intro-art-card"><span className="intro-card-mark"><Icon name="sparkles" size={28} /></span><strong>People first.<br />Technology forward.</strong><span>DELFINE INDIA TECHNOLOGY</span></div>
          <div className="intro-art-caption"><span className="caption-dot" /> IDEAS, MEET EXECUTION</div>
        </div>
        <div className="intro-copy">
          <SectionHeading eyebrow="A LITTLE ABOUT US" title={<>Technology should move<br className="desktop-break" /> your business forward.</>} />
          <p>Delfine India Technology partners with businesses to create practical, purposeful digital solutions. From the first conversation to the final details, we bring people and technology together to make progress feel possible.</p>
          <p>Whether you are building something new or improving what already works, we focus on understanding your needs and shaping a solution that fits.</p>
          <Link className="text-link" to="/about">Learn More <Icon name="arrowUpRight" size={17} /></Link>
        </div>
      </div>
    </section>
  )
}

function Services() {
  return (
    <section className="services-section section-pad" id="services">
      <div className="container">
        <SectionHeading centered eyebrow="WHAT WE DO" title="Solutions built around your ambition" text="From a single idea to a complete digital ecosystem, we bring the right expertise to help you move forward." />
        <div className="service-grid">
          {services.map((service, index) => (
            <article className="service-card" key={service.title}>
              <div className="service-card-top"><span className="icon-tile"><Icon name={service.icon} /></span><span className="card-index">0{index + 1}</span></div>
              <h3>{service.title}</h3><p>{service.text}</p>
              <Link to="/contact" aria-label={`Discuss ${service.title}`}><Icon name="arrowUpRight" size={18} /></Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function WhyChooseUs() {
  return (
    <section className="why-section section-pad">
      <div className="container why-layout">
        <div className="why-copy">
          <SectionHeading eyebrow="THE DELFINE DIFFERENCE" title={<>Good technology starts<br className="desktop-break" /> with good partnership.</>} text="We believe the best outcomes come from listening closely, working openly, and caring about the details." />
          <Link className="button button-primary" to="/contact">Let’s work together <Icon name="arrowUpRight" size={16} /></Link>
        </div>
        <div className="benefit-list">
          {benefits.map(([title, text], index) => (
            <div className="benefit-item" key={title}>
              <span className="benefit-number">0{index + 1}</span><div><h3>{title}</h3><p>{text}</p></div><Icon className="benefit-check" name="check" size={20} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Statistics() {
  return (
    <section className="stats-section">
      <div className="container stats-inner">
        <div className="stats-intro"><span className="eyebrow">OUR JOURNEY, IN NUMBERS</span><h2>Progress worth<br />measuring.</h2><p>These are editable placeholders—not verified company statistics.</p></div>
        <div className="stat-item"><strong>[XX]+</strong><span>Projects delivered</span><small>PLACEHOLDER</small></div>
        <div className="stat-item"><strong>[XX]</strong><span>Team members</span><small>PLACEHOLDER</small></div>
        <div className="stat-item"><strong>[XX]+</strong><span>Client partnerships</span><small>PLACEHOLDER</small></div>
      </div>
    </section>
  )
}

function Industries() {
  return (
    <section className="industries-section section-pad" id="industries">
      <div className="container">
        <SectionHeading eyebrow="INDUSTRIES WE SERVE" title="Technology for every kind of progress" text="We shape digital solutions for the distinct challenges and opportunities across a range of industries." />
        <div className="industry-grid">
          {industries.map((industry) => (
            <article className="industry-card" key={industry.title}><span className="industry-icon"><Icon name={industry.icon} size={23} /></span><div><h3>{industry.title}</h3><p>{industry.text}</p></div><Icon className="industry-arrow" name="arrowUpRight" size={17} /></article>
          ))}
        </div>
      </div>
    </section>
  )
}

function Projects() {
  return (
    <section className="projects-section section-pad" id="projects">
      <div className="container">
        <div className="projects-heading"><SectionHeading eyebrow="SELECTED WORK" title="A glimpse of what’s possible" text="Concept projects shown for layout demonstration. These are placeholders, not Delfine client engagements." /><a className="text-link project-link" href="#contact">Start a project <Icon name="arrowUpRight" size={17} /></a></div>
        <div className="project-grid">
          {projects.map((project) => (
            <article className="project-card" key={project.title}>
              <div className={`project-art ${project.color}`}><div className="project-art-window"><div className="window-bar"><span /><span /><span /></div><div className="window-content"><span className="window-line line-long" /><span className="window-line line-short" /><div className="window-blocks"><span /><span /><span /></div><div className="window-chart"><span /><span /><span /><span /><span /><span /><span /></div></div></div><div className="project-art-icon"><Icon name={project.icon} size={23} /></div><span className="concept-label">SAMPLE CONCEPT</span></div>
              <div className="project-info"><span className="project-tag">{project.tag}</span><h3>{project.title}</h3><p>{project.text}</p><a href="#contact" aria-label={`Discuss a project like ${project.title}`}><Icon name="arrowUpRight" size={17} /></a></div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function Testimonials() {
  return (
    <section className="testimonial-section section-pad">
      <div className="container testimonial-layout">
        <div className="testimonial-heading"><SectionHeading eyebrow="A NOTE ON TESTIMONIALS" title="Trust is built through real experiences." text="We value the people we work with. Authentic customer stories will appear here once they are available and approved." /></div>
        <div className="testimonial-placeholder"><span className="quote-mark">“</span><p>Sample testimonial content will be added here after receiving approval from a real customer.</p><div className="sample-profile"><span className="profile-placeholder">S</span><span><strong>Sample content</strong><small>Placeholder · Not a customer quote</small></span></div><span className="sample-stamp">SAMPLE UI</span></div>
      </div>
    </section>
  )
}

function CallToAction() {
  return (
    <section className="cta-section">
      <div className="container cta-inner"><div><span className="eyebrow">READY WHEN YOU ARE</span><h2>Have a big idea?<br /><span>Let’s make it real.</span></h2><p>Tell us what you’re working on. We’d love to explore what we can build together.</p></div><a className="button button-light" href="#contact">Discuss Your Project <Icon name="arrowUpRight" size={17} /></a><div className="cta-orb" aria-hidden="true" /></div>
    </section>
  )
}

function Contact({ showHeading = true }) {
  const [formMessage, setFormMessage] = useState('')

  function handleSubmit(event) {
    event.preventDefault()
    setFormMessage('Thanks for your interest. This demo form does not send or store messages yet. Please contact us by phone or email.')
  }

  return (
    <section className="contact-section section-pad" id="contact">
      <div className="container contact-layout">
        <div className="contact-copy">{showHeading && <SectionHeading eyebrow="GET IN TOUCH" title="Let’s start a conversation." text="Share a little about your project or challenge. Our team will be glad to hear from you." />}<div className="contact-detail"><span className="contact-detail-icon"><Icon name="compass" size={20} /></span><div><strong>Visit our office</strong><p><OfficeAddress /></p></div></div><div className="contact-detail"><span className="contact-detail-icon"><Icon name="support" size={20} /></span><div><strong>Phone & email</strong><p className="contact-methods"><ContactMethods /></p></div></div><BusinessHours /></div>
        <form className="contact-form" id="contact-form" onSubmit={handleSubmit}>
          <div className="form-heading"><h3>Tell us about your project</h3><p>Fields marked with * are required.</p></div>
          <div className="form-row"><label>Name *<input autoComplete="name" name="name" placeholder="Your name" required /></label><label>Email *<input autoComplete="email" name="email" placeholder="you@company.com" required type="email" /></label></div>
          <div className="form-row"><label>Phone<input autoComplete="tel" name="phone" placeholder="Your phone number (optional)" type="tel" /></label><label>Subject *<input name="subject" placeholder="How can we help?" required /></label></div>
          <label>Message *<textarea name="message" placeholder="A few details about what you have in mind..." required rows="4" /></label>
          <button className="button button-primary form-submit" type="submit">Send Message <Icon name="arrowUpRight" size={16} /></button>
          <p className="form-note">Frontend demo only — your message is not sent or stored.</p>
          <p className="form-feedback" role="status" aria-live="polite">{formMessage}</p>
        </form>
      </div>
    </section>
  )
}

export { CallToAction, CompanyIntro, Contact, Hero, Industries, Projects, Services, Statistics, Testimonials, WhyChooseUs }

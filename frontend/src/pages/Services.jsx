import { Services as ServicesSection } from '../components/HomeSections.jsx'
import { PageCTA, PageHero } from '../components/PageComponents.jsx'

function Services() {
  return (
    <>
      <PageHero
        eyebrow="OUR SERVICES"
        title="Digital solutions for real-world needs."
        description="From software and applications to cloud and consulting, we help turn business goals into thoughtful technology."
      />
      <section className="page-intro-strip">
        <div className="container"><p>Choose the support that fits your next step. Our services can work independently or come together as a broader digital solution.</p></div>
      </section>
      <ServicesSection />
      <section className="page-section page-process-section">
        <div className="container process-layout">
          <div className="page-section-heading"><span className="eyebrow">HOW WE WORK</span><h2>Clear steps, collaborative delivery.</h2><p>We keep the process focused on shared understanding and useful outcomes.</p></div>
          <div className="process-steps">
            {['Understand your goals', 'Shape the right approach', 'Build and refine together', 'Support what comes next'].map((step, index) => <div className="process-step" key={step}><span>0{index + 1}</span><h3>{step}</h3></div>)}
          </div>
        </div>
      </section>
      <PageCTA title="Have a challenge in mind?" text="Let’s discuss the right service or combination of services for your project." buttonText="Discuss Your Project" />
    </>
  )
}

export default Services

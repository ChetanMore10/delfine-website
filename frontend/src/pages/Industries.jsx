import { industries } from '../data/homepageData.js'
import { InfoCard, PageCTA, PageHero } from '../components/PageComponents.jsx'

function Industries() {
  return (
    <>
      <PageHero
        eyebrow="INDUSTRIES WE SERVE"
        title="Technology shaped around your industry."
        description="Every sector has its own needs. We work to understand the context and create digital solutions that fit."
      />
      <section className="page-section">
        <div className="container">
          <div className="page-section-heading"><span className="eyebrow">INDUSTRY PERSPECTIVES</span><h2>Built with your context in mind</h2><p>These are areas we can support with technology solutions; specific client engagements are not implied.</p></div>
          <div className="page-card-grid page-card-grid-three">{industries.map((industry) => <InfoCard key={industry.title} icon={industry.icon} title={industry.title} description={industry.text} />)}</div>
        </div>
      </section>
      <PageCTA title="Let’s understand your industry challenge." text="Tell us what your team needs to achieve, and we can explore possible approaches." />
    </>
  )
}

export default Industries

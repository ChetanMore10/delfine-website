import { projects } from '../data/homepageData.js'
import Icon from '../components/Icon.jsx'
import { PageCTA, PageHero } from '../components/PageComponents.jsx'

function Projects() {
  return (
    <>
      <PageHero
        eyebrow="PROJECTS & PORTFOLIO"
        title="A glimpse of what’s possible."
        description="Explore sample concepts that show how digital solutions can address different kinds of business needs."
      />
      <section className="page-section">
        <div className="container">
          <div className="project-notice"><Icon name="sparkles" size={19} /><p>All projects shown here are sample concepts for demonstration only. They are not represented as Delfine India Technology client work.</p></div>
          <div className="portfolio-grid">
            {projects.map((project) => (
              <article className="portfolio-card" key={project.title}>
                <div className={`portfolio-art ${project.color}`}><span className="portfolio-icon"><Icon name={project.icon} size={27} /></span><span className="portfolio-label">SAMPLE CONCEPT</span></div>
                <div className="portfolio-copy"><span className="project-tag">{project.tag}</span><h2>{project.title}</h2><p>{project.text}</p><h3>Example technologies</h3><div className="technology-list">{project.technologies.map((technology) => <span key={technology}>{technology}</span>)}</div></div>
              </article>
            ))}
          </div>
        </div>
      </section>
      <PageCTA title="Have a project in mind?" text="Let’s talk about your goals and explore a solution that fits." buttonText="Start a Conversation" />
    </>
  )
}

export default Projects

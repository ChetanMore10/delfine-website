import { Link } from 'react-router-dom'
import { PageHero } from '../components/PageComponents.jsx'

function NotFound() {
  return (
    <section className="not-found-page">
      <PageHero
        eyebrow="PAGE NOT FOUND"
        title="This page isn’t here."
        description="The page may have moved, or the address may be incorrect."
      />
      <div className="container not-found-link"><Link className="button button-primary" to="/">Return to Home</Link></div>
    </section>
  )
}

export default NotFound

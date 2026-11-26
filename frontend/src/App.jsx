import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import {
  CallToAction,
  CompanyIntro,
  Contact,
  Hero,
  Industries,
  Projects,
  Services,
  Statistics,
  Testimonials,
  WhyChooseUs,
} from './components/HomeSections.jsx'
import './App.css'

function App() {
  return (
    <>
      <a className="skip-link" href="#main-content">Skip to content</a>
      <Navbar />
      <main id="main-content">
        <Hero />
        <CompanyIntro />
        <Services />
        <WhyChooseUs />
        <Statistics />
        <Industries />
        <Projects />
        <Testimonials />
        <CallToAction />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App

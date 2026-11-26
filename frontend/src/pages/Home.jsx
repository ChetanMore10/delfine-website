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
} from '../components/HomeSections.jsx'

function Home() {
  return (
    <>
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
    </>
  )
}

export default Home

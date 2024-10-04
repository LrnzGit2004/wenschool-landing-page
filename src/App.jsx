import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Program from './components/programs/program'
import Title from './components/Title/Title'
import About from './components/About/About'
import Testimonials from './components/Testimonials/Testimonials'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import Marquee from './components/Marquee/Marquee'

const App = () => {

  return (
    <div>
     <Navbar/> 
     <Marquee/>
     <Hero/>
     <div className="container">
        <Title subTitle='Nos Services' title ='La solution offre les services suivants'/>
        <Program/>
        <About />
        <Title subTitle='Témoignages' title ='Ce que disent nos clients'/>
        <Testimonials/>
        <Title subTitle='Contactez-nous' title='Besoins de plus de renseignements ?'/>
        <Contact/>
        <Footer/>
    </div>
    </div>
  )
}

export default App

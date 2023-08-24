import React from 'react'
import { createRoot } from 'react-dom/client'
import './style.css'
import Header from './components/Header'
import Welcome from './components/Welcome'
import AboutUs from './components/AboutUs'
import OurServices from './components/OurServices'
import OverView from './components/OverView'
import OurWork from './components/OurWork'
import WhyUs from './components/WhyUs'
import Testimonials from './components/Testimonials'
import GetInTouch from './components/GetInTouch'
import Footer from './components/Footer'

function App() {
  return (
    <div>
      <Header className="pt-8 pb-2 navigation" />
      <Welcome />
      <AboutUs />
      <OurServices />
      <OverView />
      <OurWork className="mt-28" />
      <WhyUs className="mt-28 mx-60" />
      <Testimonials className="mt-48" />
      <GetInTouch />
      <Footer />
    </div>
  )
}

const root = createRoot(document.getElementById('root') as HTMLElement)

root.render(<App />)

import { useState } from 'react'
import NavBar from "./components/NavBar"
import HeroSection from "./sections/HeroSection"
import MessageSection from "./sections/MessageSection"
import FlavorSection from "./sections/FlavorSection"
import './App.css'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ScrollSmoother } from 'gsap/all'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import NutritionSection from './sections/NutritionSection'
import BenefitSection from "./sections/BenefitSection"
import TestimonialSection from './sections/TestimonialSection'
import FooterSection from './sections/FooterSection'
gsap.registerPlugin(ScrollTrigger,ScrollSmoother)

function App() {
   useGSAP(()=>{
    ScrollSmoother.create({
      smooth:3,
      effects:true,
    })
   })

  return (
    <>
      <main >
        <NavBar/>
        <div className="smooth-wrapper">
          <div id="smooth-content">
            <HeroSection/>
            <MessageSection/>
            <FlavorSection/>
            <NutritionSection/>
            <div>
              <BenefitSection/>
              <TestimonialSection/>
            </div>
            <FooterSection/>
          </div>
        </div>
        
      </main>
      
    </>
  )
}

export default App

import { useState } from 'react'
import NavBar from "./components/NavBar"
import HeroSection from "./sections/HeroSection"
import MessageSection from "./sections/MessageSection"
import FlavorSection from "./sections/FlavorSection"
import './App.css'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import gsap from 'gsap'

gsap.registerPlugin(ScrollTrigger)

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div >
        <NavBar/>
        <HeroSection/>
        <MessageSection/>
        <FlavorSection/>
        <div className="h-[100dvh] border border-red-500 border-[0.2vw]"></div>
      </div>
      
    </>
  )
}

export default App

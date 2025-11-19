import { useState } from 'react'
import './App.css'
import useEvents from './hooks/hook'
import Header from "./Components/Header"
import Section1 from "./Components/Section1"
import Section2 from "./Components/Section2"
import Section3 from "./Components/Section3"
import Section4 from "./Components/Section4"
import Footer from "./Components/Footer"
import FormSection from "./Components/FormSection"
import Ring from './ring/RIng'


function App() {

  return (
    <>
      <div>
        <Header />
        <Section1 />
        <Section2 />
        <Section3 />
        <Section4 />
        <Ring />
        <FormSection />
        <Footer />

      </div>
        
    </>
  )
}

export {App}

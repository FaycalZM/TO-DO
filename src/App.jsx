import { useState } from 'react'
import './App.css'
import HeroSection from './components/HeroSection'
import MainContainer from './components/MainContainer'

function App() {


  return (
    <div className='main-page max-w-[100vw] min-w-[100vw] h-fit font-Josefin-sans bg-very-light-gray'>
      <HeroSection />
      <MainContainer />
    </div>
  )
}

export default App

import { useState } from 'react'
import './App.css'
import HeroSection from './components/HeroSection'
import MainContainer from './components/MainContainer'

function App() {


  return (
    <div className='main-page max-w-[100vw] min-w-[100vw] min-h-screen h-fit'>
      <HeroSection />
      <MainContainer />
    </div>
  )
}

export default App

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/pages/Navbar'
import Home from './components/pages/Home'
import Hero from './components/pages/Hero'
import Footer from './components/pages/Footer'

function App() {
 

  return (
    <>
    <div className='flex flex-col items-center justify-center'>
    <Navbar data="Hello, Welcome to the Navbar"/>
    <Home data2="Welcome to the Home page"/>

    <Hero data3="Welcome to the Hero Section"/>
    <Footer data4="Welcome to Footer"/>
    </div>
    </>
  )
}

export default App

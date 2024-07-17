import React from 'react'
import Header from './components/Header'
import Home from './components/Home'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Education from './components/Education'
const MainPage = () => {
  return (
    <div>
      <Header/>
      <Home/>
      <About/>
      <Skills/>
      <Projects/>
      <Education/>
    </div>
  )
}

export default MainPage

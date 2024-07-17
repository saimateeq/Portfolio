import React from 'react'
import { HashRouter , Route , Routes } from "react-router-dom"
import MainPage from './components/MainPage'
const App = () => {
  return (
    <HashRouter>
    <Routes >
      <Route path='/' Component={MainPage}/>
      </Routes>
    </HashRouter>
  )
}

export default App

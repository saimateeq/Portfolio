import React, { useEffect, useState } from 'react'
import { Link as ScrollLink} from 'react-scroll';
import "../App.css"
const Header = () => {
  const [Navbar, setNavbar] = useState({
    "Home": true,
    "About": false,
    "Skills": false,
    "Projects": false,
    "Education": false,
  })
  const NavbarClass = "mr-5 hover:text-gray-900 cursor-pointer"
  const NavbarClassActive = "border-b-blue-600 border-b-2 mr-5 text-blue-600 text-lg cursor-pointer"
  const UpdateNavbar = (ClickedKey) => {
    const updatedObject = { ...Navbar }
    Object.keys(Navbar).forEach(key => {
      if (ClickedKey === key) {
        updatedObject[key] = true
      } else {
        updatedObject[key] = false
      }
    })
    setNavbar(updatedObject)
  }
  useEffect(()=>{
  const PageScroll = () => {
      const PagePosition = window.scrollY
      if(PagePosition<372){
        UpdateNavbar("Home")
      }else if (PagePosition<1109){
        UpdateNavbar("About")
      }else if (PagePosition<1723){
        UpdateNavbar("Skills")
      }else if(PagePosition<2430){
        UpdateNavbar("Projects")
      }else{
        UpdateNavbar("Education")
      }
  }
    window.addEventListener("scroll",PageScroll)
    },[])
  return (
    <header className=" z-10 text-gray-600 font-bold body-font bg-white header fixed w-full top-0 left-0">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center list-none">
        <a className="flex title-font font-medium items-center text-gray-700 mb-4 md:mb-0">
          <span className="ml-3 text-xl text-blue-800 font-bold" >Portfolio</span>
        </a>
        <nav className=" md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400	flex flex-wrap items-center text-base justify-center">
          <li className={Navbar?.Home ? NavbarClassActive : NavbarClass} >
            <ScrollLink to='home' smooth={true} duration={500} onClick={() => { UpdateNavbar("Home") }}>
              Home
            </ScrollLink></li>
          <li className={Navbar?.About ? NavbarClassActive : NavbarClass} >
            <ScrollLink to='about' smooth={true} duration={500} onClick={() => { UpdateNavbar("About") }}>
              About
            </ScrollLink></li>
          <li className={Navbar?.Skills ? NavbarClassActive : NavbarClass} >
            <ScrollLink to='skills' smooth={true} duration={500} onClick={() => { UpdateNavbar("Skills") }}>
              Skills
            </ScrollLink></li>
          <li className={Navbar?.Projects ? NavbarClassActive : NavbarClass} >
            <ScrollLink to='projects' smooth={true} duration={500} onClick={() => { UpdateNavbar("Projects") }}>
              Projects
            </ScrollLink></li>
          <li className={Navbar?.Education ? NavbarClassActive : NavbarClass} >
            <ScrollLink to='education' smooth={true} duration={500} onClick={() => { UpdateNavbar("Education") }}>
              Education
            </ScrollLink></li>
        </nav>
      </div>
    </header>

  )
}
export default Header

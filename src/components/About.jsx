import React from 'react'
import { Link as ScrollLink } from 'react-scroll';
import AboutLogo from "../images/about.jpg"
const About = () => {
  return (
    <div id='about' className='pt-20 '>
      <section className="text-gray-600 body-font flex flex-col justify-center">
        <h1 className='m-auto text-5xl text-black font-bold'>About Me</h1>
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
            <img
              className=""
              alt="hero"
              src={AboutLogo}
            />
          </div>
          <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <h1 className="title-font sm:text-4xl text-2xl mb-4 font-bold text-gray-900 ">
              Iam Saim,
              <br className="hidden lg:inline-block " />
              <span className='text-lg '>
                Front-end Developer | React Developer
              </span>
            </h1>
            <p className="mb-8 leading-relaxed">
              React developer with a strong foundation in front-end development and a keen eye
              for detail. Expert in developing functional and user-friendly web applications using
              modern JavaScript frameworks. It demonstrates a quick learning and adaptability,
              with a keenness to continuously improve and stay abreast of the latest industry
              trends. Looking for an opportunity to apply my skills and contribute to dynamic
              projects in a collaborative team environment.
            </p>
            <div className="flex justify-center">
              <ScrollLink to='skills' smooth={true} duration={500} className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg" >
                Skills
              </ScrollLink>
            </div>
          </div>
        </div>
      </section>
    </div>

  )
}

export default About

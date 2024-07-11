import React from 'react'
import PortfolioLogo from '../images/portfolio.png'
import QuizAppLogo from '../images/QuizAppLogo.png'
import ChattingAppLogo from '../images/ChatAppLogo.png'

const Projects = () => {
  const array = [
    {Logo : QuizAppLogo, Heading : "Quiz App", Description : "Quiz App that allows you to create your own Quiz or you can join Quiz by its unique passcode. This Quiz App is made by using React JS , Tailwind CSS & Firebase Realtime Database",DemoLink:"https://saimateeq.github.io/QuizApp/",CodeLink:"https://github.com/saimateeq/QuizApp"},
    {Logo : ChattingAppLogo, Heading : "Chatting App", Description : "A simple Chatting App created with React JS , Tailwind CSS  & Firebase RealTime Database. This app allows you to search different users , send message & also cantains features like deleting message or editing it",DemoLink:"https://saimateeq.github.io/ChattingApp/",CodeLink:"https://github.com/saimateeq/ChattingApp"},
    {Logo : PortfolioLogo, Heading : "Portfolio", Description : "My portfolio made with React JS & Tailwind CSS",DemoLink:"https://saimateeq.github.io/Portfolio/",CodeLink:"https://github.com/saimateeq/Portfolio"}
  ]
  return (
    <section id='projects' className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto flex flex-col justify-center">
    <div className="flex flex-col text-center w-full mb-20">
      <h1 className="text-4xl font-bold font-serif title-font mb-1 text-blue-800 tracking-widest">
        My Projects
      </h1>
      <h2 className='text-gray-600 font-serif text-lg'>Here are my few projects</h2>
    </div>
    <div className="flex flex-wrap -m-4">
      {array.map((value , index )=> {
        return(
      <div key={index} className="p-4 lg:w-1/2">
        <div className="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
          <img
            alt="team"
            className="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4"
            src={value.Logo}
          />
          <div className="flex-grow sm:pl-8">
            <h2 className="title-font font-bold text-xl text-gray-900 mb-3">
             {value.Heading}
            </h2>
            <h3 className="text-gray-500 mb-3">{value.Description}</h3>
           <div className='flex flex-row justify-center gap-3'>
            <a href={value.DemoLink} className='py-2 px-4 bg-cyan-500 rounded-lg font-bold text-white'><i class="bi bi-laptop"></i> Demo</a>
            <a href={value.CodeLink} className='py-2 px-4 bg-cyan-500 rounded-lg font-bold text-white'><i class="bi bi-code-slash"></i> Code</a>
           </div>
          </div>
        </div>
      </div>
        )
      })}
    </div>
    <p className='font-bold text-gray-500 text-center mb-2'>Visit my github page to see my all projects</p>
      <a href='https://github.com/saimateeq' className=' text-center py-2 w-28 m-auto font-bold text-white rounded-lg bg-blue-500'><i class="bi bi-github"></i> Github</a>
  </div>
</section>

  )
}

export default Projects

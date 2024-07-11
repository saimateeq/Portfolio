import React from 'react'

const Education = () => {
  return (
    <section id='education' className="body-font">
  <div className="container px-5 py-24 mx-auto flex flex-col items-center">
    <h1 className="text-4xl font-bold font-serif title-font mb-10 text-blue-800 tracking-widest">Education</h1>

    <div className="flex items-center lg:w-3/5 mx-auto border-b pb-10 mb-10 border-gray-800 sm:flex-row flex-col">
      <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
        <h2 className="text-xl title-font font-bold mb-2">
          DM School System
        </h2>
        <p className="font-medium text-md">
         Matriculation from DM School System KAECHS Karachi 
        </p>
        <p className="font-bold text-md">
         2020 - 2022
        </p>
      </div>
    </div>
    <div className="flex items-center lg:w-3/5 mx-auto border-b pb-10 mb-10 border-gray-800 sm:flex-row flex-col">
      <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
      <h2 className="text-xl title-font font-bold mb-2">
          Islamia Govt Science Collage
        </h2>
        <p className="font-medium text-md">
         Intermediate Education from Islamia Govt Science Collage North Nazaimabad Karachi  
        </p>
        <p className="font-bold text-md">
         2022 - 2024
        </p>
      </div>
    </div>
    <div className="flex items-center lg:w-3/5 mx-auto sm:flex-row flex-col">
      <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
      <h2 className="text-xl title-font font-bold mb-2">
          Techzone SFC 
        </h2>
        <p className="font-medium text-md">
         Front-end Development Course from Techzone SFC Karachi 
        </p>
        <p className="font-bold text-md">
         Aug 2023 - Feb 2024
        </p>
      </div>
    </div>
  </div>
</section>
  )
}

export default Education

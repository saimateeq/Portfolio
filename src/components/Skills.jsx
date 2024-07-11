import React, { useState } from 'react'
const Skill = ({ SkillName, SkillPer, SkillWidth }) => {
    return (
        <div className='skill bg-white h-fit p-3 md:m-0 m-auto w-4/5 md:w-1/3 lg:w-3/12'>
            <h1 className='font-1xl font-bold'>{SkillName}</h1>
            <p className='font-medium text-gray-600 float-right'>{SkillPer}</p>
            <br />
            <div className="level bg-gray-500 w-11/12 h-2 m-auto rounded-md">
                <div className={`${SkillWidth} bg-green-500  h-full rounded-md `}></div>
            </div>
        </div>
    )
}
const Skills = () => {
    const [SkillsArray, setSkillsArray] = useState([
        ["HTML", "100%", "w-full"],
        ["CSS 3", "80%", "w-3/4"],
        ["JavaScript", "90%", "w-5/6"],
        ["Bootstrap", "50%", "w-1/2"],
        ["Tailwind CSS", "80%", "w-3/4"],
        ["React JS", "90%", "w-5/6"],
        ["Firebase", "60%", "w-3/5"],
        ["UI/UX design", "70%", "w-2/3"]
    ])
    return (
        <div id='skills' className='pt-20 bg-white'>
            <div  className='container bg-blue-900 flex justify-center m-auto  flex-col items-center p-8 w-full'>
                <h1 className='font-bold text-4xl text-white font-serif text-center'>Skills & <span className='text-yellow-400 '>Abilities</span></h1>
                <div className=" mt-12 skills w-11/12 flex flex-col flex-wrap m-auto justify-center gap-12 md:flex-row ">
                    {SkillsArray.map((value,index) => {
                        return (
                            <Skill key={index} SkillName={value[0]} SkillPer={value[1]} SkillWidth={value[2]} />
                        )
                    })}
                </div>
            </div>
        </div>
    )
}
export default Skills
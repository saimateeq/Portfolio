import React from 'react'
import "../App.css"

const Background = () => {
  return (
    <div className='background bg-slate-300 fixed  top-20 left-0 w-full h-full -z-10'>
        <div className='squares flex flex-wrap w-4/5 h-4/5 m-auto justify-center '>
            <div className="design w-20 h-20 "></div>
        </div>

        
    </div>
  )
}

export default Background

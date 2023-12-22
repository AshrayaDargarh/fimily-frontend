import React, { useState } from 'react'
import PreregisterModel from './PreregisterModel'

const LandingPage = () => {
    const [isOpen,setIsOpen]=useState(false)
  return (
    <div className='flex flex-col items-center mt-20 text-white tracking-wide font-display'>
        <div>
            <p className='text-3xl'>
            Fimily
            </p>
        </div>
        <h1 className='text-5xl'>
            Coming Soon
        </h1>
        <p className='text-xl text-center'>
        We know how hard it is for you to make new friends, We Are Coming To Help You!
        </p>
        <div>
            {isOpen&&<PreregisterModel setIsOpen={setIsOpen}/>}
            <button className='text-xl mt-2 bg-[#f3cda2] p-2 tracking-wider rounded-md' onClick={()=>setIsOpen(true)}>Pre Register yourself</button>
        </div>
    </div>
  )
}

export default LandingPage
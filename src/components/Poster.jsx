import React from 'react'

const Poster = () => {
  return (
    <div className='hidden md:block h-screen w-full p-20'>
      <div className='bg-contain w-full h-full flex items-center pl-20 bg-center bg-no-repeat' style={{
        backgroundImage :'url(./potential.avif)'
      }}>
        <div className='bg-transparent h-3/5 w-1/3 space-y-8 '>
<h1 className='text-4xl text-black font-semibold w-[80%] -leading-8 '>Unlock your Potential with Microsoft Copilot</h1>
<p className='w-[78%]'>Get things done faster and unleash your creativity with the power of AI anywhere you go.</p>
<button className='font-semibold text-white p-2  bg-blue-700 text-sm opacity-80'>Download the Copilot app</button>
        </div>
      </div>
    </div>
  )
}

export default Poster

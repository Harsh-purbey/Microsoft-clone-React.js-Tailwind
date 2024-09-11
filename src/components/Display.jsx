import React from 'react'

const Display = () => {
  return (
    <div className='flex flex-col-reverse md:flex-row  w-full h-[500px]  bg-gradient-to-b from-[#E1E4EB] to-[#DDE8F9] pr-2'>

      <div className=' py-8 md:py-0 flex flex-col justify-center pl-8 md:pl-24 md:items-baseline bg-gradient-to-b from-[#E1E4EB] to-[#DDE8F9] flex-1 gap-2'>
        <p className='w-[50px] bg-yellow-500 text-black p-1 font-semibold'>New</p>
        <h3 className='text-2xl font-semibold '>Meet Surface Laptop</h3>
      <p className='w-3/4'>Unlock AI features like Live Captions and Coreator With this exceptionally powerful laptop</p>
      <button className='font-semibold text-white w-[90px] p-1 bg-blue-700 text-sm opacity-80'>Learn More</button>
      </div>

      <div className='flex-1 h-full w-full  flex justify-center items-center md:justify-start '><img className=' w-full h-full md:h-3/4 md:w-3/4' src="./pc1.avif" alt="PC1" /></div>
    </div>
  )
}

export default Display

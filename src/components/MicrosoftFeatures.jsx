import React from 'react'

const MicrosoftFeatures = () => {
  return (
    <div className='flex justify-center items-center flex-col md:flex-row gap-8 py-16'>
      <div className='space-y-2'>
        <div className='flex justify-center'><img src="./window.svg" alt="features" className='w-10'  /></div> 
        <a href='#' className='underline text-blue-700 opacity-80 font-semibold'>Choose your Microsoft 365</a>
      </div>
      <div className='space-y-2'>
      <div className='flex justify-center'><img src="./Xbox.svg" alt="features" className='w-10' /></div>
        <a href='#' className='underline text-blue-700 opacity-80 font-semibold'>Shop Xbox</a>
      </div>
      <div className='space-y-2'>
      <div className='flex justify-center'><img src="./window.svg" alt="features" className='w-10'  /></div>
        <a href='#' className='underline text-blue-700 opacity-80 font-semibold'>Get Windows 11</a>
      </div>
      <div className='space-y-2'>
      <div className='flex justify-center'><img src="./tab.svg" alt="features" className='w-10' /></div>
        <a href='#' className='underline text-blue-700 opacity-80 font-semibold'>Explore Surface devices</a>
      </div>
    </div>
  )
}

export default MicrosoftFeatures

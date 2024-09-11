import React from 'react'
import Poster from './Poster'

const Shop = () => {
    return (
        <>
        <div className='py-6 px-2 md:p-8 flex justify-center items-center flex-col md:flex-row gap-12 md:gap-6 w-full '>
            <div className=' w-[90%] md:w-[22%] h-[500px] shadow-2xl'>
                <img src="./shop1.avif" alt="shop1.avif" classname='w-full h-[200px]' />
                <div className=' w-full h-[300px] p-4 flex flex-col gap-20'>
                    <div className='flex flex-col gap-2'>
                    <h1 className='text-2xl font-semibold'>Maximise the everyday with Microsoft 365</h1>
                    <p className='w-[90%]'>Get online protection, secure cloud storage and innovative apps designed to fit your needs – all in one plan.</p>
                    </div>
                    <button className='font-semibold text-white w-[120px] p-2 bg-blue-700 text-sm opacity-80'>For one person</button>
                </div>
            </div>
            <div className=' w-[90%]  md:w-[22%] h-[500px] shadow-2xl'>
                <img src="./shop2.webp" alt="shop2.webp" classname='w-full h-[200px]' />

                <div className=' w-full h-[300px] p-4 flex flex-col gap-20'>
                    <div className='flex flex-col gap-2'>
                    <h1 className='text-2xl font-semibold'>Maximise the everyday with Microsoft 365</h1>
                    <p className='w-[90%]'>Get online protection, secure cloud storage and innovative apps designed to fit your needs – all in one plan.</p>
                    </div>
                    <button className='font-semibold text-white w-[120px] p-2 bg-blue-700 text-sm opacity-80'>For one person</button>
                </div>            </div>
            <div className='  w-[90%] md:w-[22%] h-[500px] shadow-2xl'>
                <img src="./shop3.webp" alt="shop3.webp" classname='w-full h-[200px]' />

                <div className=' w-full h-[300px] p-4 flex flex-col gap-20'>
                    <div className='flex flex-col gap-2'>
                    <h1 className='text-2xl font-semibold'>Maximise the everyday with Microsoft 365</h1>
                    <p className='w-[90%]'>Get online protection, secure cloud storage and innovative apps designed to fit your needs – all in one plan.</p>
                    </div>
                    <button className='font-semibold text-white w-[120px] p-2 bg-blue-700 text-sm opacity-80'>For one person</button>
                </div>            </div>
            <div className=' w-[90%]  md:w-[22%] h-[500px] shadow-2xl'>
                <img src="./shop4.jpeg" alt="shop4.jpeg" classname='w-full h-[200px]' />

                <div className=' w-full h-[300px] p-4 flex flex-col gap-20'>
                    <div className='flex flex-col gap-2'>
                    <h1 className='text-2xl font-semibold'>Maximise the everyday with Microsoft 365</h1>
                    <p className='w-[90%]'>Get online protection, secure cloud storage and innovative apps designed to fit your needs – all in one plan.</p>
                    </div>
                    <button className='font-semibold text-white w-[120px] p-2 bg-blue-700 text-sm opacity-80'>For one person</button>
                </div>            </div>

                <div className=' w-[90%]  md:w-[22%] h-[450px] shadow-2xl md:hidden'>
                <img src="./potential.avif" alt="shop4.jpeg" classname='w-full h-[250px]' />

                <div className='  w-full h-[300px] p-4 flex flex-col gap-16 '>
                    <div className='flex flex-col gap-2'>
                    <h1 className='text-2xl font-semibold'>Maximise the everyday with Microsoft 365</h1>
                    <p className='w-[90%]'>Get online protection, secure cloud storage and innovative apps designed to fit your needs – all in one plan.</p>
                    </div>
                    <button className='font-semibold text-white w-[120px] p-2 bg-blue-700 text-sm opacity-80'>For one person</button>
                </div>            </div>


        </div>
<Poster/>

        </>
    )
}

export default Shop

import React from 'react'
import { RxHamburgerMenu } from "react-icons/rx";
import { PiShoppingCartThin } from "react-icons/pi";
import { RiUserAddLine } from "react-icons/ri";
import { CiSearch } from "react-icons/ci";

const Navbar = () => {
    return (
        <div className='flex justify-between md:px-12 py-4 px-2 '>
            <div className='flex justify-between items-center md:hidden w-[40px]'>
                <RxHamburgerMenu className='md:hidden' />
                <CiSearch className='md:hidden' />
            </div>
            <div className='relative md:order-1 flex justify-center items-center space-x-4 '>
                <img src='./ms-logo.png' className='w-[110px]'></img>

                <div className='absolute md:static top-10 w-[80px] md:w-fit -translate-x-[900px] md:translate-x-0  md:flex justify-center items-center space-x-2'>
                    <div>Microsoft 365</div>
                    <div>Teams</div>
                    <div>Copilot</div>
                    <div>Windows</div>
                    <div>Surface</div>
                    <div>Xbox</div>
                    <div>Support</div>
                </div>

            </div>

            <div className='flex justify-between items-center  md:order-2 w-[60px] md:w-[250px]'>
                <div className='flex gap-2 justify-center items-center'>
                    <span className='hidden md:block'>Search</span>
                    <CiSearch className='hidden md:block font-bold' />
                </div>
                <div className='flex gap-2 justify-center items-center'>
                    <span className='hidden md:block'>Cart</span>
                    <PiShoppingCartThin className=' font-bold' />
                </div>
                <div className='flex gap-2 justify-center items-center'>
                    <span className='hidden md:block'>Sign in</span>
                    <RiUserAddLine className='border-black border rounded-full box-content p-2  font-bold' />
                </div>
            </div>
        </div>
    )
}

export default Navbar

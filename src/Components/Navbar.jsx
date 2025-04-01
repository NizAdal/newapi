import React from 'react';
import SearchBar from './Search';
import { CiSearch } from "react-icons/ci";
function Navbar() {
  return (
    <div className='flex flex-col items-center justify-between w-full'>
      <div className='bg-black xl:w-full lg:w-[65rem] md:w-[52rem] w-[40rem] md:block hidden'>
        <ul className='text-gray-400 text-xs xl:px-2.5 px-1 flex flex-row items-center justify-center xl:space-x-5 space-x-4 xl:w-full lg:w-[65rem] md:w-[48rem]   w-[22rem]'>
          <li className='cursor-pointer'>EPAPER</li>
          <li className='cursor-pointer'>LIVE TV</li>
          <li className='cursor-pointer'>DAWNNEWSURDU</li>
          <li className='cursor-pointer'>IMAGES</li>
          <li className='cursor-pointer'>HERALD</li>
          <li className='cursor-pointer'>AURORA</li>
          <li className='cursor-pointer'>CITYFM89</li>
          <li className='cursor-pointer'>ADVERTISE</li>
          <li className='cursor-pointer'>EVENTS/SUPPLEMENTS</li>
          <li className='cursor-pointer'>CLASSIFIEDS</li>
          <li className='cursor-pointer'>OBITUARIES</li>
        </ul>
      </div>
      <div className='flex flex-col items-center justify-center space-y-1'>
        <h1 className='text-black text-6xl font-serif'>DAWN</h1>
        <h5 className='text-black text-xs'>E-PAPER | <span className='text-gray-400'>FEBRUARY 25, 2025</span></h5>
      </div>
      <div className='flex flex-col items-center justify-center w-full'>
        <hr className='mt-4 2xl:w-4/5 xl:w-[75rem] lg:w-[65rem] md:w-[48rem] w-[22rem] border-black 2xl:border-2 border-1'/>
        <div className='w-full flex flex-row items-center justify-center  overflow-x-auto '>
          <div className='flex flex-row justify-start 2xl:w-4/5 xl:w-[75rem] lg:w-[65rem] md:w-[48rem] w-[22rem]'>
            <ul className='flex flex-row flex-nowrap  text-gray-400 cursor-pointer text-xs px-2.5 overflow-y-hidden space-x-0.5'>
              <li className='text-black hover:bg-gray-300 p-2'>Home</li>
              <li className='text-gray-950 hover:bg-gray-300 p-2'>LATEST</li>
              <li className='text-green-600 hover:bg-gray-300 p-2'>BREATHE</li>
              <li className='text-red-600 hover:bg-gray-300 p-2'>GAZA SIEGE</li>
              <li className='text-black hover:bg-gray-300 p-2'>PAKISTAN</li>
              <li className='text-black hover:bg-gray-300 p-2'>OPINION</li>
              <li className='text-black hover:bg-gray-300 p-2'>BUSINESS</li>
              <li className='text-black hover:bg-gray-300 p-2'>IMAGES</li>
              <li className='text-black hover:bg-gray-300 p-2'>PRISM</li>
              <li className='text-black hover:bg-gray-300 p-2'>WORLD</li>
              <li className='text-black hover:bg-gray-300 p-2'>SPORT</li>
              <li className='text-black hover:bg-gray-300 p-2'>MAGAZINES</li>
              <li className='text-black hover:bg-gray-300 p-2'>TECH</li>
              <li className='text-black hover:bg-gray-300 p-2'>VIDEOS</li>
              <li className='text-black hover:bg-gray-300 p-2'>POPULAR</li>
              <li className='text-black hover:bg-gray-300 p-2'>ARCHIVE</li>
              <li className='text-black hover:bg-gray-300 p-2'>FLOOD DONATIONS</li>
            </ul>
            <div className='flex flex-row'>
              <div className=' mt-5'><CiSearch /> </div>
            <div className='p-2'><SearchBar /></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;

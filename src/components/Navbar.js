import React from 'react';
import { MagnifyingGlassIcon } from "@heroicons/react/20/solid";



function Navbar() {
  return (
    <nav className='flex justify-between p-9'>
      <div className='flex items-center w-[740px] '>
        <ul className='flex flex-1 justify-between text-[14px] font-bold mr-52'>
          <li className='hover:text-gray-600 hover:cursor-pointer'>Find Talent</li>
          <li className='hover:text-gray-600 hover:cursor-pointer'>Inspiration</li>
          <li className='hover:text-gray-600 hover:cursor-pointer'>Learn design</li>
          <li className='hover:text-gray-600 hover:cursor-pointer'>Jobs</li>
          <li className='hover:text-gray-600 hover:cursor-pointer'>Go Pro</li>
        </ul>
        <h2 className='font-bold text-xl '>Dribbble</h2>
      </div>
      <div className='flex items-center justify-evenly w-[28%] text-gray-600'>
        <div className='flex items-center bg-slate-100 px-2 py-1 rounded-full'>
          <MagnifyingGlassIcon className='h-5 ' />
          <input
            type="text"
            placeholder="Search..."
            className="rounded-full px-3 py-2 bg-slate-100 border-none focus:outline-none focus:ring-gray-300"
          />
        </div>
        <button className='font-bold ml-4'>Log in</button>
        <button className='ml-4 bg-black px-[15px] py-[12px] text-[15px] font-bold text-white rounded-full hover:bg-slate-600'>Sign up</button>
      </div>
    </nav>
  );
}

export default Navbar;

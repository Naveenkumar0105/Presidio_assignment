import React from 'react'
import {MagnifyingGlassIcon} from "@heroicons/react/20/solid"
// import {iconName} from "@heroicons/react/24/outline";

function Main() {
  return (
    <div>
        <div className='flex flex-col items-center justify-center space-y-6 '> 
            <div className="font-serif text-6xl text-center mt-20 space-y-4">
                <h2 >Browse the latest designs from </h2>
                <h2> up and coming designers &</h2>
                <h2>creative professionals</h2> 
            </div>
            <p className="text-center">Dribbble is the leading destination to find & showcase creative work and <br/>home to the world’s best design professionals.</p> 
            <div className='flex items-center px-8 rounded-full outline outline-slate-200 outline-1 hover:shadow-md'>
                <MagnifyingGlassIcon className='h-4'/>
                <input type="text" placeholder="Search 18+ million shots..."
                className="rounded-full px-7 py-4  border-none focus:outline-none "/>
            </div>
        <div className='flex items-center text-[15px] justify-evenly mt-36 text-gray-600'>
            <ul className='flex'>
                <li className='mr-2 text-[12px] py-1'>Trending searches</li>
                <li className='cursor-pointer mr-2 outline outline-slate-200 outline-1 rounded-full px-3 py-1'>landing page</li>
                <li className='cursor-pointer mr-2 outline outline-slate-200 outline-1 rounded-full px-3 py-1' >ios</li>
                <li className='cursor-pointer mr-2 outline outline-slate-200 outline-1 rounded-full px-3 py-1'>food</li>
                <li className='cursor-pointer mr-2 outline outline-slate-200 outline-1 rounded-full px-3 py-1'>landingpage</li>
                <li className='cursor-pointer mr-2 outline outline-slate-200 outline-1 rounded-full px-3 py-1'>ux design</li>
                <li className='cursor-pointer outline outline-slate-200 outline-1 rounded-full px-3 py-1'>app design</li>
            </ul>
        </div>
        </div>
        
    </div>
  )
}

export default Main
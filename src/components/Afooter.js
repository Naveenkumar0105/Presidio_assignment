import React from 'react'
import {HashtagIcon} from '@heroicons/react/20/solid';

function Afooter() {
  return (
    <div className='flex items-center justify-evenly text-[15px] mt-10 text-gray-600 mb-10 ml-32 mr-32'>
        <a href="/" className="text-lg font-bold text-black ">Dribbbble</a>
        <div className='w-[1000px]'>
            <ul className='flex justify-evenly'>
                <li className='text-black cursor-pointer font-semibold'>For designers</li>
                <li className='text-black cursor-pointer font-semibold'>Hire talent</li>
                <li className='text-black cursor-pointer font-semibold'>Inspiration</li>
                <li className='text-black cursor-pointer font-semibold'>Advertising</li>
                <li className='text-black cursor-pointer font-semibold'>Blog</li>
                <li className='text-black cursor-pointer font-semibold'>About</li>
                <li className='text-black cursor-pointer font-semibold'>Careers</li>
                <li className='text-black cursor-pointer font-semibold'>Support</li>
                <li className='text-black cursor-pointer font-semibold'>Web Design</li>
            </ul>
        </div>
        <div className='flex'>
            <a href="#" target="_blank">
                <HashtagIcon className="h-6 w-6 text-gray-400 hover:text-gray-300" />
            </a>
            <a href="#" target="_blank">
                <HashtagIcon className="h-6 w-6 text-gray-400 hover:text-gray-300" />
            </a>
            <a href="#" target="_blank">
                <HashtagIcon className="h-6 w-6 text-gray-400 hover:text-gray-300" />
            </a>
            <a href="#" target="_blank">
                <HashtagIcon className="h-6 w-6 text-gray-400 hover:text-gray-300" />
            </a>
        </div>
        
    </div>
  )
}

export default Afooter;
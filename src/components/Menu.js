import React from 'react'
import Select from 'react-dropdown-select';

const options = [
    {id: "Popular", name: 1},
    {id: "New", name: 2},
    {id: "Noteworthy", name: 3}
]

function Menu() {
  return (
    <div className='flex items-center text-[15px] justify-evenly mt-36 text-gray-600'>
        {/* <button className='border border-gray-400 rounded-md h-8 w-24'>Popular</button> */}
        {/* <Dropdown options={options} placeholder={options[0]}/> */}
        <div>
        <Select name='Popular' options={options} labelField='id' valueField='name' placeholder='Popular' className=' mr-9'/>
        </div>
        <div className=' w-[1000px]'>
            <ul className='flex justify-evenly'>
                <li className='hover:text-gray-400 cursor-pointer font-semibold '>Discover</li>
                <li className='hover:text-gray-400 cursor-pointer font-semibold '>Animation</li>
                <li className='hover:text-gray-400 cursor-pointer font-semibold '>Branding</li>
                <li className='hover:text-gray-400 cursor-pointer font-semibold '>Illustration</li>
                <li className='hover:text-gray-400 cursor-pointer font-semibold '>Mobile</li>
                <li className='hover:text-gray-400 cursor-pointer font-semibold '>Print</li>
                <li className='hover:text-gray-400 cursor-pointer font-semibold '>Product Design</li>
                <li className='hover:text-gray-400 cursor-pointer font-semibold '>Typography</li>
                <li className='hover:text-gray-400 cursor-pointer font-semibold '>Web Design</li>
            </ul>
        </div>
        <button className='border border-gray-400 rounded-full h-8 w-24'>Filters</button>
    </div>
  )
}

export default Menu
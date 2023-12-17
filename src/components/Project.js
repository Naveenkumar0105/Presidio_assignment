import React, { useState } from 'react';
// import image from '../img/image.png';
import { HeartIcon, EyeIcon } from "@heroicons/react/20/solid";
import { UserCircleIcon } from "@heroicons/react/24/outline";

function Project({image}) {
  const [liked, setLiked] = useState(false);
  const [count, setCount] = useState(0);

  const handleLike = () => {
    setLiked(!liked);
    setCount((prevCount) => (liked ? prevCount - 1 : prevCount + 1));
  };

  return (
    <div className='w-[340px] h-[270px] mb-20'>
      <img className='rounded-xl w-[350px] h-[250px] px-2' src={image} alt='creative shots'/>
      <div className='flex justify-between p-2'>
        <div className='flex items-center'>
          <UserCircleIcon className="h-8 text-gray-400" />
          <h3 className='font-semibold text-black text-[15px]'>Dmitriy Golovenko</h3>
          <h3 className='bg-gray-300 text-white text-xs font-bold rounded-md ml-2 px-1'>TEAM</h3>
        </div>
        <div className='flex space-x-2 '>
          <div className='flex items-center'>
            <HeartIcon
              className={`h-5 w-4 cursor-pointer ${liked ? 'text-pink-500' : 'text-gray-400'} hover:text-pink-500`}
              onClick={handleLike}
            />
            <h2 className='text-[12px] font-semibold text-gray-700 '>{count}</h2>
          </div>
          <div className='flex items-center'>
            <EyeIcon className='h-5 w-4 text-gray-400'/>
            <h2 className='text-[12px] font-semibold text-gray-700'>5.8k</h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Project;

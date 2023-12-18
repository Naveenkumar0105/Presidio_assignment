import React, { useState } from 'react';
import { HeartIcon, EyeIcon, BookmarkIcon } from "@heroicons/react/20/solid";
import { UserCircleIcon } from "@heroicons/react/24/outline";

function Project({ image, name, c_name }) {
  const [liked, setLiked] = useState(false);
  const [bookmarked, setBookmarked] = useState(false);
  const [count, setCount] = useState(0);
  const [isOverlayVisible, setIsOverlayVisible] = useState(false);

  const handleLike = () => {
    setLiked(!liked);
    setCount((prevCount) => (liked ? prevCount - 1 : prevCount + 1));
  };

  const handleBookmark = () => {
    setBookmarked(!bookmarked);
  };

  return (
    <div className='w-[340px] h-[270px] mb-20 hover:cursor-pointer'>
      <div
        className={`w-[350px] h-[250px] px-2 rounded-xl relative group overflow-hidden`}
        onMouseEnter={() => setIsOverlayVisible(true)}
        onMouseLeave={() => setIsOverlayVisible(false)}
      >
        <img className='absolute top-0 left-0 w-full h-full object-cover' src={image} alt='creative shots' />
        <div
          className={`absolute bottom-0 left-0 w-full h-16 px-4 flex items-center bg-black/70 opacity-0 justify-between z-10 transition-opacity duration-150 ease-in-out ${
            isOverlayVisible ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <p className='text-white font-semibold'>{name}</p>
          <div className="flex space-x-2">
            <HeartIcon className={`text-white h-5 w-5 cursor-pointer ${liked ? 'text-pink-500' : 'text-gray-400'} hover:text-pink-500`} onClick={handleLike} />
            <BookmarkIcon className={`text-white h-5 w-5 cursor-pointer ${bookmarked ? 'text-white' : 'text-gray-400'}`} onClick={handleBookmark} />
          </div>
        </div>
      </div>
      <div className='flex justify-between p-2'>
        <div className='flex items-center'>
          <UserCircleIcon className="h-8 text-gray-400" />
          <h3 className='font-semibold text-black text-[15px]'>{c_name}</h3>
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

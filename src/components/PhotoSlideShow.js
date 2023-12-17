import React from 'react'
import Marquee from "react-fast-marquee";
import image from "../img/image.png";

function PhotoSlideShow() {
  return (
    <div>
        <Marquee pauseOnHover={true}>
          <div className="flex ">
            <div className="flex flex-col hover:cursor-pointer ">
                <img className="w-[200px] h-[180px] px-2 rounded-xl " src={image} alt="photo shots"/>
                <p className=" text-left mt-2 ml-2">Title</p>
            </div>
            <div className="flex flex-col hover:cursor-pointer ">
                <img className="w-[200px] h-[180px] px-2 rounded-xl " src={image} alt="photo shots"/>
                <p className=" text-left mt-2 ml-2">Title</p>
            </div>
            <div className="flex flex-col hover:cursor-pointer ">
                <img className="w-[200px] h-[180px] px-2 rounded-xl " src={image} alt="photo shots"/>
                <p className=" text-left mt-2 ml-2">Title</p>
            </div>
            <div className="flex flex-col hover:cursor-pointer ">
                <img className="w-[200px] h-[180px] px-2 rounded-xl " src={image} alt="photo shots"/>
                <p className=" text-left mt-2 ml-2">Title</p>
            </div>
            <div className="flex flex-col hover:cursor-pointer ">
                <img className="w-[200px] h-[180px] px-2 rounded-xl " src={image} alt="photo shots"/>
                <p className=" text-left mt-2 ml-2">Title</p>
            </div>
            <div className="flex flex-col hover:cursor-pointer ">
                <img className="w-[200px] h-[180px] px-2 rounded-xl " src={image} alt="photo shots"/>
                <p className=" text-left mt-2 ml-2">Title</p>
            </div>
            <div className="flex flex-col hover:cursor-pointer ">
                <img className="w-[200px] h-[180px] px-2 rounded-xl " src={image} alt="photo shots"/>
                <p className=" text-left mt-2 ml-2">Title</p>
            </div>
            <div className="flex flex-col hover:cursor-pointer ">
                <img className="w-[200px] h-[180px] px-2 rounded-xl " src={image} alt="photo shots"/>
                <p className=" text-left mt-2 ml-2">Title</p>
            </div>
          </div>
        </Marquee>
      </div>
  )
}

export default PhotoSlideShow;
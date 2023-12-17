import React from 'react'
import Marquee from "react-fast-marquee";
import image2 from "../img/image2.jpg";
import image3 from "../img/image3.jpeg";
import image4 from "../img/image4.jpeg";
import image5 from "../img/image5.jpeg";
import image6 from "../img/image6.jpeg";
import image7 from "../img/image7.jpeg";
import image8 from "../img/image8.jpeg";
import image9 from "../img/image9.jpeg";


function PhotoSlideShow() {
  return (
    <div>
        <Marquee pauseOnHover={true}>
          <div className="flex ">
            <div className="flex flex-col hover:cursor-pointer ">
                <img className="w-[200px] h-[180px] px-2 rounded-xl " src={image2} alt="photo shots"/>
                <p className=" text-left mt-2 ml-2">Title</p>
            </div>
            <div className="flex flex-col hover:cursor-pointer ">
                <img className="w-[200px] h-[180px] px-2 rounded-xl " src={image3} alt="photo shots"/>
                <p className=" text-left mt-2 ml-2">Title</p>
            </div>
            <div className="flex flex-col hover:cursor-pointer ">
                <img className="w-[200px] h-[180px] px-2 rounded-xl " src={image4} alt="photo shots"/>
                <p className=" text-left mt-2 ml-2">Title</p>
            </div>
            <div className="flex flex-col hover:cursor-pointer ">
                <img className="w-[200px] h-[180px] px-2 rounded-xl " src={image5} alt="photo shots"/>
                <p className=" text-left mt-2 ml-2">Title</p>
            </div>
            <div className="flex flex-col hover:cursor-pointer ">
                <img className="w-[200px] h-[180px] px-2 rounded-xl " src={image6} alt="photo shots"/>
                <p className=" text-left mt-2 ml-2">Title</p>
            </div>
            <div className="flex flex-col hover:cursor-pointer ">
                <img className="w-[200px] h-[180px] px-2 rounded-xl " src={image7} alt="photo shots"/>
                <p className=" text-left mt-2 ml-2">Title</p>
            </div>
            <div className="flex flex-col hover:cursor-pointer ">
                <img className="w-[200px] h-[180px] px-2 rounded-xl " src={image8} alt="photo shots"/>
                <p className=" text-left mt-2 ml-2">Title</p>
            </div>
            <div className="flex flex-col hover:cursor-pointer ">
                <img className="w-[200px] h-[180px] px-2 rounded-xl " src={image9} alt="photo shots"/>
                <p className=" text-left mt-2 ml-2">Title</p>
            </div>
          </div>
        </Marquee>
      </div>
  )
}

export default PhotoSlideShow;
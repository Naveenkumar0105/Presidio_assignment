import React from 'react';
import Project from './Project';
import image from "../img/image.png";
import image2 from "../img/image2.jpg";
import image3 from "../img/image3.jpeg";
import image4 from "../img/image4.jpeg";
import image5 from "../img/image5.jpeg";
import image6 from "../img/image6.jpeg";
import image7 from "../img/image7.jpeg";
import image8 from "../img/image8.jpeg";
import image9 from "../img/image9.jpeg";
import image10 from "../img/image10.jpeg";
import image11 from "../img/image11.jpeg";
import image12 from "../img/image12.jpeg";
import image13 from "../img/image13.jpeg";
import image14 from "../img/image14.jpeg";
import image15 from "../img/image15.jpeg";
import image16 from "../img/image16.jpeg";
import image17 from "../img/image17.jpeg";
import image18 from "../img/image18.jpeg";
import image19 from "../img/image19.jpeg";
import image20 from "../img/image20.jpeg";

// function Projects() {
//   return (
//     <div className='flex flex-wrap  justify-evenly mt-10'>
//         <Project />
//         <Project />
//         <Project />
//         <Project />
//         <Project />
//         <Project />
//         <Project />
//         <Project />
//         <Project />
//         <Project />
//         <Project />
//         <Project />
//     </div>
//   )
// }

function Projects() {
    const images = [
        image,
        image2,
        image3,image4,image5,image6,image7,image8,image9,image10,image11,image12,
        image13,image14,image15,image16,image17,image18,image19,image20
        
    ];

    return (
        <div className="flex flex-wrap justify-evenly mt-10">
        {images.map((image) => (
            <Project key={image} image={image} />
        ))}
        </div>
    );
}
  

export default Projects
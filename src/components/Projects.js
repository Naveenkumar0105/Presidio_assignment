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

function Projects() {
    const images = [
      { creator_name:"creator 1" ,name: "image 1", image: image },
      { creator_name:"creator 2" ,name: "image 2", image: image2 },
      { creator_name:"creator 3" ,name: "image 3", image: image3 },
      { creator_name:"creator 4" ,name: "image 4", image: image4 },
      { creator_name:"creator 5" ,name: "image 5", image: image5 },
      { creator_name:"creator 6" ,name: "image 6", image: image6 },
      { creator_name:"creator 7" ,name: "image 7", image: image7 },
      { creator_name:"creator 8" ,name: "image 8", image: image8 },
      { creator_name:"creator 9" ,name: "image 9", image: image9 },
      { creator_name:"creator 10" ,name: "image 10", image: image10 },
      { creator_name:"creator 11" ,name: "image 11", image: image11 },
      { creator_name:"creator 12" ,name: "image 12", image: image12 },
      { creator_name:"creator 13" ,name: "image 13", image: image13 },
      { creator_name:"creator 14" ,name: "image 14", image: image14 },
      { creator_name:"creator 15" ,name: "image 15", image: image15 },
      { creator_name:"creator 16" ,name: "image 16", image: image16 },
      { creator_name:"creator 17" ,name: "image 17", image: image17 },
      { creator_name:"creator 18" ,name: "image 18", image: image18 },
      { creator_name:"creator 19" ,name: "image 19", image: image19 },
      { creator_name:"creator 20" ,name: "image 20", image: image20 }
    ];
  
    return (
      <div className="flex flex-wrap justify-evenly mt-10">
        {images.map((image) => (
          <Project key={image.name} image={image.image} name={image.name} c_name={image.creator_name} />
        ))}
      </div>
    );
  }
  
  export default Projects;
  
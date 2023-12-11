import React from 'react';
import card1 from '../img/tilahun.jpg';
import card2 from '../img/.new.jpg';
import card3 from '../img/cc.jpg';
import { Link, useNavigate } from "react-router-dom";



const Card = () => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    // Navigate to the "/home" route when the button is clicked
    navigate('/home');
  };
  
  return (
   
    <div className=''>
      <div className=" pt-[3rem] rounded-t-[5rem]  bg-[#081730] headline mt-7 flex flex-col items-center text-[2rem]">
        <span>
          <b>Music Categories</b>
        </span>
      </div>
     <section className="wrapper bg-[#081730] flex items-center justify-between px-[5rem] rounded-b-[5rem]  w-[100%] h-[40rem] relative ">
      <div class="w-[300px] h-[350px] bg-transparent cursor-pointer group perspective">
        
        <div class="relative preserve-3d group-hover:my-rotate-y-180 w-full h-full duration-1000">
          <div class="absolute backface-hidden border-2 w-full h-full">
            <img src={card1} class="w-full h-full" />
          </div>
          <div class="absolute my-rotate-y-180 backface-hidden w-full h-full bg-gray-100 overflow-hidden">
            <div class="text-center flex flex-col items-center justify-center h-full text-gray-800 px-2 pb-24">
              <h1 class="text-3xl font-semibold">OLD MUSICS </h1>
              {/* <p class="my-2">9.0 Rating</p> */}
              <p>
              "Welcome to the Golden Era of Ethiopian Music. Step back in time and immerse yourself
               in the soulful melodies and captivating rhythms of traditional Ethiopian music. 
               timeless treasures of Ethiopian music and experience the beauty of a bygone era."
              </p>
              <button
                  onClick={handleButtonClick}
               class="bg-teal-500 px-6 py-2 font-semibold text-white rounded-full absolute -bottom-20 delay-500 duration-1000 group-hover:bottom-20 scale-0 group-hover:scale-125">
              Get the Music
              </button>
            </div>
          </div>
        </div>
      </div>

      <div class="w-[300px] h-[350px] bg-transparent cursor-pointer group perspective">
        <div class="relative preserve-3d group-hover:my-rotate-y-180 w-full h-full duration-1000">
          <div class="absolute backface-hidden border-2 w-full h-full">
            <img src={card2} class="w-full h-full" />
          </div>
          <div class="absolute my-rotate-y-180 backface-hidden w-full h-full bg-gray-100 overflow-hidden">
            <div class="text-center flex flex-col items-center justify-center h-full text-gray-800 px-2 pb-24">
              <h1 class="text-3xl font-semibold">NEW MUSICS</h1>
             
              <p>
              "Welcome to the world of New Ethiopian Music! Dive into the dynamic and diverse
               sounds of contemporary Ethiopian music. Explore the latest beats, lyrical poetry, 
              and innovative fusions that define the modern music landscape in Ethiopia. 
              </p>
              <button
                  onClick={handleButtonClick}
               class="bg-teal-500 px-6 py-2 font-semibold text-white rounded-full absolute -bottom-20 delay-500 duration-1000 group-hover:bottom-20 scale-0 group-hover:scale-125">
              Get the Music
              </button>
            </div>
          </div>
        </div>
      </div>

      <div class="w-[300px] h-[350px] bg-transparent cursor-pointer group perspective">
        <div class="relative preserve-3d group-hover:my-rotate-y-180 w-full h-full duration-1000">
          <div class="absolute backface-hidden border-2 w-full h-full">
            <img src={card3} class="w-full h-full" />
          </div>
          <div class="absolute my-rotate-y-180 backface-hidden w-full h-full bg-gray-100 overflow-hidden">
            <div class="text-center flex flex-col items-center justify-center h-full text-gray-800 px-2 pb-24">
              <h1 class="text-3xl font-semibold">COVER MUISC</h1>
              
              <p>
              "Welcome to the world of Ethiopian Cove Music! Immerse yourself in the soothing 
              and timeless sounds of traditional Ethiopian melodies. Explore the rich heritage 
               music as you embark on a journey through the tranquil rhythms and soulful tunes.
              </p>
              <button
                  onClick={handleButtonClick}
               class="bg-teal-500 px-6 py-2 font-semibold text-white rounded-full absolute -bottom-20 delay-500 duration-1000 group-hover:bottom-20 scale-0 group-hover:scale-125">
                Get the Music
              </button>
              
            </div>
          </div>
          
        </div>
        
      </div>
      
    </section>
    <div class="flex items-center justify-center pt-[2rem] pb-[4rem]">
    <button
    onClick={handleButtonClick}
     className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transform transition duration-300 ease-in-out hover:scale-110">
      My Music
    </button>
    </div>
   
   </div>
   
  );
};

export default Card;

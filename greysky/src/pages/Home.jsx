import React from 'react';
import moon from '../assests/moon.png'
import './styles.css'; // Make sure this path is correct

const Home = () => {
  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen bg-black text-white">
      <div className="text-center relative z-10 h-full">
        <h1 className="text-4xl md:text-6xl font-serif text-gray-300/90 mb-24">Greysky Robotics</h1>
        <img src={moon} alt="Moon" className="mx-auto mb-4 fixed top-16 right-1/4" style={{ width: "18vh" }} />
        <h2 className="text-3xl md:text-5xl lg:text-9xl text-gray-300/90 font-sans mb-32">Coming Soon</h2>
      </div>
      <div className="w-full border-t border-white mb-8"></div>
      <div className="flex flex-col md:flex-row justify-between items-center w-full mt-8 px-4 md:px-20">
        <div className="text-center text-gray-300/90 px-4 md:px-20 md:text-left w-full md:w-1/2 mb-4 md:mb-0">
          <p className="text-lg md:text-3xl lg:text-5xl">Stay connected and informed about the latest from Greysky.</p>
        </div>
        <div className="text-center w-full md:w-1/2 md:text-left px-4 md:px-24">
          <p className="text-lg text-gray-300/90 md:text-3xl pb-4 md:pb-12">Come back later for our big reveal. We promise, it'll be worth it.</p>
          <p className="text-md md:text-lg mt-2">In the meantime, reach us at:<br /> <a href="mailto:greyskyrobotics@gmail.com" className="text-gray-300/90 text-lg">greyskyrobotics@gmail.com</a></p>
        </div>
      </div>
      <div class="sky">
 
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
    </div>
    </div>
  );
}

export default Home;

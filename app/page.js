"use client"
import Head from 'next/head';
import React from 'react';
import Image from 'next/image';
import backgroundImage from '../public/background.jpg'; // Adjust the path if necessary
import gifImage0 from '../public/gif_0.gif'; // Import the initial GIF
import gifImage1 from '../public/gif_1.gif'; // Import the new GIF

function HomePage() {
  const [response, setResponse] = React.useState(null);

  const handleYesClick = () => {
    setResponse('YEAYYY');
  };

  const handleNoHover = () => {
    const noButton = document.getElementById('no-button');
    noButton.style.position = 'absolute';
    noButton.style.top = `${Math.random() * window.innerHeight}px`;
    noButton.style.left = `${Math.random() * window.innerWidth}px`;
  };

  return (
    <div className="relative flex flex-col justify-center items-center h-screen text-center overflow-hidden">
      <Head>
        <title>Will you go out with me?</title>
      </Head>
      <Image 
        src={backgroundImage}
        alt="Background"
        layout="fill"
        objectFit="cover"
        quality={100}
        className="z-[-1]"
      />
      <h2 className="mb-2 text-[28px]">To: Nayla R. Rinjani 16023350</h2> {/* Added line */}
      <h1 className="mb-8 text-[32px]">
        {response || 'Will you be my All or Nothing, My Ride or Die, and Mine Forever?'}
      </h1>
      <div className="mb-8">
        <Image 
          src={response ? gifImage1 : gifImage0} // Conditionally render the GIF
          alt="GIF"
          width={200} // Adjust the width as needed
          height={200} // Adjust the height as needed
          className="mx-auto"
        />
      </div>
      <div className="flex justify-center">
        <button 
          onClick={handleYesClick} 
          className="bg-green-500 text-white w-24 h-12 rounded-lg shadow-lg text-lg mr-5"
        >
          YES
        </button>
        <button
          id="no-button"
          onMouseOver={handleNoHover}
          className="bg-red-500 text-white w-24 h-12 rounded-lg shadow-lg text-lg ml-5"
        >
          g dulu
        </button>
      </div>
    </div>
  );
}

export default HomePage;

"use client";

import Lottie from 'lottie-react';
import React from 'react';
import animation01 from '@/../../public/assets/Top_ImageSlider/01.json';
import download from '@/../../public/assets/Top_ImageSlider/download.json';
import call from '@/../../public/assets/Top_ImageSlider/call.json';

const Details = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animation01,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  const downloadOptions = {
    loop: true,
    autoplay: true,
    animationData: download,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  const callOptions = {
    loop: true,
    autoplay: true,
    animationData: call,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  return (
    <>
      <div className="pt-6 lg:mt-10 flex lg:flex-row flex-col relative p-5 bg-orange-300 min-h-[9%]">
        <div className="w-full lg:w-[70%] p-1 m-2">
          <h1 className="font-bold pb-2 text-4xl lg:text-5xl text-gray-800">
            Stay Ahead Of The Curve With Our
          </h1>
          <br />
          <div className="w-full lg:w-[70%]">
            <h1 className="font-normal py-4 px-4 text-lg lg:text-xl text-gray-700">
              Stay Ahead Of The Curve With Our Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos earum sed quidem ex animi quis deleniti, vero cum modi aut. Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet ratione laboriosam impedit saepe iusto est sequi labore consectetur placeat consequatur.
            </h1>
            <ul className="mt-4 list-disc list-inside text-lg text-gray-700">
              <li>One-on-One Mentorship</li>
              <li>Interactive Learning Sessions</li>
              <li>Real-Time Project Experience</li>
              <li>Demo Classes Available</li>
              <li>Career Guidance and Support</li>
            </ul>
          </div>
          <div className="flex-1 p-10 flex items-center justify-center">
            {/* Placeholder for future content like images, animations, or a call-to-action */}
            
          </div>
          
          <div className="flex flex-col lg:flex-row">
            <div className="py-5 flex h-fit w-fit">
              <button className="flex items-center justify-center px-6 py-2 rounded-xl bg-red-400 border-2 border-red-800 text-white" style={{ fontSize: 22 }}>
                Download
                <Lottie
                  {...downloadOptions}
                  className="ml-2"
                  style={{ height: '50px', width: '50px' }}
                />
              </button>
            </div>
            <div className="py-5 flex h-fit w-fit px-5">
              <button className="flex items-center justify-center px-6 py-2 rounded-xl bg-white border-2 border-green-900 text-black" style={{ fontSize: 22 }}>
                Contact Us
                <Lottie
                  {...callOptions}
                  className="ml-2"
                  style={{ height: '50px', width: '50px' }}
                />
              </button>
            </div>
          </div>
        </div>
        <div className="w-full lg:w-[30%] flex justify-center items-center">
          <Lottie
            {...defaultOptions}
            className="rounded-3xl shadow-2xl"
            style={{ height: '400px', width: '400px' }}
          />
          
        </div>
       
      </div>
    </>
  );
}

export default Details;

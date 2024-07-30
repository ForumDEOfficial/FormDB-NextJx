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
      <div className="pt-20 lg:mt-40 flex lg:flex-row flex-col relative p-5 min-h-[15%]" style={{backgroundColor : "#ffc190"}} >
        <div className="w-full lg:w-[70%] p-1 m-2">
          <h1 className="font-bold pb-2 text-4xl lg:text-5xl text-gray-800">
          100-Day Self-Study Plan to Learn Data Engineering
          </h1>
          <h2 className="font-semibold pt-5 text-4xl lg:text-5xl text-gray-800" style={{fontSize: 30}}>Welcome to Your Data Engineering Journey</h2>
          <br />
          <div className="w-full lg:w-[70%]">
            <h1 className="font-serif py-4 px-4 pt-1 text-lg lg:text-xl text-gray-700" style={{fontSize: 20}}>
            Embarking on a path to becoming a data engineer requires dedication and a structured approach. This 100-day self-study plan is designed to guide you through essential concepts and skills in data engineering. Each day focuses on a specific topic or skill to build a solid foundation and prepare you for real-world challenges.
            </h1>
            <h2 className="font-semibold pt-5 text-4xl lg:text-5xl text-gray-800" style={{fontSize: 30}}>Ready to transform your career in data engineering?</h2>
            <h1 className="font-semibold py-4 px-4 pt-5 text-lg lg:text-xl text-gray-700" style={{fontSize: 20}}>
            Join our 100-day self-study course and gain the skills and knowledge to excel in this dynamic field.
            </h1>
            {/* <ul className="mt-4 list-disc list-inside text-lg text-gray-700">
              <h1>One-on-One Mentorship</h1>
              <h1>Interactive Learning Sessions</h1>
              <h1>Real-Time Project Experience</h1>
              <h1>Demo Classes Available</h1>
              <h1>Career Guidance and Support</h1>
            </ul> */}
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

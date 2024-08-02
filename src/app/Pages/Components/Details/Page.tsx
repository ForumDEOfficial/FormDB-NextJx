"use client";

import Lottie from 'lottie-react';
import React from 'react';
import animation01 from '@/../../public/assets/Top_ImageSlider/01.json';
import download from '@/../../public/assets/Top_ImageSlider/download.json';
import call from '@/../../public/assets/Top_ImageSlider/call.json';
import gif from '@/../../public/assets/gif/logo.gif';

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
    <div className="pt-20 lg:mt-10 flex flex-col lg:flex-row relative p-5 min-h-[9%] w-full bg-orange-50">
      <div className="w-full lg:w-2/3 p-1 mx-4">
        <h1 className="font-bold pb-2 text-4xl lg:text-4xl text-gray-800">
          100-Day Self-Study Plan to Learn Data Engineering
        </h1>
        <br />
        <div className="w-full">
          <p className="text-2xl py-4 pt-1 lg:text-xl text-gray-700">
            Becoming a data engineer requires dedication and a structured approach. This 100-day self-study plan guides you through essential concepts and skills, with each day focusing on a specific topic to build a solid foundation for real-world challenges.
          </p>
          <h2 className="font-semibold pt-5 text-2xl lg:text-2xl text-gray-800">
            Ready to transform your career in data engineering?
          </h2>
          <p className="font-semibold py-4 pt-5 text-lg lg:text-xl text-gray-700">
            Join our 100-day self-study course and gain the skills and knowledge to excel in this dynamic field.
          </p>
        </div>
        <div className="flex flex-col lg:flex-row justify-center lg:justify-start items-center space-y-4 lg:space-y-0 lg:space-x-4 mt-6 w-full">
          <a href="https://lms.forumde.in/support">
          <button className="flex items-center justify-center px-6 py-2 rounded-xl bg-white border-2 border-green-900 text-black text-lg lg:text-xl w-full lg:w-auto">
            Contact Us
            <Lottie
              {...callOptions}
              className="ml-2"
              style={{ height: '50px', width: '50px' }}
            />
          </button></a>
          <a href="/assets/Pdf/syllabus.pdf" download='100-Day-Data-Engineering-Plan'>
            <button className="flex items-center justify-center px-6 py-2 rounded-xl bg-red-400 border-2 border-black text-white text-xl lg:text-xl w-full lg:w-auto">
              Download
              <Lottie
                {...downloadOptions}
                className="ml-2"
                style={{ height: '50px', width: '50px' }}
              />
            </button>
          </a>
        </div>
      </div>
      <div className="w-full lg:w-2/5 flex justify-center mr-5 items-center">
        <img 
          src={gif.src} 
          alt="Logo GIF"
          className="rounded-lg h-full w-fit"
        />
      </div>
    </div>
  );
};

export default Details;

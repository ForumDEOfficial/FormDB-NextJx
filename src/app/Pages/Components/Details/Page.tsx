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
    <div className="pt-20 lg:mt-10 flex flex-col lg:flex-row relative p-5 min-h-[9%] w-full bg-orange-200">
      <div className="w-full lg:w-2/3 p-1 m-2">
        <h1 className="font-extrabold pb-2 text-4xl lg:text-5xl text-gray-800">
          100-Day Self-Study Plan to Learn Data Engineering
        </h1>
        <h2 className="font-semibold pt-5 text-3xl lg:text-4xl text-gray-800">
          Welcome to Your Data Engineering Journey
        </h2>
        <br />
        <div className="w-full">
          <p className="text-2xl py-4 px-2 pt-1 text-lg lg:text-xl text-gray-700">
            Embarking on a path to becoming a data engineer requires dedication and a structured approach. This 100-day self-study plan is designed to guide you through essential concepts and skills in data engineering. Each day focuses on a specific topic or skill to build a solid foundation and prepare you for real-world challenges.
          </p>
          <h2 className="font-semibold pt-5 text-3xl lg:text-4xl text-gray-800">
            Ready to transform your career in data engineering?
          </h2>
          <p className="font-semibold py-4 px-4 pt-5 text-lg lg:text-xl text-gray-700">
            Join our 100-day self-study course and gain the skills and knowledge to excel in this dynamic field.
          </p>
        </div>
        <div className="flex flex-col lg:flex-row justify-center lg:justify-start items-center space-y-4 lg:space-y-0 lg:space-x-4 mt-5 w-full">
          <button className="flex items-center justify-center px-6 py-2 rounded-xl bg-white border-2 border-green-900 text-black text-lg lg:text-xl w-full lg:w-auto">
            Contact Us
            <Lottie
              {...callOptions}
              className="ml-2"
              style={{ height: '50px', width: '50px' }}
            />
          </button>
          <button className="flex items-center justify-center px-6 py-2 rounded-xl bg-red-400 border-2 border-red-800 text-white text-lg lg:text-xl w-full lg:w-auto">
            Download
            <Lottie
              {...downloadOptions}
              className="ml-2"
              style={{ height: '50px', width: '50px' }}
            />
          </button>
        </div>
      </div>
      <div className="w-full lg:w-1/3 flex justify-center items-center">
        <Lottie
          {...defaultOptions}
          className="rounded-3xl shadow-2xl"
          style={{ height: '400px', width: '400px' }}
        />
      </div>
    </div>
  );
};

export default Details;

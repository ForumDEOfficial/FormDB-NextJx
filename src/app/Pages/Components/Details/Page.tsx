/* eslint-disable @next/next/no-img-element */
"use client";

import Lottie from 'lottie-react';
import React from 'react';
import animation01 from '@/../../public/assets/Top_ImageSlider/01.json';
import download from '@/../../public/assets/Top_ImageSlider/download.json';
import call from '@/../../public/assets/Logo/call.json';
import gif from '@/../../public/assets/gif/azure 2.gif';
import { Montserrat, Noto_Serif } from 'next/font/google';

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '700'],
});
const inter = Noto_Serif({
  subsets: ['latin'],
  weight: ['400', '700'],
});

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
        <h1 className={`font-bold pb-2 text-4xl lg:text-4xl text-gray-800 ${montserrat.className}`}>
          FREE!! 100-Day Self-Study Plan to Learn Data Engineering
        </h1>
        <br />
        <div className="w-full">
          <p className={`text-3xl py-4 pt-1 lg:text-2xl text-gray-700 ${inter.className}`}>
            We have created a 100-day self-study plan for those students who want to learn Azure Data Engineering by self-study. After interacting with many students, we have felt that students don’t get proper direction on what they should learn and how they should learn to become an Azure Data Engineer. In this plan, we have set daily targets to help you achieve your goal.
          </p>
          <h2 className={`pt-5 text-3xl lg:text-2xl text-gray-800 ${inter.className}`}>
            Do follow the plan and make yourself ready to crack the Azure Data Engineering Interview.
          </h2>
          <br />
          <p className={`text-3xl py-4 pt-1 lg:text-2xl text-gray-700 ${inter.className}`}>
            Use the below <b>Download</b> button to download the plan.
          </p>
        </div>
        <div className="flex flex-col lg:flex-row justify-center lg:justify-start items-center space-y-4 lg:space-y-0 lg:space-x-4 mt-6 w-full">
          <a href="https://lms.forumde.in/support">
            <button className="flex items-center justify-center px-6 py-2 rounded-xl bg-white border-2 border-green-900 hover:bg-green-300 text-black text-lg lg:text-xl w-fit lg:w-auto">
              <div>
                <h1 className='text-2xl'>Call us</h1>
                <p className='text-xl'>+91 99341 04635</p>
              </div>
              <Lottie {...callOptions} className="ml-2" style={{ height: '80px', width: '80px' }} />
            </button>
          </a>
          <a href="/assets/Pdf/Plan.pdf" download="100-Day-Data-Engineering-Plan">
            <button className="flex items-center justify-center px-6 py-2 rounded-xl bg-red-400 border-2 border-black text-white text-xl lg:text-xl w-fit lg:w-auto">
              Download
              <Lottie {...downloadOptions} className="ml-2" style={{ height: '80px', width: '80px' }} />
            </button>
          </a>
        </div>
      </div>
      <div className="w-full lg:w-2/5 flex justify-center items-center">
        <img src={gif.src} alt="Logo GIF" className="rounded-lg h-full w-auto" />
      </div>
    </div>
  );
};

export default Details;

"use client";

// Importing necessary assets and libraries
import pic3 from "@/../../public/assets/student.jpg";
import pic4 from "@/../../public/assets/shu_img.jpg";
import pic5 from "@/../../public/assets/student1.jpg";
import selection from "@/../../public/assets/lottie/selection.json";
import React, { useState } from 'react';
import Image from 'next/image';
import { Montserrat, Noto_Serif } from 'next/font/google';
import Navbar from "../../MainComponets/Header/pages";
import Lottie from "lottie-react";
import Companies from "../../Additional/Companies/pages";

// Importing logo images

// Initializing custom fonts
const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '700'], 
});

const inter = Noto_Serif({
  subsets: ['latin'],
  weight: ['400', '700'], 
});

// Data array holding testimonials information
const testimonialData = [
  {
    name: 'Raj Singh',
    image: pic3,
    description: "I am writing to express my deepest gratitude for your exceptional mentorship and support during my Azure Data Engineering course journey...",
    aosDelay: "650",
  },
  {
    name: 'Krishan Pal',
    image: pic5,
    description: "I am incredibly grateful for the guidance and mentorship provided by Mr. Arun Kumar throughout my journey in data engineering...",
    aosDelay: "650",
  },
  {
    name: 'Shubham Naikanavare',
    image: pic4,
    description: "I am immensely grateful for the exceptional mentorship and guidance provided by Mr. Arun Kumar during my journey into Azure data engineering...",
    aosDelay: "650",
  }
];

const Testimonials = () => {
  // State to manage the expansion of each testimonial's description
  const [expanded, setExpanded] = useState(Array(testimonialData.length).fill(false));

  // Function to toggle the expansion of a testimonial description
  const toggleExpand = (index: number) => {
    const newExpanded = [...expanded];
    newExpanded[index] = !newExpanded[index];
    setExpanded(newExpanded);
  };

  // Lottie animation configuration
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: selection,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  return (
    <>
      {/* Navbar Component */}
      <Navbar />

      {/* Main container for the testimonials section */}
      <div data-aos="fade-up" data-aos-delay="400" className="text-black py-10 sm:pb-24">

        {/* Section title and Lottie animation, responsive design */}
        <div className="flex flex-wrap">
          
          {/* Text and heading container, responsive padding */}
          <div className="w-full lg:w-[60%] px-4 lg:px-10 pt-10 lg:pt-28">
            <div className={`text-4xl sm:text-6xl md:text-5xl underline font-bold text-center mx-auto p-2 sm:p-6 md:p-8 ${montserrat.className}`}>
              Our Selection
            </div>
            <h2 className="p-4 sm:p-8 font-semibold text-base lg:text-lg">
              We are proud of our achievers to have proved their success through hard-work and dedication... Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis, eligendi!
            </h2>
          </div>

          {/* Lottie animation container, responsive */}
          <div className="w-full lg:w-[40%] flex justify-center">
            <Lottie {...defaultOptions} className="pt-4 lg:pt-32 w-full max-w-lg"></Lottie>
          </div>
        </div>

        {/* Section title */}
       <Companies/>
        {/* Testimonial cards container, responsive grid */}
        <div className="space-y-4 pb-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 justify-center gap-8 p-4 sm:p-10">
            {testimonialData.map((data, index) => (
              <div key={data.name} className="p-4 border border-solid border-black rounded-lg shadow-xl flex flex-col items-center" style={{ maxWidth: '400px' }}>
                
                {/* Testimonial content */}
                <div className="flex flex-col items-center space-y-3">
                  {/* Profile image */}
                  <Image src={data.image} className="w-32 h-32 rounded-full" alt={data.name} />
                  
                  {/* Testimonial name */}
                  <h1 className={`font-bold text-center text-lg ${montserrat.className}`}>{data.name}</h1>
                  
                  {/* Star rating */}
                  <div className="text-yellow-500 text-center">★ ★ ★ ★ ★</div>
                  
                  {/* Testimonial description, expandable */}
                  <p className={`font-thin text-center ${inter.className}`}>
                    {expanded[index] ? data.description : `${data.description.substring(0, 100)}...`}
                  </p>
                  
                  {/* Show More/Show Less button */}
                  <button
                    onClick={() => toggleExpand(index)}
                    className="mt-2 text-blue-600 hover:underline"
                  >
                    {expanded[index] ? "Show Less" : "Show More"}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonials;

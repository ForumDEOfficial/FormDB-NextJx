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
//import testimonialData from "@/../../src/app/Pages/Data/testimonialsdata"
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
  },
  {
    name: 'Diptanu',
    image: pic4,
    description: "Joining Forumde has been a transformative experience for me. With their exceptional data engineering solutions and support, I was able to achieve remarkable career growth. In just one year, I received a 200% salary hike at Circle K, thanks to the enhanced skills and insights I gained. I am particularly grateful to Mentor Arun Kumar, whose guidance and expertise were pivotal in this journey. Forumde's platform and Arun's mentorship played a crucial role in this success, and I'm incredibly thankful for the opportunities it has opened up.",
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
      <div data-aos="fade-up" data-aos-delay="400" className="text-black pt-5 sm:pb-24  ">

        {/* Section title and Lottie animation, responsive design */}
        <div className="flex flex-wrap bg-black/90 text-white pt-20">
          
          {/* Text and heading container, responsive padding */}
          <div className="w-full lg:w-[60%] px-4 lg:px-10 lg:pt-10 pt-36 text-base gap-5 space-y-3">
            <div className={`text-4xl sm:text-4xl md:text-4xl pt-32 font-bold${montserrat.className}`}>
              Welcome,
            </div>
            <div className={`text-4xl sm:text-6xl md:text-5xl underline font-bold ${montserrat.className}`}>
              To Achivers Wall
            </div>
            <h2 className={`py-9 font-medium text-base lg:text-2xl ${inter.className}`}>
            Celebrate the exceptional individuals who have made outstanding contributions to our community. Our Hall of Fame honors those whose achievements, leadership, and dedication have significantly advanced the field. Discover their stories and recognize their impact.
            </h2>
          </div>

          {/* Lottie animation container, responsive */}
          <div className="w-full lg:w-[40%] flex justify-center">
            <Lottie {...defaultOptions} className="pt-4 lg:pt-32 w-full max-w-lg"></Lottie>
          </div>
        </div>

        {/* Section title */}
      <div className="bg-black/90 p-16 ">
        <div className="w-fit h-fit border-3 border-black bg-black/95 p-14">
        <div className="text-center text-4xl sm:text-5xl lg:text-5xl text-white py-8 lg:pt-16 font-bold">
            Where our Achievers are
          </div>
          <div className=""> 
<Companies/>
          </div>
        </div>
      </div>
        {/* Testimonial cards container, responsive grid */}
        <div className="space-y-4 pb-12 bg-black/90">
          <div className="grid grid-cols-1 sm:grid-cols-2 justify-center text-center self-center origin-center content-center lg:grid-cols-3 gap-8 p-4 sm:p-10">
            {testimonialData.map((data, index) => (
              <div key={data.name} className="p-3 border border-solid border-black bg-black/50 rounded-lg shadow-xl flex flex-col items-center" style={{ maxWidth: '400px' }}>
                
                {/* Testimonial content */}
                <div className="flex flex-col items-center space-y-3 bg-black/40 p-5">
                  {/* Profile image */}
                  <Image src={data.image} className="w-32 h-32 rounded-full" alt={data.name} />
                  
                  {/* Testimonial name */}
                  <h1 className={`font-bold text-center text-lg text-white ${montserrat.className}`}>{data.name}</h1>
                  
                  {/* Star rating */}
                  <div className="text-yellow-500 text-center ">★ ★ ★ ★ ★</div>
                  
                  {/* Testimonial description, expandable */}
                  <p className={`font-thin text-center text-white ${inter.className}`}>
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

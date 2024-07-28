"use client";
import { useEffect } from 'react';

import certificateimg from "@/../../public/assets/certificate.jpeg";
import certiheader from "@/../../public/assets/certificateheader.jpg";
import Image from 'next/image';
import certificate from "@/../../public/assets/Top_ImageSlider/certficate.json";
import Lottie from 'lottie-react';

export default function MyCertificate() {
  useEffect(() => {
    const handleScroll = () => {
      const animatedText = document.querySelectorAll('.animated-text');
      const windowHeight = window.innerHeight;
      animatedText.forEach(text => {
        const textTop = text.getBoundingClientRect().top;
        if (textTop < windowHeight * 0.8) {
          text.classList.add('fade-in-up');
        } else {
          text.classList.remove('fade-in-up');
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Define default options for Lottie
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: certificate, // Ensure this is correctly imported and structured
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  return (
    <div data-aos="fade-down" data-aos-delay="700" className="container mx-auto my-5 p-4">
      <Image src={certiheader} data-aos="fade-down" alt="Certificate15Header" className="w-full h-auto my-4" />
      <div className="flex flex-col md:flex-row justify-center items-center gap-8">
        <div className="md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left px-4">
          <p data-aos="fade-down" data-aos-delay="700" className="animated-text text-3xl md:text-4xl italic font-extrabold mt-4">
            Certificate of Achievement
          </p>
          <br />
          <p data-aos="fade-down" data-aos-delay="700" className="animated-text font-bold mt-2">
            Congratulations on completing the Azure Data Constellation: Engineering the Future course! A course completion certificate will be given to students on completion of 60% of the course. This certificate will enhance your LinkedIn Profile and help you in grabbing a good job. Best wishes for your future endeavors.
          </p>
          <br />
          <p data-aos="fade-down" data-aos-delay="700" className="animated-text text-2xl md:text-3xl mt-4">
            Best Regards, <br />
            Arun Kumar
          </p>
          <Lottie
            {...defaultOptions}
            className="ml-2"
            style={{ height: '200px', width: '200px' , alignContent: "center"}} // Adjust size as needed
          />
        </div>
        <div className="md:w-1/2 flex justify-center px-4">
          <Image src={certificateimg} data-aos="fade-down" data-aos-delay="700" className="w-full max-w-xs min-h-fit md:max-w-lg" alt="Certificate" />
        </div>
      </div>
    </div>
  );
}

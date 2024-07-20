"use client";

import { useEffect } from 'react';
import 'aos/dist/aos.css';
import AOS from 'aos';
import Image from 'next/image';
import StartImage from '../../../../../public/assets/Top_ImageSlider/Start_01.png'

export function ImageCarousel() {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      AOS.init({
        duration: 650, 
        once: true, 
      });
    }
  }, []);


  return (
    <div className="pt-5 max-h-fit w-full pt-10" data-aos="fade-zoom" data-aos-delay="700">
      <Image src={StartImage} data-aos="fade-zoom" data-aos-delay="700" className="h-auto w-full" alt="Sliding Image" />
    </div>
  );
}

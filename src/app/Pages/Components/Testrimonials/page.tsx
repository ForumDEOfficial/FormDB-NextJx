import pic3 from "@/../../public/assets/student.jpg";
import pic4 from "@/../../public/assets/shu_img.jpg";
import pic5 from "@/../../public/assets/student1.jpg";

import React from 'react';
import Image from 'next/image';
import { Montserrat, Noto_Serif} from 'next/font/google';
import Navbar from "../../MainComponets/Header/Header";


const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '700'], 
});
const inter= Noto_Serif({
  subsets: ['latin'],
  weight: ['400', '700'], 
});


const testimonialData = [
  {
    name: 'Raj Singh',
    image: pic3,
    description: "I am writing to express my deepest gratitude for your exceptional mentorship and support during my Azure Data Engineering course journey. Your guidance and expertise have been instrumental in not only helping me navigate the complexities of the course but also in securing a new job with a remarkable 50% hike. Through your expert guidance, I was able to grasp complex concepts, overcome challenges, and hone my skills in Azure data engineering. Your practical advice and real-world examples have been invaluable in preparing me for the demands of the industry.",
    aosDelay: "650",
  },
  {
    name: 'Krishan Pal',
    image: pic5,
    description: "I am incredibly grateful for the guidance and mentorship provided by Mr. Arun Kumar throughout my journey in data engineering. Under his expert tutelage, I not only acquired invaluable skills but also achieved an astounding 180% hike in my career trajectory.I wholeheartedly recommend Mr. Arun Kumar to anyone seeking to embark on a journey in data engineering or advance their existing skills. His expertise, dedication, and genuine passion for empowering others are unparalleled, making him a mentor extraordinaire in every sense of the word.",
    aosDelay: "650",
  },
  {
    name: 'Shubham Naikanavare',
    image: pic4,
    description: "I am immensely grateful for the exceptional mentorship and guidance provided by Mr. Arun Kumar during my journey into Azure data engineering. With his invaluable support, I not only gained a deeper understanding of Azure technologies but also secured a new job with an incredible hike. Thanks to Arun sir mentorship I was able to navigate the complexities of the Azure platform with ease and confidence. His encouragement and support were instrumental in helping me secure a job opportunity that far exceeded my expectations.",
    aosDelay: "650",
  },
  {
    name: 'Shubham Naikanavare',
    image: pic4,
    description: "I am immensely grateful for the exceptional mentorship and guidance provided by Mr. Arun Kumar during my journey into Azure data engineering. With his invaluable support, I not only gained a deeper understanding of Azure technologies but also secured a new job with an incredible hike. Thanks to Arun sir mentorship I was able to navigate the complexities of the Azure platform with ease and confidence. His encouragement and support were instrumental in helping me secure a job opportunity that far exceeded my expectations.",
    aosDelay: "650",
  }
];

const Testimonials = () => {
  return (
    <><Navbar /><div data-aos="fade-up" data-aos-delay="400" className='text-black py-14 sm:pb-24'>
      <div className={`container text-4xl sm:text-5xl md:text-6xl underline font-bold text-center mx-auto p-4 sm:p-6 md:p-12 ${montserrat.className}`}>Our Testimonials</div>
      <div className="flex">
        <div className="min-w-[60%]">
          <div>
            <div className="px-16 pt-28">
              <h1 className="text-center pt-8 text-5xl font-bold">Forum DB Hall of Fame</h1>
              <h2 className="p-10 font-semibold text-l">We are proud of our achievers to have proved their success through hard-work and dedication which has enabled them to make their dreams come true. You too can be part of the Forum DB achiever group only if you stay consistent and be determined.</h2>
            </div>
          </div>
        </div>
        <div className="min-w-[40%] bg-blue-900">hello </div>
      </div>
      <div>
        <div className="text-center">Where our Achivers are</div>
        <div className="grid grid-cols-6 p-11">
      <h1>h</h1>
<h1>g</h1>
<h1>r</h1>
<h1>r</h1>
<h1>r</h1>
<h1>r</h1>
<h1>r</h1>
<h1>r</h1>
<h1>r</h1>
        </div>

      </div>
      <div className='space-y-4 pb-12'>
        <div className='flex flex-wrap justify-center gap-8 p-4 sm:p-10'>
          {testimonialData.map((data) => (
            <div key={data.name} className="p-4 border border-solid border-black rounded-lg shadow-xl flex flex-col items-center" style={{ maxWidth: '400px' }}>
              <div className='flex flex-col items-center space-y-3'>
                <Image src={data.image} className='w-32 h-32 rounded-full' alt={data.name} />
                <h1 className={`font-bold text-center text-lg ${montserrat.className}`}>{data.name}</h1>
                <div className="text-yellow-500 text-center">★ ★ ★ ★ ★</div>
                <p className={`font-medium text-center ${inter.className}`}>{data.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div></>
  );
};

export default Testimonials;

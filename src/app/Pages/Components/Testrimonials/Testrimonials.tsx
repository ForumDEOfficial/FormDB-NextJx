import pic3 from "@/../../public/assets/student.jpg";
import pic4 from "@/../../public/assets/student2.jpg";
import pic5 from "@/../../public/assets/student1.jpg";

import React from 'react';
import Image from 'next/image';

const testimonialData = [
  {
    name: 'Raj Singh',
    image: pic3,
    description: "Exceptional mentorship and support during my Azure Data Engineering course journey. Your guidance and expertise helped me navigate the complexities of the course and secure a new job with a remarkable 50% hike.",
    aosDelay: "650",
  },
  {
    name: 'Krishan Pal',
    image: pic5,
    description: "Guidance and mentorship provided by Mr. Arun Kumar throughout my journey in data engineering. Under his expert tutelage, I acquired invaluable skills and achieved an astounding 180% hike in my career trajectory.",
    aosDelay: "650",
  }
];

const Testimonials = () => {
  return (
    <div data-aos="fade-up" data-aos-delay="400" className='text-black py-14 sm:pb-24'>
      <div className="container text-4xl sm:text-5xl md:text-6xl underline font-bold text-center mx-auto p-4 sm:p-6 md:p-12">Testimonials</div>
      <div className='space-y-4 pb-12'>
        <div className='flex flex-wrap justify-center gap-8 p-4 sm:p-10'>
          {testimonialData.map((data) => (
            <div key={data.name} className="p-4 border border-solid border-black rounded-lg shadow-xl flex flex-col items-center" style={{ maxWidth: '400px' }}>
              <div className='flex flex-col items-center space-y-3'>
                <Image src={data.image} className='w-32 h-32 rounded-full' alt={data.name} />
                <h1 className='font-bold text-center text-lg'>{data.name}</h1>
                <div className="text-yellow-500 text-center">★ ★ ★ ★ ★</div>
                <p className="font-medium text-center">{data.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;

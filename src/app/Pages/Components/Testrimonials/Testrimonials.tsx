import pic3 from "@/../../public/assets/student.jpg";
import pic4 from "@/../../public/assets/student2.jpg";
import pic5 from "@/../../public/assets/student1.jpg";

import React from 'react'
import Image from 'next/image'

const testimonialData = [
  {
    name: 'Raj Singh',
    image: pic3,
    description: "Exceptional mentorship and support during my Azure Data Engineering course journey. Your guidance and expertise helped me navigate the complexities of the course and secure a new job with a remarkable 50% hike.",
    aosDelay: "650",
  },
  {
    name: 'Sagar Kumar Singh',
    image: pic4,
    description: "Exceptional mentorship and guidance during my journey into Azure data engineering. With his invaluable support, I gained a deeper understanding of Azure technologies and secured a new job with an incredible 150% hike.",
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
    <div data-aos="fade-up" data-aos-delay="600" className='text-black py-14 sm:pb-24'>
      <div data-aos="fade-up" data-aos-delay="600" className='space-y-4 pb-12'>
        <div data-aos="fade-up" data-aos-delay="600" className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 p-4 sm:p-10'>
          {testimonialData.map((data) => (
            <div data-aos="fade-up" data-aos-delay="600" key={data.name} className="p-4 border border-solid border-black rounded-lg shadow-md">
              <div data-aos="fade-up" data-aos-delay="600" className='flex flex-col items-center space-y-3'>
                <Image data-aos="fade-up" data-aos-delay="600" src={data.image} className='w-32 h-32 rounded-full' alt={data.name} />
                <h1 data-aos="fade-up" data-aos-delay="600" className='font-bold text-center text-lg'>{data.name}</h1>
                <div data-aos="fade-up" data-aos-delay="600" className="text-yellow-500 text-center">★ ★ ★ ★ ★</div>
                <p data-aos="fade-up" data-aos-delay="600" className="font-medium text-center">{data.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;

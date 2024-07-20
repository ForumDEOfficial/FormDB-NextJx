
import pic3 from "@/../../public/assets/student.jpg";
import pic4 from "@/../../public/assets/student2.jpg";
import pic5 from "@/../../public/assets/student1.jpg";
import youtube from "@/../../public/assets/youtube.jpg";

import React from 'react'
import Image from 'next/image'

const testimonialData=[
{
    name: 'Raj Singh',
      image: pic3,
        description: "Exceptional mentorship and support during my Azure Data Engineering course journey. Your guidance and expertise helped me navigate the complexities of the course and secure a new job with a remarkable 50% hike.", aosDelay: "650",
},{
    name: 'Sagar Kumar Singh', image: pic4 , description: "Exceptional mentorship and guidance during my journey into Azure data engineering. With his invaluable support, I gained a deeper understanding of Azure technologies and secured a new job with an incredible 150% hike.", aosDelay: "650",
},{
    name: 'Krishan Pal', image: pic5 , description: "Guidance and mentorship provided by Mr. Arun Kumar throughout my journey in data engineering. Under his expert tutelage, I acquired invaluable skills and achieved an astounding 180% hike in my career trajectory.", aosDelay: "650",
}
]
const Testimonials = () => {
  return (
    <div data-aos="fade-up" data-aos-delay="600" className=' text-black py-14 sm:pb-24'>
        <div data-aos="fade-up" data-aos-delay="600" className='space-y-4 pb-12'>
           
            {/* Card Section */}
            {/* it gives the grid of 3 colmn = sm:grid-cols-3 */}
            <div data-aos="fade-up" data-aos-delay="600" className='grid grid-cols-2 sm:grid-cols-3 space-y-3 gap-8 border-solid border-black  p-10' >
{
    testimonialData.map((data)=>{
        return(
            
            <div data-aos="fade-up" data-aos-delay="600" key={data.name} style={{border: "solid"}} className="p-4">
                <div data-aos="fade-up" data-aos-delay="600" className='grid place-items-center space-y-3 p-3'>

                  <Image data-aos="fade-up" data-aos-delay="600" src ={data.image} className='h-w-32 w-32 rounded-full' alt=""></Image>
                </div>
                <h1 data-aos="fade-up" data-aos-delay="600" className='font-bold text-center' style={{fontSize: 20}}>{data.name}</h1>
                <div data-aos="fade-up" data-aos-delay="600" className="text-2xl text-center text-yellow-500">★ ★ ★ ★ ★</div>
                <p data-aos="fade-up" data-aos-delay="600" className="font-medium">{data.description}</p>

            </div>
        );
    })
}
            </div>
        </div>
    </div>
  )
}

export default Testimonials
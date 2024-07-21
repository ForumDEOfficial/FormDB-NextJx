"use client";

import React, { useRef, RefObject } from 'react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Image, { StaticImageData } from 'next/image';
import Azure from "@/../../public/assets/courses/Azure.jpg";
import Python from "@/../../public/assets/courses/Python.jpg";
import SQL from "@/../../public/assets/courses/SQL.jpg";
import DataScience from "@/../../public/assets/courses/Data Science.jpg";
import 'aos/dist/aos.css';
import AOS from 'aos';
import '@fortawesome/fontawesome-free/css/all.min.css';
import CourseImage from "@/../../public/assets/courses.png";
import {Button, ButtonGroup} from "@nextui-org/button";
import Course from './Explore/page';

AOS.init();

interface Course {
  id: number;
  image: string | StaticImageData;
  title: string;
  description: string;
  duration: string;
  fee: string;
  startDate: string;
  registration: string;
  paymentLink: string;
  explore: string;
}

const courses: Course[] = [
  {
    id: 1,
    image: Azure,
    title: "Azure Data Engineering",
    description: "Job Assistance || Real-Time Projects || Assignments || Live classes || Recordings",
    duration: "3 Months",
    fee: "Rs 19,999/-",
    startDate: "Starts from 1st June 2024",
    registration: "Registrations Open",
    paymentLink: "https://rzp.io/l/RwigF3Ds9",
    explore: "/Pages/Components/Course/Explore"
  },
  {
    id: 2,
    image: Python,
    title: "Python Programming",
    description: "Python from zero to hero course || Hands-On Training || Assignments || Recordings",
    duration: "2 Months",
    fee: "Rs 4,999/-",
    startDate: "New Batch starting soon",
    registration: "Registration Open",
    paymentLink: "https://rzp.io/l/yOT3UZjG",
     explore: "/Pages/Components/Course/Explore"
  },
  {
    id: 3,
    image: SQL,
    title: "Master In SQL",
    description: "Explore the Power of SQL || Ticket to fast-track growth in data science || Recordings",
    duration: "2 Months",
    fee: "Rs 4,999/-",
    startDate: "New Batch starting soon",
    registration: "Registration Open",
    paymentLink: "https://rzp.io/l/o0ATyl4",
     explore: "/Pages/Components/Course/Explore"
  },
  {
    id: 4,
    image: DataScience,
    title: "Data Science Program",
    description: "Job Assistance || Ticket to fast-track growth in data science || Recordings",
    duration: "3 Months",
    fee: "Rs 19,999/-",
    startDate: "New Batch starting soon",
    registration: "Registration Open",
    paymentLink: "https://rzp.io/l/f4iP34VN",
     explore: "/Pages/Components/Course/Explore"
  }
];

interface CustomButtonGroupProps {
  next: () => void;
  previous: () => void;
}

const CustomButtonGroup: React.FC<CustomButtonGroupProps> = ({ next, previous }) => {
  return (
    <div data-aos="fade-up" data-aos-delay="900" className="flex justify-center items-center py-5 space-x-4">
      <button data-aos="fade-up" data-aos-delay="500" onClick={previous} className="bg-orange-400 hover:bg-orange-200 text-black font-bold py-3 px-3 shadow-md rounded-full">
        <i data-aos="fade-up" data-aos-delay="900"className="fas fa-chevron-left"></i> Previous
      </button>
      <button data-aos="fade-up" data-aos-delay="900" onClick={next} className="bg-orange-400 hover:bg-orange-200 text-black font-bold py-3 px-6 shadow-md rounded-full">
         Next <i data-aos="fade-up" data-aos-delay="900" className="fas fa-chevron-right"></i>
      </button>
    </div>
  );
};

export default function CourseContainer() {
  const carouselRef: RefObject<any> = useRef(null);

  const handleNext = () => {
    if (carouselRef.current) {
      carouselRef.current.next();
    }
  };

  const handlePrev = () => {
    if (carouselRef.current) {
      carouselRef.current.previous();
    }
  };

  return (
    <div data-aos="fade-up" data-aos-delay="700" className="container mx-auto py-6">
      <Image src={CourseImage} alt="Courses" data-aos="fade-up" data-aos-delay="700" className='px-7 pb-4 mx-auto' />
      
      <Carousel
        responsive={{
          superLargeDesktop: { breakpoint: { max: 4000, min: 3000 }, items: 5 },
          desktop: { breakpoint: { max: 3000, min: 1024 }, items: 3 },
          tablet: { breakpoint: { max: 1024, min: 464 }, items: 2 },
          mobile: { breakpoint: { max: 464, min: 0 }, items: 1 }
        }}
        transitionDuration={2000}
        containerClass="carousel-container relative"
        autoPlaySpeed={7000}
        draggable={true}
        centerMode={false}
        autoPlay={true}
        infinite={true}
        swipeable={true}
        ref={carouselRef}
        arrows={false}
        renderButtonGroupOutside={true}
        customButtonGroup={<CustomButtonGroup next={handleNext} previous={handlePrev} />}
        itemClass="px-4"
      >
        {courses.map((course) => (
          <div key={course.id} data-aos="fade-up" data-aos-delay="700" className="bg-white text-black rounded-lg border border-gray-300 shadow-xl px-4 pb-4 pt-2 relative">
            <div data-aos="fade-up" data-aos-delay="700" className='text-white bg-gradient-to-r from-blue-600 to-blue-300 px-5 py-1 mb-1 inline-block rounded-lg'> Best Selling </div>
            <Image className="rounded-lg w-full h-50 object-cover mb-2" src={course.image as StaticImageData} alt={course.title} />
            <div className="p-4">
              <h6 data-aos="fade-up" data-aos-delay="700" className="text-lg font-bold">{course.title}</h6>
              <p data-aos="fade-up" data-aos-delay="700" className="text-sm">{course.description}</p>
              <p data-aos="fade-up" data-aos-delay="700" className="text-sm"><strong>Duration:</strong> {course.duration}</p>
              <p data-aos="fade-up" data-aos-delay="700" className="text-sm"><strong>Fees:</strong> {course.fee}</p>
              <p data-aos="fade-up" data-aos-delay="700" className="text-sm">{course.startDate}</p>
              <p data-aos="fade-up" data-aos-delay="700" className="text-sm">{course.registration}</p>
              <div data-aos="fade-up" data-aos-delay="700" className="flex justify-between items-center mt-4">
               <a href={course.explore}>
                <Button data-aos="fade-up" data-aos-delay="700" className="bg-blue-600 hover:bg-blue-400 text-white rounded px-5 py-2 text-sm" >Explore</Button></a>
                <a href={course.paymentLink}>
                  <Button data-aos="fade-up" data-aos-delay="700" className="bg-green-600 hover:bg-green-400 text-white rounded px-5 py-2 text-sm">Pay Now</Button>
                </a>
              </div>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
}

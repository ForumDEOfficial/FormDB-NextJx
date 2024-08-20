"use client";
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import ProfileImage from "@/../../public/assets/ProfileImage.png"; 
import Image from 'next/image';
import { Montserrat, Noto_Serif } from 'next/font/google';
import './Aboutus.css';
import Navbar from '../../MainComponets/Header/pages';
import { WhyUs } from '../Why_Us/Why_us';
import mission from '@/../../public/assets/lottie/mission.json';
import Lottie from 'lottie-react';
import Nandini from '@../../../public/assets/FDELogo.png'
 
const TeamsData =[
  {
    id : 1,
    name: "Nandini",
    team: "Tech Team",
    description : "dsajkfnsdajnidsajnfsdfunsduifndsuinfuidsnfuidsnfindsabufdsjfnuisdn",
    img : Nandini

  },
  {
    id : 2,
    name: "Nandini",
    team: "Tech Team",
    description : "dsajkfnsdajnidsajnfsdfunsduifndsuinfuidsnfuidsnfindsabufdsjfnuisdn",
    img : Nandini

  },
  {
    id : 3,
    name: "Nandini",
    team: "Tech Team",
    description : "dsajkfnsdajnidsajnfsdfunsduifndsuinfuidsnfuidsnfindsabufdsjfnuisdn",
    img : Nandini
  },
  {
    id : 4,
    name: "Nandini",
    team: "Tech Team",
    description : "dsajkfnsdajnidsajnfsdfunsduifndsuinfuidsnfuidsnfindsabufdsjfnuisdn",
    img : Nandini

  },
  {
    id : 5,
    name: "Nandini",
    team: "Tech Team",
    description : "dsajkfnsdajnidsajnfsdfunsduifndsuinfuidsnfuidsnfindsabufdsjfnuisdn",
    img : Nandini

  }
]
// Initialize custom fonts
const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '700'],
});
const inter = Noto_Serif({
  subsets: ['latin'],
  weight: ['400', '700'],
});

export default function AboutUs() {
  // Lottie animation configuration for the mission section
  const missionAnimation = {
    loop: true,
    autoplay: true,
    animationData: mission,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  useEffect(() => {
    // Initialize AOS for scroll animations
    AOS.init({
      duration: 650,
      once: true,
    });

    // Scroll event listener to handle text animation
    const handleScroll = () => {
      const animatedText = document.querySelectorAll('.animated-text');
      animatedText.forEach(text => {
        const textTop = text.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
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

  return (
    <>
      {/* Navbar Component */}
      <Navbar />
    
      {/* Main container for the About Us section */}
      <div data-aos="fade-up" className="container mx-auto py-5 mt-28 px-4">
        <h1 className={`text-4xl md:text-6xl text-center font-bold mb-6 underline ${montserrat.className}`} data-aos="fade-left">
          About Us
        </h1>
        
        {/* Grid layout for Profile Image and Introduction */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          <div className="md:col-span-1 p-5">
            <Image src={ProfileImage} alt="Profile" className="w-full h-auto rounded-3xl" />
          </div>

          <div className="md:col-span-2">
            <div data-aos="fade-left">
              <p className={`text-xl leading-relaxed ${montserrat.className}`}>
                <strong>Dear Students,</strong>
              </p>
              <p className={`mt-4 font-semibold ${inter.className}`}>
                It is with great pleasure that I welcome you to ForumDE - your gateway to opportunities in Information Technology. As technology evolves rapidly, the demand for skilled IT professionals is higher than ever. We provide industry-level IT training in the latest technologies like Cloud (Azure, AWS, GCP), Data Engineering, Data Science, Docker and Kubernetes, Data Visualization, Business Analysis, and Project Management. At ForumDE, we understand the importance of staying ahead, adapting, and honing skills to meet the industry’s dynamic needs.
              </p>
              <p className={`mt-4 font-semibold ${inter.className}`}>
                As you begin your journey toward a fulfilling career in IT, I encourage you to leverage the resources and opportunities at ForumDE. Whether you`re a professional aiming to advance your career or a fresh graduate eager to make your mark, our platform offers abundant resources, networking opportunities, and expert guidance to support you every step of the way. On behalf of the entire ForumDE team, I wish you the best in your pursuit of a rewarding career in Information Technology. Together, let’s shape the future of technology and create a brighter tomorrow for generations to come.
              </p>
              <p className={`mt-4 text-lg font-bold ${montserrat.className}`}>
                Best Regards, <br />
                <strong>Founder, ForumDE</strong><br />
                Arun Kumar
              </p>
            </div>
          </div>
        </div>

        <br />

        {/* Why Us Component */}
        <WhyUs />

        {/* Mission Section */}
        <div className="mt-10">
          <h1 className="text-center text-4xl md:text-5xl font-semibold underline">Our Mission</h1>
          <div className="flex flex-wrap mt-8 items-center">
            <div className="w-full md:min-w-[60%] lg:w-[35%] p-10 mt-14">
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur assumenda repellat blanditiis dicta, et dolore voluptatibus quod quasi, quas facere vel eveniet laboriosam id ad consequatur maiores ullam, sapiente officia?</p>
            </div>
            <div className="w-full md:min-w-[40%] lg:w-[30%]">
              <Lottie {...missionAnimation} className="pt-18 p-5" />
            </div>
          </div>
        </div>

        {/* Teams Section
        <div className="mt-10">
          <h1 className="text-center text-4xl md:text-5xl font-semibold underline">Our Teams</h1>
          <div className="mt-8 flex flex-wrap">
            <p className="w-full">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur assumenda repellat blanditiis dicta, et dolore voluptatibus quod quasi, quas facere vel eveniet laboriosam id ad consequatur maiores ullam, sapiente officia?</p>
          </div>
          <div className='p-5 grid grid-cols-2 gap-4'>
  {TeamsData.map((data) => (
    <div key={data.id} className='flex flex-col border-2 rounded-lg w-full md:w-1/2 w-fit'>
      <div className='w-full'>
        <Image src={data.img} alt={data.name} className='object-cover rounded-t-lg w-full h-auto' />
      </div>
      <div className='p-4'>
        <h1 className='text-lg font-bold'>{data.name}</h1>
        <h2 className='text-md font-semibold text-gray-600'>{data.team}</h2>
        <p className='mt-2'>{data.description}</p>
      </div>
    </div>
  ))}
</div>


        </div> */}
      </div>
    </>
  );
}

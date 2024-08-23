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
import Nandini from '@../../../public/assets/team_detail/saurav.jpg';
import Saurav from '@../../../public/assets/team_detail/saurav.jpg';
import Shubhangi from '@../../../public/assets/team_detail/shubhangi.jpg';
import Ashish from '@../../../public/assets/team_detail/shubhangi.jpg';
import Sonu from '@../../../public/assets/team_detail/shubhangi.jpg';
import Nitin from '@../../../public/assets/team_detail/shubhangi.jpg';

const TeamsData =[
  {
    id : 1,
    name: "Saurav Ranjan",
    team: "Marketing Team",
    description : "dsajkfnsdajnidsajnfsdfunsduifndsuinfuidsnfuidsnffedkslfm sdklf dsklf dslkindsabufdsjfnuisdn",
    img : Saurav

  },
  {
    id : 2,
    name: "Shubhangi Jha",
    team: "Sales Team",
    description : "dsajkfnsdajnidsajnfsdfunsduifndsuinfuidsnfuidsnfindsabufdsjfnuisdn",
    img : Shubhangi

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
    name: "Ashish Parihar",
    team: "Tech Team",
    description : "dsajkfnsdajnidsajnfsdfunsduifndsuinfuidsnfuidsnfindsabufdsjfnuisdn",
    img : Ashish

  },
  {
    id : 5,
    name: "Sonu Singh",
    team: "Tech Team",
    description : "dsajkfnsdajnidsajnfsdfunsduifndsuinfuidsnfuidsnfindsabufdsjfnuisdn",
    img : Sonu

  },
  {
    id : 6,
    name: "Nitin",
    team: "Tech Team",
    description : "dsajkfnsdajnidsajnfsdfunsduifndsuinfuidsnfuidsnfindsabufdsjfnuisdn",
    img : Nitin

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
      <div data-aos="fade-up" className="container mx-auto p-2 rounded-lg mt-10 ">
     
        
        {/* Grid layout for Profile Image and Introduction */}
       <div className='bg-orange-300 rounded-xl shadow-xl'>
       <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          <div className="md:col-span-1 p-5">
            <Image src={ProfileImage} alt="Profile" className="w-full p-5 h-auto rounded-3xl shadow-2xl shadow-orange-400" />
          </div>

          <div className="md:col-span-2 p-6">
            <div data-aos="fade-left">
              <p className={`text-4xl leading-relaxed ${montserrat.className}`}>
                <strong>Dear Students,</strong>
              </p>
              <p className={`mt-4 font-semibold ${inter.className}`}>
                It is with great pleasure that I welcome you to ForumDE - your gateway to opportunities in Information Technology. As technology evolves rapidly, the demand for skilled IT professionals is higher than ever. We provide industry-level IT training in the latest technologies like Cloud (Azure, AWS, GCP), Data Engineering, Data Science, Docker and Kubernetes, Data Visualization, Business Analysis, and Project Management. At ForumDE, we understand the importance of staying ahead, adapting, and honing skills to meet the industry`s dynamic needs.
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
       </div>

        <br />

        {/* Why Us Component */}
        <WhyUs />

        {/* Mission Section */}
        <div className="mt-10">
          <h1 className={`text-center text-4xl md:text-6xl font-bold underline ${montserrat.className}`}>Our Mission</h1>
          <div className="flex flex-wrap mt-8 items-center">
            <div className={`w-full md:min-w-[60%] lg:w-[35%] text-2xl p-10 mt-14 ${inter.className}`}>
              <p>We at ForumDE are to empower and support students in their journey to mastering data engineering by providing a collaborative platform for learning, sharing knowledge, and solving real-world challenges. We aim to foster a community where aspiring data engineers can gain practical insights, access valuable resources, and connect with peers and industry experts to build the skills necessary for a successful career in data engineering</p>
            </div>
            <div className="w-full md:min-w-[40%] lg:w-[30%]">
              <Lottie {...missionAnimation} className="pt-18 p-5" />
            </div>
          </div>
        </div>

         {/* Vission Section */}
         <div className="mt-10">
          <h1 className={`text-center text-4xl md:text-6xl font-bold underline ${montserrat.className}`}>Our Vission</h1>
          <div className="flex flex-wrap mt-8 items-center">
            <div className={`w-full md:min-w-[60%] lg:w-[35%] text-2xl p-10 mt-14 ${inter.className}`}>
              <p>Given Forumde`s vision to help students achieve the highest recorded career growth with the support of industry-led mentors, their data engineering strategy would likely focus on:

Personalized Learning Paths: Creating tailored educational experiences based on individual student needs and career goals, using data-driven insights to guide the learning process.

Industry-Relevant Skills: Ensuring that the curriculum and projects are aligned with current industry standards and technologies, allowing students to gain hands-on experience with tools and practices used in the field.</p>
            {/* <p>Performance Tracking and Feedback: Implementing systems to track student progress and performance, providing actionable feedback, and identifying areas for improvement to maximize career growth.

Market Alignment: Continuously updating the program to reflect the latest industry trends and requirements, ensuring that students are well-prepared for the evolving job market.

These components would help ensure that students not only acquire valuable skills but also achieve significant career advancements with the support of experienced professionals.</p> */}
            </div>
            <div className="w-full md:min-w-[40%] lg:w-[30%]">
              <Lottie {...missionAnimation} className="pt-18 p-5" />
            </div>
          </div>
        </div>

        {/* Teams Section */}
        <div className="mt-10">
          <h1 className="text-center text-4xl md:text-6xl font-bold underline">Our Teams</h1>
          <div className={`mt-8 flex flex-wrap text-2xl font-semibold ${inter.className}`}>
            <h2>Meet the ForumDE Team</h2>
            <p className={`w-full text-2xl font-normal pt-2 ${inter.className}`}>
              At Forumde, we pride ourselves on our diverse and dynamic team, each member contributing their unique expertise to our cutting-edge data engineering platform. Our team is comprised of:</p>
              <p className={`mt-4 font-medium  text-2xl${inter.className}`}>
              <b>Sales Professionals:</b> Our sales team is dedicated to understanding client needs and delivering tailored solutions that drive success.
              </p>
              <p className={`mt-4 font-medium text-2xl ${inter.className}`}>
              <b>Marketing Experts:</b> Creative and strategic, our marketing team crafts compelling campaigns to showcase the power and innovation behind Forumde.
              </p>
              <p className={`mt-4 font-medium text-2xl ${inter.className}`}>
              <b>Mentors:</b> Our mentors are industry veterans who provide invaluable guidance and support, ensuring our clients and team members reach their full potential.
              </p>
              <p className={`mt-4 font-medium text-2xl ${inter.className}`}>
              <b>Technical Specialists:</b> The backbone of Forumde, our technical team develops and maintains our platform, ensuring reliability and performance for our users.
              </p>
              <p className={`mt-4 font-medium text-2xl ${inter.className}`}>
              Together, we are committed to driving innovation and excellence in the data engineering landscape.
              </p>
              
          </div>
          <div className='p-5 grid grid-cols-3 gap-4'>
  {TeamsData.map((data) => (
    <div key={data.id} className='flex flex-col border-2 rounded-lg  md:w-fit h-fit w-fit'>
      <div className='w-full'>
        <Image src={data.img} alt={data.name} className='object-cover rounded-t-lg w-2/3 h-40   ' />
      </div>
      <div className='p-4'>
        <h1 className='text-lg font-bold'>{data.name}</h1>
        <h2 className='text-md font-semibold text-gray-600'>{data.team}</h2>
      
      </div>
    </div>
  ))}
</div>


        </div>
      </div>
    </>
  );
}

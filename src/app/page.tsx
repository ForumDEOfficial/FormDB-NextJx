/* eslint-disable react/jsx-no-undef */

import Image from "next/image";

import { Link } from "react-router-dom";
import { ImageCarousel } from "./Pages/Components/Start_Image/Start_Images";
import CustomMarquee from "./Pages/Components/Marquee/Marquee";
import { WhyUs } from "./Pages/Components/Why_Us/Why_us";
import CourseContainer from "./Pages/Components/Course/Course";
import MyCertificate from "./Pages/Components/Certificate/Certificate";
import Mentors from "./Pages/Components/Mentor/Mentors";
import Video from "./Pages/Components/Video/Video";
import AboutUs from "./Pages/Components/AboutUS/About_US";
import Testimonials from "./Pages/Components/Testrimonials/Testrimonials";
import Logo_Marquee from "./Pages/Components/Logo_Marquee/Logo_Marquee";
import Explorefx from "./Pages/Components/SmallBar/page";
import Details from "./Pages/Components/Details/Page";
import { Footer } from "./Pages/MainComponets/Footer/Footer";
import FlashMessage from "./Pages/Components/Flash_component/page";


export default function Home() {
  return (
   <div>
    <Details/>

      {/* <ImageCarousel/> */}
      <CustomMarquee/>
      <br />
      <FlashMessage/>
      <Explorefx/>
      
      <WhyUs/>
      <CourseContainer/>
      <MyCertificate/>
      <AboutUs/>
      <Mentors/>
      <Testimonials/>
      <Logo_Marquee/>
      <Video/>
   </div> 
  );
}
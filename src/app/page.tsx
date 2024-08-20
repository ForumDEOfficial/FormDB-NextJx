import CustomMarquee from "./Pages/Components/Marquee/Marquee";
import { WhyUs } from "./Pages/Components/Why_Us/Why_us";
import CourseContainer from "./Pages/Components/Course/Course";
import MyCertificate from "./Pages/Components/Certificate/Certificate";
import Mentors from "./Pages/Components/Mentor/Mentors";
import Video from "./Pages/Components/Video/Video";
import AboutUs from "./Pages/Components/AboutUS/About_US";
import Testimonials from "./Pages/Components/Testrimonials/page";
import Logo_Marquee from "./Pages/Components/Logo_Marquee/Logo_Marquee";
import Explorefx from "./Pages/Components/SmallBar/page";
import Details from "./Pages/Components/Details/Page";
import { Footer } from "./Pages/MainComponets/Footer/Footer";
import FlashMessage from "./Pages/Components/Flash_component/page";
import Navbar from "./Pages/MainComponets/Header/pages";
import FAQ from "./Pages/Components/FAQ/faqpage";
import Upcoming from "./Pages/Components/Upcoming_Course/pages";
import Companies from "./Pages/Additional/Companies/pages";


export default function Home() {
  return (
    <div>

      <Navbar />
      <Details />
      
      {/* <ImageCarousel/> */}
      <CustomMarquee />
      
      <br />
      <Upcoming/>
     
      

  

      {/* <Explorefx /><br /> */}
      <CourseContainer /><br />
      <MyCertificate /><br />

      <Mentors /><br />
     <Companies/>
      <Logo_Marquee /><br />
      <Video /><br />
      {/* <FAQ/> */}
      <Footer />
    </div>
  );
}
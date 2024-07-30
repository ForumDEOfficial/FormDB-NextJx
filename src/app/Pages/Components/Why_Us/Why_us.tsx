import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHandHoldingDollar,faPersonChalkboard,faHandshake, faLaptopCode,faRankingStar, faTruckFast , faBook , faHeadphonesSimple } from '@fortawesome/free-solid-svg-icons';

const skillData = [
  {
    name: "Live Classes",
    icon: (<FontAwesomeIcon icon={faPersonChalkboard} className="text-5xl text-black group-hover:text-white/50 duration-300"/>),
    link: "#",
    description: "Enhance your learning experience with interactive live classes. Engage with experts and clarify doubts in real-time",
    aosDelay: "400"
  },
  {
    name: "Real-Time Projects",
    icon: (<FontAwesomeIcon icon={faLaptopCode} className="text-5xl text-black group-hover:text-white/50 duration-300"/>),
    link: "#",
    description: "Apply your knowledge with hands-on real-time projects. Build practical experience that will set you apart in the job market.",
    aosDelay: "500"
  },
  {
    name: "Job Assistance",
    icon: (<FontAwesomeIcon icon={faHandshake} className="text-5xl text-black group-hover:text-white/50 duration-300"/>),
    link: "#",
    description: "Receive personalized job assistance to help you land your dream role. Benefit from resume support, interview prep, and career guidance.",
    aosDelay: "600"
  },
  {
    name: "Assessments",
    icon: (<FontAwesomeIcon icon={faBook} className="text-5xl text-black group-hover:text-white/50 duration-300"/>),
    link: "#",
    description: "Test your skills with regular assessments. Track your progress and ensure you're on the right path to mastering data engineering.",
    aosDelay: "700"
  },
  {
    name: "Recordings",
    icon: (<FontAwesomeIcon icon={ faHeadphonesSimple} className="text-5xl text-black group-hover:text-white/50 duration-300"/>),
    link: "#",
    description: "Access recorded sessions anytime. Review and revisit class content at your convenience to reinforce your understanding.",
    aosDelay: "800"
  },
];

export const WhyUs = () => {
  return (
    <div className="py-14  sm:min-h-[600px] sm:grid sm:place-items-center text-black">
      <div className="pb-12" >
        <h1 className="text-6xl font-extrabold text-center font-serif sm:text-6xl">Why Choose Us</h1>
      </div>
      <div className=" grid grid-cols-1 sm:grid-cols-5 gap-4 px-4">
        {skillData.map((skill) => (
          <div 
            key={skill.name} 
            data-aos="fade-up" 
            data-aos-delay={skill.aosDelay} 
            className="card text-center space-y-3 p-4 sm:py-16 hover:bg-orange-300 duration-300 rounded-lg" style={{}}
          >
            <div className="grid place-items-center">
              {skill.icon}
            </div>
            <h1 className="text-lg font-semibold">{skill.name}</h1>
            <p className="max-w-xs mx-auto">{skill.description}</p>
            {/* <a href={skill.link} className="text-orange-600 hover:underline hover:text-black">Learn More</a> */}
          </div>
        ))}
      </div>
    </div>
  )
}

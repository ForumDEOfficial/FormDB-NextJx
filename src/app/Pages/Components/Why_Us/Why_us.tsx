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
    <div className=" sm:min-h-[500px] sm:grid sm:place-items-center text-black my-6">
      <div className="" >
        <h1 className="text-6xl font-extrabold text-center underline sm:text-6xl pt-6">Why Choose Us</h1>
      </div>
      <div className=" grid grid-cols-5 lg:grid-cols-5 hidden:grid-cols-5 sm:grid-cols-1 px-4">
        {skillData.map((skill) => (
          <div 
            key={skill.name} 
            data-aos="fade-up" 
            data-aos-delay={skill.aosDelay} 
            className="card text-center sm:py-16 hover:bg-orange-300 duration-300 rounded-lg shadow-md px-10" style={{}}
          >
            <div className="grid place-items-center py-4">
              {skill.icon}
            </div>
            <h1 className="text-lg font-semibold py-4">{skill.name}</h1>
            
          </div>
        ))}
      </div>
    </div>
  )
}

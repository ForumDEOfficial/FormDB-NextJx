// import React from 'react'
// import pic3 from "@/../../public/assets/student.jpg";
// import pic4 from "@/../../public/assets/shu_img.jpg";
// import pic5 from "@/../../public/assets/student1.jpg";
// import Image from 'next/image';

// import { Montserrat, Noto_Serif } from 'next/font/google';

// const montserrat = Montserrat({
//     subsets: ['latin'],
//     weight: ['400', '700'], 
//   });
  
//   const inter = Noto_Serif({
//     subsets: ['latin'],
//     weight: ['400', '700'], 
//   });
  
// const testimonials = () => {
//     const testimonialData = [
//         {
//           name: 'Raj Singh',
//           image: pic3,
//           description: "I am writing to express my deepest gratitude for your exceptional mentorship and support during my Azure Data Engineering course journey...",
//           aosDelay: "650",
//         },
//         {
//           name: 'Krishan Pal',
//           image: pic5,
//           description: "I am incredibly grateful for the guidance and mentorship provided by Mr. Arun Kumar throughout my journey in data engineering...",
//           aosDelay: "650",
//         },
//         {
//           name: 'Shubham Naikanavare',
//           image: pic4,
//           description: "I am immensely grateful for the exceptional mentorship and guidance provided by Mr. Arun Kumar during my journey into Azure data engineering...",
//           aosDelay: "650",
//         },
//         {
//           name: 'Diptanu',
//           image: pic4,
//           description: "Joining Forumde has been a transformative experience for me. With their exceptional data engineering solutions and support, I was able to achieve remarkable career growth. In just one year, I received a 200% salary hike at Circle K, thanks to the enhanced skills and insights I gained. I am particularly grateful to Mentor Arun Kumar, whose guidance and expertise were pivotal in this journey. Forumde's platform and Arun's mentorship played a crucial role in this success, and I'm incredibly thankful for the opportunities it has opened up.",
//           aosDelay: "650",
//         }
//       ];
//   return (
//     <div>
        
//         <div className="space-y-4 pb-12">
//           <div className="grid grid-cols-1 sm:grid-cols-2 justify-center text-center self-center origin-center content-center lg:grid-cols-2 gap-8 p-4 sm:p-10">
//             {testimonialData.map((data, index) => (
//               <div key={data.name} className="p-2 border border-solid border-black rounded-lg shadow-xl flex flex-col items-center" style={{ maxWidth: '400px' }}>
                
//                 {/* Testimonial content */}
//                 <div className="flex flex-col items-center space-y-3">
//                   {/* Profile image */}
//                   <Image src={data.image} className="w-32 h-32 rounded-full" alt={data.name} />
                  
//                   {/* Testimonial name */}
//                   <h1 className={`font-bold text-center text-lg ${montserrat.className}`}>{data.name}</h1>
                  
//                   {/* Star rating */}
//                   <div className="text-yellow-500 text-center">★ ★ ★ ★ ★</div>
                  
//                   {/* Testimonial description, expandable */}
//                   <p className={`font-thin text-center ${inter.className}`}>
//                     {expanded[index] ? data.description : `${data.description.substring(0, 100)}...`}
//                   </p>
                  
//                   {/* Show More/Show Less button */}
//                   <button
//                     onClick={() => toggleExpand(index)}
//                     className="mt-2 text-blue-600 hover:underline"
//                   >
//                     {expanded[index] ? "Show Less" : "Show More"}
//                   </button>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//     </div>
//   )
// }

// export default testimonials
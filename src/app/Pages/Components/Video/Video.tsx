import "react-multi-carousel/lib/styles.css";
import Youtubetitle from "@/../../public/assets/youtube.jpg"
import Image from 'next/image'
function Video() {
    return (
        <>
        <Image  data-aos="fade-up" data-aos-delay="700" src= {Youtubetitle} alt="" className="w-full h-auto my-4"/>
        <div  data-aos="fade-up" data-aos-delay="700" className="App ml-10 h-screen p-10">
            <div  data-aos="fade-up" data-aos-delay="700" className="flex justify-center h-full">
                <div  data-aos="fade-up" data-aos-delay="700" className="aspect-w-16 aspect-h-9 w-full">
                    <iframe data-aos="fade-up" data-aos-delay="700" 
                        title="random-youtube-video"
                        className="w-full h-full"
                        src="https://www.youtube.com/embed/QGm2ENy9wIo?si=dZ2ZR5e_hH6O7Sb3"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                </div>
            </div>
        </div>
        </>
    );
}

export default Video;

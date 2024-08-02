import "react-multi-carousel/lib/styles.css";
import Youtubetitle from "@/../../public/assets/youtube.jpg";
import Image from 'next/image';

function Video() {
    return (
        <>
            <h1 data-aos="fade-up" data-aos-delay="400"  className="w-full h-auto my-4 text-center font-bold  underline text-6xl">We are on YOUTUBE </h1>
            <div data-aos="fade-up" data-aos-delay="400" className="App ml-10 h-fit p-10">
                <div data-aos="fade-up" data-aos-delay="400" className="flex justify-center h-full">
                    {/* Video one */}
                    <div data-aos="fade-up" data-aos-delay="400" className=" w-full h-full mx-5" style={{height : 400 , width: 600}}>
                        <iframe data-aos="fade-up" data-aos-delay="400" 
                            title="random-youtube-video"
                            className="w-full h-full"
                            src="https://www.youtube.com/embed/QGm2ENy9wIo?si=dZ2ZR5e_hH6O7Sb3"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
                    </div>
                    {/* Video two */}
                    <div data-aos="fade-up" data-aos-delay="400" className=" w-full h-full mx-5" style={{height : 400 , width: 600}}>
                        <iframe data-aos="fade-up" data-aos-delay="400" 
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

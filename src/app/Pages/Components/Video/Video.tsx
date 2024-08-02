import "react-multi-carousel/lib/styles.css";
import Image from 'next/image';

function Video() {
    return (
        <>
            <h1 data-aos="fade-up" data-aos-delay="400" className="w-full h-auto my-4 text-center font-extrabold underline text-6xl md:text-5xl lg:text-6xl">We are on YOUTUBE</h1>
            <div data-aos="fade-up" data-aos-delay="400" className="App h-fit p-4 md:p-10">
                <div data-aos="fade-up" data-aos-delay="400" className="flex flex-wrap justify-center gap-4">
                    {/* Video one */}
                    <div data-aos="fade-up" data-aos-delay="400" className="w-full md:w-1/2 lg:w-1/3 h-64 md:h-96 mx-5">
                        <iframe data-aos="fade-up" data-aos-delay="400"
                            title="youtube-video-1"
                            className="w-full h-full"
                            src="https://www.youtube.com/embed/QGm2ENy9wIo?si=dZ2ZR5e_hH6O7Sb3"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
                    </div>
                    {/* Video two */}
                    <div data-aos="fade-up" data-aos-delay="400" className="w-full md:w-1/2 lg:w-1/3 h-64 md:h-96 mx-5">
                        <iframe data-aos="fade-up" data-aos-delay="400"
                            title="youtube-video-2"
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

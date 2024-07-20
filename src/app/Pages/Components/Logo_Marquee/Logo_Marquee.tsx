import Marquee from 'react-fast-marquee'
import Excel from "@/../../public/assets/Logo/excel.jpg"
import Google from "@/../../public/assets/Logo/google.jpg"
import SQL from "@/../../public/assets/Logo/SQL.png"
import Image from 'next/image'

const Logo_Marquee = () => {
  return (
    <div>
        
            <h1 className=' text-center font-bold p-3 ' data-aos="fade-up" data-aos-delay="1200" style={{fontSize: 50}}>Our Technology </h1>
        <div data-aos="fade-up" data-aos-delay="1000" className='py-4 rounded-2xl'>
        <Marquee speed={100} style={{padding: 20, gap: 10}}>
            <div >
                <Image src={Excel} alt="" className=' p-2 ' />
            </div>
            <div>
                <Image src={Google} alt=""className=' p-2' />
            </div>
            <div>
                <Image src={SQL} alt="" className=' p-2'/>
            </div>
            </Marquee>
            </div>
    </div>
  )
}

export default Logo_Marquee
import Marquee from 'react-fast-marquee'
import AzureLab from '@/../../public/assets/Logo/Azure lab.jpg'
import Azure from '@/../../public/assets/Logo/Azure.jpg'
import Python from '@/../../public/assets/Logo/Python.jpg'
import AzureScience from '@/../../public/assets/Logo/AzureScience.jpg'
import DataScience from '@/../../public/assets/Logo/DataScience.jpg'
import Databrick from '@/../../public/assets/Logo/Databriks.jpg'
import MySql from '@/../../public/assets/Logo/MySql.jpg'
import PySpark from '@/../../public/assets/Logo/PySpark.jpg'
import Spark from '@/../../public/assets/Logo/Spark.jpg'
import Image from 'next/image'

const Logo_Marquee = () => {
  return (
    <div>
         
            <h1 className=' text-center font-extrabold underline p-3 text-6xl  ' data-aos="fade-up" data-aos-delay="1200" style={{fontSize: 50}}>Our Technology </h1>
        <div data-aos="fade-up" data-aos-delay="1000" className='py-4 rounded-xl w-50 h-50'>
        <Marquee speed={100} >
            <div >
                <Image src={AzureLab} alt="" className=' ' />
            </div>
            <div>
                <Image src={AzureScience} alt="" className=' '/>
            </div>
            <div>
                <Image src={Databrick} alt="" className=' '/>
            </div>
            <div>
                <Image src={DataScience} alt="" className=' '/>
            </div>
            <div>
                <Image src={Azure} alt=""className=' ' />
            </div>
            <div>
                <Image src={MySql} alt="" className=' '/>
            </div>
            <div>
                <Image src={Spark} alt="" className=' '/>
            </div>
            <div>
                <Image src={PySpark} alt="" className=' '/>
            </div>
            <div>
                <Image src={Python} alt="" className=' '/>
            </div>
            </Marquee>
            </div>
    </div>
  )
}

export default Logo_Marquee
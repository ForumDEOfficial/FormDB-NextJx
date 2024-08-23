import React from 'react'
import Image from 'next/image'
import AzureScience from '@/../../public/assets/Logo/AzureScience.jpg';
import DataScience from '@/../../public/assets/Logo/DataScience.jpg';
import Databricks from '@/../../public/assets/Logo/Databriks.jpg';
import MySql from '@/../../public/assets/Logo/MySql.jpg';
import PySpark from '@/../../public/assets/Logo/PySpark.jpg';
import Spark from '@/../../public/assets/Logo/Spark.jpg';


const Companies = () => {
  return (
    <>
     <div>
          {/* <div className="text-center text-4xl sm:text-5xl lg:text-5xl pt-8 lg:pt-16 font-bold underline">
            Where our Achievers are
          </div> */}

          {/* Grid for displaying logos, responsive columns */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 p-4 sm:p-8 gap-4">
            {/* Logos of companies where achievers are placed */}
            <Image src={AzureScience} alt="Azure Science" className="w-full h-auto" />
            <Image src={DataScience} alt="Data Science" className="w-full h-auto" />
            <Image src={Databricks} alt="Databricks" className="w-full h-auto" />
            <Image src={MySql} alt="MySql" className="w-full h-auto" />
            <Image src={PySpark} alt="PySpark" className="w-full h-auto" />
            <Image src={Spark} alt="Spark" className="w-full h-auto" />
            <Image src={AzureScience} alt="Azure Science" className="w-full h-auto" />
            <Image src={DataScience} alt="Data Science" className="w-full h-auto" />
            <Image src={Databricks} alt="Databricks" className="w-full h-auto" />
            <Image src={MySql} alt="MySql" className="w-full h-auto" />
            <Image src={PySpark} alt="PySpark" className="w-full h-auto" />
            <Image src={Spark} alt="Spark" className="w-full h-auto" />
          </div>
        </div>

    </>
  )
}

export default Companies
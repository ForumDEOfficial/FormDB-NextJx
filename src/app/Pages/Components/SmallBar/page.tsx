import Navbar from '@/app/Pages/MainComponets/Header/Header'
import Link from 'next/link'
import React from 'react'



const Explorefx = () => {
  return (
    <>
     
      
      <div className='text-center w-full h-fit px-5 lg:px-28'>
        <div className='flex flex-wrap justify-center'>
          <div className='px-10 py-5 text-center'>
            <h1 className='font-semibold text-4xl lg:text-2xl'>Job Assistance</h1>
            <h6 className='font-bold'>Program</h6>
          </div>
          <div className='px-10 py-5 text-center'>
            <h1 className='font-semibold text-4xl lg:text-2xl'>6 Months</h1>
            <h6 className='font-bold'>Duration</h6>
          </div>
          <div className='px-10 py-5 text-center'>
            <h1 className='font-semibold text-4xl lg:text-2xl'>Live + Recorded</h1>
            <h6 className='font-bold'>Delivery Mode</h6>
          </div>
          <div className='px-10 py-5 text-center'>
            <h1 className='font-semibold text-4xl lg:text-2xl'>English</h1>
            <h6 className='font-bold'>Language</h6>
          </div>
        </div>
      </div>

      {/* <div className='flex flex-col sm:m-24 w-full h-full justify-start '>
      <div className='w-2 bg-orange-600 h-6 '>
<h1 className=' leading-10'>About Data Science With Generative AI Course</h1>
</div>
      </div> */}
    </>
  )
}

export default Explorefx

import React from 'react'
import Chef from '../assets/Group.svg'
import Laundry from '../assets/Group 107.svg'
import cleaning from '../assets/52057-removebg-preview 1.svg'
import Maintanance from '../assets/Objects.svg'
const Services = () => {
  return (
    <div> 
        <div className="px-4 py-10 sm:px-10 lg:px-40 lg:pt-20 pb-10">
    <h1 className="font-kanit text-center text-lg sm:text-3xl md:text-4xl lg:text-5xl leading-snug">
    “Our Team have Awesome handpicked Services these for your next big group celebration, a romantic getaway or peaceful sneak away”
    </h1>
    </div>
      <div>

        {/* section 1 */}
        <div className='flex p-8 mt-10 flex-col sm:flex-row gap-8 justify-between lg:mx-40'>

          <div className='flex flex-col sm:pt-10 gap-y-5 md:pt-30'>
            <h1 className='font-kanit text-2xl mb-2'>On Call Cook</h1>
            <p className='text-gray-500 sm:mr-20'>
              Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
              when an unknown printer took a galley of type and scrambled it to make a type specimen book.
              It has survived not only five centuries, but also the leap into electronic typesetting,
              remaining essentially unchanged.
            </p>
          </div>

          <img src={Chef} alt="" className='sm:w-60 md:w-100' />
        </div>



        {/* section 2 */}
        <div className='flex  p-8 mt-10 flex-col-reverse sm:flex-row gap-30 justify-between lg:mx-40'>
        <img src={Laundry} alt="" className='sm:w-60 md:w-100' />
          <div className='flex flex-col sm:pt-10 gap-y-5 md:pt-30'>
            <h1 className='font-kanit text-2xl mb-2'>Laundry Services</h1>
            <p className='text-gray-500 '>
              Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
              when an unknown printer took a galley of type and scrambled it to make a type specimen book.
              It has survived not only five centuries, but also the leap into electronic typesetting,
              remaining essentially unchanged.
            </p>
          </div>

          
        </div>

        {/* section 3 */}
        <div className='flex p-8 mt-10 flex-col sm:flex-row gap-8 justify-between lg:mx-40'>

          <div className='flex flex-col sm:pt-10 gap-y-5 md:pt-30'>
            <h1 className='font-kanit text-2xl mb-2'>Facility Cleaning Services</h1>
            <p className='text-gray-500 sm:mr-20'>
              Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
              when an unknown printer took a galley of type and scrambled it to make a type specimen book.
              It has survived not only five centuries, but also the leap into electronic typesetting,
              remaining essentially unchanged.
            </p>
          </div>

          <img src={cleaning} alt="" className='sm:w-60 md:w-100' />
        </div>



        {/* section 4 */}
        <div className='flex  p-8 mt-10 flex-col-reverse sm:flex-row gap-30 justify-between lg:mx-40'>
        <img src={Maintanance} alt="" className='sm:w-60 md:w-100' />
          <div className='flex flex-col sm:pt-10 gap-y-5 md:pt-30'>
            <h1 className='font-kanit text-2xl mb-2'>Maintenance & Repairs</h1>
            <p className='text-gray-500 '>
              Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
              when an unknown printer took a galley of type and scrambled it to make a type specimen book.
              It has survived not only five centuries, but also the leap into electronic typesetting,
              remaining essentially unchanged.
            </p>
          </div>

          
        </div>



      </div>
    </div>
  )
}

export default Services

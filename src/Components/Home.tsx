import React from 'react'
import About from "../assets/about.png"
import HeroSection from './HeroSection'
import Section5 from "../assets/section-3-img.png"
import Chef from '../assets/Group.svg'
import Laundry from '../assets/Group 107.svg'
import cleaning from '../assets/52057-removebg-preview 1.svg'
import Maintanance from '../assets/Objects.svg'
import Section6 from "../assets/section-5-img.png"
import image1 from "../assets/gallery-1.png"
import image2 from "../assets/gallery-2.png"
import image3 from "../assets/gallery-3.png"
import image4 from "../assets/gallery-4.png"
import image5 from "../assets/gallery-5.png"
import image6 from "../assets/gallery-6.png"
const Home = () => {
  return (
    <div>
      <HeroSection />
      <div className='flex p-8 mt-10 flex-col-reverse sm:flex-row gap-8 justify-between mt-20 lg:mx-40'>
        <img src={About} alt="" className='sm:w-60 md:w-100' />
        <div className='mb-4'>
          <h1 className=' font-kanit text-2xl'>About Us</h1>
          <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
        </div>
      </div>


      <div className="w-full bg-[#3c64b1]/10">
        <div className="px-4 py-10 sm:px-10 lg:px-40 lg:pt-20 pb-10">
          <h1 className="font-kanit text-center text-lg sm:text-3xl md:text-4xl lg:text-4xl leading-snug">
            Feature regarding purchase of villa & also rent out feature with villacrest
          </h1>
          <p className="text-center text-sm md:text-xl px-2 sm:px-10 lg:px-20 text-gray-500 mt-4">
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
          </p>
          <div className="mt-8 ">
            <img src={Section5} alt="section5 Image" />
          </div>
        </div>
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


      <div className='w-full bg-[#3c64b1]/10 flex flex-col sm:flex-row flex-wrap py-10 px-4 sm:px-10 md:px-20 lg:px-30 gap-8'>
  <div className='flex-1 space-y-10 pt-20'>
    <h1 className="text-xl sm:text-2xl font-bold">Title for the key features of the villa goes here</h1>
    <p className="text-sm text-gray-500 sm:text-base mt-4">
      Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
    </p>
    <div className="grid ml-2 grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
      <ul className="space-y-2 list-disc marker:text-[#6d87cb]">
        <li>Tailored services</li>
        <li>Effortless arrivals</li>
        <li>Inspection and vetting</li>
      </ul>
      <ul className="space-y-2 list-disc marker:text-[#6d87cb]">
        <li>Expertly designed</li>
        <li>Luxury amenities</li>
        <li>Custom itineraries</li>
      </ul>
    </div>
    <button className="mt-6 py-1 px-2 bg-[#6d87cb] text-white py-2 hover:bg-[#6d87cb]/90 cursor-pointer transition-all">
      View Details
    </button>
  </div>
  <img src={Section6} alt="Villa" className="w-full sm:w-1/2 h-auto object-cover" />
</div>


<div >
<h1 className="font-kanit text-center text-lg sm:text-xl md:text-2xl lg:text-3xl mt-30 mb-10 leading-snug">
Villa Image Gallery
    </h1>

    <div className='flex flex-col gap-1 sm:flex flex-row flex-wrap justify-around gap-y-10 px-4 pb-20'>
      <img src={image1} alt="" />
      <img src={image2} alt="" />
      <img src={image3} alt="" />
      <img src={image4} alt="" />
      <img src={image5} alt="" />
      <img src={image6} alt="" />
    </div>
</div>

      <div className="w-full bg-[#3c64b1]/10 pb-10">
  <div className="px-4 py-10 sm:px-10 lg:px-40 lg:pt-20 pb-10">
    <h1 className="font-kanit text-center text-md sm:text-xl md:text-xl lg:text-2xl leading-snug">
    Why Choose VillaCrest?
    </h1>
    <p className="text-center text-sm sm:text-md md:text-xl px-2 sm:px-10 lg:px-30 text-gray-500 mt-4">
    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
    </p>
    </div>
    <div className='flex items-center justify-center'>
    <button className='bg-[#6d87cb] text-white px-5 py-2'>Contact</button>
    </div>
    </div>

    </div>
  )
}

export default Home

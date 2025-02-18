import React from 'react'
import about from '../assets/about-img.png'
import Mission from '../assets/mission.svg'
import Vision from '../assets/vision.svg'
import Bulb from '../assets/bulb.svg'
const AboutUs = () => {
  return (
    <div>



      {/* Heading section */}

      <div className="w-full">
  <div className="px-4 py-10 sm:px-10 lg:px-40 lg:pt-20 pb-10">
    <h1 className="font-kanit text-center text-lg sm:text-3xl md:text-4xl lg:text-5xl leading-snug">
    Welcome To VillaCrest
    </h1>
    <p className="text-center text-sm sm:text-md md:text-lg px-2 sm:px-10 lg:px-35 text-gray-500 mt-4">
    Vacations are crucial for the souls and when that experience doesn’t go as planned, you can’t get that time back.
    </p>
    <p className="text-center text-sm sm:text-md md:text-lg px-2 sm:px-10 lg:px-35 text-gray-500 mt-4">
    One of the most significant parts of buying a vacation home is its upkeep and maintenance in the absence of homeowners. Getting a home is an emotional decision but the reality of homeownership is riddled with friction.
    </p>
    <div className="mt-8 ">
      <img src={about} alt=''/>
    </div>
  </div>
</div>



<div>

{/* section 1 */}
<div className='flex p-8 mt-10 flex-col sm:flex-row gap-8 justify-between lg:mx-40'>

  <div className='flex flex-col sm:pt-10 gap-y-5 md:pt-30'>
    <h1 className='font-kanit text-2xl mb-2'>Our Mission</h1>
    <p className='text-gray-500  sm:mr-20'>
    Vacations are crucial for the souls and when that experience doesn’t go as planned, you can’t get that time back.</p>
    <p className='text-gray-500  sm:mr-20'>
One of the most significant parts of buying a vacation home is its upkeep and maintenance in the absence of homeowners. Getting a home is an emotional decision but the reality of homeownership is riddled with friction.
    </p>
  </div>

  <img src={Mission} alt="" className='sm:w-60 md:w-100' />
</div>



{/* section 2 */}
<div className='flex  p-8 mt-10 flex-col-reverse sm:flex-row gap-30 justify-between lg:mx-40'>
<img src={Vision} alt="" className='sm:w-60 md:w-100' />
  <div className='flex flex-col sm:pt-10 gap-y-5 md:pt-30'>
    <h1 className='font-kanit text-2xl mb-2'>Our Vision</h1>
    <p className='text-gray-500 '>
    Homeowners spend a huge amount of time dealing with the hassles of general property management - fragmented suppliers and vendors, lack of planning and tracking, lack of time to negotiate and monitor capital projects, and having to jump-start their property each time they want to visit. All this costs money and energy and often leads to a disconnect between the experience a homeowner wants from their home and what their experience actually is.
    </p>
  </div>

  
</div>

</div>



      {/* fact section */}
      <div className="m-2 bg-[#3c64b1]/10 rounded-lg sm:m-20">
  <div className="px-4 py-10 sm:px-10 lg:px-30 lg:pt-20 pb-10">
    <img src={Bulb} className='block mx-auto' alt="" />
    <h1 className="font-kanit text-center text-lg sm:text-3xl md:text-4xl lg:text-5xl leading-snug">
    Facts About Shitlakhet
    </h1>
    <p className="text-center text-sm sm:text-md md:text-lg px-2 sm:px-10 lg:px-35 text-gray-500 mt-4">
    The mesmerizing view of the sun-kissed hills, rich flora-fauna and the cool breeze carrying away the scent of the rosy rhododendrons makes Sitlakhet an ideal retreat.
    </p>
    <p className="text-center text-sm sm:text-md md:text-lg px-2 sm:px-10 lg:px-35 text-gray-500 mt-4">
    A very wide range of Himalayas is visible from here. Surrounded by about 1800 hectares of forest area from all sides.
    </p>
    <p className="text-center text-sm sm:text-md md:text-lg px-2 sm:px-10 lg:px-35 text-gray-500 mt-4">
    Shitlakhet is known for its natural beauty. Nestled in the lap of nature, this hill station attracts tourists. Shitlakhet is a small hill station. But it is very calm and pleasant. Here you can see the beautiful peaks of the Himalayas.
    </p>
    {/* <div className="mt-8 ">
      <img src={about} alt=''/>
    </div> */}
  </div>
</div>



    </div>
  )
}

export default AboutUs

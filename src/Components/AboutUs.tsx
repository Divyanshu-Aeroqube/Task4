import React from 'react'
import about from '../assets/about-img.png'
import Mission from '../assets/mission.svg'
import Vision from '../assets/vision.svg'
import Bulb from '../assets/bulb.svg'
const AboutUs = () => {
  return (
    <div className='mx-20'>
      <h1 className='text-3xl font-bold text-center mt-20 mb-10'>Welcome To VillaCrest</h1>
      <div className='mx-50'>
      <p className='text-gray-500 text-center mb-6'>Vacations are crucial for the souls and when that experience doesn’t go as planned, you can’t get that time back.</p>

<p className='text-gray-500 text-center mb-6'> One of the most significant parts of buying a vacation home is its upkeep and maintenance in the absence of homeowners. Getting a home is an emotional decision but the reality of homeownership is riddled with friction.</p>
      </div>

      <div className='flex justify-center items-center mx-20'>

      <img src={about} alt="About Image"  />
      </div>



      <div className='flex justify-around p-20 my-20 '>
          <div className='w-[35%] flex flex-col justify-center'>
            <span className='text-2xl mb-4'>Our Mission</span>
            <p className='text-gray-500'>Vacations are crucial for the souls and when that experience doesn’t go as planned, you can’t get that time back.

One of the most significant parts of buying a vacation home is its upkeep and maintenance in the absence of homeowners. Getting a home is an emotional decision but the reality of homeownership is riddled with friction.</p>
          </div>
          <div>
            <img src={Mission} alt="Mission" />
          </div>

        </div>


        {/* section 2 */}
        <div className='flex justify-around p-20 my-20'>

        <div>
            <img src={Vision} alt="Vision" />
          </div>
          <div className='w-[35%] flex flex-col justify-center'>
            <span className='text-2xl mb-4'>Our Vision</span>
            <p className='text-gray-500'>Homeowners spend a huge amount of time dealing with the hassles of general property management - fragmented suppliers and vendors, lack of planning and tracking, lack of time to negotiate and monitor capital projects, and having to jump-start their property each time they want to visit. All this costs money and energy and often leads to a disconnect between the experience a homeowner wants from their home and what their experience actually is.</p>
          </div>


        </div>

      {/* fact section */}
        <div className='bg-[#eaf0ff] rounded-md flex flex-col justify-center items-center gap-5 px-75 text-center py-10 my-10 '>
          <img src={Bulb} alt="Bulb" />
          <h1 className='text-xl font-bold'>Facts About Shitlakhet</h1>

          <p>The mesmerizing view of the sun-kissed hills, rich flora-fauna and the cool breeze carrying away the scent of the rosy rhododendrons makes Sitlakhet an ideal retreat.</p>
          <p>A very wide range of Himalayas is visible from here. Surrounded by about 1800 hectares of forest area from all sides.</p>
          <p>Shitlakhet is known for its natural beauty. Nestled in the lap of nature, this hill station attracts tourists. Shitlakhet is a small hill station. But it is very calm and pleasant. Here you can see the beautiful peaks of the Himalayas.</p>
        </div>
    </div>
  )
}

export default AboutUs

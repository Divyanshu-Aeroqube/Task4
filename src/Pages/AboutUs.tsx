import about from '../assets/about-img.png'
import Mission from '../assets/mission.svg'
import Vision from '../assets/vision.svg'
import Bulb from '../assets/bulb.svg'

const AboutUs = () => {
  return (
    <div>
          <section className='w-full mt-[1.25rem] mb-[0.5rem] sm:mt-[2.5rem] mb-[1rem] md:mt-[5rem] mb-[2rem] lg:mt-[6.8rem] mb-[2.75rem]'>
      <h1 className='w-[80%] lg:w-[38%] mx-auto font-kanit text-[2rem] text-center text-headColor mb-[1.375rem]'>Welcome To VillaCrest</h1>

      <div className='flex flex-col gap-8 w-full sm:w-[80%] mx-auto'>
      <p className='text-[#737b7d] w-[90%] lg:w-[62%] mx-auto font-mulish text-[1.18rem] text-center text-subheading leading-relaxed'>Vacations are crucial for the souls and when that experience doesn’t go as planned,
      you can’t get that time back.</p>

      <p className='text-[#737b7d]  w-[80%] lg:w-[60%] mx-auto font-mulish text-[1.18rem] text-center text-subheading leading-relaxed'>One of the most significant parts of buying a vacation home is its upkeep and maintenance in the absence of homeowners. Getting a home is an emotional decision but the reality of homeownership is riddled with friction.</p>
      </div>
    </section>

    <figure className='w-full mb-[1rem] h-[10rem] md:mb-[3.75rem] md:h-[26.25rem]'>
      <img src={about} alt="" className='w-[80%] mx-auto' />
    </figure>


{/* mission and vision section */}
    <section className='w-full'>
      <article className='w-[90%] flex flex-col md:w-[80%] mx-auto md:flex-row mb-[1.87rem]'>
        <div className='my-[1rem] w-[90%] mx-auto md:my-[9.5rem] md:w-1/2'>
          <h1 className='font-kanit text-[2rem] text-headColor text-center md:text-left mb-[1.375rem]'>Our Mission</h1>
          <div className='flex flex-col gap-8 mr-0
           md:mr-[4rem]'>
      <p className=' text-[#737b7d] text-center font-mulish text-[1.12rem] md:text-left text-subheading'>Vacations are crucial for the souls and when that experience doesn’t go as planned,
      you can’t get that time back.</p>

      <p className='text-[#737b7d] text-center font-mulish text-[1.12rem] md:text-left text-subheading'>One of the most significant parts of buying a vacation home is its upkeep and maintenance in the absence of homeowners. Getting a home is an emotional decision but the reality of homeownership is riddled with friction.</p>
      </div>
        </div>
        <figure className='w-[90%] mx-auto mt-[1rem] mb-[1rem] md:w-1/2 md:mt-[8.75rem] md:mb-[10.12rem]'>
          <img src={Mission} className='w-full h-[18.67rem]' alt="" />
        </figure>
      </article>


      {/* <article className='w-[80%] mx-auto flex mb-[1.87rem]'>
      <figure className='w-1/2 mt-[8.75rem] mb-[10.12rem]'>
          <img src={Vision} className='w-full h-[18.67rem]' alt="" />
        </figure>
        <div className='my-[9.5rem] w-1/2'>
          <h1 className='font-kanit text-[2rem] text-headColor text-left mb-[1.375rem]'>Our Vision</h1>
          <div className=' mr-[4rem]'>
      <p className=' font-mulish text-[1.12rem] text-left text-subheading'>Homeowners spend a huge amount of time dealing with the hassles of general property management - fragmented suppliers and vendors, lack of planning and tracking, lack of time to negotiate and monitor capital projects, and having to jump-start their property each time they want to visit. All this costs money and energy and often leads to a disconnect between the experience a homeowner wants from their home and what their experience actually is.</p>
      </div>
        </div>

      </article> */}
    </section>



      {/* fact section */}
      {/* <section className="w-full mb-[6.25rem] ">
  <article className="w-[80%] mx-auto bg-[#eaf0ff] rounded-md">
  <figure className="flex justify-center mx-auto pt-[3.125rem]">
  <img src={Bulb} alt="" className="block" />
</figure>
    <h1 className="font-kanit text-[2rem] text-headColor text-center mb-[1.375rem] mx-[17.81rem]">
    Facts About Shitlakhet
    </h1>
    <p className="font-mulish text-[1.45rem] mb-[2.5rem] text-center text-subheading mx-[11.87rem]">
    The mesmerizing view of the sun-kissed hills, rich flora-fauna and the cool breeze carrying away the scent of the rosy rhododendrons makes Sitlakhet an ideal retreat.
    </p>
    <p className="font-mulish text-[1.45rem] mb-[2.5rem] text-center text-subheading mx-[11.87rem]">
    A very wide range of Himalayas is visible from here. Surrounded by about 1800 hectares of forest area from all sides.
    </p>
    <p className="font-mulish text-[1.45rem] pb-[2.5rem] text-center text-subheading mx-[11.87rem]">
    Shitlakhet is known for its natural beauty. Nestled in the lap of nature, this hill station attracts tourists. Shitlakhet is a small hill station. But it is very calm and pleasant. Here you can see the beautiful peaks of the Himalayas.
    </p>
  </article>
</section> */}
    </div>
  )
}

export default AboutUs

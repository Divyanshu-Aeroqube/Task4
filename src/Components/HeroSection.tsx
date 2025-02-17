import React from 'react'
import Carousel from './Crousel'

const HeroSection = () => {
  return (
<div className="w-full bg-[#3c64b1]/10">
  <div className="px-4 py-10 sm:px-10 lg:px-40 lg:pt-20 pb-10">
    <h1 className="font-kanit text-center text-lg sm:text-3xl md:text-4xl lg:text-5xl leading-snug">
      Take your real estate experience to new heights in the Himalayas
    </h1>
    <p className="text-center text-sm sm:text-lg md:text-xl px-2 sm:px-10 lg:px-20 text-gray-500 mt-4">
      Et has minim elitr intellegat. Mea aeterno eleifend antiopam ad, nam no suscipit quaerendum. At nam minimum ponderum. Est audiam animal molestiae te.
    </p>

    {/* Carousel Section */}
    <div className="mt-8 ">
      <Carousel />
    </div>
  </div>
</div>

  )
}

export default HeroSection

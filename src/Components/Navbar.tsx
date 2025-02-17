import React from 'react'
import logo from '../assets/logo.svg'

import { Link ,NavLink
   
} from "react-router-dom";
const Navbar = () => {
  return (
    <nav className='flex bg-[#3c64b1]/10 w-full sm:justify-around gap-2 items-center px-4  sm:py-2 '>
        <img className='w-25 h-10 sm:35 md:w-40' src={logo} alt="VillaCrest" />
      <div className=' sm:hidden ml-auto '>☰</div>
      <div className='hidden space-x-4 text-nowrap sm:flex justify-around space-x-6 md:space-x-10'>

      <NavLink 
        to="/" 
        className={({ isActive }) => `py-2 transition-colors duration-300 ${isActive ? "text-[#6d87cb] font-semibold" : "text-black hover:text-[#6d87cb]"}`}>
        Home
      </NavLink>
      <NavLink 
        to="/about" 
        className={({ isActive }) => `py-2 transition-colors duration-300 ${isActive ? "text-[#6d87cb] font-semibold" : "text-black hover:text-[#6d87cb]"}`}>
        About Us
      </NavLink>
      <NavLink 
        to="/villas" 
        className={({ isActive }) => `py-2 transition-colors duration-300 ${isActive ? "text-[#6d87cb] font-semibold" : "text-black hover:text-[#6d87cb]"}`}>
        Villas
      </NavLink>
      <NavLink 
        to="/services" 
        className={({ isActive }) => `py-2 transition-colors duration-300 ${isActive ? "text-[#6d87cb] font-semibold" : "text-black hover:text-[#6d87cb]"}`}>
        Services
      </NavLink>
      <NavLink 
        to="/partner" 
        className={({ isActive }) => `py-2 transition-colors duration-300 ${isActive ? "text-[#6d87cb] font-semibold" : "text-black hover:text-[#6d87cb]"}`}>
        Partner with us
      </NavLink>



        
        <div className='bg-[#6d87cb] text-white text-center py-2 px-4'> <Link to='/contact'>Contact</Link></div>
      </div>
      <hr />
    </nav>
  )
}

export default Navbar

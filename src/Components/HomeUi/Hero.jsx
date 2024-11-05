import React from 'react'
import Skyp from "../../assets/container.png"
export const Hero = () => {
  return (
     <div className=" flex rev">
      <div className= "p-[50px]" >
       <h3 className="text-[3rem] text-[#ffff] font-semibold p-[10px]"> Discover Your Dream</h3>
       <h3 className="text-[3rem] text-[#ffff] font-semibold  p-[10px]"> Property with Estatein</h3>
       <p className="text-[#ffff]   p-[10px]"> Your journey to finding the perfect property begins here. Explore our listings to find the home that matches your dreams.</p>
       <button class="bg-black text-white font-bold py-2 px-4 rounded  border border-white hover:bg-purple hover:shadow-lg transition-all duration-300 m-[10px]">Hover me</button>
       <button class="bg-black text-white font-bold py-2 px-4 rounded border border-white hover:bg-purple hover:shadow-lg transition-all duration-300  m-[10px]"> Hover me</button>

    </div>
      <img src={Skyp} alt="" className='w-[500px] h-[500px]' />
     </div>
  )
}
export default Hero
import React from 'react'
import Skyp from "../../assets/Cont.png"
import smallHouse from "../../assets/small-home.png"
import Money from "../../assets/moneyt.png"
import Roller from "../../assets/roll.png"
import HandHome from "../../assets/Hand-Home.png"
export const Hero = () => {
  return (
      <div>

      <div>
      <div className=" flex flex-col-reverse md:flex-row">
      <div className= "md:p-[50px]" >
       <h3 className="text-2xl md:text-5xl text-[#ffff] font-semibold p-[10px] capitalize">our journey</h3>
       <p className="text-[#ffff]   p-[10px] md:p-[20px]"> Our story is one of continuous growth and evolution. We started as a small team with big dreams, determined to create a real estate platform that transcended the ordinary. Over the years, we've expanded our reach, forged valuable partnerships, and gained the trust of countless clients.</p>
       <div className="md:mt-[20px]">
       <button className="bg-black text-white font-bold py-2 px-4 rounded  border border-white hover:bg-purple hover:shadow-lg transition-all duration-300 m-[10px] w-[360px] md:w-[180px] capitalize ">learn more</button>
       <button className="bg-black text-white font-bold py-2 px-4 rounded border border-white hover:bg-purple hover:shadow-lg transition-all duration-300  m-[10px]  w-[360px] md:w-[180px]  capitalize"> browse properties</button>
       </div>
       <div className=' flex flex-col md:flex-row md:mt-[20px]'>
         <div className='w-[100%] bg-[#1A1A1A] mt-[10px] md:m-[15px] text-center  p-[20px] capitalize  rounded-md text-[#ffff]'>
            <h3 className="font-bold text-white text-[2rem]">200+</h3>
            <p className="">happy customers</p>
         </div>
         <div className='mt-[10px] md:m-[15px] text-center w-[100%] bg-[#1A1A1A]   p-[20px] capitalize rounded-md text-[#ffff]'>
            <h3 className="font-bold text-white text-[2rem]">10k+</h3>
            <p className="">properties for client</p>
         </div>
         <div className='mt-[10px] md:m-[15px] w-[100%] bg-[#1A1A1A]   p-[20px] capitalize  rounded-md text-[#ffff] text-center'>
            <h3 className="font-bold text-white text-[2rem]">16+</h3>
            <p className="">years of experience</p>
         </div>
      </div>
    </div>
      <img src={HandHome} alt="" className="w-full h-auto md:w-[400px] md:h-[400px] lg:w-[500px] lg:h-[500px]" />
     </div>
      </div> 
         <div className="flex justify-center mt-[30px] flex-col md:flex-row ">
         <div className='bg-[#1A1A1A] m-[3px] p-[20px] capitalize rounded-md text-[#ffff] w-full'>
           <img src={smallHouse} alt="" className='translate-x-[150px] md:translate-x-[100px] h-[45px] w-[45px]' />
            <p className="text-center p-[10px] capitalize">properties for client</p>
         </div>
      <div className='bg-[#1A1A1A] m-[3px] p-[20px] capitalize rounded-md text-[#ffff] w-full'>
           <img src={Money} alt="" className='translate-x-[150px] md:translate-x-[100px] h-[45px] w-[45px]' />
            <p  className="text-center p-[10px] capitalize">unlock properties value</p>
         </div>
      <div className='bg-[#1A1A1A] m-[3px] p-[20px] capitalize rounded-md text-[#ffff] w-full'>
           <img src={smallHouse} alt="" className='translate-x-[150px] md:translate-x-[100px]  h-[45px] w-[45px]' />
           <p className=" text-center p-[10px] capitalize"> effortless properties management </p>
         </div>
      <div className='bg-[#1A1A1A] m-[3px] p-[20px] capitalize rounded-md text-[#ffff] w-full'>
           <img src={Roller} alt="" className='translate-x-[150px] md:translate-x-[100px]  h-[45px] w-[45px]' />
            <p className="text-center p-[10px] capitalize">find your dream home </p>
         </div>
         </div>
      </div> 
  )
}
export default Hero
import React from 'react'
import Trust from "../../assets/Trust.png"
import HandHome from "../../assets/Hand-Home.png"
import Ex from "../../assets/Ex.png"
import Centric from "../../assets/Centric.png"
import Commit from "../../assets/Commit.png"
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
      
<div className="bg-black text-white p-[0px] md:p-[10px]">

  <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
   
    <div>
      <h2 className="text-3xl p-[10px] md:text-5xl font-semibold mb-4">Our Values</h2>
      <p className="text-gray-400 text-lg p-[10px] md">
        Our story is one of continuous growth and evolution. We started as a small team with big dreams, determined to create a real estate platform that transcended the ordinary.
      </p>
    </div>

    
    <div className="bg-[#1A1A1A] rounded-lg p-6 grid grid-cols-1 md:grid-cols-2 gap-6 shadow">
    
      <div className ="flex flex-col items-center text-center p-4 border border-gray-700 rounded-lg">
        <div className="flex flx-row">
        <div className="text-purple-500 mb-4">
          <img src={Trust} alt="" className='w-[50px] h-[50px]'  />
        </div>
        <h3 className="font-bold text-[16px] capitalize p-[10px]">Trust</h3>
        </div>
        <p className="text-gray-400">
          Trust is the cornerstone of every successful real estate transaction.
        </p>
      </div>

     
      <div class="flex flex-col items-center text-center p-4 border border-gray-700 rounded-lg">
        <div className="flex flx-row">
        <div class="text-purple-500 mb-4">
         <img src={Ex} alt="" className='w-[50px] h-[50px]' />
        </div>
        <h3 className="font-bold text-[16px] capitalize p-[10px]">Excellence</h3>
        </div>
        <p class="text-gray-400">
          We set the bar high for ourselves, from the properties we list to the services we provide.
        </p>
      </div>

     
      <div class="flex flex-col items-center text-center p-4 border border-gray-700 rounded-lg">
      <div className="flex flex-row">
        <div class="text-purple-500 mb-4">
        <img src={Centric} alt="" className='w-[50px] h-[50px]' />
        </div>
        <h3 class="font-bold text-[16px] capitalize p-[10px]">Client-Centric</h3>
        </div>
        <p class="text-gray-400">
          Your dreams and needs are at the center of our universe. We listen. We understand.
        </p>
      </div>


      <div class="flex flex-col items-center text-center p-4 border border-gray-700 rounded-lg">
        <div className="flex flex-row">
        <div class="text-purple-500 mb-4">
            <img src={Commit} alt="" className='w-[50px] h-[50px]' />
        </div>
        <h3 class="font-bold text-[16px] capitalize p-[10px]">Our Commitment</h3>
        </div>
        <p class="text-gray-400">
          We are dedicated to providing you with the highest level of service, professionalism, and support.
        </p>
      </div>
    </div>
   
  </div>
</div>
   <div className="mt-[10px] md:mt-[20px]">
   <h3 className="text-[2rem] text-white font-semibold p-[10px] capitalize"> our achievement</h3>
   <p className="text-[#ffff]   p-[10px] md:p-[20px">Our story is one of continuous growth and evolution. We started as a small team with big dreams, determined to create a real estate platform that transcended the ordinary.</p>
   <div className="flex flex-col md:flex-row">
    <div className="border-[.5px] border-gray-500 rounded-md m-[10px] shad ">
    <h3 class="font-bold text-[1.5rem] capitalize p-[10px] text-white">3year of experience </h3>
    <p className="text-white font-normal text-[1rem] p-[10px]">With over 3 years in the industry, we've amassed a wealth of knowledge and experience, becoming a go-to resource for all things real estate.</p>
    </div>
    <div className="border-[.5px] border-gray-500 rounded-md m-[10px] shad ">
    <h3 class="font-bold text-[1.5rem] capitalize p-[10px] text-white">Happy Clients </h3>
    <p className="text-white font-normal text-[1rem] p-[10px]">Our greatest achievement is the satisfaction of our clients. Their success stories fuel our passion for what we do.</p>
    </div>
    <div className="border-[.5px] border-gray-500 rounded-md m-[10px] shad ">
    <h3 class="font-bold text-[1.5rem] capitalize p-[10px] text-white">Industry Recognition </h3>
    <p className="text-white font-normal text-[1rem] p-[10px]">We've earned the respect of our peers and industry leaders, with accolades and awards that reflect our commitment to excellence..</p>
    </div>
   </div>
   </div>
      </div> 
  )
}
export default Hero



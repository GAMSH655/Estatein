import React from 'react'
import Skyp from "../../assets/Cont.png"
import smallHouse from "../../assets/small-home.png"
import Money from "../../assets/moneyt.png"
import Roller from "../../assets/roll.png"
import Homeicon from "../../assets/home-icon.png"
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect} from 'react'
export const Hero = () => {
   useEffect(()=>{
      AOS.init({
         // Global settings:
         disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
         startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
         initClassName: 'aos-init', // class applied after initialization
         animatedClassName: 'aos-animate', // class applied on animation
         useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
         disableMutationObserver: false, // disables automatic mutations' detections (advanced)
         debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
         throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)
         
       
         // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
         offset: 120, // offset (in px) from the original trigger point
         delay: 0, // values from 0 to 3000, with step 50ms
         duration: 400, // values from 0 to 3000, with step 50ms
         easing: 'ease', // default easing for AOS animations
         once: true, // whether animation should happen only once - while scrolling down
         mirror: true, // whether elements should animate out while scrolling past them
         anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation
       
       });
   },[])
  return (
      <div>

      <div>
      <div className=" flex flex-col-reverse md:flex-row" data-aos="zoom-out"
      data-aos-offset="200"
      data-aos-delay="50"
      data-aos-duration="1000"
      data-aos-easing="ease-in-out"
      data-aos-mirror="true"
      data-aos-once="false"
      data-aos-anchor-placement="top-center">
      <div className= "md:p-[50px]" >
       <h3 className="text-2xl md:text-5xl text-[#ffff] font-semibold p-[10px]"> Discover Your Dream</h3>
       <h3 className="text-2xl md:text-5xl text-[#ffff] font-semibold  p-[10px]"> Property with Estatein</h3>
       <p className="text-[#ffff]   p-[10px] md:p-[20px]"> Your journey to finding the perfect property begins here. Explore our listings to find the home that matches your dreams.</p>
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
      <img src={Skyp} alt="" className="w-full h-auto md:w-[400px] md:h-[400px] lg:w-[500px] lg:h-[500px]" />
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
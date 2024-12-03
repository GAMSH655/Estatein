import React ,  {useState} from 'react'
import Bungalow  from "../../assets/Bung.png"
import Skycrapper from "../../assets/Skycrapper.png"
import SKY from "../../../src/assets/Sky.png"
import Abs from "../../assets/Abstract.png"
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import { useWindowSize } from 'react-use'
const FeaturedProps = () => {
  const { width } = useWindowSize();
  const arrayofHouse = [
    {houseImg:Bungalow,houseName: "seaside serenity villa" , houseInfo: "A stunning 4-bedroom, 3-bathroom villa in a peaceful suburban neighborhood...",
      bedRoomIcon: "fa-solid fa-bed",
       bathHubIcon:"fa-solid fa-bath",
      villa: "fa-solid fa-city",
      bedRoom : 5,
      btHub: 8,
      screenSize:768
    },
    {houseImg:Skycrapper,houseName: 
      "Metropolitan Haven" ,
       houseInfo: "A stunning 4-bedroom, 3-bathroom villa in a peaceful suburban neighborhood...",
       bedRoomIcon: "fa-solid fa-bed",
       bathHubIcon:"fa-solid fa-bath",
       villa: "fa-solid fa-city",
       bedRoom : 3,
       btHub: 4,
       screenSize:768
    },
    {houseImg:SKY,houseName: 
      "Rustic Retreat Cottage" , 
      houseInfo: "A stunning 4-bedroom, 3-bathroom villa in a peaceful suburban neighborhood...",
      bedRoomIcon: "fa-solid fa-bed",
       bathHubIcon:"fa-solid fa-bath",
      villa: "fa-solid fa-city",
      bedRoom : 5,
      btHub: 8,
      // screenSize:768
    },
  ]
  return (
      <div className="">
          <div className='md:m-[50px]'>
      <h3 className="font-medium md:font-bold capialize text-white text-[2rem] p-[10px] md:p-[0px]"> Featured properties</h3>
      <div className="flex flex-col  md:flex-row  items-center mt-[20px] ">
        <p className=" text-white p-[10px] break-words">Explore our handpicked selection of featured properties. Each listing offers a glimpse into exceptional homes and investments available through Estatein. Click "View Details" for more information.</p>
         <button className='bg-[#262626] w-[290px] mt-[20px] md:w-[190px] md:ml-[20px] text-white capitalize outline-none border border-white hover:bg-purple transition-all p-[4px] rounded-md '>
           view all properties
         </button>
      </div>
      <div className="flex flex-col mt-[30px] md:flex-row">

        {
          arrayofHouse.map(({houseImg , houseName , houseInfo ,bathHubIcon, bedRoomIcon ,villa, bedRoom ,btHub , screenSize} ,index)=>{
            return <div key={index}className={`border border-white rounded-md m-[5px] p-[10px] transition-transform duration-300 hover:scale-90 ${screenSize > width ? "hidden md:flex" : "block"}`}
>
                <img src={houseImg} alt="" className='w-[100%] capitalize object-contain' />
              <h3 className="text-3xl font-semibold text-[white] p-[10px]">{houseName}</h3>
               <p className="text-[white] p-[10px]">{houseInfo}</p>
               <div className="flex">
               <p  className="text-[white]  p-[5px] border border-white rounded-lg w-[100px] text-center m-[10px]">{bedRoom}-<span>{<i className={bedRoomIcon}></i>}</span></p>
               <p  className="text-[white]  p-[5px] border border-white rounded-lg w-[100px] text-center m-[10px] ">{btHub}-<span>{<i className={bathHubIcon}></i>}</span></p>
               <p  className="text-[white] p-[5px]  border border-white rounded-lg w-[100px] text-cente m-[10px]">{<i className={villa}></i>}</p>
              </div>
              <div className="flex  justify-center items-center mt-[10px]">
                <div className="m-[10px]">
                  <p className="capitalize text-white">price</p>
                  <p className="text-2xl font-bold text-white">$500,000</p>
                </div>
                <button className="w-full bg-purple text-white rounded-md p-[10px]">view properties</button>
              </div>
            </div>
          })
        }
      </div>
      <div className="flex  items-center justify-center md:justify-end">
             <span className=' text-[12px] text-white font-bold m-[10px]  bg-purple p-[5px] rounded-full'>
                <FaArrowLeft/>
             </span>
             <span className=' text-[12px] text-white font-bold m-[10px]  bg-purple p-[5px] rounded-full'>
                <FaArrowRight/> </span>
         </div>
    </div>
      </div>
  )}

export default FeaturedProps

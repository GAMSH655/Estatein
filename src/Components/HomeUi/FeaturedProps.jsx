import React from 'react'
import Bungalow  from "../../assets/Bung.png"
import Skycrapper from "../../assets/Skycrapper.png"
import SKY from "../../../src/assets/Sky.png"
const FeaturedProps = () => {
  const arrayofHouse = [
    {houseImg:Bungalow,houseName: "seaside serenity villa" , houseInfo: "A stunning 4-bedroom, 3-bathroom villa in a peaceful suburban neighborhood...",
      bedRoomIcon: "fa-solid fa-bed",
       bathHubIcon:"fa-solid fa-bath",
      villa: "fa-solid fa-city",
      bedRoom : 5,
      btHub: 8
    },
    {houseImg:Skycrapper,houseName: 
      "Metropolitan Haven" ,
       houseInfo: "A stunning 4-bedroom, 3-bathroom villa in a peaceful suburban neighborhood...",
       bedRoomIcon: "fa-solid fa-bed",
       bathHubIcon:"fa-solid fa-bath",
       villa: "fa-solid fa-city",
       bedRoom : 3,
       btHub: 4
    },
    {houseImg:SKY,houseName: 
      "Rustic Retreat Cottage" , 
      houseInfo: "A stunning 4-bedroom, 3-bathroom villa in a peaceful suburban neighborhood...",
      bedRoomIcon: "fa-solid fa-bed",
       bathHubIcon:"fa-solid fa-bath",
      villa: "fa-solid fa-city",
      bedRoom : 5,
      btHub: 8
    },
  ]
  return (
    <div className='m-[50px]'>
      <h3 className="font-bold capialize text-white text-[2rem]"> Featured properties</h3>
      <div className="flex justify-between  items-center mt-[20px]">
        <p className=" text-white text-wrap">Explore our handpicked selection of featured properties. Each listing offers a glimpse into exceptional homes and investments available <br /> through Estatein. Click "View Details" for more information.</p>
         <button className='bg-[#262626] w-[190px] text-white capitalize outline-none border border-white hover:bg-purple transition-all p-[4px] rounded-md '>
           view all properties
         </button>
      </div>
      <div className="flex">

        {
          arrayofHouse.map(({houseImg , houseName , houseInfo ,bathHubIcon, bedRoomIcon ,villa, bedRoom ,btHub} ,index)=>{
            return <div key={index} className="border border-white m-[10px] p-[10px]">
                <img src={houseImg} alt="" className='w-[100%] capitalize object-contain' />
              <h3 className="text-3xl font-semibold text-[white] p-[10px]">{houseName}</h3>
               <p className="text-[white] p-[10px]">{houseInfo}</p>
               <div className="flex">
               <p  className="text-[white]  p-[5px] border border-white rounded-lg w-[100px] text-center m-[10px]">{bedRoom}-<span>{<i className={bedRoomIcon}></i>}</span></p>
               <p  className="text-[white]  p-[5px] border border-white rounded-lg w-[100px] text-center m-[10px] ">{btHub}-<span>{<i className={bathHubIcon}></i>}</span></p>
               <p  className="text-[white] p-[5px]  border border-white rounded-lg w-[100px] text-cente m-[10px]">{<i className={villa}></i>}</p>
              </div>
            </div>
          })
        }
    
      </div>
    </div>
  )}

export default FeaturedProps

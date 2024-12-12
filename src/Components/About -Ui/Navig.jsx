import React from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import Jack from "../../assets/Jack.png"
import Sarah from "../../assets/Sarah.png"
import David from "../../assets/David.png"
import Micheal from "../../assets/Micheal.png"
import {FaTwitter , FaTelegram , FaHand} from "react-icons/fa6"
import Footer from "../../Components/HomeUi/Footer"
const Navig = () => {
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
            duration: 4000, // values from 0 to 3000, with step 50ms
            easing: 'ease', // default easing for AOS animations
            once: false, // whether animation should happen only once - while scrolling down
            mirror: true, // whether elements should animate out while scrolling past them
            anchorPlacement: 'top-bottom', // defines which position
        });
      },[])
    const NavigArray = [
        {step : 0o1 ,
         NavigTitle: "Discover a World of Possibilities",
         NavigText: "Your journey begins with exploring our carefully curated property listings. Use our intuitive search tools to filter properties based on your preferences, including location, type, size, and budget."
        },
        {step : 0o2 ,
         NavigTitle: "Narrowing Down Your Choices",
         NavigText: "Once you've found properties that catch your eye, save them to your account or make a shortlist. This allows you to compare and revisit your favorites as you make your decision."
        },
        {step : 0o3 ,
         NavigTitle: "Personalized Guidance",
         NavigText: "Have questions about a property or need more information? Our dedicated team of real estate experts is just a call or message away."
        },
        {step : 0o4 ,
         NavigTitle: "See It for Yourself",
         NavigText: "Arrange viewings of the properties you're interested in. We'll coordinate with the property owners and accompany you to ensure you get a firsthand look at your potential new home."
        },
        {step : 0o5,
         NavigTitle: "Making Informed Decisions",
         NavigText: "Before making an offer, our team will assist you with due diligence, including property inspections, legal checks, and market analysis. We want you to be fully informed and confident in your choice.."
        },
        {step : 0o6,
         NavigTitle: "Getting the Best Deal",
         NavigText: "We'll help you negotiate the best terms and prepare your offer. Our goal is to secure the property at the right price and on favorable terms."
        } ];

        const TeamArray = [
            {TeamImg: Jack ,
             TeamName: "max micthell",
             TeamPosition:"Founder"
            },
            {TeamImg: Sarah ,
             TeamName: "sarah johnson",
             TeamPosition:"cheif real estate officer"
            },
            {TeamImg:David,
             TeamName: "david brown",
             TeamPosition:"head of property management"
            },
            {TeamImg: Jack ,
             TeamName: "max micthell",
             TeamPosition:"Founder"
            },
            {TeamImg: Jack ,
             TeamName: "max micthell",
             TeamPosition:"Founder"
            },
            {TeamImg: Jack ,
             TeamName: "max micthell",
             TeamPosition:"Founder"
            },
        ]
  return (
        <div>
        <div className="md:mt-[50px]"  >
    <h3 className="text-[1rem] md:text-[3rem] text-white font-normal p-[5px] capitalize">Navigating the Estatein Experience</h3>
    <p className="text-[#ffff]   p-[10px]">At Estatein, we've designed a straightforward process to help you find and purchase your dream property with ease. Here's a step-by-step guide to how it all works.</p>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
    {
            NavigArray.map(({step , NavigTitle , NavigText}, index) =>{
            return <div className="border-[.5px] border-[#999999] pup rounded-md">
            <h3 className="text-[1.3rem]  text-white font-normal p-[5px] capitalize ">{step}</h3>
            <div className="border-t border-gray-400">
            <h3 className="text-[1.2rem]  text-white font-normal p-[10px] capitalize">{NavigTitle}</h3>
            <p className="text-white p-[10px] ">{NavigText}</p>
            </div>
        </div>
            })
    }
   
    </div>
    <h3 className="text-[1rem] md:text-[1.5rem] mt-[30px] text-white font-normal p-[5px] capitalize">Navigating the Estatein Experience</h3>
    <p className="text-[#ffff]   p-[10px]">At Estatein, we've designed a straightforward process to help you find and purchase your dream property with ease. Here's a step-by-step guide to how it all works.</p>
    <div className="flex flex-wrap justify-center items-center md:grid md:grid-cols-3 md:gap-4 md:place-items-center">
         {
            TeamArray.map(({TeamImg , TeamName , TeamPosition} , index)=>(
                <div className=" m-[10px] border-tiny rounded-lg border-gray-300 p-4 flex flex-col items-center space-y-3 ">
                <img src={TeamImg} alt="Team" className="w-full h-auto" />
                <span className="bg-purple p-1 rounded-lg relative bottom-[20px] flex items-center justify-center w-[100px] text-[1.2rem]">
                    <FaTwitter className="text-white" />
                </span>
                <div className="text-center text-white">
                    <h3 className="capitalize">{TeamName}</h3>
                    <p className="capitalize">{TeamPosition}</p>
                    <div className="m-5 flex justify-between bg-[#1A1A1A] w-[300px] p-[10px] rounded-full">
                    <p className="text-white flex items-center space-x-2">
                        Say Hello  <FaHand className="text-yellow-400 pl-[5px]" />
                    </p>
                    <span className="bg-purple h-8 w-8 rounded-full flex items-center justify-center text-xl">
                        <FaTelegram className="text-white" />
                    </span>
                </div>
                </div>
            </div>
           ) )
         }   
    </div>
    <div className="flex flex-col md:flex-row md:items-center md:justify-center border-t border-gray-300 pt-5 mt-12">
    <div>
        <h3 className="capitalize text-2xl text-white md:text-3xl leading-relaxed md:leading-snug">
            Start your real estate journey today
        </h3>
        <p className="text-sm text-white mt-2  break-words">
            Your dream property is just a click away. Whether you're looking for a new home, a strategic investment, or expert real estate advice, Estatein is here to assist you every step of the way. Take the first step towards your real estate goals and explore our available properties or get in touch with our team for personalized assistance.
        </p>
    </div>
    <button className="bg-purple  text-white border-none outline-none rounded-md w-full md:w-64 py-2 mt-5 md:mt-0">
        Explore Properties
    </button>
</div>
  <Footer/>
    </div> 
    </div>
    )};

export default Navig



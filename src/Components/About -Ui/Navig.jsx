import React from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
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
  return (
        <div>
        <div className="md:mt-[50px]"  data-aos="fade-left"
      data-aos-offset="200"
      data-aos-delay="50"
      data-aos-duration="1000"
      data-aos-easing="ease-in-out"
      data-aos-mirror="true"
      data-aos-once="false"
      data-aos-anchor-placement="top-center">
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
    </div> 
        </div>
    )
    }

export default Navig



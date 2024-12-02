import React from 'react'

const Navig = () => {
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
         NavigText: "We'll help you negotiate the best terms and prepare your offer. Our goal is to secure the property at the right price and on favorable terms. "
        },
       
    ]
  return (
    <div className="md:mt-[50px]">
      <h3 className="text-[2rem] md:text-[3rem] text-white font-normal p-[5px] capitalize">Navigating the Estatein Experience</h3>
      <p className="text-[#ffff]   p-[10px] md:p-[20px">At Estatein, we've designed a straightforward process to help you find and purchase your dream property with ease. Here's a step-by-step guide to how it all works.</p>
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
  )
}

export default Navig

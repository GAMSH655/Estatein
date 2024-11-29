import React from 'react'
import { useState } from 'react';

const Faq = () => {
const [activeIndex, setActiveIndex] = useState(0);

const items = [
    { id: 0, title: "How do I search for properties on Estatein?", content: "Learn how to use our user-friendly search tools to find properties that match your criteria." },
    { id: 1, title: "What documents do I need to sell my property through Estatein?", content: "Find out about the necessary documentation for listing your property with us." },
    { id: 2, title: "How can I contact an Estatein agent? ", content: "Discover the different ways you can get in touch with our experienced agents.." },
    { id: 3, title: "Panel 4", content: "This is the content of Panel 4." },
  ];
  const toggleAccordion = (index) => {
    setActiveIndex(index === activeIndex ? null : index); // Toggle active panel
  };

  return (
    <div className='mt-[20px]'>
      <h3 className="font-semibold capitalize text-white text-2xl text-center md:text-3xl md:p-[10px] md:text-start">
        frequently asked questions
      </h3>
      <p className="text-sm text-[#ffff] p-[10px] md:mt-[10px]">
        Find answers to common questions about Estatein's services, property listings, and the real estate process. We're here to provide clarity and assist you every step of the way.
        </p>
      <div className="max-w-2xl mx-auto mt-8 space-y-4">
      {items.map((item, index) => (
        <div
          key={item.id}
          className={`border rounded-lg shadow-lg transition-all duration-300 overflow-hidden w-[100%]  ${
            activeIndex === index ? "bg-blue-100" : "bg-white"
          }`}
        >
          <button
            onClick={() => toggleAccordion(index)}
            className="w-full text-left px-4 py-3 text-lg font-semibold bg-blue-200 hover:bg-blue-300"
          >
            {item.title}
          </button>
          <div
            className={`transition-max-height duration-500 ease-in-out overflow-hidden ${
              activeIndex === index ? "max-h-screen" : "max-h-0"
            }`}
          >
            <div className="p-4">{item.content}</div>
          </div>
        </div>
      ))}
    </div>
    </div>
  )
}

export default Faq

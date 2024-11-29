import React from 'react'
import { useState } from 'react'
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
const Faq = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const faqs = [
    {
      question: "How do I search for properties on Estatein?",
      answer: "Learn how to search for your dream home with our detailed guide.",
    },
    {
      question: "What documents do I need to sell my property through Estatein?",
      answer:
        "Find out all the necessary documentation for listing your property with us.",
    },
    {
      question: "How can I contact an Estatein agent?",
      answer: "Discover the different ways you can get in touch with our helpful agents.",
    },
  ];

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === faqs.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? faqs.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className='mt-[20px]'>
        <h3 className="font-semibold capitalize text-white text-2xl text-center md:text-3xl md:p-[10px] md:text-start">
        frequently asked questions
        </h3>
        <p className="text-sm text-[#ffff] p-[10px] md:mt-[10px]">
        Find answers to common questions about Estatein's services, property listings, and the real estate process. We're here to provide clarity and assist you every step of the way.
        </p>

        <div className="bg-black text-white py-8">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-2xl font-bold mb-4">Frequently Asked Questions</h2>
        <div className="flex justify-between items-center mb-4">
          <p>Find answers to common questions about Estatein services.</p>
          <button className="text-sm block">View All FAQs</button>
        </div>
        <div className="relative">
          {/* Carousel Content */}
          <div className="flex space-x-4 overflow-hidden">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className={`w-full transition-transform duration-500  ${
                  index === currentIndex ? "block" : "hidden"
                }`}
              >
                <div className="border border-gray-700 rounded-lg p-6">
                  <h3 className="text-xl font-semibold mb-2">{faq.question}</h3>
                  <p className="mb-4">{faq.answer}</p>
                  <button className="bg-white text-black px-4 py-2 rounded-lg font-medium hover:bg-gray-200">
                    Read More
                  </button>
                </div>
              </div>
            ))}
          </div>
          {/* Navigation Arrows */}
          <button
            onClick={handlePrev}
            className="absolute left-0 top-1/2 transform -translate-y-1/2  bg-purple text-white p-2 rounded-full hover:bg-gray-600"
          >
           <FaArrowLeft />
          </button>
          <button
            onClick={handleNext}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-purple text-white p-2 rounded-full hover:bg-gray-600"
          >
           <FaArrowRight />
          </button>
        </div>
        {/* Pagination */}
        <div className="flex justify-center space-x-2 mt-4">
          {faqs.map((_, index) => (
            <div
              key={index}
              className={`w-3 h-3 rounded-full ${
                index === currentIndex ? "bg-white" : "bg-gray-700"
              }`}
            ></div>
          ))}
        </div>
      </div>
    </div>
    <div className="flex flex-col md:flex-row md:items-center md:justify-center sm:border-t border-t-[.5px] border-gray-300 md:p-[20px]">
     <div className="">
     <h3 className="capitalize text-2xl text-white md:text-3xl md:break-words">start your real estate journey today </h3>
     <p className="text-sm text-[#ffff] p-[10px] md:mt-[10px]">Your dream property is just a click away. Whether you're looking for a new home, a strategic investment, or expert real estate advice, Estatein is here to assist you every step of the way. Take the first step towards your real estate goals and explore our available properties or get in touch with our team for personalized assistance.</p>
     </div>
      <button className="bg-purple w-[100%] md:mt-[50px] text-white border-none outline-none rounded-md md:w-[250px] md:pt-[5px] p-[5px]">explore properties</button>
    </div>
    </div>
  )
}
export default Faq



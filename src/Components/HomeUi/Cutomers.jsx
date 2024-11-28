import Wade from "../../assets/Wade.png";
import Emilly from "../../assets/Emilly.png";
import John from "../../assets/John.png";
import { FaArrowLeft, FaArrowRight, FaStar } from 
"react-icons/fa";
import { useState } from "react";

const Customers = () => {
  const [currentCustomerIndex, setCurrentCustomerIndex] = useState(0);

  const customerQuotes = [
    {
      customerName: "Emilly Thomson",
      customerImg: Emilly,
      customerLocation: "USA, Florida",
      customerSpeechTitle: "Efficient and Reliable",
      customerSpeech:
        "Estatein provided us with top-notch service. They helped us sell our property quickly and at a great price. We couldn't be happier with the results.",
        showcard:false
    },
    {
      customerName: "Wade Warren",
      customerImg: Wade,
      customerLocation: "USA, Florida",
      customerSpeechTitle: "Exceptional Service!",
      customerSpeech:
        "Our experience with Estatein was outstanding. Their team's dedication and professionalism made finding our dream home a breeze. Highly recommended!",
        showcard:false
    },
    {
      customerName: "John Mans",
      customerImg: John,
      customerLocation: "USA, Florida",
      customerSpeechTitle: "Exceptional Service!",
      customerSpeech:
        "Our experience with Estatein was outstanding. Their team's dedication and professionalism made finding our dream home a breeze. Highly recommended!",
        showcard:false
    },
  ];

  const handleNext = () => {
    setCurrentCustomerIndex((prevIndex) => (prevIndex + 1) % customerQuotes.length);
  };

  const handlePrev = () => {
    setCurrentCustomerIndex(
      (prevIndex) => (prevIndex - 1 + customerQuotes.length) % customerQuotes.length
    );
  };

  const {
    customerName,
    customerImg,
    customerLocation,
    customerSpeechTitle,
    customerSpeech,
  } = customerQuotes[currentCustomerIndex];

  return (
    <div className=" mt-[20px] md:p-12">
      <h3 className="font-semibold capitalize text-white text-2xl md:text-3xl">
        What our clients say
      </h3>
      <div className="flex flex-col md:flex-row items-center mt-4">
        <p className="text-sm text-white">
          Read the success stories and heartfelt testimonials from our valued clients. Discover why they chose Estatein for their real estate needs.
        </p>
        <button className="bg-black w-48 text-white capitalize border border-white hover:bg-purple-500 transition-all py-1 px-4 rounded-md">
          View All Testimonies
        </button>
      </div>
      <div className="flex flex-col items-center mt-8">
        <div className="border border-white p-6 rounded-md w-full max-w-md">
          <div className="flex justify-center mb-4">
            <FaStar className="text-yellow-400" />
            <FaStar className="text-yellow-400" />
            <FaStar className="text-yellow-400" />
            <FaStar className="text-yellow-400" />
          </div>
          <h3 className="font-medium capitalize text-white text-lg">
            {customerSpeechTitle}
          </h3>
          <p className="text-sm text-white mt-4">{customerSpeech}</p>
          <div className="flex items-center mt-6">
            <img src={customerImg} alt={`${customerName}`} className="w-16 h-16 rounded-full mr-4" />
            <div>
              <p className="capitalize font-medium text-white">{customerName}</p>
              <span className="block capitalize text-gray-300 text-sm">{customerLocation}</span>
            </div>
          </div>
        </div>
        <div className="flex justify-between w-32 mt-6">
          <button
            onClick={handlePrev}
            className="text-white bg-purple-500 p-2 rounded-full hover:bg-purple-700"
          >
            <FaArrowLeft />
          </button>
          <button
            onClick={handleNext}
            className="text-white bg-purple-500 p-2 rounded-full hover:bg-purple-700"
          >
            <FaArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Customers;

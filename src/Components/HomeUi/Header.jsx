import React from 'react'
import Logo from "../../assets/Symbol.png"
import { NavLink } from 'react-router-dom'
const Header = () => {
   const NavigatingLinks =  [
    {Link: "#" , name: "home"},
    {Link: "#" , name: "about us"},
    {Link: "#" , name: " properties"},
    {Link: "#" , name: "services"},
   ]
  return (
    <div className="flex  justify-between p-[20px] bg-[#1A1A1A]">
      <div className='flex'>
     <img src={Logo} alt="" />
     <h3 className="font-medium text-2xl capitalize text-white ml-[10px] pt-[10px]">estatein</h3>
    </div>
    <div className="hidden lg:flex justify-evenly items-center space-x-4">
          {NavigatingLinks.map(({ Link, name }, id) => (
            <a
              href={Link}
              className="decoration-none text-base capitalize font-semibold text-white hover:underline"
              key={id}
            >
              {name}
            </a>
          ))}
        </div>
        <button className="bg-black text-white px-4 py-2 rounded-lg capitalize">
           contact us
          </button>
    </div>
    
  )
}

export default Header

// import React, { useState } from 'react';
// import { FaBars , FaTimes } from 'react-icons/fa';
// const Header = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false); // State to manage the mobile menu

//   const NavigatingLinks = [
//     { Link: "#", name: "home" },
//     { Link: "#", name: "api" },
//     { Link: "#", name: "review" },
//     { Link: "#", name: "blog" },
//     { Link: "#", name: "marketplace" },
//     { Link: "#", name: "login" },
//     { Link: "#", name: "earn on metrohyp" },
//   ];

//   const toggleMenu = () => {
//     setIsMenuOpen(!isMenuOpen); // Toggle the menu open/close state
//   };

//   return (
//     <div className="bg-white p-4 rounded-lg">
//       <div className="flex justify-between items-center">
//         <h3 className="logoColor text-2xl font-semibold text-royalBlue">
//           MetrohypDigital
//         </h3>

//         {/* Mobile Menu Button */}
//         <div className="lg:hidden">
//           <button onClick={toggleMenu} className="text-royalBlue focus:outline-none">
//            { isMenuOpen ? <FaTimes/> : <FaBars/> }
//           </button>
//         </div>

//         {/* Navigation Links */}
//         <div className="hidden lg:flex justify-between items-center space-x-4">
//           {NavigatingLinks.map(({ Link, name }, id) => (
//             <a
//               href={Link}
//               className="decoration-none text-base capitalize font-semibold text-royalBlue hover:underline"
//               key={id}
//             >
//               {name}
//             </a>
//           ))}
//           <button className="bg-royalBlue text-white px-4 py-2 rounded-lg capitalize">
//             advertise with us
//           </button>
//         </div>
//       </div>

//       {/* Mobile Menu */}
//       {isMenuOpen && (
//         <div className="lg:hidden flex flex-col mt-4 space-y-2">
//           {NavigatingLinks.map(({ Link, name }, id) => (
//             <a
//               href={Link}
//               className="block px-4 py-2 text-base capitalize font-semibold text-royalBlue hover:bg-gray-200 rounded"
//               key={id}
//             >
//               {name}
//             </a>
//           ))}
//           <button className="bg-royalBlue text-white px-4 py-2 rounded-lg capitalize">
//             advertise with us
//           </button>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Header;

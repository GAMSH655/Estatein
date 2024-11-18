import React from 'react';
import Logo from '../../assets/Symbol.png';

const Header = () => {
   const NavigatingLinks = [
      { Link: '#', name: 'home' },
      { Link: '#', name: 'about us' },
      { Link: '#', name: 'properties' },
      { Link: '#', name: 'services' },
   ];

   return (
      <div className="sticky top-0 z-10 flex justify-between items-center p-4 bg-[#1A1A1A] shadow-lg">
         {/* Logo and Title */}
         <div className="flex items-center">
            <img src={Logo} alt="Logo" className="w-10 h-10" />
            <h3 className="font-medium text-2xl capitalize text-white ml-2">estatein</h3>
         </div>
         
         {/* Navigation Links */}
         <div className="hidden lg:flex space-x-6">
            {NavigatingLinks.map(({ Link, name }, id) => (
               <a
                  href={Link}
                  className="text-white text-base font-semibold capitalize hover:underline"
                  key={id}
               >
                  {name}
               </a>
            ))}
         </div>

         {/* Contact Button */}
         <button className="bg-black text-white px-4 py-2 rounded-lg capitalize">
            contact us
         </button>
      </div>
   );
};

export default Header; 

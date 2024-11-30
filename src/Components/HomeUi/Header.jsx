import React, { useState } from 'react';
import Logo from '../../assets/Symbol.png';
import { NavLink } from 'react-router-dom';
const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const NavigatingLinks = [
        { Link: '/home', name: 'home' },
        { Link: '/about', name: 'about us' },
        { Link: '#', name: 'properties' },
        { Link: '#', name: 'services' },
    ];
    return (
        <header className="sticky top-0 z-10 bg-[#1A1A1A] shadow-lg">
            <div className="flex justify-between items-center p-4">
                {/* Logo and Title */}
                <div className="flex items-center">
                    <img src={Logo} alt="Logo" className="w-10 h-10" />
                    <h3 className="font-medium text-2xl capitalize text-white ml-2">estatein</h3>
                </div>
                <button 
                    className="lg:hidden text-white text-2xl" 
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    aria-label="Toggle Menu"
                >
                    {isMenuOpen ? '\u2715' : '\u2630'} {/* Cross or Hamburger Icon */}
                </button>
                <nav
                    className={`lg:flex space-x-6 ${
                        isMenuOpen ? 'block' : 'hidden'
                    } absolute lg:relative top-full left-0 w-full lg:w-auto bg-[#1A1A1A] lg:bg-transparent p-4 lg:p-0`}
                >
                    {NavigatingLinks.map(({ Link, name }, id) => (
                        <NavLink
                            to={Link}
                            className="block lg:inline-block text-white text-base font-semibold capitalize hover:underline py-2 lg:py-0"
                            key={id}
                        >
                            {name}
                        </NavLink>
                    ))}
                </nav>
                <button className="hidden lg:inline-block bg-black text-white px-4 py-2 rounded-lg capitalize">
                    contact us
                </button>
            </div>
        </header>
    );
};

export default Header;

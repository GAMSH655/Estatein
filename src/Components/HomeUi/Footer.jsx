    import React from 'react';
    import Logo from "../../assets/Symbol.png"
    import {
    FaFacebook,
    FaInstagram,
    FaTwitter,
    FaTelegramPlane,
    FaLinkedinIn,
    } from 'react-icons/fa';

    const Footer = () => {
    const socialIcons = [
        { icon: <FaFacebook />, href: "#" },
        { icon: <FaTelegramPlane />, href: "#" },
        { icon: <FaTwitter />, href: "#" },
        { icon: <FaLinkedinIn />, href: "#" },
    ];

    const quickLinks = [
        { label: "Home", href: "./landing-page.html" },
        { label: "About", href: "#about" },
        { label: "Login", href: "../../ADMIN/ONBOARDING/admin-login.html" },
        { label: "Account", href: "#" },
        { label: "Become an Advertiser", href: "../../ADVERTISER/ONBOARDING/register.html" },
    ];

    const companyLinks = [
        { label: "About", href: "#" },
        { label: "Contact", href: "#" },
        { label: "How It Works", href: "#" },
        { label: "Knowledgebase", href: "#" },
        { label: "Become an Advertiser", href: "#" },
    ];

    const informationLinks = [
        { label: "Privacy Policy", href: "#" },
        { label: "Terms & Conditions", href: "#" },
        { label: "FAQ", href: "#" },
    ];

    const renderLinks = (links) =>
        links.map((link) => (
        <a
            key={link.label}
            href={link.href}
            className="no-underline hover:text-purple-500 text-white font-semibold capitalize block mt-2"
        >
            {link.label}
        </a>
        ));

    return (
        <div className="">
            <footer className="bg-[black] text-white px-4 md:px-[70px] py-20 mt-[30px] border-t border-gray-300 flex flex-col md:flex-row justify-between">
        <div className="space-y-10">
            <div className="space-y-6">
            <div className="flex items-center">
                <img src={Logo} alt="Logo" className="w-10 h-10" />
                <h3 className="font-medium text-2xl capitalize text-white ml-2">estatein</h3>
            </div>
            <p className="text-white font-bold text-sm md:text-base">
                Number 1 social media Plug
            </p>
            </div>
            <div className="flex items-center border border-gray-300 rounded-lg p-2 bg-white">
        <FaTelegramPlane className="text-purple text-2xl mx-2" />
        <input
            type="text"
            placeholder="Enter your message..."
            className="flex-grow outline-none p-2 text-sm"
        />
        <button className="bg-purple text-white px-4 py-2 rounded-lg ">
            Send
        </button>
        </div>
        </div>
        <div className="mt-6 md:mt-0">
            <h3 className="font-bold text-xl text-white capitalize">Quick Links</h3>
            {renderLinks(quickLinks)}
        </div>
        <div className="mt-6 md:mt-0">
            <h3 className="font-bold text-xl text-white capitalize">Company</h3>
            {renderLinks(companyLinks)}
        </div>
        <div className="mt-6 md:mt-0">
            <h3 className="font-bold text-xl text-white capitalize">Information</h3>
            {renderLinks(informationLinks)}
        </div>
        </footer>
        <div className="bg-[#141414] flex flex-col  md:justify-between md:flex-row  md:px-[70px] py-[20px]">
            <p className="text-white ">Copyright &copy; 2023 Metrohyp Digital</p>
            <div className="flex">
            {socialIcons.map(({ icon, href }, index) => (
            <a
                key={index}
                href={href}
                className="m-[5px] hover:bg-purple hover:text-white p-[10px] w-[50px] h-[50px] border border-gray-500 rounded-full text-center text-2xl flex items-center justify-center"
            >
                {icon}
            </a>
            ))}
            </div> 
        </div>

        </div>
    );
    };

    export default Footer;

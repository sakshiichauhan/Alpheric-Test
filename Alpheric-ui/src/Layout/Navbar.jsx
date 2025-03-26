import React, { useState } from "react";
import Alphericlogo from "../assets/Homepage/alpheric-icon.png";
import { ChevronDown, Menu, X } from "lucide-react";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeItem, setActiveItem] = useState("Consult");
    
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };
    
    const handleItemClick = (itemName) => {
        setActiveItem(itemName);
    };

    return (
        <nav className="fixed top-0 left-0 w-full flex items-center justify-between font-urbanist px-3 md:px-4 lg:px-9 py-5 bg-transparent backdrop-blur-md z-50">
            {/* Logo */}
            <div className="relative ml-0 lg:ml-12">
                <img 
                    src={Alphericlogo} 
                    alt="company logo" 
                    className="w-[100px] h-[35px] sm:w-[130px] sm:h-[45px] md:w-[160px] md:h-[50px]" 
                />
            </div>
            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center gap-5 border border-white rounded-full px-4 py-2 text-base backdrop-blur-lg mx-4 font-medium">
                <a className={`flex justify-center items-center gap-1 relative hover:bg-[#56c8dc]/30 rounded-4xl px-2.5 py-1.5 ${activeItem === "Consult" ? "bg-[#56c8dc]/30 rounded-4xl px-2.5 py-1.5 border border-blue-500" : ""}`} 
                    href="#" 
                    onClick={() => handleItemClick("Consult")}>
                    Consult <ChevronDown size={15} />
                    {activeItem === "Consult"}
                </a>
                <a className={`relative hover:bg-[#56c8dc]/30 rounded-4xl px-2.5 py-1.5 ${activeItem === "Build" ? "bg-[#56c8dc]/30 rounded-4xl px-2.5 py-1.5 border border-blue-500" : ""}`} 
                    href="#about" 
                    onClick={() => handleItemClick("Build")}>
                    Build
                    {activeItem === "Build"}
                </a>
                <a className={`relative hover:bg-[#56c8dc]/30 rounded-4xl px-2.5 py-1.5 ${activeItem === "Design" ? "bg-[#56c8dc]/30 rounded-4xl px-2.5 py-1.5 border border-blue-500" : ""}`} 
                    href="#design" 
                    onClick={() => handleItemClick("Design")}>
                    Design
                    {activeItem === "Design" }
                </a>
                <a className={`relative hover:bg-[#56c8dc]/30 rounded-4xl px-2.5 py-1.5 ${activeItem === "Host" ? "bg-[#56c8dc]/30 rounded-4xl px-2.5 py-1.5 border border-blue-500" : ""}`} 
                    href="#host" 
                    onClick={() => handleItemClick("Host")}>
                    Host
                    {activeItem === "Host" }
                </a>
                <a className={`relative hover:bg-[#56c8dc]/30 rounded-4xl px-2.5 py-1.5 ${activeItem === "Secure" ? "bg-[#56c8dc]/30 rounded-4xl px-2.5 py-1.5 border border-blue-500" : ""}`} 
                    href="#secure" 
                    onClick={() => handleItemClick("Secure")}>
                    Secure
                    {activeItem === "Secure" }
                </a>
                <a className={`relative hover:bg-[#56c8dc]/30 rounded-4xl px-2.5 py-1.5 ${activeItem === "Market" ? "bg-[#56c8dc]/30 rounded-4xl px-2.5 py-1.5 border border-blue-500" : ""}`} 
                    href="#market" 
                    onClick={() => handleItemClick("Market")}>
                    Market
                    {activeItem === "Market" }
                </a>
                <a className={`relative hover:bg-[#56c8dc]/30 rounded-4xl px-2.5 py-1.5 ${activeItem === "Support" ? "bg-[#56c8dc]/30 rounded-4xl px-2.5 py-1.5 border border-blue-500" : ""}`} 
                    href="#support" 
                    onClick={() => handleItemClick("Support")}>
                    Support
                    {activeItem === "Support" }
                </a>
                <a className={`flex justify-center items-center gap-1 relative hover:bg-[#56c8dc]/30 rounded-4xl px-2.5 py-1.5 ${activeItem === "Services" ? "bg-[#56c8dc]/30 rounded-4xl px-2.5 py-1.5 border border-blue-500" : ""}`} 
                    href="#services" 
                    onClick={() => handleItemClick("Services")}>
                    Services <ChevronDown size={15} />
                    {activeItem === "Services"}
                </a>
                <a className={`flex justify-center items-center gap-1 relative hover:bg-[#56c8dc]/30 rounded-4xl px-2.5 py-1.5 ${activeItem === "Hire" ? "bg-[#56c8dc]/30 rounded-4xl px-2.5 py-1.5 border border-blue-500" : ""}`} 
                    href="#hire" 
                    onClick={() => handleItemClick("Hire")}>
                    Hire <ChevronDown size={15} />
                    {activeItem === "Hire" }
                </a>
                <a className={`relative hover:bg-[#56c8dc]/30 rounded-4xl px-2.5 py-1.5 ${activeItem === "Join Us" ? "bg-[#56c8dc]/30 rounded-4xl px-2.5 py-1.5 border border-blue-500" : ""}`} 
                    href="#joinus" 
                    onClick={() => handleItemClick("Join Us")}>
                        Join Us
                    {activeItem === "Join Us"}
                </a>
                <a className={`relative hover:bg-[#56c8dc]/30 rounded-4xl px-2.5 py-1.5 ${activeItem === "Action" ? "bg-[#56c8dc]/30 rounded-4xl px-2.5 py-1.5 border border-blue-500" : ""}`} 
                    href="#action" 
                    onClick={() => handleItemClick("Action")}>
                    Action
                    {activeItem === "Action"}
                </a>
                <a className={`relative hover:bg-[#56c8dc]/30 rounded-4xl px-2.5 py-1.5 ${activeItem === "Insights" ? "bg-[#56c8dc]/30 rounded-4xl px-2.5 py-1.5 border border-blue-500" : ""}`} 
                    href="#insights" 
                    onClick={() => handleItemClick("Insights")}>
                    Insights
                    {activeItem === "Insights" }
                </a>
            </div>
            {/* Desktop Sign-Up Button */}
            <button className="hidden lg:block px-4 py-2 text-base rounded-full bg-white text-black hover:bg-[#56c8dc]">
                Sign Up
            </button>

            {/* Mobile & Tablet Menu Button */}
            <button onClick={toggleMenu} className="lg:hidden p-2 text-white focus:outline-none">
                { isMenuOpen ? <X size={30} /> : <Menu size={30} color="black" /> }
            </button>

            {/* Mobile & Tablet Menu */}
            <div className={`fixed gap-8 top-0 right-0 w-4/5 h-screen bg-white shadow-lg transform transition-transform duration-300 ease-in-out z-40 p-10 ${ isMenuOpen ? "translate-x-0" : "translate-x-full"} lg:hidden`}>
                <button onClick={toggleMenu} className="absolute top-5 right-5">
                    <X size={30} />
                </button>

                <div className="flex flex-col items-start gap-6 mt-16 text-lg">
                    <a href="#" onClick={toggleMenu}>Consult</a>
                    <a href="#about" onClick={toggleMenu}>Build</a>
                    <a href="#design" onClick={toggleMenu}>Design</a>
                    <a href="#host" onClick={toggleMenu}>Host</a>
                    <a href="#secure" onClick={toggleMenu}>Secure</a>
                    <a href="#market" onClick={toggleMenu}>Market</a>
                    <a href="#support" onClick={toggleMenu}>Support</a>
                    <a href="#services" onClick={toggleMenu}>Services</a>
                    <a href="#hire" onClick={toggleMenu}>Hire</a>
                    <a href="#joinus" onClick={toggleMenu}>Join Us</a>
                    <a href="#action" onClick={toggleMenu}>Action</a>
                    <a href="#insights" onClick={toggleMenu}>Insights</a>
                    <button className="w-full mt-6 px-5 py-3 text-lg rounded-full bg-white text-black hover:bg-[#56c8dc] hover:border-blue-500">
                        Sign Up
                    </button>

                </div>
            </div>
        </nav>
    );
};

export default Navbar;

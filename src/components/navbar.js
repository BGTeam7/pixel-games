import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { BsList, BsXLg } from "react-icons/bs";
import logo from "../assets/logo_light.svg";


const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        
        <nav className="navbar py-2 px-5 flex justify-between items-center md:grid md:grid-cols-5 z-20 text-lg">
            <Link to='./'>
                <img src={logo} className="w-36"/>
            </Link>
            {/* hamburger menu */}
            <button onClick={() => setIsOpen(!isOpen)}
                className="focus:outline-none md:hidden">
                    {isOpen ? (
                        <div><BsXLg/></div>) : (<div><BsList/></div>)
                    }
            </button>
            <div className={`w-full h-full md:grid grid-cols-3 md:items-center md:w-auto absolute md:relative top-10 left-0 md:top-0 
                    md:left-0 p-4 md:p-0 bg-inherit col-start-3 col-span-3
                    transition-all z-20 duration-500 ease-in-out transform ${isOpen ? 
                    'translate-x-0' : 'translate-x-full hidden'
                        } md:translate-x-0`}>
                <NavLink onClick={() => setIsOpen(!isOpen)} className="block text-center font-medium my-10 md:m-0" to='./'>Home</NavLink>
                <NavLink onClick={() => setIsOpen(!isOpen)} className="block text-center font-medium my-10 md:m-0" to='./about'>about</NavLink>
                <div className="flex justify-center">
                    <a href="https://www.paypal.com/donate/?hosted_button_id=RUGEY8J38GKU4&fbclid=IwZXh0bgNhZW0CMTEAAR3zgSZcImCLTqA2kp7k-JkWzn2axuD_yuD6vpf0awLrN42leFUIDYroIhM_aem_DlQq1v5p6fbh7QZeFX5VwA" className="self-center">
                        <button className="button px-4 text-white self-center m-auto">DONATE</button>
                    </a>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
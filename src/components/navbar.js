import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { BsList, BsXLg } from "react-icons/bs";


const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="navbar p-5 flex justify-between items-center md:grid md:grid-cols-5">
            <Link to='/'>Logo</Link>
            {/* hamburger menu */}
            <button onClick={() => setIsOpen(!isOpen)}
                className="focus:outline-none md:hidden">
                    {isOpen ? (
                        <div><BsXLg/></div>) : (<div><BsList/></div>)
                    }
            </button>
            <div className={`w-full h-full md:flex md:items-center md:w-auto 
                    md:justify-between absolute md:relative top-16 left-0 md:top-0 
                    md:left-0 p-4 md:p-0 md:bg-inherit bg-inherit md:col-span-4
                    transition-all z-20 duration-500 ease-in-out transform ${isOpen ? 
                    'translate-x-0' : 'translate-x-full'
                        } md:translate-x-0`}>
                <NavLink onClick={() => setIsOpen(!isOpen)} className="block text-center my-10 md:m-0" to='/'>Boundless Gamers</NavLink>
                <NavLink onClick={() => setIsOpen(!isOpen)} className="block text-center my-10 md:m-0" to='./about'>About Us</NavLink>
                <NavLink onClick={() => setIsOpen(!isOpen)} className="block text-center my-10 md:m-0" to='./news'>News</NavLink>
                <NavLink onClick={() => setIsOpen(!isOpen)} className="block text-center my-10 md:m-0" to='./test'>Donate</NavLink>

            </div>

        </nav>
    );
};

export default Navbar;
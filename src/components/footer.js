import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { BsList, BsXLg } from "react-icons/bs";
import { FaInstagram, FaDiscord, FaFacebook, FaTwitch } from "react-icons/fa";
import { PiXLogo } from "react-icons/pi";
import logo from "../assets/logo_main.svg"

const Footer = () => {


    return (
            <footer className="footer mb-10 mx-4 md:mx-8 border-solid rounded-md px-10 py-4 sm:flex gap-6">
                <img src={logo} className="sm:w-1/4"/>
                <div className="w-full text-[#14077D]">
                    <div className="flex justify-around flex-col sm:flex-row text-center">
                        <div className="mt-4">
                            {/* <ul className="text-base space-y-5">
                                <li><Link to="/">Home</Link></li>
                                <li><a href="https://boundlessgamers.org">Boundless Gamers</a></li>
                            </ul> */}
                        </div>
                        <div className="mt-4">
                            <ul className=" space-y-5">
                                {/* <li>News</li> */}
                                {/* <li><Link to="/about">About Us</Link></li> */}
                                <li><a href="https://boundlessgamers.org">Boundless Gamers</a></li>
                                <li><a href="https://www.paypal.com/donate/?hosted_button_id=RUGEY8J38GKU4&fbclid=IwZXh0bgNhZW0CMTEAAR3zgSZcImCLTqA2kp7k-JkWzn2axuD_yuD6vpf0awLrN42leFUIDYroIhM_aem_DlQq1v5p6fbh7QZeFX5VwA">Donate</a></li>
                            </ul>
                        </div>
                        <div className="mt-4">
                            <ul className=" space-y-5">
                                <li><Link to="/terms-of-use">Terms of Use</Link></li>
                                {/* <li><Link to="/terms-of-use">Privacy Policy</Link></li> */}
                                <li><a href="mailto:admin@boundlessgamers.org">Contact Us</a></li>
                            </ul>
                        </div>
                        <div className="col-span-2 mt-4">
                            {/* <p className="text-lg text-center font-semibold">FOLLOW US</p> */}
                            <div className="grid grid-cols-3 gap-4 items-center">
                                <a href="https://www.twitch.tv/boundlessgamers"><FaTwitch size={24}/></a>
                                <a href="https://discord.gg/fFaGCTHfj2"><FaDiscord size={24}/></a>
                                <a href="https://www.instagram.com/boundlessgamers/"><FaInstagram size={24}/></a>
                                <a href="https://twitter.com/BoundIessGamers"><PiXLogo size={24}/></a>
                                <a href="https://www.facebook.com/BoundlessGamers?mibextid=LQQJ4d"><FaFacebook size={24}/></a>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-4 text-right text-xs md:text-sm mt-12">
                        Pixel Games Studios © 2025
                    </div>
                </div>
        </footer>
    );
};

export default Footer;
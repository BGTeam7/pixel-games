import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { BsList, BsXLg } from "react-icons/bs";
import { FaInstagram, FaDiscord, FaFacebook, FaTwitch } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import logo from "../assets/logo_main.svg"
import pic from "../assets/footerbg.png"

const Footer = () => {


    return (
        <div>
            <img src={pic} className="w-full opacity-50"/>
            <div className="footerbg">
                <footer className="footer mb-10 mx-4 md:mx-8 border-solid rounded-md px-10 py-12 sm:flex gap-6">
                    <div className="text-inherit flex flex-col gap-4">
                        <img src={logo} />
                        <div className="flex justify-center gap-4 text-[#14077D]">
                            <a href="https://www.twitch.tv/boundlessgamers"><FaTwitch size={24}/></a>
                            <a href="https://discord.gg/fFaGCTHfj2"><FaDiscord size={24}/></a>
                            <a href="https://www.instagram.com/boundlessgamers/"><FaInstagram size={24}/></a>
                            <a href="https://twitter.com/BoundIessGamers"><FaXTwitter size={24}/></a>
                            <a href="https://www.facebook.com/BoundlessGamers?mibextid=LQQJ4d"><FaFacebook size={24}/></a>
                        </div>
                    </div>
                    <div className="w-full text-[#14077D]">
                        <div className="flex justify-around flex-col sm:flex-row text-center">
                            <div>
                                <ul className=" space-y-5">
                                    <li><a href="https://boundlessgamers.org">Boundless Gamers</a></li>
                                    <li><a href="https://itsaconspiracy.com">It's a Conspiracy</a></li>
                                    <li><a href="https://www.paypal.com/donate/?hosted_button_id=RUGEY8J38GKU4&fbclid=IwZXh0bgNhZW0CMTEAAR3zgSZcImCLTqA2kp7k-JkWzn2axuD_yuD6vpf0awLrN42leFUIDYroIhM_aem_DlQq1v5p6fbh7QZeFX5VwA">Donate</a></li>
                                </ul>
                            </div>
                            <div>
                                <ul className=" space-y-5">
                                    <li><Link to="/terms-of-use">Terms of Use</Link></li>
                                    <li><Link to="/privacy">Privacy Policy</Link></li>
                                    <li><a href="mailto:admin@boundlessgamers.org">Contact Us</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </footer>
                <div className="text-center text-xs md:text-sm text-white">
                    Pixel Games Studios © {(new Date().getFullYear())}. All rights reserved.
                </div>
            </div>
        </div> 
    );
};

export default Footer;
import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { BsList, BsXLg } from "react-icons/bs";
import { FaInstagram, FaDiscord, FaFacebook, FaTwitch } from "react-icons/fa";
import logo from "../assets/logo_main.svg"

const Footer = () => {


    return (
            <footer className="footer mb-10 mx-4 md:mx-8 border-solid rounded-md px-10 py-4 sm:flex gap-6">
                <img src={logo} className="w-1/4"/>
                <div className="w-full text-[#14077D]">
                    <div className="flex justify-around">
                        <div className="mt-4">
                            {/* <p className="text-lg font-semibold">PIXEL GAMES STUDIOS</p> */}
                            <ul className="text-base space-y-5">
                                <li>Home</li>
                                <li>Boundless Gamers</li>
                                <li>Community</li>
                            </ul>
                        </div>
                        <div className="mt-4">
                            <ul className=" space-y-5">
                                <li>News</li>
                                <li>About Us</li>
                                <li>Donate</li>
                            </ul>
                        </div>
                        <div className="mt-4">
                            <ul className=" space-y-5">
                                <li>Terms of Service</li>
                                <li>Privacy Policy</li>
                                <li>Contact Us</li>
                            </ul>
                        </div>
                        <div className="col-span-2 mt-4">
                            <p className="text-lg font-semibold">FOLLOW US</p>
                            <div className="flex gap-2">
                                <FaInstagram/>
                                <FaDiscord/>
                                <FaTwitch/>
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
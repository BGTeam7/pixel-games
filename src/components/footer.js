import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { BsList, BsXLg } from "react-icons/bs";
import { FaInstagram, FaDiscord, FaFacebook, FaTwitch } from "react-icons/fa";


const Footer = () => {


    return (
        <footer className="my-10 mx-24 border-solid border-pink-300 border-2 p-2 pinkframe">
            <div className="border-solid border-blue-300 border-2 p-10 blueframe sm:grid grid-cols-4">
                <div className="col-span-2">
                    <p className="text-lg font-semibold">FOLLOW US</p>
                    <div className="flex gap-2">
                        <FaInstagram/>
                        <FaDiscord/>
                        <FaTwitch/>
                    </div>
                </div>
                <div>
                    <p className="text-lg font-semibold">PIXEL GAMES STUDIOS</p>
                    <ul>
                        <li>Boundless Gamers</li>
                        <li>community</li>
                        <li>news</li>
                    </ul>
                </div>
                <div>
                    <p className="text-lg font-semibold">LEGAL</p>
                    <ul>
                        <li>Terms of Service</li>
                        <li>Privacy Policy</li>
                        <li>Contact Us</li>
                    </ul>
                </div>
                <div className="col-span-4 text-center">
                    Pixel Games Studios @2025
                </div>
            </div>
        </footer>
    );
};

export default Footer;
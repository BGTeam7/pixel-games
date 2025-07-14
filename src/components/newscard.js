import {useState} from "react";
import logo from "../assets/logo512.png"

function NewsCard() {
    return (
        <div className="bluefill newscard p-4 flex flex-col gap-2">
            <img loading="lazy" src={logo} className="aspect-video object-cover justify-center bluefill border-blue-300 border-2"/>
            <p className="text-sm opacity-80 date">17 May 2025</p>
            <h1 className="text-xl font-bold title">Pixel Studios Pizza Party Right Now</h1>
            <div className="readmore text-right">Read More</div>


            <p className="summary text-sm">Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. </p>
        </div>
    )
}

export default NewsCard;
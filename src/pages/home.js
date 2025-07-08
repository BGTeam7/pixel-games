import React from "react";
import { Link } from "react-router-dom";
// import { Nav, NavLink, NavMenu } from "./NavbarElements";

const Home = () => {
    return (
        <>
        <div className="relative hero">
            <div className="absolute">insert hero image</div>
            <div className="absolute right-0">insert gradient here</div>
            <h1 className="absolute mx-auto md:right-10 bottom-1/4 text-right font-bold z-10 text-xl md:text-3xl">
                Welcome to<br/>Pixel Games<br/>Studios!
            </h1>

        </div>
        <section>
            <div className="sm:flex gap-5">
                <div className="hidden sm:block sm:flex-auto bg-white">image thing</div>
                <h1 className="text-center text-2xl md:text-3xl sm:ml-0">IT'S A CONSPIRACY!</h1>
                <div className="flex-auto bg-white">image thing</div>
            </div>
            <h2 className="text-center my-8">Meet Mingo, a bird on a mission.</h2>
            <div className="bluefill mx-10 sm:mx-48">
                <Link to="/conspiracy">
                    <div className="corner-frame md:p-48" >insert image here</div>
                </Link>
                
            </div>
            <h2 className="text-center my-8">Find out if it's all a conspiracy... or is it?</h2>
        </section>
        <section>
            <div className="sm:flex gap-5">
                <div className="hidden sm:block sm:flex-auto bg-white">image thing</div>
                <h1 className="text-center text-2xl md:text-3xl sm:ml-0">WHAT'S NEW?</h1>
                <div className="flex-auto bg-white">image thing</div>
            </div>
        </section>
        </>
    );
};

export default Home;
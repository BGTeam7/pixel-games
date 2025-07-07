import React from "react";
// import { Nav, NavLink, NavMenu } from "./NavbarElements";

const Home = () => {
    return (
        <>
        <div className="relative hero">
            <div className="absolute">insert hero image</div>
            <div className="absolute right-0">insert gradient here</div>
            <h1 className="absolute mx-auto md:right-10 bottom-1/4 text-right font-bold z-10">
                Welcome to<br/>Pixel Games<br/>Studios!
            </h1>

        </div>
        <section>
            <div className="flex gap-5">
                <div className="flex-auto bg-white">image thing</div>
                <h1 className="text-4xl">IT'S A CONSPIRACY</h1>
                <div className="flex-auto bg-white">image thing</div>
            </div>
            <h2 className="text-center my-8">Meet Mingo, a bird on a mission.</h2>
            <div className="bluefill mx-24 md:mx-48">
                <div className="corner-frame p-48">insert image here</div>
            </div>
            <h2 className="text-center my-8">Find out if it's all a conspiracy... or is it?</h2>
        </section>
        <section>
            <div className="flex gap-5">
                <div className="flex-auto bg-white">image thing</div>
                <h1 className="text-4xl">WHAT'S NEW?</h1>
                <div className="flex-auto bg-white">image thing</div>
            </div>
        </section>
        </>
    );
};

export default Home;
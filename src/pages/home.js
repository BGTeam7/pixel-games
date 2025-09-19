import React from "react";
import { Link } from "react-router-dom";
import circuit from "../assets/circuit.svg"
import logo from "../assets/logo_main_light.svg"
import conspiracy from "../assets/conspiracy_placeholder.png"
import divider from "../assets/hero_divider.svg"

const Home = () => {
    return (
        <>
        <div className="hero md:grid grid-cols-2 gap-20 p-24">
            <img src={logo} className="w-full self-center"/>
            <h1 className="text-white self-center">
                creating games for good
            </h1>
        </div>
        <div>
            <img src={divider} className="w-full"/>
        </div>
        <section>
            <div className="sm:flex justify-center gap-5">
                <div className="hidden sm:block bg-pink-300 my-5 w-32">
                </div>
                <h1 className="text-center text-2xl md:text-6xl sm:ml-0 w-max">IT'S A CONSPIRACY!</h1>
                <div className="hidden sm:block bg-pink-300 my-5 w-32">
                </div>
            </div>
            <div className="mx-10 sm:mx-48">
                <Link to="/">
                    <img src={conspiracy}/>
                </Link>
                
            </div>
            <h2 className="text-center my-8">What's happening to all the animals?</h2>
        </section>
        {/* <section>
            <div className="sm:flex justify-center gap-5">
                <div className="hidden sm:block bg-pink-300 my-5 w-32">
                </div>
                <h1 className="text-center text-2xl md:text-6xl sm:ml-0 w-max">WHAT'S NEW</h1>
                <div className="hidden sm:block bg-pink-300 my-5 w-32">
                </div>
            </div>
        </section> */}
        </>
    );
};

export default Home;
import React from "react";
import TeamCard from "../components/teamcard";

const About = () => {
    return (
        <>
        <div className="relative hero">
            <div className="absolute">insert hero image</div>
            <div className="absolute right-0">insert gradient here</div>
            <h1 className="absolute mx-auto md:right-10 bottom-1/4 text-right font-bold z-10 text-xl md:text-3xl">
                Some quote or mission<br/>Statement Here
            </h1>

        </div>
        <section>
            <div className="sm:ml-10 mb-4 sm:flex gap-5">
                <h1 className="text-2xl md:text-3xl text-center sm:text-left">WHO ARE WE?</h1>
                <div className="flex-auto bg-white">image thing</div>
            </div>
            <div className="mx-4 md:mx-24 items-center flex flex-col md:flex-row gap-8">
                <img src="/logo512.png" className="w-36 h-full justify-center"/>
                <p>Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.</p>
            </div>
        </section>
        <section>
            <div className="sm:flex gap-5">
                <div className="hidden sm:block sm:flex-auto bg-white">image thing</div>
                <h1 className="text-center text-2xl md:text-3xl sm:ml-0">OUR VALUES</h1>
                <div className="flex-auto bg-white">image thing</div>
            </div>
            <div className="hidden md:grid my-10 mx-24 grid-cols-3 gap-4 border-x-2 border-pink-300 p-6">
                <div className="bluefill border-solid rounded-sm border-blue-300 border-2 h-32">value</div>
                <div className="bluefill border-solid rounded-sm border-blue-300 border-2 h-32">value</div>
                <div className="bluefill border-solid rounded-sm border-blue-300 border-2 h-32">value</div>
            </div>
            <div className="m-8 md:hidden border-x-2 border-pink-300 p-4">
                <div className="bluefill border-solid rounded-sm border-blue-300 border-2 h-32">test</div>
            </div>
        </section>
        <section>
            <div className="sm:flex gap-5">
                <div className="hidden sm:block sm:flex-auto bg-white">image thing</div>
                <h1 className=" text-center text-2xl md:text-3xl sm:ml-0">OUR TEAM</h1>
                <div className="flex-auto bg-white">image thing</div>
            </div>
            <div className="my-12 flex flex-wrap justify-center gap-3 md:gap-6 mx-4 md:mx-24">
                <TeamCard/>
                <TeamCard/><TeamCard/><TeamCard/>
                <TeamCard/><TeamCard/>
            </div>
        </section>
        </>
    );
};

export default About;
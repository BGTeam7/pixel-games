import React from "react";
import TeamCard from "../components/teamcard";

const About = () => {
    return (
        <>
        <section>
            <div className="ml-10 my-12 md:flex gap-5">
            <h1 className="text-3xl">WHO ARE WE?</h1>
            <div className="flex-auto bg-white">image thing</div>
        </div>
            <div className="mx-24 md:flex gap-8">
                <div>image here</div>
                <p>Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.</p>
            </div>
        </section>
        <section>
            <div className="md:flex gap-5">
                <div className="hidden md:block md:flex-auto bg-white">image thing</div>
                <h1 className="text-3xl ml-10 md:ml-0">OUR VALUES</h1>
                <div className="flex-auto bg-white">image thing</div>
            </div>
            <div className="hidden md:grid my-10 mx-24 grid-cols-3 gap-4 border-x-2 border-pink-300 p-6">
                <div className="bluefill border-solid rounded-sm border-blue-300 border-2 h-32">value</div>
                <div className="bluefill border-solid rounded-sm border-blue-300 border-2 h-32">value</div>
                <div className="bluefill border-solid rounded-sm border-blue-300 border-2 h-32">value</div>
            </div>
        </section>
        <section>
            <div className="md:flex gap-5">
                <div className="hidden md:block md:flex-auto bg-white">image thing</div>
                <h1 className="text-3xl ml-10 md:ml-0">OUR TEAM</h1>
                <div className="flex-auto bg-white">image thing</div>
            </div>
            <div className="my-12 flex flex-wrap justify-center gap-6 mx-24">
                <TeamCard/>
                <TeamCard/><TeamCard/><TeamCard/>
                <TeamCard/><TeamCard/>
            </div>
        </section>
        </>
    );
};

export default About;
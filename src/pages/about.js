import React from "react";
// import { Nav, NavLink, NavMenu } from "./NavbarElements";

const About = () => {
    return (
        <>
        <section>
            <div className="ml-10 my-12 flex gap-5">
                <h1 className="text-4xl">WHO ARE WE?</h1>
                <div className="flex-auto bg-white">image thing</div>
            </div>
            <div className="mx-24 flex gap-8">
                <div>image here</div>
                <p>Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.</p>
            </div>
        </section>
        <section>
            <div className="ml-10 flex gap-5">
                <div className="flex-auto bg-white">image thing</div>
                <h1 className="text-4xl">OUR VALUES</h1>
                <div className="flex-auto bg-white">image thing</div>
            </div>
        </section>
        </>
    );
};

export default About;
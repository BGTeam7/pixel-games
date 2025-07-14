import React from "react";
import NewsCard from "../components/newscard";
import logo from "../assets/logo512.png"

const News = () => {
    return (
        <>
        <section>
            <div className="sm:ml-10 mb-4 sm:flex gap-5">
                <h1 className="text-2xl md:text-3xl text-center sm:text-left">LATEST NEWS</h1>
                <div className="flex-auto bg-white">image thing</div>
            </div>
            <div className="flex flex-col sm:grid grid-flow-row-dense md:grid-cols-2 lg:grid-cols-3 m-4 md:m-24 gap-4">
                <div className="newscard col-span-2 md:row-span-2 flex flex-col gap-4">
                    <img src={logo} className="aspect-video object-cover border-blue-300 bluefill rounded-md border-2"/>
                    <p className="text-sm opacity-80">17 May 2025</p>
                    <h1 className="text-4xl font-bold">Pixel Studios Pizza Part Right Now</h1>
                    <div className="readmore text-right big">Read More</div>
                    <p className="summary text-sm">Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. </p>
                </div>
                <NewsCard/>
                <NewsCard/><NewsCard/><NewsCard/><NewsCard/>
                <NewsCard/><NewsCard/><NewsCard/>
            </div>
        </section>
        </>
    );
};

export default News;
import React from "react";
import NewsCard from "../components/newscard";

const News = () => {
    return (
        <>
        <div className="ml-10 my-12 md:flex gap-5">
            <h1 className="text-3xl">LATEST NEWS</h1>
            <div className="flex-auto bg-white">image thing</div>
        </div>
        <div className="sm:grid sm:grid-cols-6 md:grid-cols-12 m-24 gap-4">
            <div className="sm:col-span-6 md:col-span-8 border-solid border-2">
                the big one here
            </div>
            <div className="sm:col-span-3 md:col-span-4">
                <div className="border-solid border-2 mb-4">small one</div>
                <div className="border-solid border-2 ">small one</div>
            </div>
            <NewsCard/>
            <div className="sm:col-span-3 md:col-span-4 border-solid border-2">trest</div>
            <div className=" sm:col-span-3 md:col-span-4 border-solid border-2">trest</div>
            <div className="sm:col-span-3 md:col-span-4 border-solid border-2">trest</div>
        </div>
        </>
    );
};

export default News;
import {useState} from "react";

function NewsCard() {
    return (
        <div className="newscard sm:col-span-3 md:col-span-4">
            <div>image here</div>
            <div className="date">17 May 2025</div>
            <div className="title">Title</div>
            <div>Read More</div>
        </div>
    )
}

export default NewsCard;
import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
// import { BsList, BsXLg } from "react-icons/bs";

const Gamebar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="p-5 flex justify-between items-center px-24 sticky top-0 z-10 bg-black">
            {/* <Link to='/'>Logo</Link> */}
            conspiracy logo here
            <Link>Get the game</Link>
        </div>
    );
};

export default Gamebar;
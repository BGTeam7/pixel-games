import {useState, useRef} from "react";
import logo from "../assets/logo512.png"
import { MdEmail } from "react-icons/md";


function TeamCard(props) {

    //Using useToggle Hook

    const useToggle = (initialState) => {
    const [toggleValue, setToggleValue] = useState(initialState);
    const toggler = () => { setToggleValue(!toggleValue) };
    return [toggleValue, toggler]
    };
    const [toggle, setToggle] = useToggle();

    return (
        <div>
            <div className="teamcard" onClick={setToggle}>
                <div className="w-52 sm:w-64 aspect-square p-1">
                    <div className="w-full">
                        <img loading="lazy" src={logo}/>
                    </div>
                    
                    <h1 className="text-center text-sm md:text-lg">{props.name}</h1>
                    <div className="info p-2">
                        <p className="text-center text-xs md:text-base uppercase font-semibold">{props.role}</p>
                        <p className="details p-2">{props.fact}</p>
                        <p className="details p-2 over">linkedin</p>
                        <a href={"mailto:" + props.email}><MdEmail className="details"/></a>
                        <p className="details p-2">portfolio</p>
                    </div>
                </div>
            </div>
        </div>
        
    )
}

export default TeamCard;
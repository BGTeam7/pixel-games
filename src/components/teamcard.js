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

    var color;

    console.log(props.r)

    switch(props.r) {
        case "board":
            console.log('aljshf')
            color = "bg-purple-300";
            break;
        case "dev":
            color = "bg-blue-300";
            break;
        case "artist":
            color = "bg-red-300";
            break;
        case "sound":
            color = "bg-yellow-200";
            break;
        case "writer":
            color = "bg-green-300";
            break;
    }

    return (
        <div>
            <div className="teamcard bg-white rounded-2xl" onClick={setToggle}>
                <div className="w-52 sm:w-64 aspect-square p-1 space-y-1">
                    <div>
                        <img loading="lazy" className="w-full" src={logo}/>
                    </div>
                    <div className={"info p-2 " + color}>
                        <h1 className="text-center text-sm md:text-lg ">{props.name}</h1>
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
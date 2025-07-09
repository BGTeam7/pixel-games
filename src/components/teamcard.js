import {useState, useRef} from "react";


function TeamCard() {

    //Using useToggle Hook

    const useToggle = (initialState) => {
    const [toggleValue, setToggleValue] = useState(initialState);
    const toggler = () => { setToggleValue(!toggleValue) };
    return [toggleValue, toggler]
    };
    const [toggle, setToggle] = useToggle();

    return (
        <div>
            <div className="bluefill" onClick={setToggle}>
                <div className="w-24 sm:w-52 aspect-square corner-frame border-blue-300 p-1">
                    <img loading="lazy" src="/logo512.png"/>
                    <p className="text-center text-sm md:text-lg">Jazz Meister</p>
                    <p className="text-center text-xs md:text-base">Spec Ops</p>
                </div>
            </div>
            {toggle &&(
                <div>
                    <div id="overlay" onClick={setToggle}></div>
                    <div className="expanded-card bluefill flex flex-col md:flex-row-reverse gap-2 p-2">
                        <img src="/logo512.png" className=" w-full md:w-1/3 h-auto object-cover pinkframe border-pink-300 border-2"/>
                        <div className=" md:w-2/3 md:w-4/9 border-s-white border-2 p-4">
                            <div className="flex items-baseline gap-1">
                                <h1 className="text-sm md:text-2xl font-bold">Jazz</h1>
                                <span className="text-xs md:text-sm"> (he/him)</span>
                            </div>
                            <hr className="border-pink-300 border-1 my-2"/>
                            <ul className="text-xs md:text-sm xl:text-base">
                                <li><span className="font-bold">Role: </span>TIC</li>
                                <li><span className="font-bold">Objective: </span>Survive the war</li>
                                <li><span className="font-bold">Skills: </span>Espionage</li>
                                <li><span className="font-bold">Social Media: </span>Telegram</li>
                            </ul>
                            <label for="heart">❤️ </label>
                            <progress id="heart" value="32" max="100"> 32% </progress>
                        </div>
                        
                    </div>
                </div>
            )}
        </div>
        
    )
}

export default TeamCard;
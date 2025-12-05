import React from "react";
import { useRef, useState } from "react";
import { FaPlay, FaPause } from "react-icons/fa6";

export default function MuteButton() {
    const audioRef = useRef(null)

    //Using useToggle Hook

    const useToggle = (initialState) => {
    const [toggleValue, setToggleValue] = useState(initialState);
    const toggler = () => { setToggleValue(!toggleValue) };
    if (audioRef.current) {
        console.log(audioRef.current)
        if (toggleValue) {
            audioRef.current.play()
            audioRef.current.volume = 0.5
        } else {
            audioRef.current.pause()
        }
        // audioRef.current.volume
    }
    
    return [toggleValue, toggler]
    };
    const [toggle, setToggle] = useToggle();

    
    return(
        <div>
            <button className="fixed bottom-10 right-10 button p-2 z-10 text-white text-center uppercase" onClick={setToggle}>
                {toggle? <FaPause size={32}/>: <FaPlay size={32}/>}
            </button>
            {/* {toggle && (
                <audio id="audio" loop autoPlay> 
                    <source src="website.mp3" type="audio/mpeg"/>
                </audio>
            )} */}
            <audio id="audio" ref={audioRef} loop> 
                <source src="website.mp3" type="audio/mpeg"/>
            </audio>
        </div>
        
    )
}
import React, {useState} from "react";
import TeamCard from "../components/teamcard";
import logo from "../assets/logo_main.svg";
import TeamMembers from "../data/teammembers";
import divider from "../assets/hero_divider.svg"

const About = () => {

    const [
        activeRole,
        setActiveRole,
    ] = useState("board");

    const handleRadioChange = (value) => {
        setActiveRole(value);
        console.log(value);
    };

    const role = TeamMembers.filter(member => 
        member.team === activeRole
    );

    return (
        <>
        {/* <div className="relative hero">
            <div className="absolute">insert hero image</div>
            <div className="absolute right-0">insert gradient here</div>
            <h1 className="absolute mx-auto md:right-10 bottom-1/4 text-right font-bold z-10 text-xl md:text-3xl">
                Some quote or mission<br/>Statement Here
            </h1>

        </div> */}
        <div>
            <img src={divider} className="w-full"/>
        </div>
        <section>
            <div className="sm:ml-10 mb-4 sm:flex gap-5">
                <h1 className="text-2xl md:text-4xl text-center sm:text-left">WHO ARE WE?</h1>
                <div className="flex-auto my-3 bg-pink-300"></div>
            </div>
            <div className="mx-4 md:mx-24 items-center flex flex-col md:flex-row gap-8">
                <img src={logo} className="w-36 h-full justify-center"/>
                <p className="text-lg">Pixel Games Studios is our game development branch at Boundless Gamers.
                    As a nonprofit initiative, the game will financially support Extra Life, Gamers Outreach, and Stack Up.
The team is comprised of a unique blend of talent, including students, seasoned professionals, and veteran developers from the gaming industry.
                </p>
            </div>
        </section>
        {/* <section>
            <div className="sm:flex gap-5">
                <div className="hidden sm:block sm:flex-auto bg-white">image thing</div>
                <h1 className="text-center text-2xl md:text-3xl sm:ml-0">OUR VALUES</h1>
                <div className="flex-auto bg-white">image thing</div>
            </div>
            <div className="hidden md:grid my-10 mx-24 grid-cols-3 gap-4 border-x-2 border-pink-300 p-6">
                <div className="bluefill border-solid rounded-sm border-blue-300 border-2 h-32">value</div>
                <div className="bluefill border-solid rounded-sm border-blue-300 border-2 h-32">value</div>
                <div className="bluefill border-solid rounded-sm border-blue-300 border-2 h-32">value</div>
            </div>
            <div className="m-8 md:hidden border-x-2 border-pink-300 p-4">
                <div className="bluefill border-solid rounded-sm border-blue-300 border-2 h-32">test</div>
            </div>
        </section> */}
        <section>
            <div className="flex justify-center gap-5 m-8">
                <div className="block bg-pink-300 my-3 md:my-5 w-32">
                </div>
                <h1 className="text-center text-2xl md:text-5xl sm:ml-0 w-max">OUR TEAM</h1>
                <div className="block bg-pink-300 my-3 md:my-5 w-32">
                </div>
            </div>
            <div className="md:grid grid-cols-3 md:grid-cols-5 mx-4 md:mx-24 md:bg-[#14077D] rounded-r-2xl border-l-4 border-solid border-[#14077d] text-sm md:text-xl">
                <div className="radioButton bg-purple-300">
                    <input
                        type="radio"
                        id="board"
                        value="board"
                        checked={activeRole === "board"}
                        onChange={()=>handleRadioChange("board")}
                    />
                    <label htmlFor="board">executive board</label>
                </div>
                <div className="radioButton bg-blue-300">
                    <input
                        type="radio"
                        id="dev"
                        value="dev"
                        checked={activeRole === "dev"}
                        onChange={()=>handleRadioChange("dev")}
                    />
                    <label htmlFor="dev">Development</label>
                </div>
                <div className="radioButton bg-red-300">
                    <input
                        type="radio"
                        id="artist"
                        value="artist"
                        checked={activeRole === "artist"}
                        onChange={()=>handleRadioChange("artist")}
                    />
                    <label htmlFor="artist">Artist</label>
                </div>
                <div className="radioButton bg-yellow-200">
                    <input
                        type="radio"
                        id="sound"
                        value="sound"
                        checked={activeRole === "sound"}
                        onChange={()=>handleRadioChange("sound")}
                    />
                    <label htmlFor="sound">Sound</label>
                </div>
                <div className="radioButton bg-green-300">
                    <input
                        type="radio"
                        id="writer"
                        value="writer"
                        checked={activeRole === "writer"}
                        onChange={()=>handleRadioChange("writer")}
                    />
                    <label htmlFor="writer">Writer</label>
                </div>
            </div>
            <div className="mb-12 flex flex-wrap justify-center gap-3 md:gap-6 mx-4 md:mx-24 bundle border-blue-800 border-solid border-4 border-t-0 p-10">
                {role.map((e) => {
                    return (
                        <TeamCard name={e.name} pronouns={e.pronouns} role={e.role} skills={e.skills} email={e.email} img={e.img} fact={e.fact}/>
                    );
                })}
            </div>
            <p className="text-center">More Coming Soon!</p>
        </section>
        </>
    );
};

export default About;
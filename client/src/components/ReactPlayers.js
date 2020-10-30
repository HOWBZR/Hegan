import React from "react"
import ReactPlayer from "react-player"



const ReactPlayers = (props) => {

    return (
        <div data-aos="fade-up-right" className="player-wrapper flex flex-wrap justify-center mx-auto mt-10 h-64 md:w-1/2 w-full border-rounded">
            <ReactPlayer
                className="react-player "
                url="https://www.youtube.com/watch?v=Rq5SEhs9lws" 
                controls={true}
                height="100%"
                width="100%"
                
            />
           
                <button  onClick={props.onClick} className="bg-blue-600 px-2 rounded mt-2 shadow-lg text-white  transform hover:-translate-y-1 hover:scale-110 transition duration-500 ease-in-out">Back To Training</button>
                
        </div>
    )
}

export default ReactPlayers;
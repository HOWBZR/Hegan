import React, {Fragment, useState} from "react"
import Card from "../../components/Card"
import exp from "../../assets/expdefault.jpg"
import ReactPlayer from "react-player"
import ReactPlayers from "../../components/ReactPlayers"

const Landing = () => {

    const [video, setVideo] = useState(false)


    return (

        
        <div className="">
           
            {video ? (<ReactPlayers
            onClick={()=>{setVideo(!video)}}
            />) : (  
            <div className="flex flex-wrap w-full">
                <Card
                    photo={exp}
                    fade="fade-right"
                     onClick={()=> setVideo(!video)}
                />
                 <Card
                    photo={exp}
                    fade="flip-left"
                />
                <Card
                    photo={exp}
                    fade="flip-left"

                />
                <Card
                    photo={exp}
                    fade="flip-left"
                />
                <Card
                    photo={exp}
                    fade="flip-left"
                   
                    />
            </div>
   )} 
        </div>
    )
}

export default Landing;
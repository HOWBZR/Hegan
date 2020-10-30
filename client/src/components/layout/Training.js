import React from "react"
import Card from "../../components/Card"
import exp from "../../assets/expdefault.jpg"

const Landing = () => {

    


    return (

        
        <div className="container">
            <div className="flex flex-wrap w-full">
                <Card
                    photo={exp}
                    fade="fade-right"
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
        </div>
    )
}

export default Landing;
import React, {useState} from "react"


function Card (props) {
    
   

    return (
        <div data-aos={props.fade} className=" md:w-1/3  p-10 sticky top-0">
            <div data-aos="fade-right">
                <img className="md:h-48 h-32 w-full object-cover  rounded shadow-lg" src={props.photo}/>
            </div>
                  <div data-aos="fade-up-right" className="px-4 -mt-4">
            <div className="text-gray-700  text-center bg-gray-400 p-2 shadow-lg rounded shadow-lg">
                          <h4 className="font-semibold">{props.appname}</h4>
                    <p>{props.text}</p>
                <button onClick={props.onClick}  className="bg-blue-600 px-2 rounded mt-2 shadow-lg text-white  transform hover:-translate-y-1 hover:scale-110 transition duration-500 ease-in-out"><a href={props.link} target="_blank">Check it out</a></button>
                </div>
                  </div>            
              </div>
    )
}

export default Card;










import React, { useState, Fragment, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.svg"
import menu from "../../assets/menu.png"
import close from "../../assets/close.png"

import AOS from "aos";
import 'aos/dist/aos.css';

const Navbar = () => {

  const [open, setOpen] = useState(false);
  const [tray1, setTray1] = useState(false);


  
  useEffect(() => {
  AOS.init({
    duration : 2000
  });
  }, []);



  return (

    
    <div className="sticky top-0 w-full shadow-lg bg-gray-800 ">
      <nav>
        <div className="flex items-center justify-between px-6 py-2">
          <div> <a href="/">
            <img className="h-16" alt="Organic Designs" src={logo} />
           </a>
          </div>
          <div >
            <button
              type="button"
              className="h-6 rounded focus:text-white"
              onClick={() => setOpen(!open)}
            >
              {!open ? (<img className="h-6 w-6 fill-current" src={menu} />) : (<img className="h-6 w-6 fill-current" src={close} />)}
            </button>
          </div>
        </div>
      {open ? (
          
          <div data-aos="fade-left"  className="w-48 my-2 mr-2 z-40 absolute right-0 rounded bg-gray-300 border-solid px-2 py-4 shadow-xl transition">
            <div
              type="button"
              className="block cursor-pointer  px-2 py-1 text-black font-semibold rounded hover:bg-gray-400 pointer-events-auto"
              onClick={()=> setTray1(!tray1)}
              >
              Agent Attraction
            </div>
            {tray1 ? (
              <div>
              <a href="webinars" className="hover:bg-indigo-400 rounded block px-2 cursor-pointer">Webinars</a>
              <a href="training" className="hover:bg-indigo-400 rounded block px-2 cursor-pointer">Training</a>
              <a href="resources" className="hover:bg-indigo-400 rounded block px-2 cursor-pointer">Resources</a>
              </div>
            ):(<Fragment/>)}
            <a
              href=""
              className="block mt-1 px-2 py-1 text-black font-semibold rounded hover:bg-gray-400"
              >
              About
            </a>
            <a
              href="contact"
              className="block mt-1 px-2 py-1 text-black font-semibold rounded hover:bg-gray-400"
              >
              Contact
            </a>
          </div>
      
      ) : (
          <Fragment />
          )}
          </nav>
    </div>


    
  );
};

export default Navbar;

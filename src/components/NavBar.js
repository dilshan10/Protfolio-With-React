import "./NavBarStyle.css";

import React, {useState} from "react";
import {Link} from "react-router-dom";

import {FaBars,FaTimes} from "react-icons/fa"

const NavBar = () =>{

    const [click,setClick] = useState(false);
    const handleClick = () => setClick(!click);
    
    const [color,setColor] = useState(false);
    const changeColor = () => {
      if (window.scrollY>=100){
          setColor(true);
      }else{
          setColor(false);
      }
    };

    window.addEventListener("scroll",changeColor);

    return(
        <div className={color ? "header header-bg" : "header"} >
            <Link to="/">
                <h1>Portfolio</h1>
            </Link>
            <ul className={click ? "nav-list active":"nav-list"}>
                <li>
                    <Link to ="/">Home</Link>
                </li>
                <li>
                    <Link to ="/about">About</Link>
                </li>
                <li>
                    <Link to ="/skils">Skils</Link>
                </li>
                <li>
                    <Link to="/contact">Contact</Link>
                </li>
            </ul>

            <div className="hamburgerMenu" onClick={handleClick}>
                {click ? (
                    <FaTimes size={20} style={{color:"white"}}/>
                ):(
                    <FaBars size={20} style={{color:"white"}}/>
                )}
            </div>
        </div>
    )
}

export default NavBar
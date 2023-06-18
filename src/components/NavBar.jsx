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
                    <Link to ="/">HOME</Link>
                </li>
                <li>
                    <Link to ="/about">ABOUT</Link>
                </li>
                <li>
                    <Link to ="/skils">SKILS</Link>
                </li>
                <li>
                    <Link to ="/Project">PROJECT</Link>
                </li>
                <li>
                    <Link to="/contact">CONTACT</Link>
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
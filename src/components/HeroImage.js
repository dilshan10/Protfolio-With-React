import "./HeroImageStyle.css";

import React from "react";

import IntroImg from "../asserts/5184015.jpg"
import {Link} from "react-router-dom";

const HeroImage = () =>{
    return(
        <div className="hero">
            <div className="mask">
                <img className="into-img" src={IntroImg} alt="Intro Img"/>
            </div>
            <div className="content">
                <p>Hi,I'M CHATHURANGA DILSHAN</p>
                <h1>FRONT-END DEVELOPER</h1>
                <div>
                    <Link to="/project" className ="btn">PROJECTS</Link>
                    <Link to="/Contact" className="btn-light">CONTACT</Link>
                </div>
            </div>
        </div>
    )
};

export default HeroImage
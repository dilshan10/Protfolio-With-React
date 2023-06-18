import "./AboutContentStyle.css";

import React from "react";
import {Link} from "react-router-dom";

import image from "../asserts/modern-futuristic-sci-fi-background.jpg"

const AboutContent = () => {
    return(
        <div className="about">
            <div className="left">
                <h1>Who I'm I ?</h1>
                <p>I'm chathuranga Dilshan</p>
                <Link to="/contact" className="btn">Contact</Link>
                <Link to="" className="btn-light">Download CV</Link>
            </div>
            <div className="right">
                <div className="img-container">
                    <div className="img-stack top">
                        <img src={image} className="img"/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AboutContent;
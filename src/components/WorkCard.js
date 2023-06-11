import "./WorkCardStyle.css";

import React from "react";
import {NavLink} from "react-router-dom";

const WorkCard = (props) =>{
    return(
        <div className="work-container">
            <div className="project-card">
                <img src={props.imgsrc} alt="image"/>
                <h2 className="project-title">{props.title}</h2>
                <div className="project-details">
                    <p>{props.text}</p>
                    <div className="pro-btn">
                        <NavLink to={props.view} className="btn">View</NavLink>
                        <NavLink to="url.com" className="btn-light">Source</NavLink>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default WorkCard
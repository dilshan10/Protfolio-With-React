import "./ToolsCardStyle.css";

import React from "react";

export const ToolCard = (props) =>{
    return(
        <div className="tool-container">
            <div className="icon-card">
                <img src={props.icon} alt="icon"/>
                <h2 className="icon-title">{props.title}</h2>
                <div className="icon-details">
                    <p>{props.text}</p>
                </div>
            </div>
        </div>
    )
}
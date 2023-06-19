import "./LangCardStyle.css";

import React from "react";

const LangCard = (props) =>{
    return(
        <div className="lang-container">
            <div className="icon-card">
                <img src={props.icon} alt="icon"/>
                <h2 className="icon-title">{props.title}</h2>
                <div className="icon-details">
                    <p>{props.text}</p>
                </div>
            </div>
        </div>
    )
};

export default LangCard;
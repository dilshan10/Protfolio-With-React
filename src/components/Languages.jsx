import "./LangCardStyle.css";
import LangData from "./LangData";

import React from "react";
import LangCard from "./LangCard";

const Languages = () => {
    return(
        <div className="lang-container">
            <h1 className="Lang-heading">Languages</h1>
            <div className="icon-container">
                {LangData.map((val,ind)=>{
                    return(
                        <LangCard
                            key={ind}
                            icon={val.icon}
                            title={val.title}
                            text={val.text}
                        />
                    )
                })}
            </div>
        </div>
    )
}

export default Languages;
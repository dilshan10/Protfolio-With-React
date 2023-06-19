import "./ToolsCardStyle.css";

import React from "react";
import {ToolCard} from "./ToolCard";
import {ToolData} from "./ToolData";

const Tools = () => {
    return(
        <div className="tool-container">
            <h1 className="tool-heading">Tools</h1>
            <div className="icon-container">
                {ToolData.map((val,ind)=>{
                    return(
                        <ToolCard
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

export default Tools;
import "./FormStyle.css";

import React from "react";

const Form = () =>{
    return(
        <div className="from">
            <form>
                <label>your Name :</label>
                <input type="text"/>
                <label>your Email :</label>
                <input type="email"/>
                <label>Subject :</label>
                <input type="text"/>
                <label>Message :</label>
                <textarea rows="6" placeholder="type your massege here.!"/>
                <button className="btn" type="button">Submit</button>
            </form>
        </div>
    )
}

export default Form;
import "./FooterStyle.css";

import React from "react";

import {FaHome, FaMailBulk, FaPhone,FaFacebook,FaWhatsapp,FaTelegram} from "react-icons/fa";

const Footer = () => {
    return(
        <div className="footer">
            <div className="footer-container">
                <div className="left">
                    <div className="location">
                        <FaHome size={20} style={{color: "white",marginRight:"2ram"}}/>
                        <div>
                            <p>103/2,</p>
                            <p>Pinhena Colony</p>
                            <p>Padagoda</p>
                            <p>Beruwala</p>
                            <p>12070</p>
                        </div>
                    </div>
                    <div className="phone">
                        <FaPhone size={20} style={{color: "white",marginRight:"2ram"}}/>
                        <div>
                            <p>+94 075 4313114</p>
                            <p>+94 070 4461292</p>
                        </div>
                    </div>

                    <div className="mail">
                        <FaWhatsapp size={20} style={{color : "white",marginRight:"2ram"}}/>
                        <div>
                            <p>+94 0754313114</p>
                        </div>
                    </div>

                    <div className="mail">
                        <FaTelegram size={20} style={{color : "white",marginRight:"2ram"}}/>
                        <div>
                            <p>+94 0754313114</p>
                        </div>
                    </div>

                    <div className="mail">
                        <FaMailBulk size={20} style={{color : "white",marginRight:"2ram"}}/>
                        <div>
                            <p>superdilshan999@gmail.com</p>
                            <p>chathurangadilshan045@gmail.com</p>
                        </div>
                    </div>
                </div>
                <div className="right">
                    <div className="mail">
                        <FaFacebook size={20} style={{color : "white",marginRight:"2ram"}}/>
                        <div>
                            <p>Chathuraga Dilshan</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer

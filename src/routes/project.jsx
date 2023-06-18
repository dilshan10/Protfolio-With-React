import React from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import HeroImageTwo from "../components/HeroImageTwo";
import PriceingCards from "../components/PriceingCards";
import Work from "../components/Work";

const Project = () =>{
    return(
        <div>
            <NavBar/>
            <HeroImageTwo heading = "PROJECT" text = "Some of my most recent work"/>
            <Work/>
            <PriceingCards/>
            <Footer/>
        </div>
    )
}

export default Project
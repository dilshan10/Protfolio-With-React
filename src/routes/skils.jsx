import React from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import HeroImageTwo from "../components/HeroImageTwo";
import Languages from "../components/Languages";
import Skils from "../components/Skils";
import Tools from "../components/Tools";


const skils = () =>{
    return(
        <diV>
            <NavBar/>
            <HeroImageTwo heading="SKILS AND TOOLS" text="This is skils i have and tools i work."/>
            <Languages/>
            <Tools/>
            <Skils/>
            <Footer/>
        </diV>
    )
}
export default skils
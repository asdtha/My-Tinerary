import { Carousel } from "bootstrap";
import React from "react";
/* import Navbar from "./Navbar"; */
import CarouselTest from "../carousel/Carousel";


function Home(){
    return (
       <>
       <div className="home-messaje">
           <p>Be curious, <br/>be an explorer <br/>and find your next adventure </p></div>
           <CarouselTest /> 
       </>
    )
}

export default Home;
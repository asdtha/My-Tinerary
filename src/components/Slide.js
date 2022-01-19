import React from "react";
import barcelona from "../assets/barcelona.jpg"
import istanbul from "../assets/istanbul.jpg"
import london from "../assets/london.jpg"
import paris from "../assets/paris.jpg"




function Slide () {
 return (
    <div id="carouselExampleIndicators" className="carousel slide custom-slide" data-bs-ride="carousel">
    <div className="carousel-indicators slide-custom-bottom">
      <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
      <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
      <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
    </div>
    <div className="carousel-inner individual-slide">
      <div className="carousel-item active">
        <img src={barcelona} className="d-block w-100 img" alt="..."/>
      </div>
      <div className="carousel-item">
        <img src={istanbul} className="d-block w-100  img" alt="..."/>
      </div>
      <div className="carousel-item">
        <img src={london} className="d-block w-100 img" alt="..."/>
      </div>
    </div>
    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
      <span className="carousel-control-prev-icon control-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Previous</span>
    </button>
    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
      <span className="carousel-control-next-icon control-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Next</span>
    </button>
  </div>
 )
}

export default Slide;
import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import barcelona from "../../assets/barcelona.jpg";
import istanbul from "../../assets/istanbul.jpg";
import london from "../../assets/london.jpg";
import paris from "../../assets/paris.jpg";

const CarouselTest = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <Carousel
      responsive={responsive}
      autoPlaySpeed={1000}
      autoPlay={true}
      transitionDuration={2000}
      infinite={true}
    >
      <div className="div-carousel">
        <img src={barcelona} className="img" alt="..." />
      </div>

      <div className="div-carousel">
        <img src={london} className="img" alt="..." />
      </div>

      <div className="div-carousel">
        <img src={paris} className="img" alt="..." />
      </div>

      <div className="div-carousel">
        <img src={istanbul} className="img" alt="..." />
      </div>
    </Carousel>
  );
};

export default CarouselTest;

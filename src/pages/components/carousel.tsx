import React, { FC } from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import img1 from "/src/assets/img/carousel-1.jpg";
import img2 from "/src/assets/img/carousel-2.jpg";
import img3 from "/src/assets/img/carousel-3.jpg";

const Carousel: FC = (): JSX.Element => {
  return (
    <div className="carousel">
      <div className="container-fluid">
        <OwlCarousel
          items={1}
          margin={8}
          autoplay={true}
          className="owl-carousel"
        >
          <div className="carousel-item">
            <div className="carousel-img">
              <img src={img1} alt="Image" />
            </div>
            <div className="carousel-text">
              <h1>Let's be kind for children</h1>
              <div className="carousel-btn">
                <a className="btn btn-custom" href="">
                  Donate Now
                </a>
                {/* <a
                  className="btn btn-custom btn-play"
                  data-toggle="modal"
                  data-src="https://www.youtube.com/embed/DWRcNpR6Kdc"
                  data-target="#videoModal"
                >
                  Watch Video
                </a> */}
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="carousel-img">
              <img src={img2} alt="Image" />
            </div>
            <div className="carousel-text">
              <h1>Get Involved with helping hand</h1>
              <div className="carousel-btn">
                <a className="btn btn-custom" href="">
                  Donate Now
                </a>
                {/* <a
                  className="btn btn-custom btn-play"
                  data-toggle="modal"
                  data-src="https://www.youtube.com/embed/DWRcNpR6Kdc"
                  data-target="#videoModal"
                >
                  Watch Video
                </a> */}
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="carousel-img">
              <img src={img3} alt="Image" />
            </div>
            <div className="carousel-text">
              <h1>Bringing smiles to millions</h1>
              <div className="carousel-btn">
                <a className="btn btn-custom" href="">
                  Donate Now
                </a>
                {/* <a
                  className="btn btn-custom btn-play"
                  data-toggle="modal"
                  data-src="https://www.youtube.com/embed/DWRcNpR6Kdc"
                  data-target="#videoModal"
                >
                  Watch Video
                </a> */}
              </div>
            </div>
          </div>
        </OwlCarousel>
      </div>
    </div>
  );
};
export default Carousel;

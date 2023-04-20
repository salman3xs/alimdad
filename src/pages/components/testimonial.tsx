import React, { FC } from "react";
import img1 from "../../assets/img/testimonial-1.jpg";
import img2 from "../../assets/img/testimonial-2.jpg";
import img3 from "../../assets/img/testimonial-3.jpg";
import img4 from "../../assets/img/testimonial-4.jpg";
import OwlCarousel from "react-owl-carousel";

const Testimonial: FC = (): JSX.Element => {
  return (
    <div className="testimonial">
      <div className="container">
        <div className="section-header text-center">
          <p>Testimonial</p>
          <h2>What people are talking about our charity activities</h2>
        </div>
        <OwlCarousel
          items={3}
          margin={8}
          autoplay={true}
          className="owl-carousel testimonials-carousel"
        >
          <div className="testimonial-item">
            <div className="testimonial-profile">
              <img src={img1} alt="Image" />
              <div className="testimonial-name">
                <h3>Person Name</h3>
                <p>Profession</p>
              </div>
            </div>
            <div className="testimonial-text">
              <p>
                Lorem ipsum dolor sit amet elit. Phasel preti mi facilis ornare
                velit non vulputa. Aliqu metus tortor, auctor id gravid vivera
                quis
              </p>
            </div>
          </div>
          <div className="testimonial-item">
            <div className="testimonial-profile">
              <img src={img2} alt="Image" />
              <div className="testimonial-name">
                <h3>Person Name</h3>
                <p>Profession</p>
              </div>
            </div>
            <div className="testimonial-text">
              <p>
                Lorem ipsum dolor sit amet elit. Phasel preti mi facilis ornare
                velit non vulputa. Aliqu metus tortor, auctor id gravid vivera
                quis
              </p>
            </div>
          </div>
          <div className="testimonial-item">
            <div className="testimonial-profile">
              <img src={img3} alt="Image" />
              <div className="testimonial-name">
                <h3>Person Name</h3>
                <p>Profession</p>
              </div>
            </div>
            <div className="testimonial-text">
              <p>
                Lorem ipsum dolor sit amet elit. Phasel preti mi facilis ornare
                velit non vulputa. Aliqu metus tortor, auctor id gravid vivera
                quis
              </p>
            </div>
          </div>
          <div className="testimonial-item">
            <div className="testimonial-profile">
              <img src={img4} alt="Image" />
              <div className="testimonial-name">
                <h3>Person Name</h3>
                <p>Profession</p>
              </div>
            </div>
            <div className="testimonial-text">
              <p>
                Lorem ipsum dolor sit amet elit. Phasel preti mi facilis ornare
                velit non vulputa. Aliqu metus tortor, auctor id gravid vivera
                quis
              </p>
            </div>
          </div>
        </OwlCarousel>
      </div>
    </div>
  );
};
export default Testimonial;

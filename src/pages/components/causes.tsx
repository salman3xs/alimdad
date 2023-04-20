import React, { FC } from "react";
import img1 from "../../assets/img/causes-1.jpg";
import img2 from "../../assets/img/causes-2.jpg";
import img3 from "../../assets/img/causes-3.jpg";
import img4 from "../../assets/img/causes-4.jpg";
import OwlCarousel from "react-owl-carousel";

const Causes: FC = (): JSX.Element => {
  return (
    <div className="causes">
      <div className="container">
        <div className="section-header text-center">
          <p>Popular Causes</p>
          <h2>Let's know about charity causes around the world</h2>
        </div>
        <OwlCarousel
          items={3}
          margin={20}
          autoplay={true}
          className="owl-carousel causes-carousel"
        >
          <div className="causes-item">
            <div className="causes-img">
              <img src={img1} alt="Image" />
            </div>
            <div className="causes-progress">
              <div className="progress">
                <div
                  className="progress-bar"
                  role="progressbar"
                  aria-value-now="85"
                  aria-value-min="0"
                  aria-value-max="100"
                >
                  <span>85%</span>
                </div>
              </div>
              <div className="progress-text">
                <p>
                  <strong>Raised:</strong> $100000
                </p>
                <p>
                  <strong>Goal:</strong> $50000
                </p>
              </div>
            </div>
            <div className="causes-text">
              <h3>Helping Children.</h3>
              <p>Make children's life easy by helping them.</p>
            </div>
            <div className="causes-btn">
              <a className="btn btn-custom">Learn More</a>
              <a className="btn btn-custom">Donate Now</a>
            </div>
          </div>
          <div className="causes-item">
            <div className="causes-img">
              <img src={img2} alt="Image" />
            </div>
            <div className="causes-progress">
              <div className="progress">
                <div
                  className="progress-bar"
                  role="progressbar"
                  aria-value-now="85"
                  aria-value-min="0"
                  aria-value-max="100"
                >
                  <span>85%</span>
                </div>
              </div>
              <div className="progress-text">
                <p>
                  <strong>Raised:</strong> $100000
                </p>
                <p>
                  <strong>Goal:</strong> $50000
                </p>
              </div>
            </div>
            <div className="causes-text">
              <h3>Helping Children.</h3>
              <p>Make children's life easy by helping them.</p>
            </div>
            <div className="causes-btn">
              <a className="btn btn-custom">Learn More</a>
              <a className="btn btn-custom">Donate Now</a>
            </div>
          </div>
          <div className="causes-item">
            <div className="causes-img">
              <img src={img3} alt="Image" />
            </div>
            <div className="causes-progress">
              <div className="progress">
                <div
                  className="progress-bar"
                  role="progressbar"
                  aria-value-now="85"
                  aria-value-min="0"
                  aria-value-max="100"
                >
                  <span>85%</span>
                </div>
              </div>
              <div className="progress-text">
                <p>
                  <strong>Raised:</strong> $100000
                </p>
                <p>
                  <strong>Goal:</strong> $50000
                </p>
              </div>
            </div>
            <div className="causes-text">
              <h3>Helping Children.</h3>
              <p>Make children's life easy by helping them.</p>
            </div>
            <div className="causes-btn">
              <a className="btn btn-custom">Learn More</a>
              <a className="btn btn-custom">Donate Now</a>
            </div>
          </div>
          <div className="causes-item">
            <div className="causes-img">
              <img src={img4} alt="Image" />
            </div>
            <div className="causes-progress">
              <div className="progress">
                <div
                  className="progress-bar"
                  role="progressbar"
                  aria-value-now="85"
                  aria-value-min="0"
                  aria-value-max="100"
                >
                  <span>85%</span>
                </div>
              </div>
              <div className="progress-text">
                <p>
                  <strong>Raised:</strong> $100000
                </p>
                <p>
                  <strong>Goal:</strong> $50000
                </p>
              </div>
            </div>
            <div className="causes-text">
              <h3>Helping Children.</h3>
              <p>Make children's life easy by helping them.</p>
            </div>
            <div className="causes-btn">
              <a className="btn btn-custom">Learn More</a>
              <a className="btn btn-custom">Donate Now</a>
            </div>
          </div>
        </OwlCarousel>
      </div>
    </div>
  );
};
export default Causes;

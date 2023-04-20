import React, { FC } from "react";
import img from "../../assets/img/facts.jpg";

const Facts: FC = (): JSX.Element => {
  return (
    <div className="facts" data-parallax="scroll" data-image-src={img}>
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-6">
            <div className="facts-item">
              <i className="flaticon-home"></i>
              <div className="facts-text">
                <h3 className="facts-plus" data-toggle="counter-up">
                  150
                </h3>
                <p>Countries</p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="facts-item">
              <i className="flaticon-charity"></i>
              <div className="facts-text">
                <h3 className="facts-plus" data-toggle="counter-up">
                  400
                </h3>
                <p>Volunteers</p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="facts-item">
              <i className="flaticon-kindness"></i>
              <div className="facts-text">
                <h3 className="facts-dollar" data-toggle="counter-up">
                  10000
                </h3>
                <p>Our Goal</p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="facts-item">
              <i className="flaticon-donation"></i>
              <div className="facts-text">
                <h3 className="facts-dollar" data-toggle="counter-up">
                  5000
                </h3>
                <p>Raised</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Facts;

import React, { FC } from "react";
import img from "../../assets/img/donate.jpg";
import { Parallax } from "react-scroll-parallax";

const Donate: FC = (): JSX.Element => {
  return (
    <div>
      <Parallax translateY={[-10, 30]}>
      <div className="donate">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-7">
              <div className="donate-content">
                <div className="section-header">
                  <p>Donate Now</p>
                  <h2>Let's donate to needy people for better lives</h2>
                </div>
                <div className="donate-text">
                  {/* <p>
                  Lorem ipsum dolor sit amet elit. Phasellus nec pretium mi.
                  Curabitur facilisis ornare velit non. Aliquam metus tortor,
                  auctor id gravida, viverra quis sem. Curabitur non nisl nec
                  nisi maximus. Aenean convallis porttitor. Aliquam interdum at
                  lacus non blandit.
                </p> */}
                </div>
              </div>
            </div>
            <div className="col-lg-5">
              <div className="donate-form">
                <div className="control-group">
                  <div style={{ height: 50 }}></div>
                  {/* <input
                    type="text"
                    className="form-control"
                    placeholder="Name"
                    required={true}
                  /> */}
                </div>
                <div className="control-group">
                  {/* <input
                    type="email"
                    className="form-control"
                    placeholder="Email"
                    required={true}
                  /> */}
                </div>
                <div
                  className="btn-group btn-group-toggle"
                  data-toggle="buttons"
                >
                  <label className="btn btn-custom active">
                    <input type="radio" name="options" checked /> 100 Rs
                  </label>
                  <label className="btn btn-custom">
                    <input type="radio" name="options" /> 200 Rs
                  </label>
                  <label className="btn btn-custom">
                    <input type="radio" name="options" /> 500 Rs
                  </label>
                </div>
                <div>
                  <button className="btn btn-custom" type="submit">
                    Donate Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </Parallax>
    </div>
  );
};
export default Donate;

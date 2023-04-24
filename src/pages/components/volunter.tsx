import React, { FC } from "react";
import img from "../../assets/img/volunteer.jpg";
import { Parallax } from "react-scroll-parallax";

const Volunteer: FC = (): JSX.Element => {
  return (
    <div>
      <Parallax translateY={[-10, 30]}>
        <div className="volunteer">
          <div className="container">
            <div className="row align-items-center">
              {/* <div className="col-lg-5">
            <div className="volunteer-form">
              <form>
                <div className="control-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Name"
                    required={true}
                  />
                </div>
                <div className="control-group">
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Email"
                    required={true}
                  />
                </div>
                <div className="control-group">
                  <textarea
                    className="form-control"
                    placeholder="Why you want to become a volunteer?"
                    required={true}
                  ></textarea>
                </div>
                <div>
                  <button className="btn btn-custom" type="submit">
                    Become a volunteer
                  </button>
                </div>
              </form>
            </div>
          </div> */}
              <div className="col-lg-7">
                <div className="volunteer-content">
                  <div className="section-header">
                    <p>Become A Volunteer</p>
                    <h2>Let’s make a difference in the lives of others</h2>
                  </div>
                  <div className="volunteer-text">
                    <p>
                      By becoming a volunteer you will be able to help all the
                      needy ones. Helping someone will make them happier and it
                      make you happier.
                      <br />
                      <br />
                    </p>
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
export default Volunteer;

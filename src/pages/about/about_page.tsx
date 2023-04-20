import React, { FC } from "react";
import About from "../components/about";
import Facts from "../components/facts";
import Team from "../components/team";
import Testimonial from "../components/testimonial";

const AboutPage: FC = (): JSX.Element => {
  return (
    <div>
      <div className="page-header">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h2>About Us</h2>
            </div>
            <div className="col-12">
              <a href="">Home</a>
              <a href="">About Us</a>
            </div>
          </div>
        </div>
      </div>
      <About />
      <Facts />
      {/* <Team/> */}
      <Testimonial />
    </div>
  );
};
export default AboutPage;

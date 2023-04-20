import React, { FC } from "react";
import Contact from "../components/contact";

const ContactPage: FC = (): JSX.Element => {
  return (
    <div>
      <div className="page-header">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h2>Contact Us</h2>
            </div>
            <div className="col-12">
              <a href="">Home</a>
              <a href="">Contact</a>
            </div>
          </div>
        </div>
      </div>
      <Contact />
    </div>
  );
};
export default ContactPage;

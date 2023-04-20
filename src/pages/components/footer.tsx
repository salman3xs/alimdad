import React, { FC } from "react";
import { Constants } from "../../constants/constants";

const Footer: FC = (): JSX.Element => {
  return (
    <div className="footer">
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-6">
            <div className="footer-contact">
              <h2>Our Head Office</h2>
              <p>
                <i className="fa fa-map-marker-alt"></i>
                {Constants.address}
              </p>
              <p>
                <i className="fa fa-phone-alt"></i>
                {Constants.phoneNo}
              </p>
              <p>
                <i className="fa fa-envelope"></i>
                {Constants.email}
              </p>
              <div className="footer-social">
                <a className="btn btn-custom" href="">
                  <i className="fab fa-twitter"></i>
                </a>
                <a className="btn btn-custom" href="">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a className="btn btn-custom" href="">
                  <i className="fab fa-youtube"></i>
                </a>
                <a className="btn btn-custom" href="">
                  <i className="fab fa-instagram"></i>
                </a>
                <a className="btn btn-custom" href="">
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="footer-link">
              <h2>Popular Links</h2>
              <a href="/about">About Us</a>
              <a href="/contact">Contact Us</a>
              <a href="/causes">Popular Causes</a>
              <a href="/events">Upcoming Events</a>
              {/* <a href="">Latest Blog</a> */}
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="footer-link">
              <h2>Useful Links</h2>
              <a href="">Terms of use</a>
              <a href="">Privacy policy</a>
              <a href="">Cookies</a>
              <a href="">Help</a>
              <a href="">FQAs</a>
            </div>
          </div>
          {/* <div className="col-lg-3 col-md-6">
            <div className="footer-newsletter">
              <h2>Newsletter</h2>
              <form>
                <input className="form-control" placeholder="Email goes here" />
                <button className="btn btn-custom">Submit</button>
                <label>Don't worry, we don't spam!</label>
              </form>
            </div>
          </div> */}
        </div>
      </div>
      <div className="container copyright">
        <div className="row">
          <div className="col-md-6">
            <p>
              &copy; <a href="#">AlImdad</a>, All Right Reserved.
            </p>
          </div>
          <div className="col-md-6">
            <p>
              Developed By{" "}
              <a href="https://salman3xs-7f20b.web.app">Salman Shaikh</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Footer;

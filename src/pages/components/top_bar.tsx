import { FC } from "react";
import { Constants } from "../../constants/constants";

const TopBar: FC = (): JSX.Element => {
  return (
    <div className="top-bar d-none d-md-block">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-8">
            <div className="top-bar-left">
              <div className="text">
                <i className="fa fa-phone-alt"></i>
                <p>{Constants.phoneNo}</p>
              </div>
              <div className="text">
                <i className="fa fa-envelope"></i>
                <p>{Constants.email}</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="top-bar-right">
              <div className="social">
                <a href="">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="">
                  <i className="fab fa-linkedin-in"></i>
                </a>
                <a href="">
                  <i className="fab fa-instagram"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default TopBar;

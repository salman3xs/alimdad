import React, { FC } from "react";
import Donate from "../components/donate";

const DonatePage: FC = (): JSX.Element => {
  return (
    <div>
      <div className="page-header">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h2>Donate Now</h2>
            </div>
            <div className="col-12">
              <a href="">Home</a>
              <a href="">Donate</a>
            </div>
          </div>
        </div>
      </div>
      <Donate />
    </div>
  );
};
export default DonatePage;

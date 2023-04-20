import React, { FC } from "react";
import Services from "../components/services";
import Causes from "../components/causes";

const CausesPage: FC = (): JSX.Element => {
  return (
    <div>
      <div className="page-header">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h2>Popular Causes</h2>
            </div>
            <div className="col-12">
              <a href="">Home</a>
              <a href="">Causes</a>
            </div>
          </div>
        </div>
      </div>
      <Services />
      <Causes />
    </div>
  );
};
export default CausesPage;

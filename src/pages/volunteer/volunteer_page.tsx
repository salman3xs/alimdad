import React, { FC } from "react";
import Volunteer from "../components/volunter";

const VolunteerPage: FC = (): JSX.Element => {
  return (
    <div>
      <div className="page-header">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h2>Volunteer</h2>
            </div>
            <div className="col-12">
              <a href="">Home</a>
              <a href="">Volunteer</a>
            </div>
          </div>
        </div>
      </div>
      <Volunteer />
    </div>
  );
};
export default VolunteerPage;

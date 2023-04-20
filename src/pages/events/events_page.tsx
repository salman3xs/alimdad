import React, { FC } from "react";
import Events from "../components/event";

const EventsPage: FC = (): JSX.Element => {
  return (
    <div>
      <div className="page-header">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h2>Upcoming Events</h2>
            </div>
            <div className="col-12">
              <a href="">Home</a>
              <a href="">Events</a>
            </div>
          </div>
        </div>
      </div>
      <Events />
    </div>
  );
};
export default EventsPage;

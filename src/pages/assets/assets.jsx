import React from "react";
import "./assets.scss";
import car from "../../Icons/car-top-view-2c7169ad4f3f8ddd6bff13b3de4d09e8 1.png";
import activity from "../../Icons/activity.png";
import notes from "../../Icons/notes.png";
import availble from "../../Icons/available.png";
import remidner from "../../Icons/remidner.png";

export const Assets = () => {
  return (
    <div className="assets">
      <h1>Assets</h1>

      <div className="container">
        <div className="car-holder me-3">
          <div className="info-holder">
            <div className="info-row">
              <div className="info">
                <h6>Fuel Usage</h6>
                <h4>2903Ltr</h4>
              </div>
              <div
                className="separator
              "
              ></div>
              <div className="info">
                <h6>KM Driven</h6>
                <h4>2903Ltr</h4>
              </div>
            </div>
            <div className="info-row">
              <div className="info">
                <h6>Total Cost</h6>
                <h4>$3,00,290</h4>
              </div>
              <div
                className="separator
              "
              ></div>
              <div className="info">
                <h6>Top Speed</h6>
                <h4>100Km/hr</h4>
              </div>
            </div>
          </div>
          <img src={car} />
        </div>
        <div>
          <div>
            <img src={activity} className="fluid-img" />
          </div>
          <div className="container justify-content-between py-0 px-0 my-3">
            <img src={notes} className="fluid-img  my-0 " />
            <img src={availble} className="fluid-img  my-0" />
          </div>
          <div>
            {" "}
            <img src={remidner} className="fluid-img" />
          </div>
        </div>
      </div>
    </div>
  );
};

import React, { useContext } from "react";
import "./assets.scss";
import car from "../../Icons/car-top-view-2c7169ad4f3f8ddd6bff13b3de4d09e8 1.png";
import activity from "../../Icons/activity.png";
import notes from "../../Icons/notes.png";
import availble from "../../Icons/available.png";
import remidner from "../../Icons/remidner.png";
import activityd from "../../Icons/activityd.png";
import notesd from "../../Icons/notesd.png";
import availbled from "../../Icons/availabled.png";
import remidnerd from "../../Icons/remidnerd.png";
import { ThemeContex } from "../../context/theme.contex";

export const Assets = () => {
  const { theme } = useContext(ThemeContex);

  return (
    <div className="assets" id={theme}>
      <span>Assets</span>
      <div className="container justify-content-center ">
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
            <img src={car} />
          </div>
        </div>
        <div>
          <div>
            <img
              src={theme === "dark" ? activityd : activity}
              className="fluid-img"
            />
          </div>
          <div className="container justify-content-between py-0 px-0 my-3">
            <img
              src={theme === "dark" ? notesd : notes}
              className="fluid-img  my-0 "
            />
            <img
              src={theme === "dark" ? availbled : availble}
              className="fluid-img  my-0"
            />
          </div>
          <div>
            {" "}
            <img
              src={theme === "dark" ? remidnerd : remidner}
              className="fluid-img"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

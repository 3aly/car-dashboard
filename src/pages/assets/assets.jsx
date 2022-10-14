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
import downarrow from "../../Icons/donwarrow.png";
import SensorItem from "../../components/sensoritem/sensoritem.componen";
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
                className="horseparator
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
                className="horseparator
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
          <div className="container justify-content-between py-0 px-0 my-3 ">
            <img
              src={theme === "dark" ? notesd : notes}
              className="fluid-img  my-0 mx-1 "
            />
            <div className="sensors mx-1 ">
              <div className="title container justify-content-between align-items-center p-0">
                <h6 className="m-0">Available Sensors</h6>
                <p className="m-0">
                  Assets <img className="mx-2" src={downarrow} />
                </p>
              </div>

              <div className="vertseparator"></div>
              <div className="options ">
                <SensorItem title={"Asset - Fuel Consumed (10)"} />
                <SensorItem title={"Asset - Odometer (km)"} />
                <SensorItem title={"Asset - Runtime (km)"} />
                <SensorItem title={"Engine Temperature (deg C)"} />
              </div>
              <button>See All</button>
            </div>
            <div></div>
          </div>
        </div>
      </div>
    </div>
  );
};

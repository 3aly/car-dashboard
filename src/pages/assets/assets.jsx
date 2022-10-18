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
import MUltiBarChart from "../../components/multibarchart/multibarchart";
export const Assets = () => {
  const { theme } = useContext(ThemeContex);

  return (
    <div className="assets" id={theme}>
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
        <div className="left">
          <div className="chartholder">
            <MUltiBarChart />
          </div>
          <div className="container justify-content-between py-0 px-0 my-3 ">
            <img
              src={theme === "dark" ? notesd : notes}
              className="fluid-img  my-0 mx-1 notes"
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
              <button style={{ color: "white" }}>See All</button>
            </div>
          </div>
          <div className="reminder text-start">
            <div className="row justify-content-between my-3">
              <div className="col-3">
                <h4>Reminder</h4>
              </div>
              <div className="col-3 m-0">
                <button>+ Add New</button>
              </div>
            </div>
            <div className="vertseparator"></div>
            <div className="row my-2">
              <div className="col-4">Description</div>
              <div className="col-2">Due</div>
              <div className="col-2">Overdue</div>
              <div className="col-2">Notify</div>
              <div className="col-2">Status</div>
            </div>
            <div className="vertseparator"></div>

            <div className="row my-2 ">
              <div className="col-4">Urgent Safety Recall</div>
              <div className="col-2">06/04/2022</div>
              <div className="col-2">08/04/2022</div>
              <div className="col-2">Demo</div>
              <div className="col-2">Completed</div>
            </div>
            <div className="vertseparator"></div>

            <div className="row my-2">
              <div className="col-4">Urgent Safety Recall</div>
              <div className="col-2">06/04/2022</div>
              <div className="col-2">08/04/2022</div>
              <div className="col-2">Demo</div>
              <div className="col-2">Completed</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

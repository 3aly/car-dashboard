import React, { useContext } from "react";
import ChartCard from "../../components/chartcard/chartcard";
import MUltiBarChart from "../../components/multibarchart/multibarchart";
import CarsStats from "../../components/carstats/carstats";
import car1 from "../../Icons/Frame 31.png";
import car2 from "../../Icons/Frame 32.png";
import car3 from "../../Icons/Frame 33.png";
import energy from "../../Icons/dashboard icons/Component 1.png";
import range from "../../Icons/dashboard icons/Frame 15.png";
import fluid from "../../Icons/dashboard icons/Frame 16.png";
import tire from "../../Icons/dashboard icons/Frame 17.png";

import "./dashboard.scss";
import MilesStats from "../../components/milesstats/milesstats";
import { ThemeContex } from "../../context/theme.contex";

export const DashBoard = () => {
  const { theme } = useContext(ThemeContex);

  return (
    <div className="dashboard" id={theme}>
      <div className="stats">
        <ChartCard
          icon={energy}
          title={"Energy"}
          content={"45%"}
          type={"energy"}
        />
        <ChartCard icon={range} title={"Range"} content={"15%"} type={"rest"} />{" "}
        <ChartCard
          icon={fluid}
          title={"Break fluid"}
          content={"9%"}
          type={"rest"}
        />{" "}
        <ChartCard
          icon={tire}
          title={"Tire Wear"}
          content={"25%"}
          type={"rest"}
        />
      </div>
      <div className="middle">
        <div className="milesstats">
          <h4>Miles Statistics</h4>
          <div className=" d-flex justify-content-between">
            <div className="d-flex justify-content-around align-items-center">
              <div
                className="rounded-pill py-0 px-2 "
                style={{ backgroundColor: "#2884FF" }}
              >
                <p className="day">Day</p>
              </div>
              <span>Week</span>
              <span>Month</span>
            </div>
            <div className="">
              <p>256 Miles</p>
            </div>
          </div>
          <MilesStats />
        </div>
        <div className="carstats">
          <h4>Car Statistics</h4>
          <div className="d-flex justify-content-between ">
            <div className="contaienr">
              <p>20 February 2022</p>
            </div>
            <div className=" d-flex justify-content-around align-items-center">
              <div
                className="rounded-pill py-0 px-2"
                style={{ backgroundColor: " #FF764C" }}
              >
                <p className="day">Day</p>
              </div>
              <span>Week</span>
              <span>Month</span>
            </div>
          </div>
          <CarsStats />
        </div>
      </div>
      <div className="cars">
        <img src={car1} />
        <img src={car2} />
        <img src={car3} />
      </div>
    </div>
  );
};

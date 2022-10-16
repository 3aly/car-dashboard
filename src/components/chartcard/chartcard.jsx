import React from "react";
import { ArcElement, Tooltip, Legend } from "chart.js";
import "./chartcard.scss";

import {
  Chart as ChartJS,
  LinearScale,
  CategoryScale,
  BarElement,
  PointElement,
  LineElement,
  LineController,
  BarController,
} from "chart.js";

import { Chart } from "react-chartjs-2";
import { Doughnut } from "react-chartjs-2";
ChartJS.register(ArcElement, Tooltip, Legend);

ChartJS.register(
  LinearScale,
  CategoryScale,
  BarElement,
  PointElement,
  LineElement,
  Legend,
  Tooltip,
  LineController,
  BarController
);

export const data = {
  labels: "",
  datasets: [
    {
      data: [65, 35],
      backgroundColor: ["#FFFFFF", "#A162F7"],
      borderWidth: 2,
    },
  ],

  options: {
    text: "45",
  },
};

const ChartCard = ({ icon, title, content, type }) => {
  return (
    <div className={`chartcard ${type}`}>
      <img src={icon} className="fluid-img" />
      <h6>{title}</h6>
      <Chart type="doughnut" data={data}>
        dasd
      </Chart>
      <p>{content}</p>
    </div>
  );
};

export default ChartCard;

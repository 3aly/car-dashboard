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

const Options = {
  plugins: {
    tooltip: {
      enabled: false,
    },
    legend: { display: false },
  },
  circumference: 300,
  cutout: "80%",
  responsive: true,
  maintainAspectRatio: true,
  radius: "65%",
};

const TYPES = {
  energy: {
    labels: "",
    datasets: [
      {
        data: [15, 35],
        backgroundColor: ["#F4F5F9", "#B37EFC"],
        borderWidth: 0,
        borderRadius: 5,

        spacing: 5,
        rotation: 210,
      },
    ],
  },
  range: {
    labels: "",
    datasets: [
      {
        data: [65, 45],
        backgroundColor: ["#FF7E86", "#F4F5F9"],
        borderWidth: 0,
        borderRadius: 5,
        spacing: 5,
        rotation: 210,
      },
    ],
  },
  fluid: {
    labels: "",
    datasets: [
      {
        data: [15, 65],
        backgroundColor: ["#A162F7", "#F4F5F9"],
        borderWidth: 0,
        borderRadius: 5,
        spacing: 5,
        rotation: 210,
      },
    ],
  },
  tire: {
    labels: "",
    datasets: [
      {
        data: [15, 35],
        backgroundColor: ["#F6CC0D", "#F4F5F9"],
        borderWidth: 0,
        borderRadius: 5,
        spacing: 5,
        rotation: 210,
      },
    ],
  },
};

const ChartCard = ({ icon, title, content, type, bgcolor, datatype }) => {
  return (
    <div className={`chartcard ${bgcolor}`}>
      <img src={icon} className="fluid-img" />
      <h6>{title}</h6>
      <Chart type="doughnut" data={TYPES[datatype]} options={Options}>
        dasd
      </Chart>
      <p>{content}</p>
    </div>
  );
};

export default ChartCard;

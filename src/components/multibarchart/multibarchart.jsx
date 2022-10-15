import {
  Chart as ChartJS,
  LinearScale,
  CategoryScale,
  BarElement,
  PointElement,
  LineElement,
  Legend,
  Tooltip,
  LineController,
  BarController,
} from "chart.js";
import { Chart } from "react-chartjs-2";

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

const labels = [
  "12/9",
  "12/9",
  "12/9",
  "12/9",
  "12/9",
  "12/9",
  "12/9",
  "12/9",
  "12/9",
  "12/9",
  "12/9",
  "12/9",
];

export const data = {
  labels,
  datasets: [
    {
      type: "line",
      label: "Activity",
      backgroundColor: "#8668E1",
      borderColor: "#f4ecfe",
      borderWidth: 2,
      fill: true,
      data: [
        100, 200, 300, 200, 300, 400, 200, 300, 100, 200, 300, 300, 200, 300,
        100,
      ],
    },
    {
      type: "bar",
      label: "Distnace",
      backgroundColor: "#967ce5",
      data: [
        1, 2, 3, 4, 0, 300, 0, 0, 1, 2, 3, 4, 6, 3, 1, 2, 3, 4, 6, 3, 1, 2, 3,
        4, 6, 3, 13, 21, 1, 2, 3, 4, 6, 3, 13, 21,
      ],
      borderColor: "white",
      borderWidth: 2,
    },
  ],
};

const MUltiBarChart = () => {
  return <Chart type="bar" data={data} />;
};

export default MUltiBarChart;

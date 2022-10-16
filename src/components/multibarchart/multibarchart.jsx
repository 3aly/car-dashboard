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
import "./multibarchart.styles.scss";

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

const Options = {
  plugins: {
    tooltip: {
      enabled: false,
    },
    legend: { display: false },
  },
  responsive: true,
  maintainAspectRatio: true,
};

export const data = {
  labels,
  datasets: [
    {
      type: "line",
      label: "Activity",
      backgroundColor: "#8668E1",
      borderColor: "#967ce5",
      fill: true,
      data: [100, 400, 300, 200, 200, 200, 200, 300, 200, 200, 300, 300, 100],
      tension: 0.5,
    },
    {
      type: "bar",
      label: "Distnace",
      backgroundColor: "#967ce5",
      data: [
        1, 2, 3, 4, 0, 300, 0, 0, 1, 2, 3, 4, 6, 3, 1, 2, 3, 4, 6, 3, 1, 2, 3,
        4, 6, 3, 13, 21, 1, 2, 3, 4, 6, 3, 13, 21,
      ],
      borderColor: "#967ce5",
      borderWidth: 0,
      borderRadius: 5,
    },
  ],
  options: { respnsoive: true },
};

const MUltiBarChart = () => {
  return (
    <div className="multibarchart">
      <h4>Activity</h4>
      <Chart type="bar" data={data} options={Options} />
    </div>
  );
};

export default MUltiBarChart;

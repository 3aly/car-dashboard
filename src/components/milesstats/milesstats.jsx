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
import "./milesstats.scss";

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

const labels = ["1 PM", "2 PM", "3 PM", "4 PM", "5 PM", "6 PM", "7 PM"];

export const data = {
  labels,
  datasets: [
    {
      type: "bar",
      label: "Activity",
      backgroundColor: "#2884FF",

      fill: true,
      data: [0, 0, 5, 0, 0, 0],
    },
    {
      type: "bar",
      label: "Distnace",
      backgroundColor: "#1F2128",
      data: [1, 2, 0, 3, 2, 6],
    },
  ],
  options: {
    respnsoive: true,
  },
};

const MilesStats = () => {
  return (
    <div className="multibarchart">
      <Chart type="bar" data={data} />
    </div>
  );
};

export default MilesStats;

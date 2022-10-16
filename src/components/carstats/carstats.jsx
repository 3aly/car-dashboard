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

const labels = ["1 AM", "2 AM", "3 AM", "4 AM", "5 AM", "6 AM", "7 AM"];

export const data = {
  labels,
  datasets: [
    {
      type: "line",
      label: "Activity",
      backgroundColor: "rgba(255, 118, 76, 0.29)",
      borderColor: "rgba(255, 118, 76, 0.29)",

      fill: false,
      data: [65, 59, 80, 81, 5, 59, 80, 8, 15, 59, 80, 81, 56, 55, 40],
    },
  ],
  options: { respnsoive: true },
};

const CarsStats = () => {
  return (
    <div className="multibarchart">
      <Chart type="bar" data={data} />
    </div>
  );
};

export default CarsStats;

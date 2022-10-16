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
      label: "",
      backgroundColor: "rgba(255, 118, 76, 0.29)",
      borderColor: "rgba(255, 118, 76, 0.29)",

      fill: true,
      data: [65, 67, 70, 71, 60, 55, 65],
      tension: 0.5,
    },
  ],
};

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

const CarsStats = () => {
  return (
    <div className="multibarchart">
      <Chart type="bar" data={data} options={Options} />
    </div>
  );
};

export default CarsStats;

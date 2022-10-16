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
import { useContext } from "react";
import { Chart } from "react-chartjs-2";
import { ThemeContex } from "../../context/theme.contex";
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

export const datad = {
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
};
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
      backgroundColor: "#F4F5F9",
      data: [1, 2, 0, 3, 2, 6],
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
  circumference: 300,
  cutout: "80%",
  responsive: true,
  maintainAspectRatio: true,
  radius: "65%",
};

const MilesStats = () => {
  const { theme } = useContext(ThemeContex);

  return (
    <div className="multibarchart">
      <Chart
        type="bar"
        data={theme === "dark" ? datad : theme === "light" ? data : ""}
        options={Options}
      />
    </div>
  );
};

export default MilesStats;

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

import { Line } from "react-chartjs-2";
import "../styles/VacancyChart.css";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

function VacancyChart() {
  const data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: "Applications",
        data: [20, 50, 35, 60, 40, 70],
        borderColor: "#22c55e",
        backgroundColor: "rgba(34,197,94,0.2)",
        tension: 0.4,
      },
      {
        label: "Interviews",
        data: [10, 20, 40, 30, 50, 35],
        borderColor: "#2563eb",
        backgroundColor: "rgba(37,99,235,0.2)",
        tension: 0.4,
      },
      {
        label: "Rejected",
        data: [5, 15, 10, 25, 15, 30],
        borderColor: "#ef4444",
        backgroundColor: "rgba(239,68,68,0.2)",
        tension: 0.4,
      },
    ],
  };

  return (
    <div className="chart-card">
      <h2>Vacancy Statistics</h2>
      <Line data={data} />
    </div>
  );
}

export default VacancyChart;
import React from "react";
import { Line } from "react-chartjs-2";
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

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

type PopulationChartProps = {
  populationCounts: PopulationCount[] | undefined;
};

const PopulationChart: React.FC<PopulationChartProps> = ({
  populationCounts,
}) => {
  if (!populationCounts) return <></>;

  const labels = populationCounts?.map((data) => data.year);
  const values = populationCounts?.map((data) => data.value);

  const data = {
    labels,
    datasets: [
      {
        label: "Population",
        data: values,
        borderColor: "#3b82f6",
        backgroundColor: "rgba(59, 130, 246, 0.3)",
        tension: 0.3,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: "top" as const,
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: "Year",
        },
      },
      y: {
        title: {
          display: true,
          text: "Population",
        },
      },
    },
  };

  return (
    <div className="w-full max-w-2xl mx-auto p-4 bg-white shadow-md rounded-lg">
      <h2 className="text-xl font-semibold text-center mb-4 text-gray-700">
        Population Growth
      </h2>
      <Line data={data} options={options} />
    </div>
  );
};

export default PopulationChart;

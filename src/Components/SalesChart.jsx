// src/components/SalesChart.js
import React, { useRef, useEffect, useState } from "react";
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

// Register Chart.js modules
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const SalesChart = () => {
  const chartRef = useRef(null);
  const [chartData, setChartData] = useState(null); // initially null
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:5000/api/sales")
      .then((res) => res.json())
      .then((data) => {
        setChartData({
          labels: data.labels,
          datasets: [
            {
              label: "Sales Data",
              data: data.values,
              borderColor: "#007bff",
              backgroundColor: (context) => {
                const { ctx, chartArea } = context.chart;
                if (!chartArea) return "#4379EE29"; // fallback
                const gradient = ctx.createLinearGradient(
                  0,
                  chartArea.top,
                  0,
                  chartArea.bottom
                );
                gradient.addColorStop(0, "#4379EE29");
                gradient.addColorStop(1, "#ffffff");
                return gradient;
              },
              pointBackgroundColor: "#007bff",
              tension: 0.1,
              fill: true,
              borderWidth: 1,
            },
          ],
        });
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching sales data:", err);
        setLoading(false);
      });
  }, []);

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: "top",
      },
      title: {
        display: false,
      },
    },
    scales: {
      x: {
        grid: { display: false },
      },
      y: {
        grid: {
          display: true,
          color: "#EAEAEA",
          borderColor: "#EAEAEA",
          tickColor: "#EAEAEA",
        },
        ticks: {
          callback: (value) => `${value}%`,
          stepSize: 20,
          min: 0,
          max: 100,
        },
      },
    },
  };

  if (loading) return <p>Loading chart...</p>;
  if (!chartData) return <p>No data available</p>;

  return <Line ref={chartRef} data={chartData} options={options} />;
};

export default SalesChart;

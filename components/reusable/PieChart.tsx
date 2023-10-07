"use client";
import React from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

const PieChart = ({ menu }: { menu: any }) => {
  ChartJS.register(ArcElement, Tooltip, Legend);
  const data = {
    datasets: [
      {
        data: menu.map((item: any) => item.quantity),
        backgroundColor: [
          "#f87171",
          "#a3e635",
          "#fcd34d",
          "#06b6d4",
          "#2dd4bf",
          "#f43f5e",
          "#60a5fa",
        ],
      },
    ],
    labels: menu.slice(0, 5).map((item: any) => item.name),
  };

  return <Pie data={data} />;
};

export default PieChart;

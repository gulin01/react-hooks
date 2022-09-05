import React, { useState } from "react";
import { Bar, Line, Pie } from "react-chartjs-2";

import { UserData } from "./Data";
import { Chart as ChartJS } from "chart.js/auto";

const BarChart = () => {
  const [userData, setUserData] = useState({
    labels: UserData.map((data) => data.year),
    datasets: [
      {
        label: "Users Gained",
        data: UserData.map((data) => data.userGain),
        backgroundColor: [
          "rgba(75,192,192,1)",
          "#ecf0f1",
          "#50AF95",
          "#f3ba2f",
          "#2a71d0",
        ],
        borderColor: "black",
        borderWidth: 2,
      },
    ],
  });
  return (
    <div>
      <div style={{ width: 700 }}>
        <Bar data={userData} />
      </div>
      <div style={{ width: 700 }}>
        <Line data={userData} />
      </div>

      <div style={{ width: 700 }}>
        <Pie data={userData} />
      </div>
    </div>
  );
};
export default BarChart;

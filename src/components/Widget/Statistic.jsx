import React from "react";
import Chart from "chart.js/auto";
import { Bar } from "react-chartjs-2";
import "./widget.css";

Chart.register();

function Statistic({ ...props }) {
  const data = {
    labels: ["8/2022", "9/2022", "10/2022", "11/2022", "12/2022", "1/2023", "2/2023", "3/2023", "4/2023", "5/2023", "6/2023", "7/2023", "8/2023", "9/2023", "10/2023", "11/2023", "12/2023"],
    datasets: [
      {
        label: "Số lần đăng nhập",
        data: new Array(17).fill(0).map(() => Math.floor(Math.random() * 100)),
      }
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    aspectRatio: 2,
  };
  return (
    <div className={`widgetCard p-3 md:py-4 md:px-6 ${props.className}`}>
      <div className="">
        <Bar data={data} options={options} />
      </div>
    </div>
  );
}

export default Statistic;

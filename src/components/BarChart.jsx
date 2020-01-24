import React, { useEffect } from "react";
import { Bar } from "react-chartjs-2";

export const BarChart = ({ data }) => {
  const dataChart = {
    labels: ["Pink", "Blue", "Yellow", "Green", "Purple"],
    datasets: [
      {
        data,
        label: "My Second dataset",
        backgroundColor: [
          "#FF6384",
          "#36A2EB",
          "#FFCE56",
          "#1e5d26",
          "#4e1e5d"
        ],
        borderWidth: 1,
        hoverBorderColor: "#FFCE56",
        hoverBackgroundColor: [
          "#FF6384",
          "#36A2EB",
          "#FFCE56",
          "#1e5d26",
          "#4e1e5d"
        ]
      }
    ],
    options: {
      legend: {
        display: false
      }
    }
  };
  return (
    <div className="barChart">
      <Bar
        data={dataChart}
        options={{
          legend: {
            display: false
          }
        }}
      />
    </div>
  );
};

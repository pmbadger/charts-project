import React, { useEffect } from "react";
import { Pie } from "react-chartjs-2";

export const PieChart = (props) => {
	const dataChart = {
    labels: ["Pink", "Blue", "Yellow", "Green", "Purple"],
    datasets: [
      {
	      data:props.data,
        backgroundColor: [
          "#FF6384",
          "#36A2EB",
          "#FFCE56",
          "#1e5d26",
          "#4e1e5d"
        ],
        hoverBackgroundColor: [
          "#FF6384",
          "#36A2EB",
          "#FFCE56",
          "#1e5d26",
          "#4e1e5d"
        ]
      }
    ]
  };
  return (
    <div className="pieChart">
      <Pie data={dataChart} />
    </div>
  );
};

import React, { useEffect } from "react";
import Chart from "react-google-charts";
import { useInterest } from "../contexts/InterestContext";

const InterestChart = () => {
  const { calculateInterest } = useInterest();

  const data = [
    ["EMI Chart", "Loan Calculation"],
    [
      "EMI",
      calculateInterest.emiDetails && calculateInterest.emiDetails[0]?.emi,
    ],
    ["Total Payable Amount", calculateInterest.total],
    ["Total Interest", calculateInterest.interest],
  ];

  useEffect(() => {}, [calculateInterest]);

  return (
    <div className="chart">
      <Chart
        chartType="PieChart"
        options={{ title: "Interest Calculation Chart" }}
        // width={"100%"}
        height={"350px"}
        data={data}
      />
    </div>
  );
};

export default InterestChart;

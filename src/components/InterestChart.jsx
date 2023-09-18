import React, { useEffect } from "react";
import Chart from "react-google-charts";

const InterestChart = ({ calculateInterest }) => {
  const data = [
    ["EMI Chart", "Loan Calculation"],
    ["EMI", calculateInterest.emiDetails[0]?.emi],
    ["Total Payable Amount", calculateInterest.total],
    ["Total Interest", calculateInterest.interest],
  ];

  console.log();

  useEffect(() => {}, [calculateInterest]);

  return (
    <div className="chart">
      <Chart chartType="PieChart" width={""} height={"300px"} data={data} />
    </div>
  );
};

export default InterestChart;

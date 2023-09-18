import React, { useEffect } from "react";

const InterestMonth = ({ emiDetails }) => {
  useEffect(() => {}, [emiDetails]);

  return (
    <div className="month-table">
      <table>
        <thead>
          <tr>
            <th>Month</th>
            <th>Interest Payment</th>
            <th>Principal Payment</th>
            <th>Remaining Balance</th>
          </tr>
        </thead>
        <tbody>
          {emiDetails &&
            emiDetails.map((val, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{val.interestPayment.toFixed(2)}</td>
                <td>{val.principalPayment.toFixed(2)}</td>
                <td>{val.remainingLoanBalance.toFixed(2)}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default InterestMonth;

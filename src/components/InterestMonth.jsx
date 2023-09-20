import React, { useEffect, useState } from "react";
import { useInterest } from "../contexts/InterestContext";

const InterestMonth = () => {
  const [limitedEmiDetails, setLimitedEmiDetails] = useState([]);
  const [isExpanded, setIsExpanded] = useState(false);
  const { calculateInterest } = useInterest();

  useEffect(() => {
    let emiDetailsSlice;
    if (calculateInterest.emiDetails.length <= 10) {
      emiDetailsSlice = calculateInterest.emiDetails.slice(0, 10);
      setLimitedEmiDetails(emiDetailsSlice);
      setIsExpanded(false);
    } else if (calculateInterest.emiDetails.length > 10) {
      if (!isExpanded) {
        emiDetailsSlice = calculateInterest.emiDetails.slice(0, 10);
        setLimitedEmiDetails(emiDetailsSlice);
        setIsExpanded(false);
      } else {
        setLimitedEmiDetails(calculateInterest.emiDetails);
      }
    }
  }, [calculateInterest, isExpanded]);

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
          {limitedEmiDetails.map((val, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{val.interestPayment.toFixed(2)}</td>
              <td>{val.principalPayment.toFixed(2)}</td>
              <td>{val.remainingLoanBalance.toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
      </table>
      {calculateInterest.emiDetails.length > 10 && !isExpanded && (
        <button className="more-btn" onClick={() => setIsExpanded(!isExpanded)}>
          <span>See More</span>
        </button>
      )}
    </div>
  );
};

export default InterestMonth;

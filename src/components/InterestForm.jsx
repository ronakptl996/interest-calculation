import React, { useState, useEffect } from "react";
import InterestMonth from "./InterestMonth";

const InterestForm = () => {
  const [principleAmount, setPrincipleAmount] = useState(10000);
  const [interest, setInterest] = useState(8);
  const [tenure, setTenure] = useState(6);
  const [calculateInterest, setCalculateInterest] = useState({
    emi: 0,
    interest: 0,
    total: 0,
  });

  useEffect(() => {
    let emi = (
      (principleAmount *
        (interest / 12 / 100) *
        (1 + interest / 12 / 100) ** tenure) /
      ((1 + interest / 12 / 100) ** tenure - 1)
    ).toFixed(0);

    let total = Number(emi) * tenure;
    let interestPerMonth = total - principleAmount;

    setCalculateInterest({
      emi: Number(emi),
      interest: interestPerMonth,
      total: total,
    });
  }, [principleAmount, interest, tenure]);

  return (
    <div className="form-wrapper">
      <div>
        <h1 className="form-heading">Interest Calculator</h1>
        <p className="form-description">
          Instantly calculate the monthly interest payable and plan your loan
          repayment with ease.
        </p>
      </div>
      <form>
        <div className="input-wrapper">
          <div className="input-div">
            <div className="label-wrapper">
              <label htmlFor="principleAmount">Loan Amount (in ruppes)</label>
              <input
                type="text"
                value={principleAmount}
                onChange={(e) => setPrincipleAmount(Number(e.target.value))}
              />
            </div>
            <input
              id="principleAmount"
              type="range"
              min={10000}
              max={100000}
              value={principleAmount}
              onChange={(e) => setPrincipleAmount(Number(e.target.value))}
            />
          </div>
          <div className="input-div">
            <div className="label-wrapper">
              <label htmlFor="interest">Interest Rate (%)</label>
              <input
                type="text"
                value={interest}
                onChange={(e) => setInterest(Number(e.target.value))}
              />
            </div>
            <input
              id="interest"
              type="range"
              min={8}
              max={35}
              value={interest}
              onChange={(e) => setInterest(Number(e.target.value))}
            />
          </div>
          <div className="input-div">
            <div className="label-wrapper">
              <label htmlFor="interest">Tenure (in months)</label>
              <input
                type="text"
                value={tenure}
                onChange={(e) => setTenure(Number(e.target.value))}
              />
            </div>
            <input
              id="interest"
              type="range"
              min={8}
              max={35}
              value={tenure}
              onChange={(e) => setTenure(Number(e.target.value))}
            />
          </div>
        </div>
        <div className="form-card">
          <h2 className="card-heading">Simple interest projection</h2>
          <div className="card-details">
            <div className="card-emi">
              <p>Your EMI is :</p>
              <h2>₹{calculateInterest.emi}</h2>
            </div>
            <div className="card-interest-info">
              <ul>
                <li>
                  <h4>Total Interest</h4>
                  <p>{calculateInterest.interest}</p>
                </li>
                <li>
                  <h4>Total Amount Payable</h4>
                  <p>{calculateInterest.total}</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </form>

      <InterestMonth
        interest={calculateInterest.interest}
        tenure={tenure}
        principleAmount={principleAmount}
      />
    </div>
  );
};

export default InterestForm;

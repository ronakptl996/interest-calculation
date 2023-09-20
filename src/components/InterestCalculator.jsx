import React, { useState, useEffect } from "react";
import InterestForm from "./InterestForm";
import InterestMonth from "./InterestMonth";
import InterestChart from "./InterestChart";
import { useInterest } from "../contexts/InterestContext";

const InterestCalculator = () => {
  const { calculateInterest } = useInterest();

  return (
    <section className="form-wrapper">
      <div className="form-heading">
        <h1>Interest Calculator</h1>
        <p className="form-description">
          Instantly calculate the monthly interest payable and plan your loan
          repayment with ease.
        </p>
      </div>
      <div className="form-inner">
        <div className="input-wrapper">
          <InterestForm />
          {calculateInterest.emiDetails && <InterestMonth />}
        </div>
        <div className="form-rigth">
          <div className="form-card">
            <h2 className="card-heading">Simple Interest Projection</h2>
            <div className="card-details">
              <div className="card-emi">
                <p>Your EMI is :</p>
                <h2>
                  ₹
                  {calculateInterest.emiDetails &&
                    calculateInterest.emiDetails[0] &&
                    calculateInterest.emiDetails[0].emi.toFixed(2)}
                </h2>
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
          <div className="chart-wrapper">
            <InterestChart />
          </div>
        </div>
      </div>
    </section>
  );
};

export default InterestCalculator;

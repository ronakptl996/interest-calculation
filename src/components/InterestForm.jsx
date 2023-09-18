import React, { useState, useEffect } from "react";
import InterestMonth from "./InterestMonth";
import InterestChart from "./InterestChart";
import InputField from "./InputField";

const InterestForm = () => {
  const [principalAmount, setPrincipalAmount] = useState(10000);
  const [interest, setInterest] = useState(8);
  const [tenure, setTenure] = useState(6);
  const [calculateInterest, setCalculateInterest] = useState({
    interest: 0,
    total: 0,
    emiDetails: [],
  });

  function calculateEMI(principalAmount, annualInterestRate, loanTenure) {
    const monthlyInterestRate = annualInterestRate / 12 / 100;
    const emi =
      (principalAmount * monthlyInterestRate) /
      (1 - Math.pow(1 + monthlyInterestRate, -loanTenure));

    // setCalculateInterest({ emi: emi });
    let remainingLoanBalance = principalAmount;
    const emiDetails = [];

    for (let month = 1; month <= loanTenure; month++) {
      const interestPayment = remainingLoanBalance * monthlyInterestRate;
      const principalPayment = emi - interestPayment;
      remainingLoanBalance -= principalPayment;

      emiDetails.push({
        month,
        emi,
        interestPayment,
        principalPayment,
        remainingLoanBalance,
      });
    }

    return emiDetails;
  }

  useEffect(() => {
    const emiDetails = calculateEMI(principalAmount, interest, tenure);

    let interestPerMonth =
      emiDetails.length && emiDetails[0].emi * tenure - principalAmount;
    let totalPayableAmount = (interestPerMonth + principalAmount).toFixed(2);

    setCalculateInterest((prevState) => ({
      ...prevState,
      total: Number(totalPayableAmount),
      interest: Number(interestPerMonth.toFixed(2)),
      emiDetails,
    }));
  }, [principalAmount, interest, tenure]);

  return (
    <div className="form-wrapper">
      <div>
        <h1 className="form-heading">Interest Calculator</h1>
        <p className="form-description">
          Instantly calculate the monthly interest payable and plan your loan
          repayment with ease.
        </p>
      </div>
      <div className="form-inner">
        <div className="input-wrapper">
          <form>
            <div className="input-div">
              <div className="label-wrapper">
                <label htmlFor="principalAmount">Loan Amount (in ruppes)</label>
                <InputField
                  type="number"
                  min={0}
                  value={principalAmount}
                  onChange={(val) => setPrincipalAmount(Number(val))}
                />
              </div>
              <InputField
                id="principalAmount"
                type="range"
                value={principalAmount}
                placeholder="Product Price"
                onChange={(value) => {
                  setPrincipalAmount(Number(value));
                }}
                min={10000}
                max={100000}
              />
            </div>
            <div className="input-div">
              <div className="label-wrapper">
                <label htmlFor="interest">Interest Rate (%)</label>
                <InputField
                  type="number"
                  min={0}
                  value={interest}
                  onChange={(value) => setInterest(Number(value))}
                />
              </div>
              <InputField
                id="interest"
                type="range"
                min={8}
                max={35}
                value={interest}
                onChange={(value) => setInterest(Number(value))}
              />
            </div>
            <div className="input-div">
              <div className="label-wrapper">
                <label htmlFor="interest">Tenure (in months)</label>
                <InputField
                  type="number"
                  min={0}
                  value={tenure}
                  onChange={(value) => setTenure(Number(value))}
                />
              </div>
              <InputField
                id="tenure"
                type="range"
                min={6}
                max={40}
                value={tenure}
                onChange={(value) => setTenure(Number(value))}
              />
            </div>
          </form>
          <InterestMonth emiDetails={calculateInterest.emiDetails} />
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
            <InterestChart calculateInterest={calculateInterest} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default InterestForm;

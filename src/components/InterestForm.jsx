import React, { useState, useEffect } from "react";
import InputField from "./InputField";
import { useInterest } from "../contexts/InterestContext";

const InterestForm = () => {
  const [principalAmount, setPrincipalAmount] = useState(10000);
  const [interest, setInterest] = useState(8);
  const [tenure, setTenure] = useState(6);

  const { calculateEMI } = useInterest();

  useEffect(() => {
    calculateEMI(principalAmount, interest, tenure);
  }, [principalAmount, interest, tenure]);
  return (
    <>
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
              isFloated
              value={interest}
              onChange={(value) => setInterest(Number(value))}
            />
          </div>
          <InputField
            id="interest"
            type="range"
            min={8}
            max={35}
            isFloated
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
    </>
  );
};

export default InterestForm;

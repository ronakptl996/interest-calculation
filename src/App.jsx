import { useState, useEffect } from "react";
import "./App.css";
import InterestCalculator from "./components/InterestCalculator";
import { InterestProvider } from "./contexts/InterestContext";

function App() {
  const [calculateInterest, setCalculateInterest] = useState({});

  const calculateEMI = (principalAmount, annualInterestRate, loanTenure) => {
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

    let interestPerMonth =
      emiDetails.length && emiDetails[0].emi * loanTenure - principalAmount;
    let totalPayableAmount = (interestPerMonth + principalAmount).toFixed(2);

    setCalculateInterest((prev) => ({
      ...prev,
      emiDetails,
      total: Number(totalPayableAmount),
      interest: Number(interestPerMonth.toFixed(2)),
    }));
    return emiDetails;
  };

  return (
    <InterestProvider value={{ calculateInterest, calculateEMI }}>
      <div className="main">
        <InterestCalculator />
      </div>
    </InterestProvider>
  );
}

export default App;

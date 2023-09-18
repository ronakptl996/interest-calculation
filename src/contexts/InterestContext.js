import { createContext, useContext } from "react";

export const InterestContext = createContext({
  principalAmount: 0,
  interest: 0,
  tenure: 0,
  calculateInterest: {
    interest: 0,
    total: 0,
    emiDetails: [],
  },
  calculateEMI: (principalAmount, annualInterestRate, loanTenure) => {},
});

export const useInterest = () => {
  return useContext(InterestContext);
};

export const InterestProvider = InterestContext.Provider;

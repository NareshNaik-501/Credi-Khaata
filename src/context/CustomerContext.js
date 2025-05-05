import React, { createContext, useState } from "react";
import initialCustomers from "../data/customers";
import initialTransactions from "../data/transactions";

export const CustomerContext = createContext();

export const CustomerProvider = ({ children }) => {
  const [customers, setCustomers] = useState(initialCustomers);
  const [transactions, setTransactions] = useState(initialTransactions);

  const addCustomer = (customer) => {
    setCustomers((prev) => [...prev, customer]);
  };

  const addLoan = (customerId, loan) => {
    setTransactions((prev) => ({
      ...prev,
      [customerId]: [...(prev[customerId] || []), loan],
    }));
  };

  const recordRepayment = (customerId, loanId, repayment) => {
    setTransactions((prev) => {
      const updatedLoans = prev[customerId].map((loan) => {
        if (loan.id === loanId) {
          loan.repayments.push(repayment);
        }
        return loan;
      });
      return { ...prev, [customerId]: updatedLoans };
    });
  };

  return (
    <CustomerContext.Provider
      value={{ customers, transactions, addCustomer, addLoan, recordRepayment }}
    >
      {children}
    </CustomerContext.Provider>
  );
};

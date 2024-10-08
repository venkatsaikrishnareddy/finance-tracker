// src/context/financecontext.jsx
import React, { createContext, useReducer, useContext, useState } from "react";

// Define initial state
const initialState = {
  income: [],
  expenses: [],
  savingsGoals: [],
};

// Create the context
const FinanceContext = createContext(initialState);

const actionHandlers = {
  ADD_INCOME: (state, action) => ({
    ...state,
    income: [...state.income, action.payload],
  }),
  ADD_EXPENSE: (state, action) => ({
    ...state,
    expenses: [...state.expenses, action.payload],
  }),
  ADD_SAVINGS_GOAL: (state, action) => ({
    ...state,
    savingsGoals: [...state.savingsGoals, action.payload],
  }),
};

const financeReducer = (state, action) => {
  const handler = actionHandlers[action.type];
  return handler ? handler(state, action) : state;
};

// Create the provider component
function FinanceProvider({ children }) {
  const [state, dispatch] = useReducer(financeReducer, initialState);
  const [balance, setBalance] = useState(0);

  const updateBalance = (amount) => {
    setBalance((prevBalance) => prevBalance + amount);
  };

  return (
    <FinanceContext.Provider
      value={{ state, dispatch, balance, updateBalance }}
    >
      {children}
    </FinanceContext.Provider>
  );
}

// Custom hook to use the Finance context
export const useFinance = () => useContext(FinanceContext);

export default FinanceProvider;

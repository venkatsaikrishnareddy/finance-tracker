import React from "react";
import { useFinance } from "../context/financecontext.jsx"; // Corrected path

const Dashboard = () => {
  const { state } = useFinance();

  const totalIncome = state.income.reduce((sum, item) => sum + item.amount, 0);
  const totalExpenses = state.expenses.reduce(
    (sum, item) => sum + item.amount,
    0
  );
  const totalSavings = state.savingsGoals.reduce(
    (sum, goal) => sum + goal.amount,
    0
  );

  return (
    <div className="p-4 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold text-center mb-6 mt-6">
        Financial Overview
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="bg-white shadow rounded-lg p-6">
          <h2 className="text-lg font-semibold">Total Income</h2>
          <p className="text-2xl mt-2">${totalIncome}</p>
        </div>
        <div className="bg-white shadow rounded-lg p-6">
          <h2 className="text-lg font-semibold">Total Expenses</h2>
          <p className="text-2xl mt-2">${totalExpenses}</p>
        </div>
        <div className="bg-white shadow rounded-lg p-6">
          <h2 className="text-lg font-semibold">Savings Goals</h2>
          <p className="text-2xl mt-2">${totalSavings}</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

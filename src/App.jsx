// src/App.jsx
import React from "react";
import Dashboard from "./component/dashboard.jsx";
import AddIncome from "./component/income.jsx";
import AddExpense from "./component/expense.jsx";
import AddSavings from "./component/savinggoals.jsx";

function App() {
  return (
    <div className="App">
      <h1 className="text-2xl font-bold mb-4 ">Finance Tracker</h1>
      <Dashboard />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <AddIncome />
        <AddExpense />
        <AddSavings />
      </div>
    </div>
  );
}

export default App;

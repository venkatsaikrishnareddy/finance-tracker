import React from "react";
import Dashboard from "./component/dashboard.jsx"; // Corrected path
import AddIncome from "./component/income.jsx"; // Corrected path
import AddExpense from "./component/expense.jsx"; // Corrected path
import AddSavings from "./component/savinggoals.jsx"; // Corrected path
function App() {
  return (
    <div className="App">
      <Dashboard />
      <AddIncome />
      <AddExpense />
      <AddSavings />
    </div>
  );
}

export default App;

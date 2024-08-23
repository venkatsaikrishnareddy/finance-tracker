import React, { useState } from "react";
import { useFinance } from "../context/financecontext.jsx"; // Corrected path

const AddSavings = () => {
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");
  const [savingsGoals, setSavingsGoals] = useState([]);
  const { dispatch } = useFinance();

  const handleSavings = () => {
    const newGoal = { description, amount: parseFloat(amount) };
    setSavingsGoals([...savingsGoals, newGoal]);

    dispatch({
      type: "ADD_SAVINGS_GOAL",
      payload: newGoal,
    });

    setDescription("");
    setAmount("");
  };

  return (
    <div>
      <div className="p-4 bg-red-400">
        <h2 className="text-lg font-semibold mb-4">Add Savings</h2>
        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Description"
          className="border p-2 mb-2 w-full"
        />
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          placeholder="Amount"
          className="border p-2 mb-2 w-full"
        />
        <button
          onClick={handleSavings}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Add Savings
        </button>
      </div>

      <div className="p-4 bg-white mt-4">
        <h2 className="text-lg font-semibold mb-4">Savings Goals</h2>
        <table className="min-w-full bg-white">
          <thead>
            <tr>
              <th className="py-2">Description</th>
              <th className="py-2">Amount</th>
            </tr>
          </thead>
          <tbody>
            {savingsGoals.map((goal, index) => (
              <tr key={index}>
                <td className="border px-4 py-2">{goal.description}</td>
                <td className="border px-4 py-2">{goal.amount}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AddSavings;

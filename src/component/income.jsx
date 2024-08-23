// src/components/AddIncome.jsx
import React, { useState } from "react";
import { useFinance } from "../context/financecontext.jsx";

const AddIncome = () => {
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");
  const { dispatch, updateBalance } = useFinance();

  const handleAddIncome = () => {
    const newEntry = { description, amount: parseFloat(amount) };
    dispatch({ type: "ADD_INCOME", payload: newEntry });
    updateBalance(parseFloat(amount));
    setDescription("");
    setAmount("");
  };

  return (
    <div className="p-4 bg-slate-600">
      <h2 className="text-lg  font-semibold mb-4 text-white ">Add Income</h2>
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
        onClick={handleAddIncome}
        className="bg-blue-500 text-white p-2 w-full"
      >
        Add Income
      </button>
    </div>
  );
};

export default AddIncome;

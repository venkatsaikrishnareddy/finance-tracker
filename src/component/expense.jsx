import React, { useState } from "react";

const AddExpense = () => {
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");
  const [expenseEntries, setExpenseEntries] = useState([]);

  const handleAddExpense = () => {
    const newEntry = { description, amount };
    setExpenseEntries([...expenseEntries, newEntry]);
    setDescription("");
    setAmount("");
  };

  return (
    <div>
      <div className="p-4 bg-red-400">
        <h2 className="text-lg font-semibold mb-4">Add Expense</h2>
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
          onClick={handleAddExpense}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Add Expense
        </button>
      </div>

      <div className="p-4 bg-white mt-4">
        <h2 className="text-lg font-semibold mb-4">Expense Entries</h2>
        <table className="min-w-full bg-white">
          <thead>
            <tr>
              <th className="py-2">Description</th>
              <th className="py-2">Amount</th>
            </tr>
          </thead>
          <tbody>
            {expenseEntries.map((entry, index) => (
              <tr key={index}>
                <td className="border px-4 py-2">{entry.description}</td>
                <td className="border px-4 py-2">{entry.amount}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AddExpense;

import React, { useState } from "react";

const AddIncome = () => {
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");
  const [incomeEntries, setIncomeEntries] = useState([]);

  const handleAddIncome = () => {
    const newEntry = { description, amount };
    setIncomeEntries([...incomeEntries, newEntry]);
    setDescription("");
    setAmount("");
  };

  return (
    <div>
      <div className="p-4 bg-red-400">
        <h2 className="text-lg font-semibold mb-4">Add Income</h2>
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
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Add Income
        </button>
      </div>

      <div className="p-4 bg-white mt-4">
        <h2 className="text-lg font-semibold mb-4">Income Entries</h2>
        <table className="min-w-full bg-white">
          <thead>
            <tr>
              <th className="py-2">Description</th>
              <th className="py-2">Amount</th>
            </tr>
          </thead>
          <tbody>
            {incomeEntries.map((entry, index) => (
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

export default AddIncome;

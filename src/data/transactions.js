const transactions = {
  1: [
    {
      id: 101,
      item: "Groceries",
      amount: 1500,
      dueDate: "2025-05-10",
      repayments: [{ date: "2025-04-10", amount: 500 }],
    },
  ],
  3: [
    {
      id: 301,
      item: "Furniture",
      amount: 3000,
      dueDate: "2025-04-28", // Overdue
      repayments: [{ date: "2025-04-15", amount: 500 }],
    },
  ],
};

export default transactions;

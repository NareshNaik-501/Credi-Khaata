const TransactionCard = ({ transaction }) => {
  const today = new Date();
  const dueDate = new Date(transaction.dueDate);
  const totalRepaid = transaction.repayments.reduce(
    (acc, curr) => acc + curr.amount,
    0
  );
  const balanceLeft = transaction.amount - totalRepaid;
  const isOverdue = today > dueDate && balanceLeft > 0;

  return (
    <div className="bg-white shadow rounded-lg p-5">
      <h3 className="text-xl font-semibold">{transaction.item}</h3>
      <p className="text-gray-700">Loan Amount: ₹{transaction.amount}</p>
      <p className={`text-gray-700 ${isOverdue && "text-red-500 font-bold"}`}>
        Due: {transaction.dueDate} {isOverdue && "(Overdue)"}
      </p>
      <p className="text-green-600">Repaid: ₹{totalRepaid}</p>
      <p
        className={`font-bold ${
          balanceLeft > 0 ? "text-red-600" : "text-green-600"
        }`}
      >
        Remaining: ₹{balanceLeft}
      </p>

      <h4 className="mt-3 font-semibold text-gray-800">Repayment History:</h4>
      <ul className="list-disc ml-5 text-sm">
        {transaction.repayments.map((repay, idx) => (
          <li key={idx}>
            {repay.date} - ₹{repay.amount}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TransactionCard;

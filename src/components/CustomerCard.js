
import { Link } from "react-router-dom";

const CustomerCard = ({ customer }) => {
  const today = new Date();
  const dueDate = new Date(customer.nextDue);
  const isOverdue = today > dueDate && customer.balance > 0;

  return (
    <Link
      to={`/customer/${customer.id}`}
      className="block p-5 rounded-xl shadow-lg bg-white dark:bg-gray-800 transition-transform duration-300 transform hover:scale-105 hover:shadow-2xl cursor-pointer border border-gray-200 dark:border-gray-700 animate-fadeIn"
    >
      <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">
        {customer.name}
      </h2>
      <p className="text-lg">
        Balance:{" "}
        <span
          className={`${
            customer.balance > 0
              ? "text-red-400 dark:text-red-300"
              : "text-green-600 dark:text-green-400"
          }`}
        >
          ₹{customer.balance}
        </span>
      </p>
      <p
        className={`text-sm mt-1 ${
          isOverdue
            ? "text-red-500 dark:text-red-400 font-bold"
            : "text-gray-600 dark:text-gray-400"
        }`}
      >
        Next Due: {customer.nextDue} {isOverdue && "(Overdue)"}
      </p>
    </Link>
  );
};

export default CustomerCard;

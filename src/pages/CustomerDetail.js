import { useParams } from "react-router-dom";
import customers from "../data/customers";
import transactions from "../data/transactions";
import TransactionCard from "../components/TransactionCard";
import jsPDF from "jspdf";
import { toast } from "react-toastify";
import Button from "../components/Button";

const CustomerDetail = () => {
  const { id } = useParams();
  const customer = customers.find((c) => c.id === parseInt(id));
  const customerTransactions = transactions[id] || [];

  const exportPDF = () => {
    const doc = new jsPDF();

    doc.setFontSize(18);
    doc.text(`Statement for ${customer.name}`, 14, 22);
    doc.setFontSize(12);
    doc.text(`Outstanding Balance: ₹${customer.balance}`, 14, 30);

    let y = 40;
    customerTransactions.forEach((tx, i) => {
      doc.setFontSize(14);
      doc.text(`${i + 1}. ${tx.item}`, 14, y);
      y += 6;
      doc.setFontSize(11);
      doc.text(`Loan Amount: ₹${tx.amount}`, 14, y);
      y += 6;
      doc.text(`Due Date: ${tx.dueDate}`, 14, y);
      y += 6;

      tx.repayments.forEach((r) => {
        doc.text(`Repayment: ₹${r.amount} on ${r.date}`, 16, y);
        y += 6;
      });

      y += 4;
    });

    doc.save(`${customer.name}-statement.pdf`);
    toast.success("PDF Downloaded!");
  };

  if (!customer) return <p className="text-red-600">Customer not found!</p>;

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-gray-800 mb-4">
        {customer.name}'s Transactions
      </h1>
      <p className="mb-6 text-gray-700">
        Outstanding Balance: ₹{customer.balance}
      </p>
      <Button onClick={exportPDF}>📥 Export as PDF</Button>

      <div className="grid gap-4 mt-6">
        {customerTransactions.length > 0 ? (
          customerTransactions.map((tx) => (
            <TransactionCard key={tx.id} transaction={tx} />
          ))
        ) : (
          <p className="text-gray-500">No transactions found.</p>
        )}
      </div>
    </div>
  );
};

export default CustomerDetail;

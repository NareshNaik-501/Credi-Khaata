import { useState } from "react";
import { useForm } from "react-hook-form";
import InputField from "../components/InputField";
import Button from "../components/Button";
import Modal from "../components/Modal";
import { toast } from "react-toastify";

const Forms = () => {
  const [openModal, setOpenModal] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const submitForm = (type, data) => {
    console.log(`${type} submitted:`, data);
    toast.success(`${type} successfully recorded!`);
    reset();
    setOpenModal("");
  };

  return (
    <div className="p-6 bg-white dark:bg-gray-900 min-h-screen text-gray-800 dark:text-white transition-colors duration-300">
      <h1 className="text-3xl font-bold mb-6 text-center">Manage Records</h1>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
        <Button onClick={() => setOpenModal("customer")}>
          ➕ Add Customer
        </Button>
        <Button onClick={() => setOpenModal("loan")}>💳 Add Loan</Button>
        <Button onClick={() => setOpenModal("repayment")}>
          💸 Record Repayment
        </Button>
      </div>

      {/* Add Customer Modal */}
      <Modal
        isOpen={openModal === "customer"}
        title="Add New Customer"
        onClose={() => setOpenModal("")}
      >
        <form onSubmit={handleSubmit((data) => submitForm("Customer", data))}>
          <InputField
            label="Customer Name"
            type="text"
            register={register}
            required="Name required"
            error={errors["customer name"]}
          />
          <InputField
            label="Contact Number"
            type="tel"
            register={register}
            required="Contact required"
            error={errors["contact number"]}
          />
          <Button type="submit">Add Customer</Button>
        </form>
      </Modal>

      {/* Add Loan Modal */}
      <Modal
        isOpen={openModal === "loan"}
        title="Add New Loan"
        onClose={() => setOpenModal("")}
      >
        <form onSubmit={handleSubmit((data) => submitForm("Loan", data))}>
          <InputField
            label="Item Sold"
            type="text"
            register={register}
            required="Item required"
            error={errors["item sold"]}
          />
          <InputField
            label="Loan Amount"
            type="number"
            register={register}
            required="Amount required"
            error={errors["loan amount"]}
          />
          <InputField
            label="Due Date"
            type="date"
            register={register}
            required="Due date required"
            error={errors["due date"]}
          />
          <Button type="submit">Add Loan</Button>
        </form>
      </Modal>

      {/* Record Repayment Modal */}
      <Modal
        isOpen={openModal === "repayment"}
        title="Record Repayment"
        onClose={() => setOpenModal("")}
      >
        <form onSubmit={handleSubmit((data) => submitForm("Repayment", data))}>
          <InputField
            label="Repayment Amount"
            type="number"
            register={register}
            required="Amount required"
            error={errors["repayment amount"]}
          />
          <InputField
            label="Repayment Date"
            type="date"
            register={register}
            required="Date required"
            error={errors["repayment date"]}
          />
          <Button type="submit">Record Repayment</Button>
        </form>
      </Modal>
    </div>
  );
};

export default Forms;

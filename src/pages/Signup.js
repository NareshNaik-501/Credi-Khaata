import { useForm } from "react-hook-form";
import InputField from "../components/InputField";
import Button from "../components/Button";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Signup = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    // Mock signup logic (for real app: send data to API)
    console.log(data);
    toast.success("Account created successfully!");
    navigate("/login");
  };

  return (
    <div className="max-w-md mx-auto bg-white rounded-lg shadow-lg p-8">
      <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">
        Signup
      </h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <InputField
          label="Email"
          type="email"
          register={register}
          required="Email is required"
          error={errors.email}
        />
        <InputField
          label="Password"
          type="password"
          register={register}
          required="Password is required"
          error={errors.password}
        />
        <Button>Sign Up</Button>
      </form>
      <p className="text-sm mt-4 text-center text-gray-600">
        Already have an account?{" "}
        <Link to="/login" className="text-blue-600 hover:underline">
          Login
        </Link>
      </p>
    </div>
  );
};

export default Signup;

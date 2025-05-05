// src/pages/Login.js

import { useForm } from "react-hook-form";
import InputField from "../components/InputField";
import Button from "../components/Button";
import { useNavigate } from "react-router-dom";
import { useContext, useEffect } from "react";
import { AuthContext } from "../context/AuthContext";
import { toast } from "react-toastify";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { user, login } = useContext(AuthContext);
  const navigate = useNavigate();

  // Redirect to dashboard if already logged in
  useEffect(() => {
    if (user && user.email) {
      navigate("/");
    }
  }, [user, navigate]);

  const onSubmit = (data) => {
    const { email, password } = data;

    if (email === "customer@example.com" && password === "password") {
      login({ email });
      toast.success("Login successful");
      // Navigation will be handled automatically via useEffect after user state updates
    } else {
      toast.error("Invalid credentials");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900 px-4 animate-fadeIn">
      <div className="max-w-md w-full bg-white dark:bg-gray-800 rounded-2xl shadow-2xl p-8">
        <h1 className="text-3xl font-bold mb-6 text-center text-gray-800 dark:text-white">
          Login
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
          <Button type="submit">Login</Button>
        </form>
      </div>
    </div>
  );
};

export default Login;


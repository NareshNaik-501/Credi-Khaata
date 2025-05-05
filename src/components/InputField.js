const InputField = ({ label, type, register, required, error }) => {
  return (
    <div className="mb-4">
      <label className="block text-gray-700 mb-1 font-medium">{label}</label>
      <input
        type={type}
        {...register(label.toLowerCase(), { required })}
        className={`w-full px-3 py-2 border ${
          error ? "border-red-500" : "border-gray-300"
        } rounded-md focus:outline-none focus:ring-2 ${
          error ? "focus:ring-red-300" : "focus:ring-blue-300"
        }`}
      />
      {error && <p className="text-red-500 text-sm mt-1">{error.message}</p>}
    </div>
  );
};

export default InputField;

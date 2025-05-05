const Button = ({ children, type = "button", onClick }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className="inline-block px-6 py-2.5 rounded-2xl bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold tracking-wide shadow-md hover:from-purple-500 hover:to-blue-500 hover:shadow-lg transform hover:-translate-y-0.5 active:scale-95 transition-all duration-300 ease-in-out dark:from-blue-400 dark:to-purple-400"
    >
      {children}
    </button>
  );
};

export default Button;

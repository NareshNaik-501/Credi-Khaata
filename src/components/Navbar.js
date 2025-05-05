import { Link, useNavigate } from "react-router-dom";
import useDarkMode from "../hooks/useDarkMode";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const Navbar = () => {
  const [darkMode, toggleDarkMode] = useDarkMode();
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <nav className="bg-gray-900 dark:bg-black text-white shadow-lg">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold">
          📘 CrediKhaata
        </Link>

        <div className="flex items-center gap-4">
          {user && (
            <>
              <Link to="/" className="hover:text-blue-400">Dashboard</Link>
              <Link to="/forms" className="hover:text-blue-400">Forms</Link>
              <button onClick={handleLogout} className="hover:text-red-400">Logout</button>
            </>
          )}
          {!user && (
            <>
              <Link to="/login" className="hover:text-blue-400">Login</Link>
              <Link to="/signup" className="hover:text-blue-400">Signup</Link>
            </>
          )}
          <button
            onClick={toggleDarkMode}
            className="bg-gray-700 hover:bg-gray-600 p-2 rounded-full transition"
          >
            {darkMode ? "🌙" : "☀️"}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

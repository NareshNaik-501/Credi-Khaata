import Navbar from "./Navbar";
import useDarkMode from "../hooks/useDarkMode";

const Layout = ({ children }) => {
  const [darkMode] = useDarkMode();

  return (
    <div
      className={`${
        darkMode ? "dark" : ""
      } flex flex-col min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white transition-all duration-500 animate-fadeIn`}
    >
      <Navbar />
      <main className="container mx-auto px-4 py-6 flex-grow">{children}</main>
      <footer className="bg-gray-800 dark:bg-gray-700 text-white text-sm text-center py-4">
        © 2025 CrediKhaata. All rights reserved.
      </footer>
    </div>
  );
};

export default Layout;

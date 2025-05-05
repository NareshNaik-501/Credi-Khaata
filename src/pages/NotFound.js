const NotFound = () => {
  return (
    <div className="h-screen flex flex-col justify-center items-center bg-gray-100 dark:bg-gray-900 text-gray-700 dark:text-white transition">
      <h1 className="text-6xl font-bold">404</h1>
      <p className="text-xl mt-4">Page Not Found</p>
      <a
        href="/"
        className="mt-6 text-blue-600 hover:underline dark:text-blue-400"
      >
        Go to Dashboard
      </a>
    </div>
  );
};

export default NotFound;

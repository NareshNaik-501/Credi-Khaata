const Modal = ({ isOpen, title, onClose, children }) => {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white dark:bg-gray-800 text-black dark:text-white rounded-lg shadow-lg w-11/12 max-w-md p-6">
        <h2 className="text-2xl font-bold mb-4">{title}</h2>
        {children}
        <button
          className="mt-4 bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded"
          onClick={onClose}
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default Modal;

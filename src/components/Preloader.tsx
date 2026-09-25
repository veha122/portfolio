const Preloader = () => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-white dark:bg-gray-900">
      {/* Spinner */}
      <div className="w-16 h-16 border-4 border-gray-300 border-t-blue-500 rounded-full animate-spin"></div>
      {/* Optional: Text */}
      <span className="sr-only">Loading...</span>
    </div>
  );
};

export default Preloader;
import React from "react";

const Loader = () => (
  <div className="flex items-center justify-center w-full max-w-xs p-4 text-gray-500 bg-white rounded-lg shadow dark:text-gray-400 dark:bg-gray-800">
    <div className="w-8 h-8 text-blue-500 bg-blue-100 rounded-lg flex items-center justify-center">
      <svg
        aria-hidden="true"
        className="w-5 h-5"
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      ></svg>
    </div>
    <div className="ml-3 text-sm font-normal">Done</div>
  </div>
);

export default Loader;

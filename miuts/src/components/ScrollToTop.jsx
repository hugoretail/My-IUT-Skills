import React from "react";
import { FaArrowUp } from "react-icons/fa6";

const ScrollToTop = ({ isVisible }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (!isVisible) {
    return null;
  }

  return (
    <div className="relative flex justify-center mt-4">
      <button
        onClick={scrollToTop}
        className="bg-gray-700 text-white rounded p-3 shadow-md hover:bg-gray-600 hover:scale-110 duration-200 focus:outline-none"
      >
        <FaArrowUp />
      </button>
    </div>
  );
};

export default ScrollToTop;

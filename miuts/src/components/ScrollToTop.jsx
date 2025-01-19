import React from "react";

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
        className="bg-gray-700 text-white rounded p-3 shadow-md hover:bg-gray-600 focus:outline-none"
      >
        ↑
      </button>
    </div>
  );
};

export default ScrollToTop;

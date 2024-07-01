import React, { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";

const ScrollToTop = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    <div className="fixed bottom-6 right-6">
      {visible && (
        <button
          onClick={scrollToTop}
          className="p-2 rounded-md bg-red-300 text-white hover:bg-red-400"
        >
          <FaArrowUp size={24} />
        </button>
      )}
    </div>
  );
};

export default ScrollToTop;

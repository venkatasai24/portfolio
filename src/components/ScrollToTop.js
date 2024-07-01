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
        <button onClick={scrollToTop} className="p-2 bg-red-500 text-white">
          <FaArrowUp
            className="hover:mt-1 hover:-translate-y-1 transform ease-in-out duration-300"
            size={24}
          />
        </button>
      )}
    </div>
  );
};

export default ScrollToTop;

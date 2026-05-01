import React, { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";

const ScrollToTop = () => {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 300);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  if (!visible) return null;
  return (
    <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      style={{
        position: "fixed", bottom: 24, right: 24,
        width: 36, height: 36, borderRadius: 0,
        backgroundColor: "transparent",
        border: "1px solid #211e17",
        color: "#f59e0b",
        display: "flex", alignItems: "center", justifyContent: "center",
        cursor: "pointer", transition: "border-color 0.15s",
      }}
      onMouseEnter={e => (e.currentTarget.style.borderColor = "#f59e0b")}
      onMouseLeave={e => (e.currentTarget.style.borderColor = "#211e17")}>
      <FaArrowUp size={12} />
    </button>
  );
};

export default ScrollToTop;

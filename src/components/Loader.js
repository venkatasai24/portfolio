import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const LINES = [
  { prefix: "$",        text: " init venkatasai.sh" },
  { prefix: "[ OK ]",  text: " runtime loaded"      },
  { prefix: "[ OK ]",  text: " node=ap-south-1"     },
  { prefix: "[ OK ]",  text: " pid=2004 · ready"    },
];

const Loader = ({ onDone }) => {
  const [shown, setShown] = useState(0);

  useEffect(() => {
    const timers = LINES.map((_, i) =>
      setTimeout(() => setShown(i + 1), i * 750)
    );
    const done = setTimeout(onDone, LINES.length * 750 + 400);
    return () => { timers.forEach(clearTimeout); clearTimeout(done); };
  }, [onDone]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.55, ease: "easeOut" }}
      style={{
        position: "fixed", inset: 0, zIndex: 100,
        backgroundColor: "#080807",
        display: "flex", flexDirection: "column",
        alignItems: "center", justifyContent: "center",
      }}>

      <span style={{ fontFamily: "monospace", fontSize: 32, fontWeight: 700, color: "#f59e0b", marginBottom: 32 }}>
        &gt;_
      </span>

      <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
        {LINES.map((line, i) => (
          <motion.div key={i}
            initial={{ opacity: 0, x: -10 }}
            animate={shown > i ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.18 }}
            style={{ display: "flex", gap: 14, fontFamily: "monospace", fontSize: 12 }}>
            <span style={{ color: "#f59e0b", minWidth: 72, textAlign: "center" }}>
              {line.prefix}
            </span>
            <span style={{ color: "#d6d3d1" }}>
              {line.text}
            </span>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Loader;

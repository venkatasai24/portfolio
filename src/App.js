import React, { lazy, Suspense, useState, useCallback } from "react";
import { AnimatePresence } from "framer-motion";
import "./index.css";

import Loader from "./components/Loader";

const Header      = lazy(() => import("./components/Header"));
const About       = lazy(() => import("./components/About"));
const Skills      = lazy(() => import("./components/Skills"));
const Projects    = lazy(() => import("./components/Projects"));
const Contact     = lazy(() => import("./components/Contact"));
const ScrollToTop = lazy(() => import("./components/ScrollToTop"));

function App() {
  const [loading, setLoading]   = useState(true);
  const [ready,   setReady]     = useState(false);
  const handleDone = useCallback(() => setLoading(false), []);
  const handleExit = useCallback(() => setReady(true),   []);

  return (
    <div className="antialiased">
      <AnimatePresence onExitComplete={handleExit}>
        {loading && <Loader onDone={handleDone} />}
      </AnimatePresence>
      <div style={{ visibility: ready ? "visible" : "hidden" }}>
        <Suspense fallback={null}>
          <Header />
          <main>
            <About />
            <Skills />
            <Projects />
            <Contact />
            <ScrollToTop />
          </main>
        </Suspense>
      </div>
    </div>
  );
}

export default App;

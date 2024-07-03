import React, { lazy, Suspense } from "react";
import "./index.css";

const Header = lazy(() => import("./components/Header"));
const About = lazy(() => import("./components/About"));
const Skills = lazy(() => import("./components/Skills"));
const Projects = lazy(() => import("./components/Projects"));
const Contact = lazy(() => import("./components/Contact"));
const ScrollToTop = lazy(() => import("./components/ScrollToTop"));

function App() {
  return (
    <div className="font-nunito-sans antialiased text-gray-900">
      <Suspense
        fallback={
          <div className="loader-overlay">
            <div className="loader"></div>
          </div>
        }
      >
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
  );
}

export default App;

import React from "react";
import Header from "./components/Header";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import ScrollToTop from "./components/ScrollToTop";
import "./index.css"; // Import your custom CSS file

function App() {
  return (
    <div className="font-nunito-sans antialiased text-gray-900">
      <Header />
      <main>
        <About />
        <Skills />
        <Projects />
        <Contact />
        <ScrollToTop />
      </main>
    </div>
  );
}

export default App;

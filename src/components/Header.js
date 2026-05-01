import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

const navLinks = ["about", "skills", "projects", "contact"];
const NAV_H = 52;
const B = "1px solid #211e17";

const Header = () => {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("about");

  useEffect(() => {
    const onScroll = () => {
      if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 8) {
        setActive(navLinks[navLinks.length - 1]);
        return;
      }
      const scrollPos = window.scrollY + NAV_H + 10;
      let current = navLinks[0];
      for (const id of navLinks) {
        const el = document.getElementById(id);
        if (el && el.offsetTop <= scrollPos) current = id;
      }
      setActive(current);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 50,
        height: NAV_H, borderBottom: B,
        backgroundColor: "rgba(8,8,7,0.93)",
        backdropFilter: "blur(14px)", WebkitBackdropFilter: "blur(14px)",
      }}>
        <div className="px-5 md:px-10" style={{ height: "100%", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <span style={{ fontFamily: "monospace", color: "#f59e0b", fontWeight: 700, fontSize: 15 }}>&gt;_</span>
          <nav className="hidden md:flex" style={{ alignItems: "center", gap: 32 }}>
            {navLinks.map(link => (
              <Link key={link} to={link} smooth duration={500} offset={-NAV_H}
                className={`nav-link${active === link ? " nav-active" : ""}`}
                style={{ cursor: "pointer" }}>
                {link.toUpperCase()}
              </Link>
            ))}
            <div style={{ width: 1, height: 16, backgroundColor: "#211e17", margin: "0 4px" }} />
            <a href="https://github.com/venkatasai24" target="_blank" rel="noopener noreferrer" className="nav-icon"><FaGithub size={15} /></a>
            <a href="https://www.linkedin.com/in/venkata-sai-vedurupaka" target="_blank" rel="noopener noreferrer" className="nav-icon"><FaLinkedin size={15} /></a>
            <a href="mailto:venkatasai24042004@gmail.com" className="nav-icon"><SiGmail size={14} /></a>
          </nav>
          <button className="md:hidden" onClick={() => setOpen(!open)}
            style={{ color: "#6b6455", background: "none", border: "none", cursor: "pointer", fontSize: 18 }}>
            {open ? "✕" : "☰"}
          </button>
        </div>
      </header>
      {open && (
        <div className="md:hidden" style={{
          position: "fixed", top: NAV_H, left: 0, right: 0, bottom: 0, zIndex: 49,
          backgroundColor: "#080807",
          display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 28,
        }}>
          {navLinks.map(link => (
            <Link key={link} to={link} smooth duration={500} offset={-NAV_H} onClick={() => setOpen(false)}
              style={{ fontSize: 22, color: "#f5ede0", letterSpacing: "0.18em", fontFamily: "monospace", cursor: "pointer", textTransform: "uppercase" }}>
              {link}
            </Link>
          ))}
        </div>
      )}
    </>
  );
};

export default Header;

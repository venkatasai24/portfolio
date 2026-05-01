import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-scroll";

const B = "1px solid #211e17";

const Stat = ({ k, v, accent }) => (
  <div style={{ display: "flex", alignItems: "baseline" }}>
    <span style={{ fontFamily: "monospace", fontSize: 11, color: "#6b6455", minWidth: 72, flexShrink: 0 }}>{k}</span>
    <span style={{ fontSize: 13, color: accent ? "#f59e0b" : "#a8a29e", fontWeight: accent ? 500 : 400 }}>{v}</span>
  </div>
);

const Cursor = () => {
  const [on, setOn] = useState(true);
  useEffect(() => { const id = setInterval(() => setOn(v => !v), 530); return () => clearInterval(id); }, []);
  return <span style={{ color: "#f59e0b", opacity: on ? 1 : 0 }}>▊</span>;
};

const sysInfo = [
  { k: "PID",    v: "2004"        },
  { k: "NODE",   v: "ap-south-1"  },
  { k: "UPTIME", v: `${new Date().getFullYear() - 2004}yr` },
  { k: "CPU",    v: "0.1%"        },
  { k: "MEM",    v: "512mi"       },
  { k: "STATUS", v: "healthy", accent: true },
];

const About = () => {
  const [tick, setTick] = useState("");
  useEffect(() => {
    const run = () => setTick(new Date().toLocaleTimeString("en-US", { hour12: false }));
    run();
    const id = setInterval(run, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <section id="about"
      style={{ minHeight: "100vh", paddingTop: 52, borderBottom: B, backgroundColor: "#080807", display: "flex", flexDirection: "column" }}>

      <div className="flex flex-col md:flex-row" style={{ flex: 1 }}>
        {/* Left */}
        <motion.div className="md:flex-1"
          style={{ padding: "48px 40px", borderRight: B, display: "flex", flexDirection: "column", justifyContent: "space-between" }}
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease: "easeOut" }}>
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 36 }}>
              <span style={{ width: 6, height: 6, borderRadius: "50%", backgroundColor: "#f59e0b", display: "inline-block", boxShadow: "0 0 8px #f59e0b" }} />
              <span style={{ fontFamily: "monospace", fontSize: 10, letterSpacing: "0.16em", color: "#f59e0b" }}>SYSTEM ONLINE</span>
            </div>

            <p style={{ fontFamily: "monospace", fontSize: 11, letterSpacing: "0.18em", color: "#78716c", marginBottom: 28 }}>
              $ whoami&nbsp;<Cursor />
            </p>

            <h1 style={{ fontSize: "clamp(3.8rem, 11vw, 8.5rem)", fontWeight: 900, lineHeight: 0.87, letterSpacing: "-0.035em", color: "#f5ede0", marginBottom: 20 }}>
              Venkata<br />
              <span style={{ color: "#f59e0b" }}>Sai.</span>
            </h1>

            <p style={{ fontSize: "clamp(0.9rem, 1.4vw, 1.05rem)", color: "#78716c", lineHeight: 1.8 }}>
              Backend engineer. I build distributed systems, ship
              production observability, and design APIs that hold under
              load. Strong bias toward understanding systems from the
              inside out — traces, metrics, and why things fail.
            </p>
          </div>

          <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginTop: 40 }}>
            <Link to="projects" spy smooth duration={500} offset={-52}
              style={{ padding: "10px 20px", fontSize: 12, fontWeight: 600, borderRadius: 0, backgroundColor: "#f59e0b", color: "#080807", cursor: "pointer", fontFamily: "monospace" }}
              onMouseEnter={e => (e.currentTarget.style.backgroundColor = "#d97706")}
              onMouseLeave={e => (e.currentTarget.style.backgroundColor = "#f59e0b")}>
              ./projects
            </Link>
            <a href="https://drive.google.com/file/d/1120kuU0KZCbaGno7ePDLGTfin8oGLPhY/view"
              target="_blank" rel="noopener noreferrer"
              style={{ padding: "10px 20px", fontSize: 12, fontWeight: 600, borderRadius: 0, border: "1px solid #3d3829", color: "#a8a29e", fontFamily: "monospace" }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = "#f59e0b"; e.currentTarget.style.color = "#fcd34d"; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = "#3d3829"; e.currentTarget.style.color = "#a8a29e"; }}>
              ./resume
            </a>
          </div>
        </motion.div>

        {/* Right */}
        <motion.div className="md:w-2/5"
          style={{ padding: "48px 40px", display: "flex", flexDirection: "column", justifyContent: "space-between" }}
          initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}>
          <div>
            <p style={{ fontFamily: "monospace", fontSize: 10, letterSpacing: "0.16em", color: "#78716c", paddingBottom: 12, marginBottom: 22, borderBottom: B }}>
              PROCESS INFO
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              <Stat k="role"   v="SDE-1 @ Increff"          accent />
              <Stat k="edu"    v="NIT Calicut · B.Tech CSE"       />
              <Stat k="loc"    v="Andhra Pradesh, India"          />
              <Stat k="status" v="open_to_opportunities"     accent />
              <Stat k="prev"   v="Apvin Labs · Increff (intern)"  />
            </div>
          </div>

          <div style={{ fontFamily: "monospace", fontSize: 10, lineHeight: 2.2, marginTop: 32 }}>
            {sysInfo.map(({ k, v, accent }) => (
              <span key={k} style={{ marginRight: 16, whiteSpace: "nowrap" }}>
                <span style={{ color: "#78716c" }}>{k}=</span>
                <span style={{ color: accent ? "#f59e0b" : "#a8a29e" }}>{v}</span>
              </span>
            ))}
            <span style={{ color: "#6b6455" }}>{tick}</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;

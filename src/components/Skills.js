import React from "react";
import { motion } from "framer-motion";

const B = "1px solid #211e17";

const rows = [
  { label: "LANGUAGES",     items: ["C++", "Python", "JavaScript", "Java"],              accent: false },
  { label: "BACKEND",       items: ["FastAPI", "Node.js", "Express", "Flask", "Spring"], accent: true  },
  { label: "FRONTEND",      items: ["React", "Tailwind CSS"],                             accent: false },
  { label: "DATABASES",     items: ["MongoDB", "SQL", "ClickHouse", "Neo4j"],            accent: true  },
  { label: "INFRA & CLOUD", items: ["Docker", "Kubernetes", "GCP", "Kafka"],             accent: true  },
  { label: "OBSERVABILITY", items: ["Prometheus", "OpenTelemetry", "Grafana"],           accent: true  },
];

const Pill = ({ label, accent }) => (
  <span style={{
    fontFamily: "monospace", fontSize: 12, padding: "3px 10px",
    border: `1px solid ${accent ? "#7c2d12" : "#211e17"}`,
    backgroundColor: accent ? "#1a0f00" : "#0e0d0b",
    color: accent ? "#fcd34d" : "#78716c",
    whiteSpace: "nowrap",
  }}>
    {label}
  </span>
);

const Skills = () => (
  <section id="skills" style={{ backgroundColor: "#080807", borderBottom: B }}>
    <div className="px-5 md:px-10" style={{ paddingTop: 22, paddingBottom: 22 }}>
      <span style={{ fontFamily: "monospace", fontSize: 10, letterSpacing: "0.18em", color: "#78716c" }}>
        &gt; TECHNOLOGIES
      </span>
    </div>

    {rows.map((row, i) => (
      <motion.div key={row.label}
        className="px-5 md:px-10" style={{ display: "flex", alignItems: "center", paddingTop: 18, paddingBottom: 18 }}
        initial={{ opacity: 0, x: -12 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.35, delay: i * 0.06 }}
      >
        <span className="skill-label" style={{ fontFamily: "monospace", fontSize: 10, letterSpacing: "0.14em", color: row.accent ? "#f59e0b" : "#78716c", minWidth: 140, flexShrink: 0 }}>
          {row.label}
        </span>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
          {row.items.map(item => <Pill key={item} label={item} accent={row.accent} />)}
        </div>
      </motion.div>
    ))}
  </section>
);

export default Skills;

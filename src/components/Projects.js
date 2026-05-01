import React from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { motion } from "framer-motion";

const B = "1px solid #211e17";

const containers = [
  // { id: "a3f2b891", image: "obs-platform:latest", ports: "0.0.0.0:443->8000/tcp",
  //   title: "Observability Platform",
  //   desc: "Production-grade observability stack built from scratch. Instruments distributed traces via OpenTelemetry collector, stores metrics in ClickHouse for sub-second OLAP queries, and streams events through Kafka. Implements multi-window burn-rate SLO alerting, statistical anomaly detection on time-series data, and Slack webhook notifications. FastAPI backend with async ClickHouse queries; React dashboard with live charts. Deployed on GCP with DDNS.",
  //   stack: ["FastAPI", "React", "ClickHouse", "Kafka", "Prometheus", "OTel", "GCP"],
  //   github: "https://github.com/venkatasai24/observability", live: "https://venkatasai-obs.ddns.net", status: "running" },
  { id: "e7c4d209", image: "interview-ui:v2.1", ports: "0.0.0.0:443->3000/tcp",
    title: "UI — Interview Experiences",
    desc: "Community platform to share and discover interview experiences across companies. Features JWT-based auth, role-based access, bookmarking, and full-text search with tag and company filters. Posts support markdown with syntax highlighting for code snippets. MongoDB aggregation pipelines back the search and feed ranking.",
    stack: ["React", "Node.js", "MongoDB", "JWT"],
    github: "https://github.com/venkatasai24/UI", live: "https://ui-vs.vercel.app", status: "running" },
  { id: "b8a1f356", image: "ecommerce-api:v1.4", ports: "0.0.0.0:443->3000/tcp",
    title: "E-Commerce Platform",
    desc: "Full-stack storefront with JWT auth and refresh-token rotation, Stripe checkout integration, and dynamic product catalog with multi-parameter filtering and sorting. Real-time cart state synced across tabs, order lifecycle management with status tracking, and an admin panel for inventory and order ops.",
    stack: ["React", "Node.js", "MongoDB", "Stripe"],
    github: "https://github.com/venkatasai24/Ecommerce", live: "https://ecommerce-vs.vercel.app/login", status: "running" },
  { id: "c2d9e074", image: "bbms-app:v1.0", ports: "0.0.0.0:80->80/tcp",
    title: "Blood Bank Management",
    desc: "Web app for managing blood donations across a college campus. Donors can register, declare blood group, and schedule donation slots. Recipients search available units by type and urgency. Admins manage inventory, donor records, and request fulfilment — all backed by a normalized MySQL schema.",
    stack: ["HTML", "CSS", "JavaScript", "MySQL"],
    github: "https://github.com/venkatasai24/Blood-Bank-Management-System", live: "https://bbms-nitc.000webhostapp.com/", status: "running" },
  { id: "f5a3b128", image: "face-recog:v1.0", ports: "—",
    title: "Face Recognition Attendance",
    desc: "Automated attendance system using a fine-tuned VGG19 CNN trained on a custom face dataset. OpenCV handles real-time camera feed, face detection, and frame preprocessing. The model runs inference per frame, matches against enrolled embeddings, and logs timestamped attendance records to CSV. Achieved 93% recognition accuracy on the test set.",
    stack: ["Python", "TensorFlow", "OpenCV"],
    github: "https://github.com/venkatasai24/Face-Recognition-Attendance-System/", live: null, status: "exited" },
  { id: "d6e8c093", image: "sort-viz:v1.2", ports: "0.0.0.0:443->3000/tcp",
    title: "Sorting Visualizer",
    desc: "Interactive visualizer for classic sorting algorithms — bubble, selection, insertion, merge, and quick sort. Renders live bar animations with color-coded comparisons and swaps. Adjustable array size and animation speed let users observe algorithmic behaviour at different scales.",
    stack: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/venkatasai24/Sorting-Visualizer/", live: "https://sorting-visualizer-3bxs.onrender.com/", status: "running" },
];

const COL = "100px 160px 1fr 140px 64px";

const Tag = ({ t }) => (
  <span style={{
    fontFamily: "monospace", fontSize: 10, padding: "2px 7px",
    backgroundColor: "#1a0f00", color: "#fcd34d", border: "1px solid #7c2d12", whiteSpace: "nowrap",
  }}>{t}</span>
);

const Row = ({ c, i }) => {
  const running = c.status === "running";

  return (
    <motion.div style={{ borderBottom: B }}
      initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }} transition={{ duration: 0.35, delay: i * 0.06 }}>

      <div className="proj-row-grid px-5 sm:px-10" style={{ paddingTop: 14, paddingBottom: 14 }}>
        <span className="hidden sm:block" style={{ fontFamily: "monospace", fontSize: 11, color: "#6b6455" }}>{c.id}</span>
        <span className="hidden sm:block" style={{ fontFamily: "monospace", fontSize: 11, color: "#78716c", paddingRight: 12, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{c.image}</span>
        <span style={{ fontSize: 13, fontWeight: 600, color: "#f5ede0", paddingRight: 16, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{c.title}</span>

        <div className="hidden sm:flex" style={{ alignItems: "center", gap: 6 }}>
          <span style={{ width: 5, height: 5, borderRadius: "50%", flexShrink: 0, backgroundColor: running ? "#f59e0b" : "#3d3829", boxShadow: running ? "0 0 5px #f59e0b" : "none" }} />
          <span style={{ fontFamily: "monospace", fontSize: 10, color: running ? "#f59e0b" : "#6b6455", whiteSpace: "nowrap" }}>
            {running ? "running" : "exited (0)"}
          </span>
        </div>

        <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
          {c.github && (
            <a href={c.github} target="_blank" rel="noopener noreferrer" style={{ color: "#6b6455" }}
              onMouseEnter={e => (e.currentTarget.style.color = "#a8a29e")}
              onMouseLeave={e => (e.currentTarget.style.color = "#6b6455")}>
              <FaGithub size={13} />
            </a>
          )}
          {c.live && (
            <a href={c.live} target="_blank" rel="noopener noreferrer" style={{ color: "#6b6455" }}
              onMouseEnter={e => (e.currentTarget.style.color = "#f59e0b")}
              onMouseLeave={e => (e.currentTarget.style.color = "#6b6455")}>
              <FaExternalLinkAlt size={12} />
            </a>
          )}
        </div>
      </div>

      <div className="px-5 sm:px-10" style={{ paddingBottom: 18 }}>
        <p style={{ fontSize: 13, color: "#78716c", lineHeight: 1.85, marginBottom: 12 }}>{c.desc}</p>
        <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "10px 24px" }}>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
            {c.stack.map(t => <Tag key={t} t={t} />)}
          </div>
          <span style={{ fontFamily: "monospace", fontSize: 10, color: "#78716c", marginLeft: "auto" }}>
            PORTS&nbsp;&nbsp;<span style={{ color: "#a8a29e" }}>{c.ports}</span>
          </span>
        </div>
      </div>
    </motion.div>
  );
};

const Projects = () => (
  <section id="projects" style={{ backgroundColor: "#080807", borderBottom: B }}>
    <div className="px-5 md:px-10" style={{ paddingTop: 22, paddingBottom: 22, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
      <span style={{ fontFamily: "monospace", fontSize: 10, letterSpacing: "0.18em", color: "#6b6455" }}>&gt; WORK</span>
      <span style={{ fontFamily: "monospace", fontSize: 10, color: "#57534e" }}>$ docker ps -a</span>
    </div>

    <div className="hidden sm:grid px-5 sm:px-10" style={{ gridTemplateColumns: COL, paddingTop: 9, paddingBottom: 9, gap: 0 }}>
      {["CONTAINER ID", "IMAGE", "NAME", "STATUS", "LINKS"].map((h, i) => (
        <span key={i} style={{ fontFamily: "monospace", fontSize: 9, color: "#78716c", letterSpacing: "0.1em" }}>{h}</span>
      ))}
    </div>

    {containers.map((c, i) => <Row key={c.id} c={c} i={i} />)}
  </section>
);

export default Projects;

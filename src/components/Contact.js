import React, { useRef, useState } from "react";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import { motion } from "framer-motion";
import emailjs from "emailjs-com";
import toast, { Toaster } from "react-hot-toast";
import { SiCodechef, SiCodeforces, SiGmail, SiLeetcode } from "react-icons/si";

const B = "1px solid #211e17";

const socialLinks = [
  { href: "mailto:venkatasai24042004@gmail.com",                icon: SiGmail,      label: "venkatasai24042004@gmail.com",           hoverColor: "#ef4444" },
  { href: "https://github.com/venkatasai24",                    icon: FaGithub,     label: "github.com/venkatasai24",                hoverColor: "#f5ede0" },
  { href: "https://www.linkedin.com/in/venkata-sai-vedurupaka", icon: FaLinkedin,   label: "linkedin.com/in/venkata-sai-vedurupaka", hoverColor: "#0a66c2" },
  { href: "https://leetcode.com/u/venkatasai24/",               icon: SiLeetcode,   label: "leetcode.com/u/venkatasai24",            hoverColor: "#fbbf24" },
  { href: "https://codeforces.com/profile/venkatasai_2004",     icon: SiCodeforces, label: "codeforces.com/venkatasai_2004",         hoverColor: "#60a5fa" },
  { href: "https://codechef.com/users/venkatsai_2004",          icon: SiCodechef,   label: "codechef.com/venkatsai_2004",            hoverColor: "#a16207" },
  { href: "https://www.instagram.com/venkatasai__24",           icon: FaInstagram,  label: "@venkatasai__24",                        hoverColor: "#ec4899" },
];

const SocialRow = ({ href, icon: Icon, label, hoverColor }) => {
  const [h, setH] = useState(false);
  return (
    <a href={href} target="_blank" rel="noopener noreferrer"
      style={{ display: "flex", alignItems: "center", gap: 12 }}
      onMouseEnter={() => setH(true)} onMouseLeave={() => setH(false)}>
      <Icon size={13} style={{ color: h ? hoverColor : "#6b6455", transition: "color 0.2s", flexShrink: 0 }} />
      <span style={{ fontSize: 12, fontFamily: "monospace", color: h ? "#a8a29e" : "#78716c", transition: "color 0.2s", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
        {label}
      </span>
    </a>
  );
};

const fieldStyle = {
  backgroundColor: "#0e0d0b",
  border: "1px solid #211e17",
  color: "#f5ede0",
  borderRadius: 0,
  width: "100%",
  padding: "10px 14px",
  fontSize: 13,
  outline: "none",
  fontFamily: "inherit",
  transition: "border-color 0.2s",
};

const Contact = () => {
  const form = useRef();
  const [loading, setLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);
    emailjs
      .sendForm(process.env.REACT_APP_SERVER_ID, process.env.REACT_APP_TEMPLATE_ID, form.current, process.env.REACT_APP_PUBLIC_ID)
      .then(
        (r) => { console.log(r.text); toast.success("Message sent!"); setLoading(false); },
        (e) => { console.log(e.text); toast.error("Failed. Try again."); setLoading(false); }
      );
    e.target.reset();
  };

  return (
    <section id="contact" style={{ backgroundColor: "#080807" }}>
      <Toaster position="top-right" toastOptions={{
        style: { background: "#0e0d0b", color: "#f5ede0", border: "1px solid #211e17", fontSize: 13 },
      }} />

      <div className="px-5 md:px-10" style={{ paddingTop: 22, paddingBottom: 22 }}>
        <span style={{ fontFamily: "monospace", fontSize: 10, letterSpacing: "0.18em", color: "#78716c" }}>&gt; GET IN TOUCH</span>
      </div>

      <div className="flex flex-col md:flex-row">
        <motion.div className="md:w-2/5 px-5 md:px-10 rr-border"
          style={{ paddingTop: 32, paddingBottom: 32 }}
          initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
          <p style={{ fontFamily: "monospace", fontSize: 10, letterSpacing: "0.16em", color: "#78716c", marginBottom: 20 }}>ENDPOINTS</p>
          <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
            {socialLinks.map(s => <SocialRow key={s.label} {...s} />)}
          </div>
        </motion.div>

        <motion.div className="md:flex-1 px-5 md:px-10"
          style={{ paddingTop: 32, paddingBottom: 32 }}
          initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
          <div style={{ marginBottom: 20 }}>
            <p style={{ fontFamily: "monospace", fontSize: 11, color: "#57534e", marginBottom: 4 }}>
              <span style={{ color: "#f59e0b" }}>POST</span>{" "}
              <span style={{ color: "#a8a29e" }}>/api/connect</span>{" "}
              <span style={{ color: "#78716c" }}>HTTP/1.1</span>
            </p>
            <p style={{ fontFamily: "monospace", fontSize: 10, color: "#78716c" }}>Content-Type: application/json</p>
          </div>

          <form ref={form} onSubmit={sendEmail} style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            {[{ name: "name", type: "text", label: '"name"' }, { name: "email", type: "email", label: '"email"' }].map(({ name, type, label }) => (
              <div key={name}>
                <p style={{ fontFamily: "monospace", fontSize: 10, color: "#a8a29e", marginBottom: 4 }}>{label}</p>
                <input type={type} name={name} required style={fieldStyle}
                  onFocus={e => (e.target.style.borderColor = "#f59e0b")}
                  onBlur={e  => (e.target.style.borderColor = "#211e17")} />
              </div>
            ))}
            <div>
              <p style={{ fontFamily: "monospace", fontSize: 10, color: "#a8a29e", marginBottom: 4 }}>"message"</p>
              <textarea name="message" required rows={5} style={fieldStyle}
                onFocus={e => (e.target.style.borderColor = "#f59e0b")}
                onBlur={e  => (e.target.style.borderColor = "#211e17")} />
            </div>
            <button type="submit" disabled={loading}
              style={{
                padding: "10px 24px", fontSize: 12, fontWeight: 600, borderRadius: 0,
                backgroundColor: "transparent",
                border: "1px solid #f59e0b",
                color: "#f59e0b",
                cursor: "pointer", alignSelf: "flex-start",
                opacity: loading ? 0.5 : 1, transition: "all 0.2s",
                fontFamily: "monospace", marginTop: 4,
              }}
              onMouseEnter={e => { if (!loading) { e.currentTarget.style.backgroundColor = "#f59e0b"; e.currentTarget.style.color = "#080807"; }}}
              onMouseLeave={e => { e.currentTarget.style.backgroundColor = "transparent"; e.currentTarget.style.color = "#f59e0b"; }}>
              {loading ? "sending..." : "send_request()"}
            </button>
          </form>
        </motion.div>
      </div>

      <footer className="px-5 md:px-10" style={{ textAlign: "center", paddingTop: 18, paddingBottom: 18, borderTop: B, color: "#78716c", fontSize: 11, fontFamily: "monospace" }}>
        exit(0); &nbsp;·&nbsp; venkatasai · {new Date().getFullYear()}
      </footer>
    </section>
  );
};

export default Contact;

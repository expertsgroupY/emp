"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function Home() {
  const [lang, setLang] = useState("en");

  const t = {
    en: {
      title: "Experts Group",
      subtitle: "ERP & Financial Systems",
      about:
        "Leading ERP solutions provider in Egypt since 2000 helping businesses grow with technology.",
      services: [
        "ERP Systems",
        "Financial Solutions",
        "Logistics Systems",
        "Industrial Systems",
        "Consulting"
      ],
      contact: "Contact on WhatsApp"
    },
    ar: {
      title: "اكسبيرتس جروب",
      subtitle: "أنظمة ERP والحلول المالية",
      about:
        "شركة رائدة في حلول ERP في مصر منذ عام 2000 لمساعدة الشركات على النمو بالتكنولوجيا.",
      services: [
        "أنظمة ERP",
        "الحلول المالية",
        "أنظمة اللوجستيات",
        "الأنظمة الصناعية",
        "استشارات"
      ],
      contact: "تواصل عبر واتساب"
    }
  };

  return (
    <div style={{ textAlign: "center", padding: "40px" }}>

      {/* Language Toggle */}
      <button
        onClick={() => setLang(lang === "en" ? "ar" : "en")}
        style={{
          marginBottom: "20px",
          padding: "10px 20px",
          borderRadius: "8px",
          background: "#2563eb",
          color: "white",
          border: "none"
        }}
      >
        {lang === "en" ? "AR" : "EN"}
      </button>

      {/* Hero */}
      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        style={{ fontSize: "48px" }}
      >
        {t[lang].title}
      </motion.h1>

      <p style={{ color: "#94a3b8" }}>{t[lang].subtitle}</p>

      {/* About */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        style={{ maxWidth: "600px", margin: "20px auto" }}
      >
        {t[lang].about}
      </motion.p>

      {/* Services */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(200px,1fr))",
          gap: "20px",
          marginTop: "40px"
        }}
      >
        {t[lang].services.map((s, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.05 }}
            style={{
              background: "#1e293b",
              padding: "20px",
              borderRadius: "12px"
            }}
          >
            {s}
          </motion.div>
        ))}
      </div>

      {/* WhatsApp */}
      <a
        href="https://wa.me/201065539244"
        target="_blank"
        style={{
          display: "inline-block",
          marginTop: "40px",
          padding: "12px 25px",
          background: "green",
          color: "white",
          borderRadius: "10px",
          textDecoration: "none"
        }}
      >
        {t[lang].contact}
      </a>
    </div>
  );
}
import React, { useState, useRef } from "react";
import AuthPage from "./Authpage";

const Home = () => {
  const [user, setUser] = useState(null);
  const [search, setSearch] = useState("");
  const [showAuth, setShowAuth] = useState(false);
  const [authRole, setAuthRole] = useState("user");
  const [startOnRegister, setStartOnRegister] = useState(false);

  /* ===== REFS ===== */
  const howItWorksRef = useRef(null);

  /* ===== DATA ===== */
  const categories = [
    "Engine Parts",
    "Brake System",
    "Electrical",
    "Suspension",
    "Body Parts",
    "Accessories",
  ];

  const steps = [
    { title: "Search Parts", desc: "Find parts easily", icon: "🔍" },
    { title: "Compare Dealers", desc: "Best offers", icon: "🤝" },
    { title: "Buy or Request", desc: "Fast delivery", icon: "🚚" },
  ];

  /* ===== HANDLERS ===== */
  const handleSearch = () => {
    if (!search.trim()) {
      alert("Please enter part name or category");
      return;
    }
    alert(`Searching for: ${search}`);
  };

  const openLogin = () => {
    setAuthRole("user");
    setStartOnRegister(false);
    setShowAuth(true);
  };

  const openDealer = () => {
    setAuthRole("dealer");
    setStartOnRegister(true);
    setShowAuth(true);
  };

  const selectCategory = (cat) => {
    setSearch(cat);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollToHowItWorks = () => {
    howItWorksRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  /* ===== STYLES ===== */
  const styles = {
    page: { fontFamily: "Segoe UI", background: "#f5f7fa" },

    navbar: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "14px 40px",
      background: "#020617",
      color: "#fff",
      position: "sticky",
      top: 0,
      zIndex: 100,
    },

    navLeft: {
      fontSize: "1.5rem",
      color: "#38bdf8",
      fontWeight: 700,
    },

    navRight: {
      display: "flex",
      alignItems: "center",
      gap: 18,
    },

    navLink: {
      background: "transparent",
      border: "none",
      color: "#fff",
      cursor: "pointer",
      fontSize: 15,
    },

    navBtn: {
      padding: "8px 18px",
      borderRadius: "20px",
      border: "none",
      cursor: "pointer",
      background: "#38bdf8",
      fontWeight: 600,
    },

    hero: {
      padding: "110px 20px",
      textAlign: "center",
      background:
        "linear-gradient(135deg, #020617, #0f172a, #020617)",
      color: "#fff",
    },

    searchBox: {
      padding: "15px 22px",
      width: "340px",
      borderRadius: "30px",
      border: "none",
      outline: "none",
    },

    heroBtns: {
      marginTop: 20,
      display: "flex",
      gap: 14,
      justifyContent: "center",
    },

    secondaryBtn: {
      padding: "10px 20px",
      borderRadius: "20px",
      background: "transparent",
      border: "1px solid #38bdf8",
      color: "#38bdf8",
      cursor: "pointer",
    },

    section: { padding: "70px 40px" },

    grid: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
      gap: 25,
    },

    card: {
      background: "#fff",
      padding: 28,
      borderRadius: 18,
      textAlign: "center",
      cursor: "pointer",
      boxShadow: "0 15px 30px rgba(0,0,0,0.08)",
    },

    dealerBox: {
      background: "linear-gradient(135deg,#4f46e5,#6366f1)",
      color: "#fff",
      padding: "70px 40px",
      textAlign: "center",
      borderRadius: 25,
      margin: 40,
    },

    footer: {
      background: "#020617",
      color: "#cbd5f5",
      padding: 30,
      textAlign: "center",
    },
  };

  return (
    <div style={styles.page}>
      {/* ===== NAVBAR ===== */}
      <nav style={styles.navbar}>
        <div style={styles.navLeft}>CarMarketPlace</div>

        <div style={styles.navRight}>
          <button style={styles.navLink} onClick={scrollToHowItWorks}>
            How It Works
          </button>

          {!user && (
            <button style={styles.navBtn} onClick={openLogin}>
              Login / Register
            </button>
          )}
        </div>
      </nav>

      {/* ===== HERO ===== */}
      <section style={styles.hero}>
        <h1>Find Genuine Auto Parts Instantly</h1>
        <p>Search, compare and buy auto parts</p>

        <input
          style={styles.searchBox}
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search part, vehicle or OEM"
        />

        <div style={styles.heroBtns}>
          <button style={styles.navBtn} onClick={handleSearch}>
            Search Parts
          </button>
          <button style={styles.secondaryBtn} onClick={openDealer}>
            Become a Dealer
          </button>
        </div>
      </section>

      {/* ===== CATEGORIES ===== */}
      <section style={styles.section}>
        <h2 style={{ textAlign: "center" }}>Popular Categories</h2>
        <div style={styles.grid}>
          {categories.map((cat, i) => (
            <div
              key={i}
              style={styles.card}
              onClick={() => selectCategory(cat)}
            >
              🚗
              <h3>{cat}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* ===== HOW IT WORKS ===== */}
      <section style={styles.section} ref={howItWorksRef}>
        <h2 style={{ textAlign: "center" }}>How It Works</h2>
        <div style={styles.grid}>
          {steps.map((step, i) => (
            <div style={styles.card} key={i}>
              <div style={{ fontSize: "2rem" }}>{step.icon}</div>
              <h3>{step.title}</h3>
              <p>{step.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ===== DEALER CTA ===== */}
      <div style={styles.dealerBox}>
        <h2>Are You an Auto Parts Dealer?</h2>
        <p>Grow your business online</p>
        <button style={styles.navBtn} onClick={openDealer}>
          Join as Dealer
        </button>
      </div>

      {/* ===== FOOTER ===== */}
      <footer style={styles.footer}>
        © 2025 CarMarketPlace · All rights reserved
      </footer>

      {/* ===== AUTH MODAL ===== */}
      {showAuth && (
        <div className="modal-backdrop">
          <AuthPage
            role={authRole}
            startOnRegister={startOnRegister}
            onClose={() => setShowAuth(false)}
          />
        </div>
      )}
    </div>
  );
};

export default Home;

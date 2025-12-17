import React, { useState } from "react";

const Home = () => {
  // 🔹 Dynamic States (future backend ready)
  const [user, setUser] = useState(null);
  const [search, setSearch] = useState("");
  const [requests, setRequests] = useState([]);

  const styles = {
    page: {
      fontFamily: "Segoe UI, sans-serif",
      backgroundColor: "#f5f7fa",
      minHeight: "100vh",
    },

    /* ---------- NAVBAR ---------- */
    navbar: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "15px 40px",
      backgroundColor: "#0f172a",
      color: "#fff",
      position: "sticky",
      top: 0,
      zIndex: 10,
    },

    logo: {
      fontSize: "1.6rem",
      fontWeight: "bold",
      color: "#38bdf8",
    },

    navActions: {
      display: "flex",
      gap: "15px",
    },

    navBtn: {
      padding: "8px 18px",
      borderRadius: "20px",
      border: "none",
      cursor: "pointer",
      fontSize: "0.9rem",
    },

    loginBtn: {
      backgroundColor: "#38bdf8",
      color: "#000",
    },

    signupBtn: {
      backgroundColor: "transparent",
      color: "#fff",
      border: "1px solid #38bdf8",
    },

    /* ---------- HERO ---------- */
    hero: {
      padding: "90px 20px",
      textAlign: "center",
      background:
        "linear-gradient(135deg, #020617, #0f172a, #020617)",
      color: "#fff",
    },

    heroTitle: {
      fontSize: "3.2rem",
      marginBottom: "15px",
    },

    heroText: {
      fontSize: "1.1rem",
      maxWidth: "600px",
      margin: "0 auto 30px",
      opacity: 0.9,
    },

    searchBox: {
      padding: "14px 20px",
      width: "320px",
      borderRadius: "30px",
      border: "none",
      outline: "none",
      fontSize: "1rem",
    },

    /* ---------- SECTION ---------- */
    section: {
      padding: "70px 40px",
    },

    sectionTitle: {
      fontSize: "2.1rem",
      textAlign: "center",
      marginBottom: "40px",
      color: "#020617",
    },

    grid: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
      gap: "30px",
    },

    card: {
      backgroundColor: "#fff",
      padding: "25px",
      borderRadius: "18px",
      boxShadow: "0 15px 30px rgba(0,0,0,0.08)",
      transition: "0.3s",
    },

    emptyCard: {
      gridColumn: "1 / -1",
      textAlign: "center",
      padding: "40px",
      borderRadius: "18px",
      backgroundColor: "#fff",
      color: "#666",
    },
  };

  return (
    <div style={styles.page}>
      {/* NAVBAR */}
      <nav style={styles.navbar}>
        <div style={styles.logo}>CarMarketPlace</div>

        <div style={styles.navActions}>
          {!user && (
            <>
              <button style={{ ...styles.navBtn, ...styles.loginBtn }}>
                Login
              </button>
              {/* <button style={{ ...styles.navBtn, ...styles.signupBtn }}>
                Sign Up
              </button> */}
            </>
          )}
        </div>
      </nav>

      {/* HERO */}
      <section style={styles.hero}>
        <h1 style={styles.heroTitle}>Find Auto Parts Instantly</h1>
        <p style={styles.heroText}>
          Request car parts and get offers from verified local dealers.
        </p>

        <input
          style={styles.searchBox}
          type="text"
          placeholder="Search part name, car model..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </section>

      {/* REQUESTS */}
      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>Latest Part Requests</h2>

        <div style={styles.grid}>
          {requests.length === 0 ? (
            <div style={styles.emptyCard}>
              🚗 No requests yet. Be the first to request a part!
            </div>
          ) : (
            requests.map((req) => (
              <div style={styles.card} key={req.id}>
                <h3>{req.partName}</h3>
                <p>{req.carModel}</p>
              </div>
            ))
          )}
        </div>
      </section>
    </div>
  );
};

export default Home;

import React, { useState } from "react";

const DealerDashboard = () => {
  const [active, setActive] = useState("dashboard");

  const requests = [
    { id: 1, part: "Brake Pad", car: "Honda City", user: "Rahul" },
    { id: 2, part: "Clutch Plate", car: "Hyundai i20", user: "Amit" },
    { id: 3, part: "Head Light", car: "Swift Dzire", user: "Neha" },
  ];

  return (
    <div style={styles.wrapper}>
      {/* ========== SIDEBAR ========== */}
      <aside style={styles.sidebar}>
        <h2 style={styles.logo}>CarDealer</h2>

        <nav style={styles.menu}>
          <MenuItem
            label="Dashboard"
            active={active === "dashboard"}
            onClick={() => setActive("dashboard")}
          />
          <MenuItem
            label="Requests"
            active={active === "requests"}
            onClick={() => setActive("requests")}
          />
          <MenuItem
            label="Orders"
            active={active === "orders"}
            onClick={() => setActive("orders")}
          />
          <MenuItem
            label="Profile"
            active={active === "profile"}
            onClick={() => setActive("profile")}
          />
        </nav>

        <button style={styles.logout}>Logout</button>
      </aside>

      {/* ========== MAIN CONTENT ========== */}
      <main style={styles.main}>
        <header style={styles.header}>
          <h2>{active.toUpperCase()}</h2>
        </header>

        {/* ===== DASHBOARD ===== */}
        {active === "dashboard" && (
          <>
            <div style={styles.stats}>
              <Stat title="Live Requests" value={requests.length} />
              <Stat title="Offers Sent" value="12" />
              <Stat title="Orders" value="4" />
            </div>

            <h3 style={{ marginBottom: "15px" }}>Latest Requests</h3>

            {requests.map((r) => (
              <div key={r.id} style={styles.card}>
                <div>
                  <strong>{r.part}</strong>
                  <p>{r.car}</p>
                  <small>Requested by {r.user}</small>
                </div>
                <button style={styles.btn}>Send Offer</button>
              </div>
            ))}
          </>
        )}

        {/* ===== REQUESTS ===== */}
        {active === "requests" && (
          <>
            <h3>All Requests</h3>
            {requests.map((r) => (
              <div key={r.id} style={styles.card}>
                <strong>{r.part}</strong> — {r.car}
              </div>
            ))}
          </>
        )}

        {/* ===== ORDERS ===== */}
        {active === "orders" && <h3>No orders yet</h3>}

        {/* ===== PROFILE ===== */}
        {active === "profile" && (
          <div style={styles.card}>
            <h3>Dealer Profile</h3>
            <p>Shop Name: Auto World</p>
            <p>Location: Delhi</p>
          </div>
        )}
      </main>
    </div>
  );
};

/* ===== COMPONENTS ===== */
const MenuItem = ({ label, active, onClick }) => (
  <div
    onClick={onClick}
    style={{
      ...styles.menuItem,
      background: active ? "#4f46e5" : "transparent",
      color: active ? "#fff" : "#c7d2fe",
    }}
  >
    {label}
  </div>
);

const Stat = ({ title, value }) => (
  <div style={styles.statCard}>
    <p>{title}</p>
    <h2>{value}</h2>
  </div>
);

export default DealerDashboard;

/* ===== STYLES ===== */
const styles = {
  wrapper: {
    display: "flex",
    minHeight: "100vh",
    fontFamily: "Segoe UI, sans-serif",
    background: "#f1f5f9",
  },

  sidebar: {
    width: "240px",
    background: "#0f172a",
    color: "#fff",
    padding: "25px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },

  logo: {
    marginBottom: "30px",
  },

  menu: {
    display: "flex",
    flexDirection: "column",
    gap: "12px",
  },

  menuItem: {
    padding: "12px 16px",
    borderRadius: "12px",
    cursor: "pointer",
    transition: "0.3s",
  },

  logout: {
    padding: "10px",
    borderRadius: "12px",
    border: "none",
    background: "#ef4444",
    color: "#fff",
    cursor: "pointer",
  },

  main: {
    flex: 1,
    padding: "30px",
  },

  header: {
    marginBottom: "25px",
  },

  stats: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
    gap: "20px",
    marginBottom: "30px",
  },

  statCard: {
    background: "#fff",
    padding: "25px",
    borderRadius: "18px",
    boxShadow: "0 10px 25px rgba(0,0,0,0.08)",
  },

  card: {
    background: "#fff",
    padding: "20px",
    borderRadius: "16px",
    marginBottom: "15px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    boxShadow: "0 8px 20px rgba(0,0,0,0.06)",
  },

  btn: {
    padding: "8px 14px",
    borderRadius: "18px",
    border: "none",
    background: "#22c55e",
    color: "#fff",
    cursor: "pointer",
  },
};

import React, { useState, useEffect } from "react";
import "../App.css";

export default function AuthPage({ onClose, role: defaultRole, startOnRegister }) {

  const [isRegister, setIsRegister] = useState(false);
  const [role, setRole] = useState(null); // user | dealer

  /* 🔥 AUTO OPEN LOGIC */
  useEffect(() => {
    if (startOnRegister) {
      setIsRegister(true);
      setRole(defaultRole || "dealer");
    } else {
      setIsRegister(false);
      setRole(null);
    }
  }, [startOnRegister, defaultRole]);

  return (
    <div className="modal-backdrop">
      <div className="container">
        <div className={`card ${isRegister ? "flip" : ""}`}>

          {/* ========== LOGIN ========= */}
          <div className="side front">
            <div className="close-btn" onClick={onClose}>✕</div>

            <h2>Login</h2>
            <input placeholder="Email / Phone" />
            <input type="password" placeholder="Password" />
            <p className="forgot">Forget Password?</p>

            <button>Login</button>

            <p className="switch-text">
              Don’t have an account?{" "}
              <span
                onClick={() => {
                  setIsRegister(true);
                  setRole(null);
                }}
              >
                Register
              </span>
            </p>
          </div>

          {/* ========== REGISTER ========= */}
          <div className="side back">
            <div className="close-btn" onClick={onClose}>✕</div>

            <h2>Register</h2>

            {/* 🔥 ROLE SELECTION (ONLY IF NOT PRESELECTED) */}
            {!role && (
              <div className="role-select">
                <div
                  className="role-card"
                  onClick={() => setRole("user")}
                >
                  <span className="role-icon">👤</span>
                  User
                </div>

                <div
                  className="role-card"
                  onClick={() => setRole("dealer")}
                >
                  <span className="role-icon">🏪</span>
                  Dealer
                </div>
              </div>
            )}

            {/* ===== USER REGISTER ===== */}
            {role === "user" && (
              <>
                <input placeholder="Name" />
                <input placeholder="Email" />
                <input type="password" placeholder="Password" />

                <button>Sign Up</button>

                <p className="switch-text">
                  ←{" "}
                  <span onClick={() => setRole(null)}>
                    Change Role
                  </span>
                </p>
              </>
            )}

            {/* ===== DEALER REGISTER ===== */}
            {role === "dealer" && (
              <>
                <input placeholder="Dealer / Owner Name" />
                <input placeholder="Shop Name" />
                <input placeholder="Mobile Number" />
                <input placeholder="Email ID" />
                <input type="password" placeholder="Password" />

                <button>Register as Dealer</button>

                <p className="switch-text">
                  ←{" "}
                  <span onClick={() => setRole(null)}>
                    Change Role
                  </span>
                </p>
              </>
            )}

            <p className="switch-text">
              Already have an account?{" "}
              <span
                onClick={() => {
                  setIsRegister(false);
                  setRole(null);
                }}
              >
                Login
              </span>
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}

import React from "react";
import { BrowserRouter as Router, Routes, Route , } from "react-router-dom";
import Home from "./pages/home";
import AuthPage from "./pages/Authpage";
import DealerHome from "./pages/Dealer";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<AuthPage />} />
        <Route path="/DealerHome" element={<DealerHome />} />
        
      </Routes>
    </Router>
  );
}

export default App;

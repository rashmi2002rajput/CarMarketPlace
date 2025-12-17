import Home from "./pages/home";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
function App() {
    // const [count, setCount] = useState(0)
  return (
    <div>
      <Router>
        <Routes>
                  <Route path="/arpit" element={<Home />} />

        </Routes>
      </Router>
      <Home/>
    </div>
  );
}

export default App;

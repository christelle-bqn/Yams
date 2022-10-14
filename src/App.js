import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Yams } from "./features/yams/Yams";
import Statistique from "./features/statistique/Statistique";
import NavBar from "./features/navBar/NavBar";
import "./App.css";

function App() {
  return (
    <Router>
      <div style={{ height: "100vh", overflowY: "hidden" }}>
        <NavBar />

        <Routes>
          <Route path="/" element={<Yams />} />
          <Route path="/statistiques" element={<Statistique />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Contacts from "./components/Contacts";
import SafetyTips from "./components/SafetyTips";
import EmergencyButton from "./components/EmergencyButton";
import LiveLocation from "./components/LiveLocation";
import Login from "./components/Login";
import Footer from "./components/Footer";

import "./App.css";

function App() {
  return (
    <div className="app-container">
      <header>
        <Navbar />
      </header>
      <div className="main-content container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/safetytips" element={<SafetyTips />} />
          <Route path="/emergency" element={<EmergencyButton />} />
          <Route path="/location" element={<LiveLocation />} />
          <Route path="/login" element={<Login />} />
         
        </Routes>
      </div>
      <Footer/>
    </div>
  );
}

export default App;

import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import AuthPage from "./Components/AuthPage";
import Home from "./Components/Home";
import React, { useState } from "react";
import Footer from "./Components/Footer";
import Ground from "./Components/Ground";
import AuthPage_Owner from "./Components/AuthPage_Owner";
import Ground_Owner from "./Components/Ground_Owner";

function App() {
  const [authMode, setAuthMode] = useState("SignUp");

  const toggleAuthMode = (mode) => {
    setAuthMode(mode);
  };

  return (
    <>
      <Router>
        <Navbar
          title="Sport Spot"
          authMode={authMode}
          toggleAuthMode={toggleAuthMode}
        />
        <Home />
        <Routes>
          <Route
            path="/authpage"
            element={
              <AuthPage authMode={authMode} toggleAuthMode={toggleAuthMode} />
            }
          />
          <Route path="/ground" element={<Ground />} />
          {/* <Route path="/authpage_owner" element={<AuthPage_Owner />} /> */}
          <Route path="/ground_owner" element={<Ground_Owner />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;

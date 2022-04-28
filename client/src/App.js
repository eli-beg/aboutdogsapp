import "./App.css";
import React from "react";

import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import WelcomeScreen from "./pages/WelcomeScreen";

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<WelcomeScreen />} />
        <Route exact path="/home" element={<Home />} />
      </Routes>
    </div>
  );
};

export default App;

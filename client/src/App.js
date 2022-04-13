import "./App.css";
import React from "react";

import { Route, Routes } from "react-router-dom";
import Home from "../src/components/Home";
import WelcomeScreen from "./components/WelcomeScreen";

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

import "./App.css";
import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import WelcomeScreen from "./pages/WelcomeScreen";
import GridDogsHome from "./components/GridDogsHome";

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<WelcomeScreen />} />
        <Route path="home" element={<Home />}>
          <Route path=":name" element={<GridDogsHome />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;

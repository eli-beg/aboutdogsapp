import React from "react";
import fotouno from "../../src/perrosfotos/fotouno.webp";
import { Link } from "react-router-dom";

const WelcomeScreen = () => {
  return (
    <div>
      <button className="HomeButton">
        <Link to="/home">homee</Link>
      </button>
      <img className="ImgBackground" src={fotouno} alt="img not found" />
    </div>
  );
};

export default WelcomeScreen;

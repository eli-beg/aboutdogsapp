import { AppBar, Toolbar, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";

const NavBar1 = ({ setDataBreeds, setBreedToShow }) => {
  return (
    <div>
      <AppBar>
        <Toolbar
          sx={{
            backgroundColor: "#edac4b",
            display: "flex",
            justifyContent: "space-around",
          }}
        >
          <Link to="/home" onClick={() => setBreedToShow("breeds")}>
            <Typography sx={{ fontWeight: "bold", fontSize: "20px" }}>
              About Dogs App!
            </Typography>
          </Link>
          <SearchBar setDataBreeds={setDataBreeds} />
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default NavBar1;

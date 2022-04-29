import { AppBar, Toolbar, Typography } from "@mui/material";
import React from "react";
import SearchBar from "./SearchBar";

const NavBar1 = ({ setDataBreeds }) => {
  return (
    <div>
      Soy la navbarrr1
      <div>
        <AppBar>
          <Toolbar
            sx={{
              backgroundColor: "#edac4b",
              display: "flex",
              justifyContent: "space-around",
            }}
          >
            <Typography sx={{ fontWeight: "bold", fontSize: "20px" }}>
              About Dogs App!
            </Typography>
            <SearchBar setDataBreeds={setDataBreeds} />
          </Toolbar>
        </AppBar>
      </div>
    </div>
  );
};

export default NavBar1;

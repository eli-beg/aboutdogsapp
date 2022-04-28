import React from "react";
import fotouno from "../../src/perrosfotos/fotouno.webp";
import { Link } from "react-router-dom";
import Grid from "@mui/material/Grid";
import { Box } from "@mui/system";
import { Button, Typography } from "@mui/material";

const WelcomeScreen = () => {
  return (
    <div>
      <Grid container direction="row" sx={{ height: "100vh" }}>
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: `url(${fotouno})`,
            backgroundRepeat: "no repeat",
          }}
        />
        <Grid item xs={12} sm={8} md={5}>
          <Box
            sx={{
              height: "100vh",
              backgroundColor: "whitesmoke",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Typography>Welcome to About Dogs App!cd api </Typography>
            <Button
              variant="outlined"
              size="large"
              sx={{ width: "200px", margin: "50px" }}
            >
              <Link to="/home" style={{ textDecoration: "none" }}>
                homee
              </Link>
            </Button>
          </Box>
        </Grid>
      </Grid>
    </div>
  );
};

export default WelcomeScreen;

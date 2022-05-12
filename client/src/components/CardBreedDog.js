import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import Grid from "@mui/material/Grid";
import React, { useEffect, useState } from "react";
import { onSearchImage } from "../api/dogsApi";

const CardBreedDog = ({ dataBreed }) => {
  const [imgUrl, setImgUrl] = useState("");

  useEffect(() => {
    if (dataBreed && dataBreed.reference_image_id) {
      onSearchImage(dataBreed.reference_image_id).then((r) => setImgUrl(r.url));
    }
  }, [dataBreed]);

  return (
    <div>
      <Grid item xs={10} sm={10} sx={{ height: "550px" }}>
        <Card
          sx={{
            width: "300px",
            margin: "5px",
            height: "500px",
            display: "flex",
            flexDirection: "column",
            alignContent: "flex-start",
          }}
        >
          <CardMedia
            component="img"
            src={imgUrl}
            alt="img not found"
            sx={{ height: "100%", maxHeight: "300px" }}
          />
          <CardContent
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
            }}
          >
            <Typography variant="h5" component="h2">
              {dataBreed.name}
            </Typography>
            <Typography
              variant="body1"
              align="left"
              sx={{ fontSize: "12px", marginTop: "5px" }}
            >
              TEMPERAMENT: {dataBreed.temperament}
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Details</Button>
          </CardActions>
        </Card>
      </Grid>
    </div>
  );
};

export default CardBreedDog;

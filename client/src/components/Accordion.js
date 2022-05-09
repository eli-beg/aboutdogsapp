import React, { useState } from "react";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Checkbox,
  FormGroup,
  FormControlLabel,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import NewBreedForm from "./NewBreedForm";
import useStyles from "./muiStyle";

const AccordionFilters = ({ handleCheckboxChange, temperamentsNames }) => {
  const [expanded, setExpanded] = useState(false);
  const handleChange =
    (panelName: string) =>
    (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panelName : false);
    };
  const classes = useStyles();
  return (
    <div>
      <Accordion
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography>breeds</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <FormGroup>
            <FormControlLabel
              control={
                <Checkbox
                  defaultChecked
                  onChange={handleCheckboxChange}
                  value="breeds"
                />
              }
              label="Original Breeds"
            />
            <FormControlLabel
              control={
                <Checkbox onChange={handleCheckboxChange} value="newbreeds" />
              }
              label="New Breeds"
            />
            <FormControlLabel
              control={
                <Checkbox onChange={handleCheckboxChange} value="allbreeds" />
              }
              label="All"
            />
          </FormGroup>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel2"}
        onChange={handleChange("panel2")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2bh-content"
          id="panel2bh-header"
        >
          Add a new Breed!
        </AccordionSummary>
        <div className={classes.root}>
          <AccordionDetails
            sx={{
              width: "300px",
            }}
          >
            <NewBreedForm temperamentsNames={temperamentsNames} />
          </AccordionDetails>
        </div>
      </Accordion>
    </div>
  );
};

export default AccordionFilters;

import { Autocomplete, Button, TextField } from "@mui/material";
import React from "react";
import { newBreedPost } from "../api/dogsApi";
import { useFormik } from "formik";
import * as yup from "yup";

const validationSchema = yup.object({
  name: yup
    .string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Name is Required!"),
  lifeExpectancy: yup

    .number("Life expectancy should be in numbers")
    .integer("Only integers numbers")
    .positive("Only positive numbers"),
});

let arrNumbers = [];

for (var i = 1; i <= 100; i++) {
  arrNumbers.push(i);
}

const NewBreedForm = ({ temperamentsNames }) => {
  // const newBreedInitialValues = {
  //   name: "",
  //   life_span: "",
  //   temperament: "",
  // };

  // const [newBreed, setNewBreed] = useState(newBreedInitialValues);

  // const handleNewBreedChange = (e) => {
  //   e.preventDefault();
  //   setNewBreed({
  //     ...newBreed,
  //     [e.target.name]: e.target.value,
  //   });
  // };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   newBreedPost(newBreed);
  //   setNewBreed(newBreedInitialValues);
  // };

  const formik = useFormik({
    initialValues: {
      name: "",
      lifeExpectancy: "",
      minimumWeight: "",
      maximumWeight: "",
      minimumHeight: "",
      maximumHeight: "",
      temperaments: [],
    },
    validationSchema: validationSchema,

    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <TextField
          fullWidth
          id="standard-basic"
          label="Name"
          variant="standard"
          name="name"
          value={formik.values.name}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.name && Boolean(formik.errors.name)}
          helperText={formik.errors.name}
          InputLabelProps={{
            style: { fontSize: "15px" },
          }}
          InputProps={{
            style: { fontSize: "15px" },
          }}
        />
        <TextField
          fullWidth
          id="standard-basic"
          label="Life Expectancy Years"
          variant="standard"
          name="lifeExpectancy"
          value={formik.values.lifeExpectancy}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          InputLabelProps={{
            style: { fontSize: "15px" },
          }}
          InputProps={{
            style: { fontSize: "15px" },
          }}
          error={
            formik.touched.lifeExpectancy &&
            Boolean(formik.errors.lifeExpectancy)
          }
          helperText={formik.errors.lifeExpectancy}

          //ver aca xq no me pone bien el helperText :(
        >
          years
        </TextField>
        <div style={{ display: "flex", flexDirection: "row" }}>
          <TextField
            fullWidth
            id="standard-select-currency-native"
            select
            variant="standard"
            label="Minimum Weight"
            name="minimumWeight"
            value={formik.values.minimumWeight}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            InputLabelProps={{
              style: { fontSize: "15px" },
            }}
            InputProps={{
              style: { fontSize: "15px" },
            }}
            sx={{ marginRight: "2px" }}
            SelectProps={{
              native: true,
            }}
          >
            {arrNumbers.map((option) => (
              <option key={option} value={option}>
                {option} Kg
              </option>
            ))}
          </TextField>

          <TextField
            fullWidth
            id="standard-select-currency-native"
            select
            variant="standard"
            label="Maximum Weight"
            name="maximumWeight"
            value={formik.values.maximumWeight}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            InputLabelProps={{
              style: { fontSize: "15px" },
            }}
            InputProps={{
              style: { fontSize: "15px" },
            }}
            sx={{ marginLeft: "2px" }}
            SelectProps={{
              native: true,
            }}
          >
            {arrNumbers.map((option) => (
              <option key={option} value={option}>
                {option} Kg
              </option>
            ))}
          </TextField>
        </div>
        <div style={{ display: "flex", flexDirection: "row" }}>
          <TextField
            fullWidth
            id="standard-select-currency-native"
            select
            variant="standard"
            label="Minimum Height"
            name="minimumHeight"
            value={formik.values.minimumHeight}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            InputLabelProps={{
              style: { fontSize: "15px" },
            }}
            InputProps={{
              style: { fontSize: "15px" },
            }}
            sx={{ marginRight: "2px" }}
            SelectProps={{
              native: true,
            }}
          >
            {arrNumbers.map((option) => (
              <option key={option} value={option}>
                {option} cm
              </option>
            ))}
          </TextField>

          <TextField
            fullWidth
            id="standard-select-currency-native"
            select
            variant="standard"
            label="Maximum Height"
            name="maximumHeight"
            value={formik.values.maximumHeight}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            InputLabelProps={{
              style: { fontSize: "15px" },
            }}
            InputProps={{
              style: { fontSize: "15px" },
            }}
            sx={{ marginLeft: "2px" }}
            SelectProps={{
              native: true,
            }}
          >
            {arrNumbers.map((option) => (
              <option key={option} value={option}>
                {option} cm
              </option>
            ))}
          </TextField>
        </div>
        <Autocomplete
          multiple
          id="tags-standard"
          options={temperamentsNames ? temperamentsNames : []}
          getOptionLabel={(temperament) => temperament.name}
          onChange={(event, value) => {
            formik.setFieldValue("temperaments", value);
          }}
          renderInput={(params) => (
            <TextField
              {...params}
              variant="standard"
              label="Temperaments"
              placeholder="Temperaments"
            />
          )}
        />

        <div>
          <Button
            variant="outlined"
            size="small"
            fullWidth
            type="submit"
            value="Save"
            sx={{ marginTop: "20px" }}
          >
            Save
          </Button>
        </div>
      </form>
    </div>
  );
};

export default NewBreedForm;

// import React, { useState } from "react";
// import { newBreedPost } from "../api/dogsApi";

// const NewBreedForm = () => {
//   const newBreedInitialValues = {
//     name: "",
//     life_span: "",
//     temperament: "",
//   };

//   const [newBreed, setNewBreed] = useState(newBreedInitialValues);

//   const handleNewBreedChange = (e) => {
//     e.preventDefault();
//     setNewBreed({
//       ...newBreed,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     newBreedPost(newBreed);
//     setNewBreed(newBreedInitialValues);
//   };

//   return (
//     <div>
//       <form onSubmit={handleSubmit}>
//         <div>
//           Name:{" "}
//           <input type="text" name="name" onChange={handleNewBreedChange} />
//         </div>
//         <div>
//           Life Span:
//           <input type="text" name="life_span" onChange={handleNewBreedChange} />
//         </div>
//         <div>
//           <input type="submit" value="Save" />
//         </div>
//       </form>
//     </div>
//   );
// };

// export default NewBreedForm;

import { Autocomplete, Stack, TextField } from "@mui/material";
import React from "react";

const skills = ["HTML", "CSS", "JAVASCRIPT", "TYPSCRIPT", "REACT"];

const MuiAutocomplete = () => {
  return (
    <Stack spacing={2} width="250px">
      <Autocomplete
        options={skills}
        renderInput={(params) => <TextField {...params} label="Skills" />}
      />
    </Stack>
  );
};

export default MuiAutocomplete;

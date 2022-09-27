import { Box, MenuItem, TextField } from "@mui/material";
import { React, useState } from "react";

const MuiSelct = () => {
  const [countries, setCountries] = useState([]);
  console.log({ countries });
  const handleChange = (e) => {
    const value = e.target.value;
    setCountries(typeof value === "string" ? value.split(",") : value);
  };

  return (
    <>
      <Box width="250px">
        <TextField
          label="Select Country"
          select
          value={countries}
          onChange={handleChange}
          fullWidth
          SelectProps={{
            multiple: true,
          }}
          size="small"
          helperText="Select Country"
          color="secondary"
        >
          <MenuItem value="IN">India</MenuItem>
          <MenuItem value="US">USA</MenuItem>
          <MenuItem value="AU">Ausrelia</MenuItem>
        </TextField>
      </Box>
    </>
  );
};

export default MuiSelct;

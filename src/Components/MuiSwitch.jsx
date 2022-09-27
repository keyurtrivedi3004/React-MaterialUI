import { Box, FormControlLabel, Switch } from "@mui/material";
import { useState } from "react";
import React from "react";

const MuiSwitch = () => {
  const [checked, setChecked] = useState(false);
  console.log(checked);
  const handleChange = (e) => {
    setChecked(e.target.checked);
  };
  return (
    <Box>
      <FormControlLabel
        control={<Switch checked={checked} onChange={handleChange} />}
        label="Dark mode"
      />
    </Box>
  );
};

export default MuiSwitch;

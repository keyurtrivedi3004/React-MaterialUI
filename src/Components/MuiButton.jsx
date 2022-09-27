import { Button } from "@mui/material";
import { Stack } from "@mui/system";
import React from "react";

const MuiButton = () => {
  return (
    <div>
      <Stack spacing={4}>
        <Stack spacing={2} direction="row">
          <Button variant="text" href="www.google.com">
            Text
          </Button>
          <Button variant="contained">Contained</Button>
          <Button variant="outlined">Outlined</Button>
        </Stack>
      </Stack>
      <Stack spacing={2} direction="row">
        <Button variant="contained" color="primary">
          Primary
        </Button>
        <Button variant="contained" color="secondary">
          Secondary
        </Button>
        <Button variant="contained" color="error">
          Error
        </Button>
        <Button variant="contained" color="warning">
          Warning
        </Button>
        <Button variant="contained" color="info">
          Info
        </Button>
        <Button variant="contained" color="success">
          Success
        </Button>
      </Stack>
    </div>
  );
};

export default MuiButton;

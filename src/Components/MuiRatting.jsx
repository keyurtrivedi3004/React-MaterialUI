import { Rating, Stack } from "@mui/material";
import { useState } from "react";
import React from "react";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

const MuiRatting = () => {
  const [value, setValue] = useState(null);
  console.log({ value });
  const handelChange = (e) => {
    setValue(e.target.value);
  };
  return (
    <Stack spacing={2}>
      <Rating
        value={value}
        onChange={handelChange}
        precision={0.5}
        size="large"
        icon={<FavoriteIcon color="error" />}
        emptyIcon={<FavoriteBorderIcon />}
        highlightSelectedOnly
      />
    </Stack>
  );
};

export default MuiRatting;

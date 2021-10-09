import React from "react";
import { TextField } from "@mui/material";

const CustomTextField = ({ ...rest }) => {
  return <TextField variant="outlined" fullWidth {...rest} />;
};

export default CustomTextField;

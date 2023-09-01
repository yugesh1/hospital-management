import React from "react";
import { Box, Typography } from "@mui/material";
import { purple } from "@mui/material/colors";

const primary = purple[500]; // #f44336

const NotFound = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        // backgroundColor: primary,
      }}
    >
      <Typography variant="h1" style={{ color: "black", fontSize: "26px" }}>
        404 not found
      </Typography>
      <Typography variant="h3" style={{ color: "black", fontSize: "18px" }}>
        The page you’re looking for doesn’t exist.
      </Typography>
    </Box>
  );
};

export default NotFound;

import { Box } from "@mui/material";
import React from "react";

const Layout = ({ children }) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexGrow: 1,
        flexDirection: "column",
        px: 3,
        py: 2,
      }}
    >
      {children}
    </Box>
  );
};

export default Layout;

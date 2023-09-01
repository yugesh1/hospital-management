import React from "react";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";

const SearchBar = () => {
  return (
    <Paper
      component="form"
      sx={{
        p: "10px 15px",
        display: "flex",
        borderRadius: "30px",
        alignItems: "center",
        backgroundColor: "#F0F0F0",
        width: 400,
      }}
      elevation={0}
    >
      <SearchIcon sx={{ color: "#828282" }} />
      <InputBase
        sx={{
          ml: 1,
          flex: 1,
          "&::placeholder": {
            color: "#828282",
          },
          color: "#828282",
          fontWeight: "500",
          fontSize: "14px",
        }}
        id="search-patient"
        placeholder="Search Patient"
        type="search"
        inputProps={{ "aria-label": "search" }}
      />
    </Paper>
  );
};

export default SearchBar;

import { Divider } from "@mui/material";
import React from "react";

const Medication = () => {
  return (
    <div>
      <h3>Current Medication</h3>
      <Divider />
      <div className="flex justify-content-evenly">
        <div>
          <input type="radio" name="medicationType" />
          &nbsp;
          <span>Current medication</span>
        </div>
        <div>
          &nbsp;&nbsp;
          <input type="radio" name="medicationType" />
          &nbsp;
          <span>Previous medication</span>
        </div>
      </div>
    </div>
  );
};

export default Medication;

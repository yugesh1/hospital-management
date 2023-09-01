import { Divider } from "@mui/material";
import React from "react";

const Advice = () => {
  return (
    <div>
      <h2>Advice</h2>
      <Divider />

      <textarea
        class="form-control"
        id="exampleFormControlTextarea1"
        rows="3"
      ></textarea>
      <div className="flex py-2 justify-content-evenly">
        <div>
          <label>Follow up date</label>
          <input
            type="date"
            className="pl-2 form-control-sm px-3   shadow-sm mb-3 bg-white rounded border"
          />
        </div>
        <br />
        <div>
          <input type="checkbox" />
          <label>Refer to Emergency</label>
        </div>
        <br />
        <div>
          <input type="checkbox" />
          <label>Refer to Admission</label>
        </div>
        <br />
        <div>
          <input type="checkbox" />
          <label>Surgery Request</label>
        </div>
        <br />
        <div>
          <input type="checkbox" />
          <label>Refer to outside hospital</label>
        </div>
      </div>
    </div>
  );
};

export default Advice;

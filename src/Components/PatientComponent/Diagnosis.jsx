import { Divider } from "@mui/material";
import React from "react";

const Diagnosis = () => {
  return (
    <div>
      <p className="h3">Diagnosis</p>
      <Divider />
      <div className="container px-2">
        <div className="row">
          <div className="flex justify-content-evenly">
            <div className="col-sm">
              <label>Attendance</label>

              <select className="selectpicker border-1 mb-1 px-4 py-1 rounded shadow">
                <option>Select</option>
                <option>Emergency/Acute</option>
              </select>
            </div>
            <div className="col-sm">
              <label>Type</label>
              <select className="selectpicker border-1 mb-1 px-4 py-1 rounded shadow">
                <option>Select</option>
                <option>Provisional</option>
              </select>
            </div>
            <div className="col-sm">
              <label>Category</label>
              <select className="selectpicker border-1 mb-1 px-4 py-1 rounded shadow">
                <option>Select</option>
                <option>Primary</option>
              </select>
            </div>
          </div>
        </div>
      </div>
      <br />
      <div className="container px-2">
        <div className="row">
          <div className="flex justify-content-evenly">
            <div className="col-sm">
              <label>Diagnosis</label>
              <input
                type="text"
                className="pl-2 form-control-sm px-3   shadow-sm mb-3 bg-white rounded border"
              />
            </div>
            <div className="col-sm">
              <label>Country Code</label>
              <input
                type="text"
                className="pl-2 form-control-sm px-3   shadow-sm mb-3 bg-white rounded border"
              />
            </div>
            <div className="col-sm">
              <label>ICD 10</label>
              <input
                type="text"
                className="pl-2 form-control-sm px-3   shadow-sm mb-3 bg-white rounded border"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="container px-2">
        <div className="row">
          <div className="col-sm">
            <label>Remarks</label>
            <input
              type="text"
              className="pl-2 form-control-sm px-3   shadow-sm mb-3 bg-white rounded border"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Diagnosis;

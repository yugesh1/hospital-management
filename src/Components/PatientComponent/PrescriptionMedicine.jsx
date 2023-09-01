import { Divider } from "@mui/material";
import React from "react";

const PrescriptionMedicine = () => {
  return (
    <div>
      <p className="h2">Prescription Medicine</p>
      <Divider />
      <div className="flex justify-content-evenly">
        <div>
          <label>Store &nbsp;</label>
          <select className="selectpicker border-1 mb-1 px-4 py-1 rounded shadow">
            <option>Select</option>
            <option>Pharmacy 1</option>
            <option>Pharmacy 2</option>
          </select>
        </div>
        <div className="">
          <label>Medicine</label>
          <input
            type="text"
            className="pl-2 form-control-sm px-3   shadow-sm mb-3 bg-white rounded border"
          />
        </div>
      </div>
      <br />
      <div className="flex justify-content-evenly">
        <div>
          <label>Dosage</label>
          <input
            type="text"
            className="pl-2 form-control-sm px-3   shadow-sm mb-3 bg-white rounded border"
          />
          <select className="selectpicker border-1 mb-1 px-4 py-1 rounded shadow">
            <option>Select</option>
            <option>1</option>
            <option>2</option>
          </select>
        </div>
        <div>
          <label>Frequency</label>
          <input
            type="text"
            className="pl-2 form-control-sm px-3   shadow-sm mb-3 bg-white rounded border"
          />
        </div>
        <div>
          <label>No of Days</label>
          <input
            type="text"
            className="pl-2 form-control-sm px-3   shadow-sm mb-3 bg-white rounded border"
          />
          <select className="selectpicker border-1 mb-1 px-4 py-1 rounded shadow">
            <option>Day</option>
            <option>Night</option>
          </select>
        </div>
      </div>
      <div className="flex justify-content-evenly">
        <div>
          <label>Food Relation</label>
          <select className="selectpicker border-1 mb-1 px-4 py-1 rounded shadow">
            <option>select</option>
          </select>
        </div>
        <div>
          <label>Route</label>
          <select className="selectpicker border-1 mb-1 px-4 py-1 rounded shadow">
            <option>Select</option>
          </select>
        </div>
        <div>
          <label>Instruction</label>
          <input
            type="text"
            className="pl-2 form-control-sm px-3   shadow-sm mb-3 bg-white rounded border"
          />
        </div>
      </div>
    </div>
  );
};

export default PrescriptionMedicine;

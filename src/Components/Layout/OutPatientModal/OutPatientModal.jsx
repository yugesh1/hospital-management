import { Divider } from "@mui/material";
import React from "react";

const OutPatientModal = () => {
  return (
    <div className="">
      <div className=" text center">
        <h3>Add patient Visit</h3>
        <Divider></Divider>
        <div className="py-2">
          <label>Visit Type &nbsp;</label>

          <select className="selectpicker border-1 mb-1 px-4 py-1 rounded shadow">
            <option value="opdvisit">OPD Visit</option>
          </select>
        </div>
        <div>
          <label>Chief Complaint</label>
          <input
            type="text"
            className="pl-2 form-control-sm px-3 border-2 shadow-sm  bg-white rounded border"
          />
        </div>
        <div className="py-2">
          <label>Clinic/Department</label>
          <select className="selectpicker border-1 mb-1 px-4 py-1 rounded shadow">
            <option value="surgery">Surgery</option>
            <option value="treatment">Treatment</option>
            <option value="normal">Normal</option>
          </select>
        </div>
        <label>Doctor/Nurse</label>
        <select className="selectpicker border-1 mb-1 px-4 py-1 rounded shadow">
          <option value="nilesh">Nilesh</option>
          <option value="sanjay">Sanjay</option>
        </select>
        <br />
        <button className="btn btn-block btn-primary">Submit</button>
      </div>
    </div>
  );
};

export default OutPatientModal;

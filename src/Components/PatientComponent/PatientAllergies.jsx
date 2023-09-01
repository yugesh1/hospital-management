import { Divider } from "@mui/material";
import React from "react";

const PatientAllergies = () => {
  return (
    <div>
      <h2>Allergies</h2>
      <Divider />
      <div className="flex justify-content-evenly py-2">
        <div>
          <label>Allergy Type</label>
          <select className="selectpicker border-1 mb-1 px-4 py-1 rounded shadow">
            <option>Dust Allergy</option>
            <option>Drug Allergy</option>
            <option>Food Allergy</option>
            <option>Skin Allergy</option>
          </select>
        </div>
        <div>
          <label>Allergen</label>
          <select className="selectpicker border-1 mb-1 px-4 py-1 rounded shadow">
            <option>Select</option>
            <option> cacaca</option>
            <option> cacaca</option>
            <option> cacaca</option>
          </select>
        </div>
        <div>
          <label>Reaction</label>
          <input
            type="text"
            className="pl-2 form-control-sm px-3   shadow-sm mb-3 bg-white rounded border"
          />
        </div>
      </div>
    </div>
  );
};

export default PatientAllergies;

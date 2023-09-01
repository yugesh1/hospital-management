import React from "react";

const ReferToDoctor = () => {
  return (
    <div>
      <h2>Refer to Doctor</h2>
      <div className="container px-3">
        <div className="column">
          <div className="col-sm">
            <label>Specialty</label>
            <select>
              <option>Radiologist</option>
              <option>Pediatrician</option>
              <option>OB-GYN Specialist</option>
              <option>Internist </option>
              <option>General Medicine </option>
              <option>Clinic </option>
            </select>
          </div>
          <div className="col-sm">
            <label>Doctor</label>
            <select>
              <option>Select</option>
            </select>
          </div>
          <div className="col-sm">
            <label>Remarks</label>
            <textarea />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReferToDoctor;

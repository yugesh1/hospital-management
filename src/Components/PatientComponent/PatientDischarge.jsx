import React from "react";

const PatientDischarge = () => {
  return (
    <div>
      <h1>Patient Discharge</h1>
      <label>Admission No</label>
      <input type="text" />

      <h2>Discharge Details</h2>
      <label>Discharge Date</label>
      <input type="date" />
      <label>Discharge Status</label>
      <select>
        <option>Pending</option>
        <option>completed</option>
      </select>
      <label>Visit Type</label>
      <select>
        <option>Select</option>
        <option>Scheduled</option>
      </select>
      <label>Clinic Department</label>
      <select>
        <option>Select</option>
      </select>
      <label>Doctor</label>
      <select>
        <option>Select</option>
      </select>
      <label>Remarks</label>
      <input type="text" />
    </div>
  );
};

export default PatientDischarge;

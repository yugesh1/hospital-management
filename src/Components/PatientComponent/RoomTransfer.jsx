import React from "react";

const RoomTransfer = () => {
  return (
    <div>
      <h1>Room Transfer</h1>
      <label>Admission No</label>
      <input type="text" />

      <h2>Room Transfer to</h2>
      <label>Transfer Date</label>
      <input type="date" />
      <label>Room Category</label>
      <select>
        <option>Select</option>
        <option>ICU</option>
        <option>General</option>
      </select>
      <label>Floor</label>
      <select>
        <option>Select</option>
        <option>1st Flooe</option>
      </select>
      <br />
      <label>Ward</label>
      <select>
        <option>Select</option>
      </select>
      <label>Room Type</label>
      <select>
        <option>Select</option>
      </select>
      <label>Room No</label>
      <select>
        <option>Select</option>
      </select>

      <label>Billing Category</label>
      <select>
        <option>Select</option>
      </select>
      <label>Reason for Bed Transfer</label>
      <input type="text" />
    </div>
  );
};

export default RoomTransfer;

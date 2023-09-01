import React from "react";

const RoomStatus = () => {
  return (
    <div>
      <h1>Room Status</h1>
      <label>Search On</label>
      <select>
        <option>Select</option>
        <option>Ward</option>
      </select>
      <label>Ward</label>
      <select>
        <option>Select</option>
        <option>Elite Impatient Ward</option>
      </select>
    </div>
  );
};

export default RoomStatus;

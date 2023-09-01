import React from "react";

const PresentingComplaint = () => {
  return (
    <div>
      <h3>Presenting Complaint</h3>
      <label>Search Presenting Complaint &nbsp;</label>
      <input
        type="text"
        className="pl-2 form-control-sm px-5 shadow-sm mb-3 bg-white rounded border"
      />
      <button className="btn btn-primary btn-sm mb-2">search</button>
      <br />
      <div class="mb-3">
        <label for="exampleFormControlTextarea1" class="form-label">
          Message
        </label>
        <textarea
          class="form-control"
          id="exampleFormControlTextarea1"
          rows="3"
        ></textarea>
      </div>
    </div>
  );
};

export default PresentingComplaint;

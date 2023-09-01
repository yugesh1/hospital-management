import { Divider } from "@mui/material";
import React from "react";

const PatientVitals = () => {
  return (
    <div>
      <div>
        <h3>Vital Signs</h3>
        <Divider />
        <div className="container">
          <div className="row">
            <div className="col">
              <label>Weight(kg)</label>
              <input
                type="text"
                className="pl-2 form-control-sm px-3   shadow-sm mb-3 bg-white rounded border"
                style={{ marginLeft: "44px" }}
              />
            </div>
            <div className="col">
              <label>Height(cm)</label>
              <input
                type="text"
                className="pl-2 form-control-sm px-3   shadow-sm mb-3 bg-white rounded border"
                style={{ marginLeft: "44px" }}
              />
            </div>
            <div className="col">
              <label>BMI(kg)</label>
              <input
                type="text"
                className="pl-2 form-control-sm px-3   shadow-sm mb-3 bg-white rounded border"
                style={{ marginLeft: "54px" }}
              />
            </div>
          </div>
          <br />
        </div>
        <div className="container">
          <div className="row">
            <div className="col-sm">
              <label>Systolic B.P</label>
              <input
                type="text"
                className="pl-2 form-control-sm px-3   shadow-sm mb-3 bg-white rounded border"
                style={{ marginLeft: "44px" }}
              />
            </div>
            <div className="col-sm">
              <label>Diastolic B.P</label>
              <input
                type="text"
                className="pl-2 form-control-sm px-3   shadow-sm mb-3 bg-white rounded border"
                style={{ marginLeft: "38px" }}
              />
            </div>
            <div className="col-sm">
              <label>Temperature(C)</label>
              <input
                type="text"
                className="pl-2 form-control-sm px-3   shadow-sm mb-3 bg-white rounded border"
              />
            </div>
          </div>
        </div>
        <br />
        <div className="container">
          <div className="row">
            <div className="col">
              <label>Blood Sugar(F)</label>
              <input
                type="text"
                className="pl-2 form-control-sm px-3   shadow-sm mb-3 bg-white rounded border"
                style={{ marginLeft: "20px" }}
              />
            </div>
            <div className="col">
              <label>Blood Sugar (R)</label>
              <input
                type="text"
                className="pl-2 form-control-sm px-3   shadow-sm mb-3 bg-white rounded border"
                style={{ marginLeft: "18px" }}
              />
            </div>
            <div className="col">
              <label>SPO 2</label>
              <input
                type="text"
                style={{ marginLeft: "64px" }}
                className="pl-2 form-control-sm px-3   shadow-sm mb-3 bg-white rounded border"
              />
            </div>
          </div>
        </div>
        <br />
        <div className="container">
          <div className="row">
            <div className="col">
              <label>AVPO</label>{" "}
              <select
                className="selectpicker border-1 mb-1 px-5 py-1 rounded shadow"
                style={{ marginLeft: "114px" }}
              >
                <option>Select</option>{" "}
              </select>
            </div>
            <div className="col">
              <label>Trauma</label>{" "}
              <select
                className="selectpicker border-1 mb-1 px-5 py-1 rounded shadow"
                style={{ marginLeft: "106px" }}
              >
                <option>Select</option>{" "}
              </select>
            </div>
            <div className="col">
              <label>Mobility</label>{" "}
              <select
                className="selectpicker border-1 mb-1 px-5 py-1 rounded shadow"
                style={{ marginLeft: "78px" }}
              >
                <option>Select</option>{" "}
              </select>
            </div>
          </div>
        </div>
        <br />
        <div className="container">
          <div className="row">
            <div className="col">
              <label>Oxygen Supplementation</label>{" "}
              <select className="selectpicker border-1 mb-1 px-4 py-1 rounded shadow">
                <option>Select</option>{" "}
              </select>
            </div>
            <div className="col">
              <label>Intake</label>
              <input
                type="text"
                className="pl-2 form-control-sm px-3   shadow-sm mb-3 bg-white rounded border"
              />
            </div>
            <div className="col">
              <label>Output</label>
              <input
                type="text"
                className="pl-2 form-control-sm px-3   shadow-sm mb-3 bg-white rounded border"
              />
            </div>
          </div>
        </div>
        <br />
        <div className="container">
          <div className="row">
            <div className="col-8">
              <label>Vital Taken Time</label>
              <input type="datetime-local" />
            </div>
            <div className="col-4">
              <label>Comments</label>
              <input
                type="text"
                className="pl-2 form-control-sm px-3   shadow-sm mb-3 bg-white rounded border"
              />
            </div>
          </div>
        </div>
        <div>
          <h2>Current Vitals</h2>
          <Divider></Divider>
        </div>
      </div>
    </div>
  );
};

export default PatientVitals;

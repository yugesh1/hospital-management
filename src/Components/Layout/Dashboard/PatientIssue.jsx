import { Divider } from "@mui/material";
import React from "react";
import { useForm } from "react-hook-form";

const PatientIssue = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const submitHandler = (data) => {
    console.log(data);
  };

  return (
    <div>
      <h2>Patient Issue</h2>
      <Divider></Divider>
      <form onSubmit={handleSubmit(submitHandler)}>
        <div className="container items-center">
          <div className="row">
            <div className="col-sm">
              <label>Issue Sale</label>
              <select
                {...register("issuer")}
                className="selectpicker border-1 mb-1 px-2 py-1 rounded shadow"
                style={{ marginLeft: "10px" }}
              >
                <option>Select</option>
                <option>Sale</option>
              </select>
              <label style={{ marginLeft: "10px" }}>Visit</label>
              <select
                {...register("visit")}
                className="selectpicker border-1 mb-1 px-2 py-1 rounded shadow"
                style={{ marginLeft: "10px" }}
              >
                <option>Select</option>
              </select>
            </div>
            <div className="col-sm">
              <label>Issue No</label>
              <input
                {...register("issueNo")}
                type="text"
                className="pl-2 form-control-sm px-3   shadow-sm mb-3 bg-white rounded border"
                style={{ marginLeft: "15px" }}
              />
            </div>
            <div className="col-sm">
              <label>Payer</label>
              <input
                {...register("payer")}
                type="text"
                className="pl-2 form-control-sm px-3   shadow-sm mb-3 bg-white rounded border"
                style={{ marginLeft: "15px" }}
              />
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-sm">
              <label>UHID</label>

              <input
                {...register("uhid")}
                type="text"
                className="pl-2 form-control-sm px-3   shadow-sm mb-3 bg-white rounded border"
                style={{ marginLeft: "56px" }}
              />
            </div>

            <div className="col-sm">
              <label>Issue Date</label>

              <input type="date" style={{ marginLeft: "25px" }} />
            </div>
            <div className="col-sm">
              <label>Sponsor</label>

              <input
                type="text"
                {...register("sponsor")}
                className="pl-2 form-control-sm px-3   shadow-sm mb-3 bg-white rounded border"
                style={{ marginLeft: "15px", width: "176px" }}
              />
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-sm">
              <label>Name</label>
              <input
                type="text"
                {...register("name")}
                className="pl-2 form-control-sm px-3   shadow-sm mb-3 bg-white rounded border"
                style={{ marginLeft: "52px" }}
              />
            </div>

            <div className="col-sm">
              <label>Order</label>
              <input
                type="text"
                {...register("order")}
                className="pl-2 form-control-sm px-3   shadow-sm mb-3 bg-white rounded border"
                style={{ marginLeft: "32px" }}
              />
            </div>
            <div className="col-sm">
              <label>Doctor</label>
              <select
                {...register("doctor")}
                className="selectpicker border-1 mb-1 px-5 py-1 rounded shadow"
                style={{ marginLeft: "38px" }}
              >
                <option>Select</option>
              </select>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row ">
            <div className="col-sm">
              <label>Age Gender</label>
              <input
                type="text"
                {...register("age")}
                className="pl-2 form-control-sm px-3   shadow-sm mb-3 bg-white rounded border"
                style={{ width: "52px", marginLeft: "14px" }}
              />
              <select
                className="selectpicker border-1 mb-1 px-2 py-1 rounded shadow"
                placeholder="Years"
                {...register("years")}
              >
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
              </select>
              <select className="selectpicker border-1 mb-1 px-2 py-1 rounded shadow">
                <option>Male</option>
                <option>Female</option>
              </select>
            </div>
            <div className="col-sm">
              <label>Mobile</label>
              <input
                {...register("mobile")}
                type="text"
                className="pl-2 form-control-sm px-3   shadow-sm mb-3 bg-white rounded border"
                style={{ marginLeft: "30px" }}
              />
            </div>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <div className="col-sm">
              <input type="checkbox" style={{ marginRight: "5px" }} />
              <label>Issue To Patient &nbsp;</label>
            </div>
          </div>
        </div>
        <div>
          <div className="container">
            <div className="row">
              <div className="col-sm">
                <input type="checkbox" style={{ marginRight: "5px" }} />
                <label>Substitute Required</label>
              </div>
              <div className="col-sm">
                <label>Generic </label>
                <select
                  {...register("generic")}
                  className="selectpicker border-1 mb-1 px-5 py-1 rounded shadow"
                  style={{ marginLeft: "54px" }}
                >
                  <option>Select</option>
                </select>
              </div>
              <div className="col-sm">
                <label>Profile Item </label>
                <select
                  {...register("profileItem")}
                  className="selectpicker border-1 mb-1 px-4 py-1 rounded shadow"
                  style={{ marginLeft: "54px" }}
                >
                  <option>Select</option>
                </select>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="row">
              <div className="col-8">
                <label>Item Name</label>
                <input
                  {...register("itemName")}
                  type="text"
                  className="pl-2 form-control-sm px-3   shadow-sm mb-3 bg-white rounded border"
                  style={{ marginLeft: "16px" }}
                />
              </div>
              <div className="col-4">
                <label> Barcode</label>
                <input
                  {...register("barcode")}
                  type="text"
                  className="pl-2 form-control-sm px-3   shadow-sm mb-3 bg-white rounded border"
                  style={{ marginLeft: "34px", width: "160px" }}
                />
              </div>
            </div>
          </div>
          <br />
          <div className="flex justify-content-center">
            <button type="submit" className="btn  btn-primary btn-block ">
              Save
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default PatientIssue;

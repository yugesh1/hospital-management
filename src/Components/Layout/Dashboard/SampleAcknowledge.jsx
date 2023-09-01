import { Divider } from "@mui/material";
import React from "react";
import { useForm } from "react-hook-form";

const SampleAcknowledge = () => {
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
      <h2>Sample Acknowledge </h2>
      <Divider />
      <form onSubmit={handleSubmit(submitHandler)}>
        <div className="container">
          <div className="row">
            <div className="col-sm">
              <input {...register("all")} type="radio" />
              <label>All</label>
            </div>
            <div className="col-sm">
              <input type="radio" {...register("out-patient")} />
              <label>Out-Patient</label>
            </div>
            <div className="col-sm">
              <input type="radio" {...register("inpatient")} />
              <label>In Patient </label>
            </div>
            <div className="col-sm">
              <input type="radio" {...register("emergency")} />
              <label>Emergency</label>
            </div>
            <div className="col-sm">
              <input type="checkbox" {...register("samples")} />
              <label>Partial Samples Collected</label>
            </div>
          </div>
        </div>
        <br />
        <div className="container">
          <div className="row">
            <div className="col-sm">
              <label>Search by</label>
              <select
                {...register("search")}
                className="selectpicker border-1 mb-1 px-2 py-1 rounded shadow"
                style={{ marginLeft: "34px" }}
              >
                <option>Select</option>
                <option>Lab No</option>
              </select>
              <input
                type="text"
                {...register("searchText")}
                className="pl-2 form-control-sm px-3   shadow-sm mb-3 bg-white rounded border"
                style={{ width: "124px" }}
              />
            </div>

            <div className="col-sm">
              <label>From Date</label>
              <input
                type="date"
                {...register("fromDate")}
                className="pl-2 form-control-sm px-3   shadow-sm mb-3 bg-white rounded border"
                style={{ marginLeft: "34px" }}
              />
            </div>
            <div className="col-sm">
              <label>To Date</label>
              <input
                type="date"
                {...register("toDate")}
                className="pl-2 form-control-sm px-3   shadow-sm mb-3 bg-white rounded border"
                style={{ marginLeft: "34px" }}
              />
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-sm">
              <label>Hospital</label>
              <select
                {...register("hospital")}
                className="selectpicker border-1 mb-1 px-4 py-1 rounded shadow"
                style={{ marginLeft: "42px" }}
              >
                <option>Silver Hills Hospitals</option>
                <option>Other Hospitals</option>
              </select>
            </div>
            <div className="col-sm">
              <label>Sample Status </label>
              <select
                {...register("sampleStatus")}
                className="selectpicker border-1 mb-1 px-4 py-1 rounded shadow"
                style={{ marginLeft: "22px" }}
              >
                <option>Collected</option>
                <option>Not Collected</option>
              </select>
            </div>
            <div className="col-sm">
              <label>Order Type</label>
              <select
                {...register("orderType")}
                className="selectpicker border-1 mb-1 px-5 py-1 rounded shadow"
                style={{ marginLeft: "34px" }}
              >
                <option>Select</option>
                <option>All</option>
              </select>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default SampleAcknowledge;

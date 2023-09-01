import React from "react";
import { useForm } from "react-hook-form";

const InvestigationAcknowledge = () => {
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
      <form onSubmit={handleSubmit(submitHandler)}>
        <h2 className="h2">Investigation Acknowledge </h2>
        <div className="flex justify-content-evenly">
          <div>
            <input type="radio" {...register("all")} name="patientType" />
            <label>All</label>
          </div>
          <div>
            <input
              type="radio"
              {...register("outpatient")}
              name="patientType"
            />
            <label>Out-Patient</label>
          </div>
          <div>
            <input type="radio" {...register("inpatient")} name="patientType" />
            <label>In Patient </label>
          </div>
          <div>
            <input type="radio" {...register("emergency")} name="patientType" />
            <label>Emergency</label>
          </div>
        </div>
        <div className=" flex justify-content-start">
          <label>Stats</label>
        </div>
        <div className="flex justify-content-evenly">
          <div>
            <label>Search by</label>
            <select
              {...register("searchby")}
              className="selectpicker border-1 mb-1 px-4 py-1 rounded shadow"
            >
              <option>Select</option>
              <option>Lab No</option>
            </select>
            <input
              type="text"
              {...register("searchbyText")}
              className="pl-2 form-control-sm px-3   shadow-sm mb-3 bg-white rounded border"
            />
          </div>
          <div>
            <label>Order Type</label>
            <select
              {...register("orderType")}
              className="selectpicker border-1 mb-1 px-4 py-1 rounded shadow"
            >
              <option>Select</option>
              <option>Lab No</option>
            </select>
            <input
              type="text"
              {...register("orderTypeText")}
              className="pl-2 form-control-sm px-3   shadow-sm mb-3 bg-white rounded border"
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default InvestigationAcknowledge;

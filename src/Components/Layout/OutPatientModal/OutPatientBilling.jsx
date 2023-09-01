import { Divider } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import React from "react";
import { useForm } from "react-hook-form";
import { columns, rows } from "../../../Helpers/DatagridMockData";

const OutPatientBilling = () => {
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
      <h2>Out-Patient Billing</h2>
      <Divider />
      <form onSubmit={handleSubmit(submitHandler)}>
        <div className="flex justify-content-evenly">
          <div>
            <label>UHID</label>
            <input
              {...register("uhid")}
              type="text"
              className="pl-2 form-control-sm px-3   shadow-sm mb-3 bg-white rounded border"
            />
          </div>
          <div>
            <label>Visit No</label>
            <select
              {...register("visitno")}
              className="selectpicker border-1 mb-1 px-4 py-1 rounded shadow"
            >
              <option>Select</option>
              <option>OutPatient Clinic</option>
            </select>
          </div>
          <div>
            <input type="checkbox" {...register("exportbill")} />
            <label>Export Bill</label>
          </div>
          <div>
            <button>Pending Orders</button>
            <button>Services</button>
            <button>Advance</button>
          </div>
        </div>
        <br />
        <div>
          <div className="flex justify-content-around">
            <p className="h2 pr-5 -px-8">John Doe</p>

            <span>payer std,sponsor : std ,Network:</span>
          </div>
        </div>
        <br />
        <div className="flex justify-content-evenly">
          <div>
            <span>Male 34 years</span>
            <span>Mobile no</span>
          </div>
          <div>
            <label>Referral &nbsp;</label>
            <input
              type="text"
              {...register("referral")}
              className="pl-2 form-control-sm px-3   shadow-sm mb-3 bg-white rounded border"
            />
          </div>
        </div>
        <br />
        <div style={{ height: 400 }}>
          <DataGrid
            rows={rows}
            columns={columns}
            pageSize={5}
            rowsPerPageOptions={[5]}
            checkboxSelection
          />
        </div>
      </form>
    </div>
  );
};

export default OutPatientBilling;

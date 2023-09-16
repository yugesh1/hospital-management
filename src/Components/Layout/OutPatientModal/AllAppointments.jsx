import { Divider } from "@mui/material";
import React, { useEffect } from "react";
// import { DataGrid } from "@mui/x-data-grid";
import { columns, rows } from "../../../Helpers/DatagridMockData";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { getAllAppointments } from "../../../actions/appointmentActions";

const AllAppointments = () => {
  const dispatch = useDispatch();

  const { appointments, loading } = useSelector(
    (state) => state.allappointments
  );
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  console.log("appointments", appointments);

  useEffect(() => {
    dispatch(getAllAppointments());
  }, []);

  const submitHandler = (data) => {
    console.log(data);
  };

  return (
    <div>
      <form onSubmit={handleSubmit(submitHandler)}>
        <div>
          <p className="h3">All Appointments</p>
          <Divider />
          <div className="flex justify-content-evenly">
            <div>
              <label>UHID</label>
              <input
                {...register("uhid")}
                type="text"
                className="pl-2 form-control-sm px-3 shadow-sm mb-3 bg-white rounded border"
              />
            </div>
            <div>
              <label>From Date</label>
              <input
                {...register("dateFrom")}
                type="date"
                className="pl-2 form-control-sm px-3   shadow-sm mb-3 bg-white rounded border"
              />
            </div>
            <div>
              <label>To Date</label>
              <input
                {...register("dateTo")}
                type="date"
                className="pl-2 form-control-sm px-3   shadow-sm mb-3 bg-white rounded border"
              />
            </div>
            <div>
              <label>Status</label>
              <select
                {...register("status")}
                className="selectpicker border-1 mb-1 px-4 py-1 rounded shadow"
              >
                <option>Select</option>
                <option>All</option>
              </select>
            </div>
            <div>
              <label>Patient Name</label>
              <input
                {...register("patientName")}
                type="text"
                className="pl-2 form-control-sm px-3   shadow-sm mb-3 bg-white rounded border"
              />
            </div>
          </div>
        </div>
        <div className=" justify-content-center" style={{ height: 400 }}>
          <>
            <table class="table">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Appointment Time</th>
                  <th scope="col">Appointment With</th>
                  <th scope="col">Doctors</th>
                </tr>
              </thead>
              <tbody>
                {appointments.map((data) => {
                  return (
                    <tr>
                      <th scope="row">1</th>
                      <td>{data.appointmentWith[0].appointmentOn}</td>
                      <td>{data.appointmentWith[0].patientName}</td>
                      <td>{data.doctorsAttending[0].doctorName}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </>
        </div>
      </form>
    </div>
  );
};

export default AllAppointments;

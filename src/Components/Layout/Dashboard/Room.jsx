import { Divider } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { getAllPatients } from "../../../actions/patientActions";
import { createRoom } from "../../../actions/roomActions";

const Room = () => {
  const dispatch = useDispatch();

  const { error, patient, loading } = useSelector((state) => state.patients);

  const [patientName, setPatientName] = useState([]);
  const [patientId, setPatientId] = useState("");
  const [patientValue, setPatientValue] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    if (!error) {
      dispatch(getAllPatients());
    }
  }, [dispatch]);

  const submitHandler = (data) => {
    console.log(data);

    const obj = {
      patientName: patientValue,
      patientId: patientId,
      roomNo: data.room,
      vacancyStatus: data.vacancy,
    };

    dispatch(createRoom(obj));
  };

  const searchPatient = (e) => {
    const searchWord = e.target.value;
    const newFilter = patient.filter((val) => {
      return val.patientName.toLowerCase().includes(searchWord.toLowerCase());
    });
    setPatientName(newFilter);

    console.log("paient vaue", patientValue);
  };

  return (
    <>
      {loading ? (
        <>Loading</>
      ) : (
        <>
          <div>
            <h2>Room </h2>
            <Divider />
            <form onSubmit={handleSubmit(submitHandler)}>
              <div className="flex justify-content-evenly">
                <label>Patient Name </label>
                <input type="hidden" {...register("patientId")} />
                <input
                  type="search"
                  onChange={searchPatient}
                  defaultValue={patientValue}
                />

                {patientName.length !== 0 ? (
                  patientName.map((data, key) => {
                    return (
                      <button
                        type="button"
                        key={data._id}
                        onClick={() => {
                          setPatientId(data._id);
                          setPatientValue(data.patientName);
                        }}
                      >
                        {data.patientName}
                      </button>
                    );
                  })
                ) : (
                  <></>
                )}

                <label>Room No</label>
                <input {...register("room")} />
                <label>Vacancy Status</label>
                <select
                  {...register("vacancy")}
                  className="selectpicker border-1 mb-1 px-4 py-1 rounded shadow"
                >
                  <option value="">Select</option>
                  <option value="true">Available</option>
                  <option value="false">Not Available</option>
                </select>
              </div>

              <button type="submit">Submit</button>
            </form>
          </div>
        </>
      )}
    </>
  );
};

export default Room;

import React, { useEffect } from "react";
import { PageHeader } from "../Layout/Header/Header";
import { useHistory, useParams } from "react-router-dom";
import { PatientForm } from "./PatientForm";
import { useDispatch, useSelector } from "react-redux";
import { searchDoctor } from "../../actions/doctorActions";
import AddDoctor from "../DoctorComponent/AddDoctor";

const UpdateDoctor = ({ location }) => {
  const history = useHistory();
  const dispatch = useDispatch();
  const { id } = useParams();
  const { doctor, loading } = useSelector((state) => state.allDoctors);
  const doctorData = location.state.data;
  console.log(location);

  console.log(doctor, "update patient");

  const getDoctor = async (id) => {
    const response = await dispatch(searchDoctor(id));
    console.log(response, "inside patien forms");
  };

  useEffect(() => {
    if (!doctor && !doctorData) getDoctor(id);
  }, [id, doctor]);

  return (
    <>
      {!loading && (
        <div className="relative">
          <AddDoctor data={doctorData ?? doctor} />
        </div>
      )}
    </>
  );
};
export default UpdateDoctor;

import React, { useEffect } from "react";
import { PageHeader } from "../Layout/Header/Header";
import { useHistory, useParams } from "react-router-dom";
import { PatientForm } from "./PatientForm";
import { useDispatch, useSelector } from "react-redux";
import { searchPatient } from "../../actions/patientActions";

const UpdatePatient = ({ location }) => {
  const history = useHistory();
  const dispatch = useDispatch();
  const { id } = useParams();
  const { patient, onePatient, loading } = useSelector(
    (state) => state.patients
  );
  const patientData = location.state.data;
  console.log(location);

  console.log(patient, "update patient");

  const getPatient = async (id) => {
    const response = await dispatch(searchPatient(id));
    console.log(response, "inside patien forms");
  };

  useEffect(() => {
    if (!onePatient && !patientData) getPatient(id);
  }, [id, onePatient]);

  return (
    <>
      {!loading && (
        <div className="relative">
          <PageHeader
            title={"Update Patient"}
            back
            searchHidden
            onClick={history.goBack}
          />
          <PatientForm data={onePatient ?? patientData} />
        </div>
      )}
    </>
  );
};
export default UpdatePatient;

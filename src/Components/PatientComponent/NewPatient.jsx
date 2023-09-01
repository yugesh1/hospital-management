import React from "react";
import { Divider } from "@mui/material";
import { PageHeader } from "../Layout/Header/Header";
import { useHistory } from "react-router-dom";
import { PatientForm } from "./PatientForm";

const NewPatient = () => {
  const history = useHistory();

  return (
    <div className="relative">
      <PageHeader
        title={"Add New Patient"}
        back
        searchHidden
        onClick={history.goBack}
      />
      <PatientForm />
    </div>
  );
};
export default NewPatient;

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Box } from "@mui/system";
import "../NewPatient.css";
import {
  createNewPatient,
  searchPatient,
  updatePatient,
} from "../../../actions/patientActions";
import Layout from "../../Layout/LayoutComponent/Layout";
import StepperComponent from "../../Components/Stepper";
import { patientFormField } from "../PatientFormField";
import PatientDetailForm from "./PatientDetailForm";
import PatientGuardianDetailForm from "./GuardianDetailForm";
import PatientAddressForm from "./PatientAddressForm";
import { Formik, Form } from "formik";
import Button from "../../Components/Button";
import moment from "moment";
import { useHistory, useLocation, useParams } from "react-router-dom";
import { Alert, Snackbar } from "@mui/material";
import * as Yup from "yup";

export const PatientForm = ({ data: patientData }) => {
  const history = useHistory();
  const [activeStep, setActiveStep] = React.useState(0);
  const location = useLocation();

  const { id } = useParams();
  const [open, setOpen] = React.useState(false);
  const { user } = useSelector((state) => state.user);
  // const [patientData, setPatientData] = useState(data);
  const dispatch = useDispatch();
  // const { onePatient, loading } = useSelector((state) => state.patients);

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  const isEditMode = location?.pathname?.includes("updatepatient");
  const steps = ["Patient Detail", "Home Address", "Guardian Detail"];
  const { formId, formField } = patientFormField;
  const {
    formField: {
      patientName,
      patientDOB,
      patientGender,
      patientMobile,
      patientEmail,
      patientDiagnosis,
      patientAddress1,
      patientAddress2,
      patientCity,
      patientState,
      patientZipcode,
      patientCountry,
      patientGuardianName,
      patientGuardianMobile,
      patientGuardianAddress1,
      patientGuardianAddress2,
      patientGuardianCity,
      patientGuardianState,
      patientGuardianZipcode,
      patientBloodPressure,
      patientRespirationRate,
      patientPulseRate,
      patientBodyTemperature,
    },
  } = patientFormField;

  const addPatientSchema = Yup.object().shape({
    patientName: Yup.string()
      .min(2, "Too Short!")
      .max(30, "Too Long!")
      .required("Required"),
    patientEmail: Yup.string().email("Invalid email").required("Required"),
  });

  const intialValues = {
    [patientName.name]: patientData?.patientName || "",
    [patientDOB.name]: patientData?.patientDOB || "",
    [patientGender.name]: patientData?.patientGender || "",
    [patientMobile.name]: patientData?.patientPhoneNo || "",
    [patientEmail.name]: patientData?.patientEmail || "",
    [patientDiagnosis.name]: patientData?.vitals || "",
    [patientAddress1.name]:
      patientData?.patientAddress?.split("###")?.[0] || "",
    [patientAddress2.name]:
      patientData?.patientAddress?.split("###")?.[1] || "",
    [patientCity.name]: patientData?.patientCity?.split(", ")?.[0] || "",
    [patientState.name]: patientData?.patientCity?.split(", ")?.[1] || "",
    [patientZipcode.name]: patientData?.patientZIP || "",
    [patientCountry.name]: patientData?.patientCity?.split(", ")?.[2] || "",
    [patientGuardianName.name]: patientData?.guardianName || "",
    [patientGuardianMobile.name]: patientData?.guardianPhone || "",
    [patientGuardianAddress1.name]:
      patientData?.guardianAddress?.split("###")?.[0] || "",
    [patientGuardianAddress2.name]:
      patientData?.guardianAddress?.split("###")?.[1] || "",
    [patientGuardianCity.name]:
      patientData?.guardianCity?.split(", ")?.[0] || "",
    [patientGuardianState.name]:
      patientData?.guardianCity?.split(", ")?.[1] || "",
    [patientGuardianZipcode.name]: patientData?.guardianZIP || "",
    [patientBloodPressure.name]: patientData?.bloodPressure || "",
    [patientRespirationRate.name]: patientData?.bodyTemperature || "",
    [patientPulseRate.name]: patientData?.pulseRate || "",
    [patientBodyTemperature.name]: patientData?.respirationRate || "",
  };

  function _renderStepContent(step, setFieldValue, values, touched, errors) {
    switch (step) {
      case 0:
        return (
          <PatientDetailForm
            setFieldValue={setFieldValue}
            values={values}
            touched={touched}
            errors={errors}
            formField={formField}
          />
        );
      case 1:
        return <PatientAddressForm formField={formField} />;
      case 2:
        return (
          <PatientGuardianDetailForm
            setFieldValue={setFieldValue}
            formField={formField}
          />
        );
      default:
        return <div>Not Found</div>;
    }
  }

  function handleBack() {
    setActiveStep(activeStep - 1);
  }

  async function _submitForm(values, actions) {
    actions.setSubmitting(false);
    await registerPatient(values);
    setActiveStep(activeStep + 1);
  }

  function _handleSubmit(values, actions) {
    if (activeStep === steps.length - 1) {
      _submitForm(values, actions);
    } else {
      setActiveStep(activeStep + 1);
      actions.setTouched({});
      actions.setSubmitting(false);
    }
  }

  const registerPatient = (data) => {
    console.log("hello", data);
    const patientAddress = `${data.patientAddress1}###${data.patientAddress2}`;
    const guardianAddress = `${data.patientGuardianAddress1}###${data.patientGuardianAddress2}`;
    const guardianCity = `${data.patientGuardianCity}, ${data.patientGuardianState} `;
    const patientCity = `${data.patientCity}, ${data.patientState}, ${data.patientCountry}`;
    const patientDOB = moment(data.patientDOB).format("YYYY-MM-DD");
    const patientAge = moment().diff(patientDOB, "years", false);
    const newData = {
      patientName: data.patientName,
      patientAddress,
      patientZIP: data.patientZipcode,
      patientCity,
      patientGender: data.patientGender,
      patientEmail: data.patientEmail,
      patientPhoneNo: data.patientMobile,
      patientAge,
      vitals: [
        {
          bloodPressure: data.patientBloodPressure || "",
          bodyTemperature: data.patientBodyTemperature || "",
          pulseRate: data.patientPulseRate || "",
          respirationRate: data.patientRespirationRate || "",
        },
      ],
      guardianName: data.patientGuardianName,
      guardianPhone: data.patientGuardianMobile,
      guardianAddress,
      guardianZIP: data.patientGuardianZipcode,
      guardianCity,
      patientDOB,
    };

    if (isEditMode) {
      dispatch(updatePatient({ ...newData, patientUHID: patientData._id }));
      setOpen(true);
    } else {
      dispatch(createNewPatient(newData, user._id));
      setOpen(true);
    }
    setOpen(true);
    // history.push("/patientlist");
  };
  return (
    <>
      <Layout>
        <Box
          style={{
            overflow: "auto",
            backgroundColor: "#fff",
            borderRadius: "4px",
            padding: "16px 16px",
          }}
        >
          <StepperComponent steps={steps} activeStep={activeStep}>
            <div className="pb-4">
              <Formik
                initialValues={intialValues}
                validationSchema={addPatientSchema}
                onSubmit={_handleSubmit}
              >
                {({
                  isSubmitting,
                  setFieldValue,
                  values,
                  resetForm,
                  touched,
                  errors,
                }) => (
                  <Form id={formId}>
                    {_renderStepContent(
                      activeStep,
                      setFieldValue,
                      values,
                      touched,
                      errors
                    )}
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "end",
                        pt: 2,
                        width: "40%",
                        mx: "auto",
                      }}
                    >
                      <Button
                        type="button"
                        className="primary-button w-full mr-10"
                        disabled={activeStep === 0}
                        onClick={handleBack}
                        text={"Back"}
                      />
                      <Button
                        disabled={isSubmitting}
                        type="submit"
                        className="primary-button w-full"
                        // onClick={handleNext}
                        text={
                          activeStep === steps.length - 1 ? "Finish" : "Next"
                        }
                      />
                    </Box>
                  </Form>
                )}
              </Formik>
              <Snackbar
                open={open}
                autoHideDuration={6000}
                onClose={handleClose}
              >
                <Alert
                  onClose={handleClose}
                  severity="success"
                  sx={{ width: "100%" }}
                >
                  Form submitted Successfully!
                </Alert>
              </Snackbar>
            </div>
          </StepperComponent>
        </Box>
      </Layout>
    </>
  );
};

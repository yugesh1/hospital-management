import { Autocomplete, Box, Paper, TextField } from "@mui/material";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { Formik, Form, Field, ErrorMessage } from "formik";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { FiCalendar, FiClock } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { createAppointment } from "../../actions/appointmentActions";
// import { set } from "../../../../backend/app";
import { getAllPatients } from "../../actions/patientActions";
import Button from "../Components/Button";
import { PageHeader } from "../Layout/Header/Header";
import Layout from "../Layout/LayoutComponent/Layout";
import Select from "react-select";
import { getAllDoctors } from "../../actions/doctorActions";
import { TimePicker } from "@mui/x-date-pickers";
import dayjs, { Dayjs } from "dayjs";

const selectStyle = {
  control: (base, state) => ({
    ...base,
    color: "##9CA3AF",
    width: "100%",
    height: "100%",
    outline: "none",
    transition: "all 0.3s ease",
    background: "ffffff",
    borderRadius: "0.25rem",
    paddingTop: "0.5rem",
    paddingBottom: "0.5rem",
    paddingLeft: "1rem",
    overflow: "auto",
    border: "2px solid #E5E7EB",

    // Removes weird border around container
    boxShadow: state.isFocused ? null : null,
    "&:hover": {
      // Overwrittes the different states of border
      borderColor: state.isFocused ? "#00AA88" : "#E5E7EB",
    },
  }),
};

const DoctorAppointment = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [value, setValue] = React.useState(null);

  const { error, patient, loading } = useSelector((state) => state.patients);
  const { user } = useSelector((state) => state.user);

  const { allDoctors } = useSelector((state) => state.allDoctors);

  const [patientName, setPatientName] = useState([]);
  const [patientId, setPatientId] = useState("");
  const [patientValue, setPatientValue] = useState("");

  useEffect(() => {
    if (!error) {
      user && dispatch(getAllPatients(user._id));
      user && dispatch(getAllDoctors(user._id));
    }
  }, [dispatch]);

  const {
    register,
    handleSubmit,
    // setValue,
    formState: { errors },
  } = useForm();

  const submitHandler = async (data) => {
    const obj = {
      appointmentName: data.appointmentName,
      appointmentWith: [
        {
          patientId: data.patientUHID,
          patientName: data.patientName,
          appointmentOn: data.appointmentOn,
          visitFor: data.visitFor,
        },
      ],
      anticipatedTime: data.anticipatedTime,
      doctorsAttending: [
        { doctorId: data.doctorId, doctorName: data.doctorName },
      ],
    };
    console.log("inside submitr", obj);
    await dispatch(createAppointment(obj, user._id));
    history.goBack();
  };

  const getPatientOptions = () => {
    return patient
      ?.map((item) => {
        return {
          value: item.patientName,
          label: item.patientName,
          id: item._id,
        };
      })
      .sort((a, b) => {
        if (a.value < b.value) {
          return -1;
        }
        if (a.value > b.value) {
          return 1;
        }
        return 0;
      });
  };

  const getDoctorOptions = () => {
    if (!allDoctors) {
      return [];
    }
    return allDoctors
      ?.map((doctor) => {
        return {
          value: doctor.userName,
          label: doctor.userName,
          id: doctor._id,
        };
      })
      .sort((a, b) => {
        if (a.value < b.value) {
          return -1;
        }
        if (a.value > b.value) {
          return 1;
        }
        return 0;
      });
  };

  // const isInCurrentMonth = (date) => {
  //   console.log(date, "isincurrentmonth");
  //   return date < new Date(month);
  // };

  return (
    <>
      {loading ? (
        <></>
      ) : (
        <div className="relative">
          <PageHeader
            title={"Add Appointment"}
            searchHidden
            back
            onClick={history.goBack}
          />
          <Layout>
            <Box
              sx={{
                backgroundColor: "#fff",
                borderRadius: "4px",
                padding: "16px 16px",
              }}
            >
              <Formik
                initialValues={{
                  appointmentName: "",
                  doctorName: "",
                  appointmentOn: "",
                  anticipatedTime: new Date().getTime(),
                  patientName: "",
                  patientUHID: "",
                  visitFor: "",
                }}
                onSubmit={async (values, { setSubmitting, resetForm }) => {
                  await submitHandler(values);
                  resetForm();
                }}
              >
                {({ isSubmitting, setFieldValue, values, handleChange }) => (
                  <Form className="flex flex-col space-y-5">
                    <div className="text-lg font-bold pb-2 border-b border-gray-200">
                      Appointment Details
                    </div>
                    <div className="grid grid-cols-3 gap-10 pb-5">
                      <div className="w-full">
                        <div className="form-label">Appointment Name</div>
                        <div className="flex relative">
                          <Field
                            className="form-field"
                            placeholder="Enter Appointment Name"
                            name="appointmentName"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="text-lg font-bold pb-2 border-b border-gray-300">
                      Doctor Details
                    </div>
                    <div className="grid grid-cols-3 gap-10 pb-5">
                      <div className="w-full h-full">
                        <div className="form-label">Select Doctor</div>
                        <div className="flex relative w-full">
                          <Select
                            styles={selectStyle}
                            options={patient.length ? getDoctorOptions() : []}
                            name="doctorName"
                            placeholder="Select Doctor"
                            className="w-full"
                            isLoading={false}
                            loadingMessage={() => "Fetching Doctor"}
                            noOptionsMessage={() => "This doctor is not Exist"}
                            onChange={(selectedOption) => {
                              setFieldValue("doctorName", selectedOption.value);
                              setFieldValue("doctorId", selectedOption.id);
                            }}
                          />
                        </div>
                      </div>
                      <div className="w-full h-full">
                        <div className="form-label">Appointment On</div>
                        <div className="flex relative w-full">
                          <Paper
                            sx={{
                              borderRadius: "8px",
                              display: "flex",

                              alignItems: "center",
                            }}
                            className="border-2 border-gray-300 w-full"
                            elevation={0}
                          >
                            <LocalizationProvider dateAdapter={AdapterDateFns}>
                              <DatePicker
                                OpenPickerButtonProps={{
                                  style: {
                                    color: "#FF7B54",
                                    background: "#FFF1EC",
                                    borderRadius: "8px",
                                    marginRight: "4px",
                                    position: "relative",
                                  },
                                }}
                                components={{
                                  OpenPickerIcon: FiCalendar,
                                }}
                                shouldDisableDate={(date) => date < new Date()}
                                shouldDisableMonth={(date) => date < new Date()}
                                shouldDisableYear={(date) => date < new Date()}
                                autoOk
                                openTo="date"
                                views={["day"]}
                                value={values.appointmentOn}
                                onChange={(newValue) => {
                                  setValue(newValue);
                                  setFieldValue("appointmentOn", newValue);
                                }}
                                inputFormat="dd/MM/yyyy"
                                // onChange={(newValue) => {
                                //   console.log("newValue", newValue);
                                //   props.setFieldValue(
                                //     patientDOB.name,
                                //     newValue
                                //   );
                                // }}
                                renderInput={({
                                  inputRef,
                                  inputProps,
                                  InputProps,
                                }) => (
                                  <div className="flex items-center relative">
                                    {InputProps?.endAdornment}
                                    <Field
                                      className="py-3 px-3 w-full outline-none"
                                      name="appointmentOn"
                                      ref={inputRef}
                                      {...inputProps}
                                    />
                                  </div>
                                )}
                              />
                            </LocalizationProvider>
                          </Paper>
                        </div>
                      </div>
                      <div className="w-full">
                        <div className="form-label">Anticipated Time</div>
                        <div className="flex relative w-full">
                          <Paper
                            sx={{
                              borderRadius: "8px",
                              display: "flex",

                              alignItems: "center",
                            }}
                            className="border-2 border-gray-300 w-full"
                            elevation={0}
                          >
                            <LocalizationProvider dateAdapter={AdapterDateFns}>
                              <TimePicker
                                OpenPickerButtonProps={{
                                  style: {
                                    color: "#FF7B54",
                                    background: "#FFF1EC",
                                    borderRadius: "8px",
                                    marginRight: "4px",
                                    position: "relative",
                                  },
                                }}
                                components={{
                                  OpenPickerIcon: FiClock,
                                }}
                                // defaultValue={values.anticipatedTime}
                                label="Enter Anticipated time"
                                value={
                                  values.appointmentOn && values.anticipatedTime
                                }
                                onChange={(newValue) => {
                                  setValue(newValue);
                                  setFieldValue("anticipatedTime", newValue);
                                  console.log("time", newValue);
                                }}
                                // onChange={(newValue) => {
                                //   console.log("newValue", newValue);
                                //   props.setFieldValue(
                                //     patientDOB.name,
                                //     newValue
                                //   );
                                // }}
                                renderInput={({
                                  inputRef,
                                  inputProps,
                                  InputProps,
                                }) => (
                                  <div className="flex items-center relative">
                                    {InputProps?.endAdornment}
                                    <Field
                                      className="py-3 px-3 w-full outline-none"
                                      name="anticipatedTime"
                                      ref={inputRef}
                                      {...inputProps}
                                    />
                                  </div>
                                )}
                              />
                            </LocalizationProvider>
                          </Paper>
                        </div>
                        {/* <div className="flex relative">
                          <Field
                            className="form-field"
                            placeholder="Enter Anticipated time"
                            name="anticipatedTime"
                          />
                        </div> */}
                      </div>
                    </div>

                    <div className="text-lg font-bold pb-2 border-b border-gray-200">
                      Patient Details
                    </div>
                    <div className="grid grid-cols-3 gap-10 pb-5">
                      <div className="w-full h-full">
                        <div className="form-label">Select Patient</div>
                        <div className="flex relative w-full">
                          <Select
                            className="w-full"
                            styles={selectStyle}
                            options={patient.length ? getPatientOptions() : []}
                            name="patientName"
                            placeholder="Select Patient"
                            isLoading={false}
                            loadingMessage={() => "Fetching Patient"}
                            noOptionsMessage={() => "This patient is not Exist"}
                            onChange={(selectedOption) => {
                              setFieldValue("patientUHID", selectedOption.id);
                              setFieldValue(
                                "patientName",
                                selectedOption.value
                              );
                            }}
                          />
                        </div>
                      </div>
                      <div className="w-full h-full">
                        <div className="form-label">Patient UHID</div>
                        <div className="flex relative">
                          <Field
                            className="form-field bg-gray-200 border-transparent focus:border-transparent"
                            placeholder={"Patient UHID"}
                            value={values.patientUHID}
                            readOnly
                            name="patientUHID"
                          />
                        </div>
                      </div>
                      <div className="w-full">
                        <div className="form-label">Appointment For</div>
                        <div className="flex relative">
                          <Field
                            className="form-field"
                            placeholder="Ex: Checkup"
                            name="visitFor"
                          />
                        </div>
                      </div>
                    </div>
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "end",
                        mr: 3,
                        pt: 2,
                        mx: "auto",
                      }}
                    >
                      <Button
                        // disabled={isSubmitting}
                        type="submit"
                        className="primary-button"
                        // onClick={handleNext}
                        text={"Submit"}
                      />
                    </Box>
                  </Form>
                )}
              </Formik>
            </Box>
          </Layout>
        </div>
      )}
    </>
  );
};

export default DoctorAppointment;

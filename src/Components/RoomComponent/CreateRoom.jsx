import { Box, Paper } from "@mui/material";
import { Field, Form, Formik } from "formik";
import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { PageHeader } from "../Layout/Header/Header";
import Layout from "../Layout/LayoutComponent/Layout";
import Select from "react-select";
import { useDispatch, useSelector } from "react-redux";
import { getAllPatients } from "../../actions/patientActions";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { FiCalendar } from "react-icons/fi";
import Button from "../Components/Button";
import { createRoom } from "../../actions/roomActions";
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

const CreateRoom = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const [value, setValue] = React.useState(null);
  const { error, patient, loading } = useSelector((state) => state.patients);
  const { user } = useSelector((state) => state.user);
  console.log("patient in room", patient);
  useEffect(() => {
    if (!error) {
      user && dispatch(getAllPatients(user._id));
    }
  }, [dispatch, user]);

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

  const submitHandler = async (data) => {
    const obj = {
      admissionDate: data.admissionDate,
      // history: {
      //   user: "6209dcd332e421ba86715a45",
      //   name: "cscscsc11",
      //   admittedOn: "vdvdvdv",
      //   dischargedOn: "cscscs",
      // },
      patientId: data.patientId,
      patientName: data.patientName,
      roomNo: data.roomNo,
      vacancyStatus: "true",
    };
    await dispatch(createRoom(obj, user._id));
    history.push("/roomstatus");
  };
  return (
    <>
      {!loading && patient && (
        <div className="relative">
          <PageHeader
            title={"Create Room"}
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
                  patientName: "",
                  patientId: "",
                  admissionDate: new Date().toLocaleDateString(),
                  roomNo: "",
                }}
                onSubmit={(values, { setSubmitting, resetForm }) => {
                  submitHandler(values);
                  resetForm();
                }}
              >
                {({ isSubmitting, setFieldValue, values }) => (
                  <Form className="flex flex-col space-y-5">
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
                            required
                            placeholder="Select Patient"
                            isLoading={false}
                            loadingMessage={() => "Fetching Patient"}
                            noOptionsMessage={() => "This patient is not Exist"}
                            onChange={(selectedOption) => {
                              setFieldValue("patientId", selectedOption.id);
                              setFieldValue(
                                "patientName",
                                selectedOption.value
                              );
                            }}
                          />
                        </div>
                      </div>
                      <div className="w-full h-full">
                        <div className="form-label">Patient Id</div>
                        <div className="flex relative">
                          <Field
                            className="form-field bg-gray-200 border-transparent focus:border-transparent"
                            placeholder={"Patient Id"}
                            value={values.patientId}
                            readOnly
                            name="patientId"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="text-lg font-bold pb-2 border-b border-gray-300">
                      Room Details
                    </div>
                    <div className="w-full h-full">
                      <div className="form-label">Admission Date</div>
                      <div className="grid grid-cols-3 gap-10 pb-5">
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
                                openTo="date"
                                views={["day", "month", "year"]}
                                value={value}
                                onChange={(newValue) => {
                                  setValue(newValue);
                                  setFieldValue("admissionDate", newValue);
                                }}
                                inputFormat="dd/MM/yyyy"
                                renderInput={({
                                  inputRef,
                                  inputProps,
                                  InputProps,
                                }) => (
                                  <div className="flex items-center relative">
                                    {InputProps?.endAdornment}
                                    <Field
                                      className="py-3 px-3 w-full outline-none"
                                      name="admissionDate"
                                      ref={inputRef}
                                      {...inputProps}
                                      required
                                      readOnly
                                    />
                                  </div>
                                )}
                              />
                            </LocalizationProvider>
                          </Paper>
                        </div>
                        <div className="w-full">
                          <div className="form-label">Room No.</div>
                          <div className="flex relative">
                            <Field
                              className="form-field"
                              placeholder="Enter Room No."
                              name="roomNo"
                              required
                            />
                          </div>
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

export default CreateRoom;

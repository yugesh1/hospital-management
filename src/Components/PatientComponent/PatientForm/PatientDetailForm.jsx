import { Box } from "@mui/system";
import { ErrorMessage, Field } from "formik";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import React from "react";
import { FiCalendar } from "react-icons/fi";
import { Paper, TextField } from "@mui/material";
import { format } from "date-fns";
import moment from "moment";

export default function PatientDetailForm(props) {
  // const [value, setValue] = React.useState(props.values.patientDOB);

  const {
    formField: {
      patientName,
      patientDOB,
      patientGender,
      patientMobile,
      patientEmail,
      patientDiagnosis,
      // patientAddress1,
      // patientAddress2,
      // patientCity,
      // patientState,
      // patientZipcode,
      // patientCountry,
      // patientGuardianName,
      // patientGuardianMobile,
      // patientGuardianDOB,
      // patientGuardianAddress1,
      // patientGuardianAddress2,
      // patientGuardianCity,
      // patientGuardianState,
      // patientGuardianZipcode,
    },
  } = props;
  return (
    <Box mb={4} sx={{ width: "80%", mx: "auto" }}>
      <div className="grid grid-cols-3 py-5 gap-4">
        <div className="w-full h-full">
          <div className="form-label">Patient Name</div>
          <div className="flex relative">
            <Field
              placeholder="Enter Name"
              name={patientName.name}
              required
              as={TextField}
              variant="outlined"
              className={`form-field ${
                props.touched.patientName && props.errors.patientName
                  ? "error"
                  : ""
              }`}
            />
          </div>
          <ErrorMessage
            name={patientName.name}
            component="div"
            style={{ marginTop: "5px" }}
            className="error"
          />
        </div>
        <div className="w-full h-full">
          <div className="form-label">Mobile Number</div>
          <div className="flex relative">
            <Field
              className="form-field"
              placeholder="Mobile Number"
              name={patientMobile.name}
              required
            />
          </div>
        </div>
        <div className="w-full h-full">
          <div className="form-label">Date Of Birth</div>
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
                  value={moment(props.values.patientDOB, "DD/MM/YYYY").toDate()}
                  components={{
                    OpenPickerIcon: FiCalendar,
                  }}
                  openTo="date"
                  views={["day", "month", "year"]}
                  // value={value}
                  inputFormat="dd/MM/yyyy"
                  onChange={(newValue) => {
                    props.setFieldValue(patientDOB.name, newValue);
                  }}
                  renderInput={({ inputRef, inputProps, InputProps }) => (
                    <div className="flex items-center relative">
                      {InputProps?.endAdornment}
                      <Field
                        className="py-3 px-3 w-full outline-none"
                        name={patientDOB.name}
                        ref={inputRef}
                        {...inputProps}
                        value={
                          props.values.patientDOB &&
                          format(
                            new Date(props.values.patientDOB),
                            "dd/MM/yyyy"
                          )
                        }
                        required
                        readOnly
                      />
                    </div>
                  )}
                />
              </LocalizationProvider>
            </Paper>
          </div>
        </div>
        <div className="w-full h-full">
          <div className="form-label">Patient Gender</div>
          <div className="flex relative">
            {/* <Field
              className="form-field"
              placeholder="Select Gender"
              name={patientGender.name}
              required
            /> */}
            <Field
              as="select"
              className="form-field"
              name={patientGender.name}
              required
            >
              <option value="" disabled>
                Select Gender
              </option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </Field>
          </div>
        </div>
        <div className="w-full h-full">
          <div className="form-label">Patient Email</div>
          <div className="flex relative">
            <Field
              className="form-field"
              placeholder="Enter Email"
              name={patientEmail.name}
              required
            />
          </div>
        </div>
        <div className="w-full h-full">
          <div className="form-label">Diagnosis</div>
          <div className="flex relative">
            <Field
              className="form-field"
              placeholder="Enter Diagnosis"
              name={patientDiagnosis.name}
            />
          </div>
        </div>
      </div>
    </Box>
  );
}

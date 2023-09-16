import { Box, Typography } from "@mui/material";
import { Field } from "formik";
import React from "react";

export default function PatientAddressForm(props) {
  const {
    formField: {
      patientAddress1,
      patientAddress2,
      patientCity,
      patientState,
      patientZipcode,
      patientCountry,
    },
  } = props;
  return (
    <Box mb={4} sx={{ width: "80%", mx: "auto" }}>
      <div className="grid grid-cols-3 py-5 gap-4">
        <div>
          <div className="form-label">Patient Address1</div>
          <div className="flex relative">
            <Field
              className="form-field"
              placeholder="Patient Address1"
              name={patientAddress1.name}
              required
            />
          </div>
        </div>
        <div>
          <div className="form-label">Patient Address2</div>
          <div className="flex relative">
            <Field
              className="form-field"
              placeholder="Patient Address2"
              name={patientAddress2.name}
            />
          </div>
        </div>
        <div>
          <div className="form-label">City</div>
          <div className="flex relative">
            <Field
              className="form-field"
              placeholder="Enter City"
              name={patientCity.name}
              required
            />
          </div>
        </div>
        <div>
          <div className="form-label">State</div>
          <div className="flex relative">
            <Field
              className="form-field"
              placeholder="Enter State"
              name={patientState.name}
              required
            />
          </div>
        </div>
        <div>
          <div className="form-label">Zipcode</div>
          <div className="flex relative">
            <Field
              className="form-field"
              placeholder="Enter Zipcode"
              name={patientZipcode.name}
              required
            />
          </div>
        </div>
        <div>
          <div className="form-label">Country</div>
          <div className="flex relative">
            <Field
              className="form-field"
              placeholder="Enter Country"
              name={patientCountry.name}
              required
            />
          </div>
        </div>
      </div>
    </Box>
  );
}

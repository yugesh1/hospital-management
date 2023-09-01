import { Box } from "@mui/material";
import { Field } from "formik";
import React from "react";

export default function PatientGuardianDetailForm(props) {
  const [value, setValue] = React.useState(null);
  const {
    formField: {
      patientGuardianName,
      patientGuardianMobile,
      patientGuardianAddress1,
      patientGuardianAddress2,
      patientGuardianCity,
      patientGuardianState,
      patientGuardianZipcode,
    },
  } = props;
  return (
    <Box mb={4} sx={{ width: "80%", mx: "auto" }}>
      <div className="grid grid-cols-3 py-5 gap-4">
        <div>
          <div className="form-label">Guardian Name</div>
          <div className="flex relative">
            <Field
              className="form-field"
              placeholder="Guardian Name"
              name={patientGuardianName.name}
            />
          </div>
        </div>
        <div>
          <div className="form-label">Guardian Mobile No.</div>
          <div className="flex relative">
            <Field
              className="form-field"
              placeholder="Guardian Mobile No."
              name={patientGuardianMobile.name}
            />
          </div>
        </div>
        <div>
          <div className="form-label">Guardian Address1</div>
          <div className="flex relative">
            <Field
              className="form-field"
              placeholder="Guardian Address1"
              name={patientGuardianAddress1.name}
            />
          </div>
        </div>
        <div>
          <div className="form-label">Guardian Address2</div>
          <div className="flex relative">
            <Field
              className="form-field"
              placeholder="Guardian Address2"
              name={patientGuardianAddress2.name}
            />
          </div>
        </div>
        <div>
          <div className="form-label">City</div>
          <div className="flex relative">
            <Field
              className="form-field"
              placeholder="Enter City"
              name={patientGuardianCity.name}
            />
          </div>
        </div>
        <div>
          <div className="form-label">State</div>
          <div className="flex relative">
            <Field
              className="form-field"
              placeholder="State"
              name={patientGuardianState.name}
            />
          </div>
        </div>
        <div>
          <div className="form-label">Zipcode</div>
          <div className="flex relative">
            <Field
              className="form-field"
              placeholder="Enter Zipcode"
              name={patientGuardianZipcode.name}
            />
          </div>
        </div>
      </div>
    </Box>
  );
}

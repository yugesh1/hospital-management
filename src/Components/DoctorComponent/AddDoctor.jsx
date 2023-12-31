import { Box, FormHelperText, TextField } from "@mui/material";
import { ErrorMessage, Field, Form, Formik } from "formik";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { createNewUser } from "../../actions/userActions";
import Button from "../Components/Button";
import { PageHeader } from "../Layout/Header/Header";
import Layout from "../Layout/LayoutComponent/Layout";
import { searchDoctor, updateDoctor } from "../../actions/doctorActions";
import NotFound from "../Pages/NotFound";
import * as Yup from "yup";

const AddDoctor = ({ data: doctor }) => {
  const history = useHistory();
  const { id } = useParams();
  const [isEditMode, setIsEditMode] = useState(doctor ? true : false);
  const { user } = useSelector((state) => state.user);

  const dispatch = useDispatch();

  const submitHandler = async (data) => {
    const address = `${data.address1}###${data.address2}###${data.city}###${data.state}###${data.country}###${data.zipCode}`;
    const obj = {
      userName: data.userName,
      userRole: "doctor",
      userAvailability: "Available",
      email: data.email,
      phoneNo: data.phoneNo,
      password: "11111111",
      address,
      biography: data.biography,
    };
    if (isEditMode) {
      await dispatch(updateDoctor(data, doctor._id));

      history.push("/alldoctors");
    } else {
      await dispatch(createNewUser(obj, user._id));
      history.goBack();
    }
  };
  // const getDoctor = async (id) => {
  //   if (id) {
  //     await dispatch(searchDoctor(id));

  //     if (doctor && !isEditMode) {
  //       setIsEditMode(true);
  //     }
  //   }
  // };

  // useEffect(() => {}, [id]);

  // if (!loading && isEditMode && doctor && Object.keys(doctor).length === 0) {
  //   return <NotFound />;
  // }

  const addDoctorSchema = Yup.object().shape({
    userName: Yup.string()
      .min(2, "Too Short!")
      .max(30, "Too Long!")
      .required("Required"),
    email: Yup.string().email("Invalid email").required("Required"),
  });

  return (
    <>
      <div className="relative">
        <PageHeader
          title={isEditMode ? "Update Doctor" : "Add Doctor"}
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
                userName: doctor?.userName || "",
                email: doctor?.email || "",
                phoneNo: doctor?.phoneNo || "",
                address1: doctor?.address.split("###")[0] || "",
                address2: doctor?.address.split("###")[1] || "",
                city: doctor?.address.split("###")[2] || "",
                state: doctor?.address.split("###")[3] || "",
                country: doctor?.address.split("###")[4] || "",
                zipCode: doctor?.address.split("###")[5] || "",
                biography: doctor?.biography || "",
              }}
              validationSchema={addDoctorSchema}
              onSubmit={(values, { setSubmitting, resetForm }) => {
                submitHandler(values);
                resetForm();
              }}
            >
              {({ errors, touched }) => (
                <Form className="flex flex-col space-y-5">
                  <div className="text-lg font-bold pb-2 border-b border-gray-200">
                    {!isEditMode ? "Add Doctor" : "Update Doctor"}
                  </div>
                  <div className="grid grid-cols-3 gap-10 pb-5">
                    <div className="w-full">
                      <div className="form-label">Doctor Name</div>
                      <div className="flex relative">
                        <Field
                          placeholder="Enter Doctor Name"
                          name="userName"
                          required
                          as={TextField}
                          variant="outlined"
                          className={`form-field ${
                            touched.userName && errors.userName ? "error" : ""
                          }`}
                        />
                      </div>
                      <ErrorMessage
                        name="userName"
                        component="div"
                        style={{ marginTop: "5px" }}
                        className="error"
                      />
                    </div>
                    <div className="w-full">
                      <div className="form-label">Email Address</div>
                      <div className="flex relative">
                        <Field
                          placeholder="Enter Email Address"
                          name="email"
                          type="email"
                          required
                          as={TextField}
                          className={`form-field ${
                            touched.email && errors.email ? "error" : ""
                          }`}
                        />
                      </div>
                      <ErrorMessage
                        name="email"
                        style={{ marginTop: "5px" }}
                        component="div"
                        className="error"
                      />
                    </div>
                    <div className="w-full">
                      <div className="form-label">Phone Number</div>
                      <div className="flex relative">
                        <Field
                          className="form-field"
                          placeholder="Enter Phone Number"
                          name="phoneNo"
                          required
                        />
                      </div>
                    </div>
                  </div>
                  <div className="text-lg font-bold pb-2 border-b border-gray-300">
                    Doctor Address
                  </div>
                  <div className="grid grid-cols-3 gap-x-10 gap-y-5 pb-5">
                    <div className="w-full">
                      <div className="form-label">Doctor Address 1</div>
                      <div className="flex relative">
                        <Field
                          className="form-field"
                          placeholder="Enter Doctor Name"
                          name="address1"
                          required
                        />
                      </div>
                    </div>
                    <div className="w-full">
                      <div className="form-label">Doctor Address 2</div>
                      <div className="flex relative">
                        <Field
                          className="form-field"
                          placeholder="Enter Email Address"
                          name="address2"
                        />
                      </div>
                    </div>
                    <div className="w-full">
                      <div className="form-label">Doctor City</div>
                      <div className="flex relative">
                        <Field
                          className="form-field"
                          placeholder="Enter City"
                          name="city"
                          required
                        />
                      </div>
                    </div>
                    <div className="w-full">
                      <div className="form-label">Doctor State</div>
                      <div className="flex relative">
                        <Field
                          className="form-field"
                          placeholder="Enter State"
                          name="state"
                          required
                        />
                      </div>
                    </div>
                    <div className="w-full">
                      <div className="form-label">Doctor Zipcode</div>
                      <div className="flex relative">
                        <Field
                          className="form-field"
                          placeholder="Enter Zipcode"
                          name="zipCode"
                          required
                        />
                      </div>
                    </div>
                    <div className="w-full">
                      <div className="form-label">Doctor Country</div>
                      <div className="flex relative">
                        <Field
                          className="form-field"
                          placeholder="Enter Country"
                          name="country"
                          required
                        />
                      </div>
                    </div>
                  </div>
                  <div className="text-lg font-bold pb-2 border-b border-gray-300">
                    Doctor Biography
                  </div>
                  <div className="grid grid-cols-1 gap-x-10 gap-y-5 pb-5">
                    <div className="w-full">
                      <div className="form-label">Doctor Biography</div>
                      <div className="flex relative">
                        <Field
                          as="textarea"
                          className="form-field h-40 text-start items-start"
                          placeholder="Enter biography"
                          name="biography"
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
    </>
  );
};

export default AddDoctor;

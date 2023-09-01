import { Box } from "@mui/material";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { getAllAppointments } from "../../actions/appointmentActions";
import { PageHeader } from "../Layout/Header/Header";
import Layout from "../Layout/LayoutComponent/Layout";

const NotificationsList = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const { appointments } = useSelector((state) => state.allappointments);
  console.log("notifications", appointments);
  useEffect(() => {
    dispatch(getAllAppointments());
  }, [dispatch]);
  return (
    <div className="relative">
      <PageHeader title={"Notifications"} back onClick={history.goBack} />
      <Layout>
        <Box
          style={{
            overflow: "auto",
            backgroundColor: "#fff",
            borderRadius: "4px",
            padding: "16px 16px",
          }}
        >
          <div className="flex justify-between items-center pb-5 border-b border-gray-200">
            <div className="font-bold text-xl">All Notifications</div>
          </div>
        </Box>
      </Layout>
    </div>
  );
};

export default NotificationsList;

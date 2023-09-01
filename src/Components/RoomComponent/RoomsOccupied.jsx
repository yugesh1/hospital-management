import { Box } from "@mui/material";
import { DataGrid, GridActionsCellItem } from "@mui/x-data-grid";
import moment from "moment";
import React, { useEffect } from "react";
import { FiEdit, FiTrash2 } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { deleteRoom, getAllRooms } from "../../actions/roomActions";
import Button from "../Components/Button";
import { PageHeader } from "../Layout/Header/Header";
import Layout from "../Layout/LayoutComponent/Layout";

const RoomsOccupied = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  const { rooms } = useSelector((state) => state.allrooms);

  console.log("rooms occupied", rooms);

  useEffect(() => {
    dispatch(getAllRooms());
  }, [dispatch]);

  const deleteRoomFn = React.useCallback(
    (id) => async () => {
      await dispatch(deleteRoom(id));
      dispatch(getAllRooms());
    },
    [dispatch]
  );

  const columns = () => [
    {
      field: "patientId",
      headerName: "Patient ID",
      className: "super-app-theme-header",
      width: 170,
    },
    {
      field: "patientName",
      headerName: "Patient name",
      className: "super-app-theme-header",
      width: 270,
      // renderCell: (params) => {
      //   return (
      //     <div>
      //       {/* <Avatar sx={{ width: 35, height: 35 }} src={params.value.avatar} /> */}
      //       <span className="px-3 underline cursor-pointer text-blue-600">
      //         {params.row.firstName} {params.row.lastName}
      //       </span>
      //     </div>
      //   );
      // },
    },
    {
      field: "admissionDate",
      headerName: "Admission Date",
      className: "super-app-theme-header",
      width: 170,
    },
    {
      field: "patientInRoom",
      className: "super-app-theme-header",
      headerName: "Room No.",
    },
    {
      field: "actions",
      type: "actions",
      width: 100,
      getActions: (params) => [
        <GridActionsCellItem
          icon={<FiTrash2 size={16} />}
          label="Delete"
          onClick={deleteRoomFn(params.id)}
        />,
      ],
    },
  ];

  const rows = () =>
    rooms?.map(
      ({
        _id,
        patientId,
        patientName,
        roomNo,
        vacancyStatus,
        admissionDate,
      }) => {
        return {
          id: _id,
          patientId: patientId,
          patientName: patientName,
          // firstName: patientName.split(" ")[0],
          // lastName: patientName.split(" ")[1],
          patientInRoom: roomNo,
          vacancyStatus: vacancyStatus,
          admissionDate: moment(new Date(admissionDate)).format("MMM Do YYYY"),
        };
      }
    );

  return (
    <div className="relative">
      <PageHeader title={"Room Status"} />
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
            <div className="font-bold text-xl flex items-center space-x-5">
              <div>Room Occupied</div>
            </div>
            <div className="flex space-x-6">
              <Button
                onClick={
                  // handleOpen
                  () => {
                    history.push("/createroom");
                  }
                }
                className="primary-button"
                text={"Create Room"}
              />
            </div>
          </div>
          {rooms.length > 0 && (
            <>
              <DataGrid
                sx={{
                  border: "none",
                  "& .super-app-theme-header": {
                    fontWeight: "bold",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  },
                }}
                componentsProps={{
                  toolbar: {
                    showQuickFilter: true,
                    quickFilterProps: { debounceMs: 500 },
                  },
                }}
                autoHeight
                rowHeight={70}
                rows={rows()}
                columns={columns()}
                pageSize={10}
                rowsPerPageOptions={[5]}
                checkboxSelection
              />
            </>
          )}
        </Box>
      </Layout>
      {/* <div>Rooms Occupied</div>
      <div className=" justify-content-center" style={{ height: 400 }}>
        <>
          <table class="table">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Appointment Time</th>
                <th scope="col">Appointment With</th>
                <th scope="col">Doctors</th>
              </tr>
            </thead>
            <tbody>
              {rooms.map((data) => {
                console.log(data, "appicancana");

                return (
                  <tr>
                    <th scope="row">1</th>
                    <td>{data.admissionDate}</td>
                    <td>{data.roomNo}</td>
                    <td>{data.patientName}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </>
      </div> */}
    </div>
  );
};

export default RoomsOccupied;

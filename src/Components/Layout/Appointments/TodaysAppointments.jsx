import React, { useEffect } from "react";
import { PageHeader } from "../Header/Header";
import Layout from "../LayoutComponent/Layout";
import { useDispatch, useSelector } from "react-redux";
import { getAllAppointments } from "../../../actions/appointmentActions";
import Button from "../../Components/Button";
import AddPatientModal from "../../Components/FilterModal";
import { Box, InputBase, Paper, TextField } from "@mui/material";
import { useHistory } from "react-router-dom";
import { Calendar, momentLocalizer, Views, Navigate } from "react-big-calendar";
import Toolbar from "react-big-calendar/lib/Toolbar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { addHours } from "date-fns";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { FiCalendar } from "react-icons/fi";

export const CustomToolbar = ({
  date,
  view,
  views,
  label,
  onView,
  onNavigate,
  localizer,
}) => {
  // const onPickerChange = (newDate) => onNavigate(Navigate.DATE, newDate);
  return <div>TodaysAppointments</div>;
  // this only works if `newDate` is a true JS Date

  // ... the rest of your Toolbar display
};

const TodaysAppointment = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const { appointments, loading } = useSelector(
    (state) => state.allappointments
  );
  const { user } = useSelector((state) => state.user);

  const doctors = appointments
    ?.filter((appointment, index, self) => {
      return (
        appointment.doctorsAttending[0].doctorId &&
        self.findIndex(
          (self) =>
            self.doctorsAttending[0].doctorId ===
            appointment.doctorsAttending[0].doctorId
        ) === index
      );
    })
    .map((appointment) => appointment.doctorsAttending[0]);

  const doctorsForAppointment = doctors.map(({ doctorId, doctorName }) => ({
    resourceId: doctorId,
    resourceTitle: doctorName,
  }));

  const doctorForAppointment = [
    {
      resourceId: user._id,
      resourceTitle: user.userName,
    },
  ];

  const formattedAppointments = [];

  if (appointments && user.userRole === "doctor") {
    const filteredAppointments =
      appointments?.length > 0 &&
      appointments.filter(
        (item) => item.doctorsAttending[0].doctorId === user._id
      );

    filteredAppointments && formattedAppointments.push(...filteredAppointments);
  } else {
    appointments && formattedAppointments.push(...appointments);
  }

  const eventsForCalendar =
    formattedAppointments.length > 0
      ? formattedAppointments
          .filter((item) => {
            return item.doctorsAttending[0].doctorId;
          })
          .map((item) => ({
            id: item._id,
            title: item.appointmentName,
            // start: moment().toDate(),
            start: new Date(
              new Date(item.appointmentWith[0].appointmentOn).getFullYear(),
              new Date(item.appointmentWith[0].appointmentOn).getMonth(),
              new Date(item.appointmentWith[0].appointmentOn).getDate(),
              new Date(item.anticipatedTime).getHours(),
              new Date(item.anticipatedTime).getMinutes()
            ),
            end: addHours(
              new Date(
                new Date(item.appointmentWith[0].appointmentOn).getFullYear(),
                new Date(item.appointmentWith[0].appointmentOn).getMonth(),
                new Date(item.appointmentWith[0].appointmentOn).getDate(),
                new Date(item.anticipatedTime).getHours(),
                new Date(item.anticipatedTime).getMinutes()
              ),
              2
            ),
            resourceId: item.doctorsAttending[0].doctorId,
          }))
      : [];

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [date, newDate] = React.useState(new Date());

  const handleNavigation = (date, view, action) => {
    console.log({ date, view, action });
    newDate(date);
    //it returns current date, view options[month,day,week,agenda] and action like prev, next or today
  };
  const handleChange = () => {
    console.log("this block code executed");
  };

  useEffect(() => {
    if (user) {
      if (user.userRole === "doctor") {
        dispatch(getAllAppointments(user.userId));
      } else {
        dispatch(getAllAppointments(user._id));
      }
    }
  }, [dispatch, user]);

  // const allappointments = ()

  return (
    <div className="relative">
      <PageHeader title={"Today's Appoinments"} />
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
            <div className="font-bold text-xl">All Appointments</div>
            <div className="flex space-x-6">
              <Button
                className="primary-button"
                onClick={() => history.push("/newAppointment")}
                text={"Add Appointment"}
              />
            </div>
            <AddPatientModal open={open} onClose={handleClose} />
          </div>
          {loading ? (
            <div>loading...</div>
          ) : appointments.length > 0 ? (
            <div>
              <Calendar
                toolbar={CustomToolbar}
                style={{
                  height: 700,
                  width: `${user.userRole === "admin" ? "1150px" : ""}`,
                  overflow: "auto",
                }}
                components={{
                  event: EventComponent({ eventsForCalendar, handleChange }),
                  toolbar: CalenderToolbar({
                    eventsForCalendar,
                    handleChange,
                    newDate,
                    date,
                  }),
                }}
                // startAccessor="start"
                // endAccessor="end"
                // defaultDate={defaultDate}
                defaultView={Views.DAY}
                events={eventsForCalendar}
                localizer={momentLocalizer(moment)}
                resourceIdAccessor="resourceId"
                resources={
                  user.userRole === "doctor"
                    ? doctorForAppointment
                    : doctorsForAppointment
                }
                resourceTitleAccessor="resourceTitle"
                onNavigate={handleNavigation}
                step={60}
                views={["week", "month", "day", "agenda"]}
                date={date}
              />
            </div>
          ) : (
            <h3
              style={{
                textAlign: "center",
                fontSize: "20px",
                marginBlock: "5px",
              }}
            >
              No records found
            </h3>
          )}
          {/* {appointments.length ? (
            <AppointmentCalendar appointments={appointments} />
          ) : (
            <div>loading...</div>
          )} */}
        </Box>
      </Layout>
    </div>
  );
};

export default TodaysAppointment;

const EventComponent =
  ({ events, change }) =>
  (props) => {
    return (
      <div
        className="customEventTile"
        title="This is EventTile"
        // style={{ maxHeight: "150px" }}
      >
        <h5>{props.event.title}</h5>
        {/* <button onClick={props.change}>Do Something</button> */}
      </div>
    );
  };

const CalenderToolbar = ({ handleChange, newDate, date }) => {
  return class BaseToolBar extends Toolbar {
    constructor(props) {
      super(props);
    }
    handleDayChange = (event, mconte) => {
      mconte(event.target.value);
    };
    handleNamvigate = (detail, elem) => {
      detail.navigate(elem);
    };

    render() {
      console.log({ props: this.props });
      return (
        <div className="flex justify-between items-center">
          <div className="space-x-3">
            <button
              type="button"
              className="px-3 py-2 border-2 border-primaryColor rounded-lg hover:bg-primaryColor hover:text-white text-primaryColor font-bold"
              onClick={() => {
                this.handleNamvigate(this, "TODAY");
              }}
            >
              Today
            </button>
            <button
              type="button"
              className="px-3 py-2 border-2 border-primaryColor rounded-lg hover:bg-primaryColor hover:text-white text-primaryColor font-bold"
              onClick={() => {
                this.handleNamvigate(this, "PREV");
              }}
            >
              Prev
            </button>
            <button
              type="button"
              className="px-3 py-2 border-2 border-primaryColor rounded-lg hover:bg-primaryColor hover:text-white text-primaryColor font-bold"
              onClick={() => {
                this.handleNamvigate(this, "NEXT");
              }}
            >
              Next
            </button>
          </div>
          {/* <div className="rbc-toolbar-label">{this.props.label}</div> */}
          <div className="py-2">
            <Paper
              sx={{
                borderRadius: "8px",
                display: "flex",
                py: 1,
                alignItems: "center",
              }}
              className="border-2 border-gray-300 w-full"
              elevation={0}
            >
              <LocalizationProvider dateAdapter={AdapterDayjs}>
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
                  label="Basic example"
                  value={date}
                  onChange={(newValue, event) => {
                    console.log({ n: newValue.$d, event });
                    newDate(newValue.$d);
                  }}
                  renderInput={({ inputRef, inputProps, InputProps }) => (
                    <div className="flex items-center relative">
                      {InputProps?.endAdornment}
                      <InputBase
                        variant="standard"
                        sx={{ ml: 1, flex: 1 }}
                        placeholder="Search Google Maps"
                        ref={inputRef}
                        {...inputProps}
                        readOnly
                      />
                    </div>
                  )}
                />
              </LocalizationProvider>
            </Paper>
          </div>
          <div className="rbc-btn-group">
            <select
              className="form-control"
              onChange={(e) => {
                console.log(this.view, this);
                this.handleDayChange(e, this.view);
              }}
              defaultValue={this.props.view}
            >
              <option className="optionbar" value="day">
                Day
              </option>
              <option className="optionbar" value="week">
                Week
              </option>
              <option className="optionbar" value="month">
                Month
              </option>
              <option className="optionbar" value="agenda">
                Agenda
              </option>
            </select>
          </div>
        </div>
      );
    }
  };
};

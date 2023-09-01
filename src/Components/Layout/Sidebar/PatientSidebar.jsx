import React from "react";
import DashboardIcon from "@mui/icons-material/Dashboard";
import AppRegistrationIcon from "@mui/icons-material/AppRegistration";
import AirlineSeatFlatIcon from "@mui/icons-material/AirlineSeatFlat";
import MedicationIcon from "@mui/icons-material/Medication";
import NewReleasesIcon from "@mui/icons-material/NewReleases";
import SummarizeIcon from "@mui/icons-material/Summarize";
import AssessmentIcon from "@mui/icons-material/Assessment";
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";
import ArticleIcon from "@mui/icons-material/Article";
import PersonAddAltIcon from "@mui/icons-material/PersonAddAlt";
import ScheduleIcon from "@mui/icons-material/Schedule";

const PatientSidebar = [
  {
    icon: <AppRegistrationIcon />,
    title: "Patient Registration",
    link: "/newpatient",
  },
  {
    icon: <PersonAddAltIcon />,
    title: "Patient Issue",
    link: "/patientissue",
  },
  {
    icon: <ScheduleIcon />,
    title: "Schedule an Appointment",
    link: "/appointment",
  },
];

export default PatientSidebar;

import React from "react";
import DashboardIcon from "../../../images/icons/dashboard-icon.svg";
import PatientIcon from "../../../images/icons/patient-icon.svg";
import DoctorIcon from "../../../images/icons/doctor-icon.svg";
import EmergencyIcon from "../../../images/icons/emergency-icon.svg";
import OperationIcon from "../../../images/icons/operation-icon.svg";
import ReportsIcon from "../../../images/icons/reports-icon.svg";
import AccountsIcon from "../../../images/icons/accounts-icon.svg";
import ExpenseIcon from "../../../images/icons/expense-icon.svg";
import AppointmentIcon from "../../../images/icons/appointment-icon.svg";

export const SidebarData = [
  { id: 1, icon: DashboardIcon, title: "Dashboard", link: "/dashboard" },
  {
    id: 2,
    icon: AppointmentIcon,
    title: "Today's Appointments",
    link: "/appointments",
  },
  {
    id: 3,
    icon: PatientIcon,
    title: "Patients",
    link: "/patientlist",
  },
  {
    id: 4,
    icon: DoctorIcon,
    title: "Doctor",
    link: "/alldoctors",
    // item: [
    //   { id: 1, title: "Doctor List", link: "/alldoctors" },
    //   { id: 2, title: "Add Doctor", link: "/newpatient" },
    //   { id: 3, title: "Appointment", link: "/appointment" },
    // ],
  },
  {
    id: 5,
    icon: DoctorIcon,
    title: "In-Patient Management",
    // link: "/alldoctors",
    link: "/admittedpatient",
    item: [
      { id: 1, title: "Admitted Patient list", link: "/admittedpatient" },
      { id: 2, title: "Room Status", link: "/roomstatus" },
    ],
  },
  // {
  //   id: 6,
  //   icon: DashboardIcon,
  //   title: "Services",
  //   link: "/services",
  // },
  // {
  //   id: 7,
  //   icon: DoctorIcon,
  //   title: "Contract Management",
  //   link: "/contractmanagement",
  // },
  {
    id: 8,
    icon: ReportsIcon,
    title: "Inventory Management",
    link: "/inventory",
    item: [
      { id: 1, title: "Product List", link: "/inventory/products" },
      { id: 2, title: "Inventory", link: "/inventory" },
    ],
    // link: "/inventorymanagement",
  },
  // {
  //   id: 9,
  //   icon: ReportsIcon,
  //   title: "Billing",
  //   link: "/outpatientbilling",
  // },
  {
    id: 5,
    icon: ReportsIcon,
    title: "Billing",
    link: "/billing",
    // item: [
    //   { id: 1, title: "Emergency Form", link: "/alldoctors" },
    //   { id: 2, title: "Emergency List", link: "/newpatient" },
    // ],
  },
  // {
  //   id: 6,
  //   icon: OperationIcon,
  //   title: "Operation",
  //   link: "/dashboard",
  // },
  // {
  //   id: 7,
  //   icon: ReportsIcon,
  //   title: "Reports",
  //   link: "/dashboard",
  // },
  // {
  //   id: 8,
  //   icon: AccountsIcon,
  //   title: "Accounts",
  //   link: "/dashboard",
  // },
  // {
  //   id: 9,
  //   icon: ExpenseIcon,
  //   title: "Expense",
  //   item: [
  //     { id: 1, title: "Expense List", link: "/alldoctors" },
  //     { id: 2, title: "Add Expense", link: "/newpatient" },
  //   ],
  // },
  // {
  //   icon: <FiActivity color="white" />,
  //   title: "Patient Registration",
  //   link: "/newpatient",
  // },

  // {
  //   icon: <FiActivity color="white" />,
  //   title: "Patient Issue",
  //   link: "/patientissue",
  // },
  // {
  //   icon: <FiActivity color="white" />,
  //   title: "All Appointments",
  //   link: "/allappointments",
  // },
  // {
  //   icon: <FiActivity color="white" />,
  //   title: "Schedule an Appointment",
  //   link: "/appointment",
  // },
  // {
  //   icon: <FiActivity color="white" />,
  //   title: "Invesigtion Acknowledge",
  //   link: "/investigationacknowledge",
  // },
  // {
  //   icon: <FiActivity color="white" />,
  //   title: "Out Patient Billing",
  //   link: "/outpatientbilling",
  // },
  // {
  //   icon: <FiActivity color="white" />,
  //   title: "Sample Collection",
  //   link: "/samplecollection",
  // },
  // {
  //   icon: <FiActivity color="white" />,
  //   title: "Sample Acknowledge",
  //   link: "/sampleacknowledge",
  // },
  // {
  //   icon: <FiActivity color="white" />,
  //   title: "Room Status",
  //   link: "/roomstatus",
  // },
  // {
  //   icon: <FiActivity color="white" />,
  //   title: "All Doctors",
  //   link: "/alldoctors",
  // },
  // {
  //   icon: <FiActivity color="white" />,
  //   title: "Assign a Room",
  //   link: "/room",
  // },
];

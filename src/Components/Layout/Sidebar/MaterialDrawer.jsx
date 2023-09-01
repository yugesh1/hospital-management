import {
  Avatar,
  Box,
  Collapse,
  CssBaseline,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import "./Sidebar.css";

import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { SidebarData } from "./SidebarData";
import { useDispatch, useSelector } from "react-redux";
import { loadUser } from "../../../actions/userActions";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import EditIcon from "../../../images/icons/edit-icon.svg";
import Logo from "../../../images/Datamines-logo.svg";

const MaterialDrawer = ({ isOpen, setIsOpen }) => {
  const dispatch = useDispatch();

  console.log("kuch bhi likhdiya");
  const { loading, user } = useSelector((state) => state.user);

  console.log(user);

  const [open, setOpen] = React.useState("");

  const handleClick = (e) => {
    e === open ? setOpen("") : setOpen(e);
    // setOpen(open);
  };

  const drawerWidth = 270;
  const userLoad = async () => {
    await dispatch(loadUser());
  };
  useEffect(() => {
    userLoad();
  }, [dispatch]);

  console.log("user patient", user);

  const closeDrawer = () => {
    setIsOpen(false);
  };

  const styles = {
    link: {
      color: "#000000",
      textDecoration: "none",
    },
    item: {
      padding: "14px 24px",
      display: "flex",
      alignItems: "center",
      justifyContent: "start",
    },
    icon: {
      minWidth: "40px",
    },
  };

  return (
    <>
      {!loading && user?.userRole === "doctor" && (
        <Drawer
          variant="permanent"
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            [`& .MuiDrawer-paper`]: {
              width: drawerWidth,
              borderRight: "none",
              backgroundColor: "#FFFFFF",
              boxShadow: " 10px 0px 10px rgba(0, 0, 0, 0.02)",
            },
          }}
        >
          <CssBaseline />
          <div className="flex flex-col pb-10 w-full bg-gradient-to-b from-red-400 to-red-300 text-white">
            <div className="flex justify-start items-center py-5 px-4">
              {/* <div className="text-md font-bold">My Profile</div> */}
              <img src={Logo} alt={"edit profile"} width={100} />
              {/* <IconButton
                  sx={{
                    backgroundColor: "#ffffff",
                    transition: "box-shadow 0.3s ease-in-out",
                    "&:hover": {
                      backgroundColor: "#ffffff",
                      boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
                    },
                  }}
                  onClick={closeDrawer}
                >
                  <img
                    className="p-[2px]"
                    src={EditIcon}
                    alt={"edit profile"}
                    width={24}
                  />
                </IconButton> */}
            </div>
            <div className="flex flex-col items-center py-5">
              <div className="flex justify-center pb-3">
                <Avatar
                  className="border-2 border-white rounded-full"
                  sx={{ width: 60, height: 60, objectFit: "cover" }}
                  alt={user?.userName}
                  src={user?.email}
                />
              </div>
              <div className="text-lg font-bold">{user?.userName}</div>
              <div className="text-md font-normal">{user?.userRole}</div>
            </div>
          </div>
          <Box
            id="1"
            sx={{
              paddingTop: "20px",
              paddingBottom: "40px",
              overflow: "auto",
              "&:hover": {
                overflow: "auto",
              },
              "&::-webkit-scrollbar": {
                width: 7,
              },
              "&::-webkit-scrollbar-track": {
                backgroundColor: "transparent",
              },
              "&::-webkit-scrollbar-thumb": {
                backgroundColor: "transparent",
                borderRadius: 2,
              },
              "&::-webkit-scrollbar-thumb:hover": {
                backgroundColor: "rgba(255, 255, 255, 0.29)",
              },
            }}
          >
            {SidebarData.map((data, index) => {
              return (
                <Link key={data.id} to={data.link} style={styles.link}>
                  <List key={index} disablePadding>
                    {data.item != null ? (
                      <ListItem
                        onClick={() => handleClick(data.id)}
                        style={styles.item}
                        button
                        key={data.id}
                      >
                        <ListItemIcon style={styles.icon}>
                          <img src={data.icon} alt={data.title} width={22} />
                        </ListItemIcon>
                        <ListItemText
                          sx={{ fontSize: "14px" }}
                          primary={data.title}
                        />
                        {data.item ? (
                          open === data.id ? (
                            <ExpandLess />
                          ) : (
                            <ExpandMore />
                          )
                        ) : null}
                      </ListItem>
                    ) : (
                      <ListItem key={data.id} style={styles.item} button>
                        <ListItemIcon style={styles.icon}>
                          <img src={data.icon} alt={data.title} width={22} />
                        </ListItemIcon>
                        <ListItemText primary={data.title} />
                      </ListItem>
                    )}
                    {data.item &&
                      data.item.map((item, index) => (
                        <Collapse
                          key={item.id}
                          in={open === data.id}
                          timeout="auto"
                          unmountOnExit
                        >
                          <Link
                            key={item.id}
                            to={item.link}
                            style={styles.link}
                          >
                            <List sx={{ pl: 5 }} key={item.id} disablePadding>
                              <ListItem
                                key={item.id}
                                style={styles.item}
                                button
                                sx={{ pl: 4 }}
                              >
                                <ListItemText
                                  sx={{
                                    fontSize: "14px",
                                    fontFamily: "Nunito, sans-serif",
                                  }}
                                  primary={item.title}
                                />
                              </ListItem>
                            </List>
                          </Link>
                        </Collapse>
                      ))}
                  </List>
                </Link>
              );
            })}
          </Box>
        </Drawer>
      )}
    </>
  );
};

export default MaterialDrawer;

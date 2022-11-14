import { useState } from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import logo from "../../images/logo.svg";
import "./sideNavStyle.css";
import { Link } from "react-router-dom";
import Grid from "@mui/material/Unstable_Grid2";

const drawerWidth = "20%";

const navigationNames = [
  [
    ["Dashboard", "/user/dashboard", "key1"],
    ["Apply for certificate", "/user/apply-certificate", "key2"],
    ["Check status", "/user/status", "key3"],
    ["Help", "/user/help", "key4"],
  ],

  [
    ["Dashboard", "/admin/dashboard", "keyA"],
    ["Requests", "/admin/requests", "keyB"],
  ],
];

export default function PermanentDrawerLeft({ index }) {
  return (
    <div style={{ backgroundColor: "red" }}>
      <Box sx={{ display: "flex" }}>
        <Drawer
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            "& .MuiDrawer-paper": {
              width: drawerWidth,
              boxSizing: "border-box",
            },
          }}
          variant="permanent"
          anchor="left"
        >
          <Grid
            container
            sx={{ marginTop: 4, marginBottom: 4 }}
            direction="column"
          >
            <Grid xs={4}>
              <Typography
                variant="h5"
                component="div"
                sx={{
                  fontWeight: 400,
                  mt: 1,
                  marginLeft: "80%",
                  fontFamily: "Segoe UI",
                }}
              >
                EzGrama
              </Typography>
            </Grid>

            <Grid xs={4}>
              <img
                src={logo}
                style={{ height: "50px", marginLeft: "80%", marginTop: "15%" }}
              />
            </Grid>
          </Grid>

          <List>
            {navigationNames[index].map((attr) => (
              <Link
                to={attr[1]}
                style={{ textDecoration: "none", color: "white" }}
              >
                <ListItem
                  key={attr[2]}
                  disablePadding
                  sx={{
                    transition: "0.3s ease",
                    height: "8vh",

                    ":hover": {
                      backgroundColor: "#09ad58",
                      transition: "0.3s ease",
                    },
                  }}
                >
                  <ListItemButton>
                    <ListItemIcon></ListItemIcon>
                    <ListItemText
                      primary={attr[0]}
                      sx={{
                        fontWeight: 600,
                        fontFamily: "Segoe UI",
                        textDecoration: "none",
                      }}
                    ></ListItemText>
                  </ListItemButton>
                </ListItem>
              </Link>
            ))}

            {/* <Link
              to="/user/dashboard"
              style={{ textDecoration: "none", color: "white" }}
            >
              <ListItem
                key={"udash"}
                disablePadding
                sx={{
                  transition: "0.3s ease",
                  height: "30%",

                  ":hover": {
                    backgroundColor: "#09ad58",
                    transition: "0.3s ease",
                  },
                }}
              >
                <ListItemButton>
                  <ListItemIcon></ListItemIcon>
                  <ListItemText
                    primary={"Dashboard"}
                    sx={{
                      fontWeight: 600,
                      fontFamily: "Segoe UI",
                      textDecoration: "none",
                    }}
                  ></ListItemText>
                </ListItemButton>
              </ListItem>
            </Link>

            <Link
              to="/user/apply-certificate"
              style={{ textDecoration: "none", color: "white" }}
            >
              <ListItem
                key={"Apply for certificate"}
                disablePadding
                sx={{
                  transition: "0.3s ease",
                  height: "30%",

                  ":hover": {
                    backgroundColor: "#09ad58",
                    transition: "0.3s ease",
                  },
                }}
              >
                <ListItemButton>
                  <ListItemIcon></ListItemIcon>
                  <ListItemText
                    primary={"Apply for certificate"}
                    sx={{ fontWeight: 600, fontFamily: "Segoe UI" }}
                  ></ListItemText>
                </ListItemButton>
              </ListItem>
            </Link>

            <Link
              to="/user/status"
              style={{ textDecoration: "none", color: "white" }}
            >
              <ListItem
                key={"Check status"}
                disablePadding
                sx={{
                  transition: "0.3s ease",
                  height: "30%",

                  ":hover": {
                    backgroundColor: "#09ad58",
                    transition: "0.3s ease",
                  },
                }}
              >
                <ListItemButton>
                  <ListItemIcon></ListItemIcon>
                  <ListItemText
                    primary={"Check status"}
                    sx={{ fontWeight: 600, fontFamily: "Segoe UI" }}
                  ></ListItemText>
                </ListItemButton>
              </ListItem>
            </Link>

            <Link
              to="/user/help"
              style={{ textDecoration: "none", color: "white" }}
            >
              <ListItem
                key={"Help"}
                disablePadding
                sx={{
                  transition: "0.3s ease",
                  height: "30%",

                  ":hover": {
                    backgroundColor: "#09ad58",
                    transition: "0.3s ease",
                  },
                }}
              >
                <ListItemButton>
                  <ListItemIcon></ListItemIcon>
                  <ListItemText
                    primary={"Help"}
                    sx={{ fontWeight: 600, fontFamily: "Segoe UI" }}
                  ></ListItemText>
                </ListItemButton>
              </ListItem>
            </Link> */}
          </List>
        </Drawer>
      </Box>
    </div>
  );
}

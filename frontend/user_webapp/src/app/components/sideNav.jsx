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
import { Link, Redirect } from "react-router-dom";
import Grid from "@mui/material/Unstable_Grid2";
import Button from "@mui/material/Button";

import { useAuthContext } from "@asgardeo/auth-react";

const drawerWidth = "20%";

const navigationNames = [
  [
    ["Apply for certificate", "/user/apply-certificate", "key2"],
    ["Check status", "/user/status", "key3"],
    ["Help", "/user/help", "key4"],
  ],
];

export default function PermanentDrawerLeft({ index }) {
  const { signOut } = useAuthContext();

  const handleLogout = () => {
    localStorage.setItem("stateKey", "");
    signOut();

    return <Redirect to="/" />;
  };

  return (
    <div>
      <Box sx={{ display: "flex" }}>
        <Drawer
          PaperProps={{
            sx: {
              backgroundColor: "#4c4c4c ",
              color: "rgb(255 255 255 / 87%)",
            },
          }}
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
                style={{ height: "90px", marginLeft: "80%", marginTop: "15%" }}
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
          </List>

          <div
            style={{
              marginLeft: "17%",
              position: "absolute",
              bottom: 50,
            }}
          >
            <Button
              variant="contained"
              sx={{
                width: "130%",
                backgroundColor: "#09ad58",
                ":hover": {
                  backgroundColor: "#09914b",
                },
              }}
              onClick={() => handleLogout()}
            >
              Logout
            </Button>
          </div>
        </Drawer>
      </Box>
    </div>
  );
}

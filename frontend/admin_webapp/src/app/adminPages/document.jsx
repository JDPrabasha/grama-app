import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Toolbar from "@mui/material/Toolbar";
import Header from "../components/header";
import PlaceIcon from '@mui/icons-material/Place';
import TodayIcon from '@mui/icons-material/Today';
import PersonIcon from '@mui/icons-material/Person';
import Button from '@mui/material/Button';
import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded';
import HelpRoundedIcon from '@mui/icons-material/HelpRounded';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import billImage from '../../images/bill.jpg';
import Grid from "@mui/material/Unstable_Grid2";


function document() {
    return (
        <>
            <Box
                component="main"
                position="fixed"
                sx={{
                    flexGrow: 1,
                    bgcolor: "background.default",
                    width: "70vw",
                    ml: "22%",
                    zIndex: "modal"
                }}
            >
                <Box>
                <Stack direction='row' alignItems='center' spacing={2} mt={1}>
                    <PersonIcon sx={{ color: '#09ad58' }} />
                        <Typography
                            variant="subtitle1"
                            noWrap
                            component="div"
                            sx={{
                                fontWeight: 500,
                                fontFamily: "Segoe UI",
                                color: "#000",
                            }}
                        >
                            124590223311
                        </Typography>
                    </Stack>    
                    <Stack direction='row' alignItems='center' spacing={2} mt={1}>
                        <TodayIcon sx={{ color: '#09ad58' }}/>
                        <Typography
                            variant="subtitle1"
                            noWrap
                            component="div"
                            sx={{
                                fontWeight: 500,
                                fontFamily: "Segoe UI",
                                color: "#000",
                            }}
                        >
                            Friday April 24, 2022
                        </Typography>
                    </Stack>
                    <Stack direction='row' alignItems='center' spacing={2} mt={1}>
                        <PlaceIcon sx={{ color: '#09ad58' }}/>
                        <Typography
                            variant="subtitle1"
                            noWrap
                            component="div"
                            sx={{
                                fontWeight: 500,
                                fontFamily: "Segoe UI",
                                color: "#000",
                            }}
                        >
                            35, Odio Avenue, Colombo
                        </Typography>
                    </Stack>
                    <Stack direction='row' justifyContent='flex-end' spacing={2} mt={1} mb={2}>
                        <Button variant="contained" startIcon={<CheckCircleRoundedIcon />} sx={{ backgroundColor: '#09ad58', fontWeight: 600, ":hover": { backgroundColor: "#09914b" }, }}>Verify</Button>
                        <Button variant="contained" startIcon={<HelpRoundedIcon />} sx={{ backgroundColor: '#e53935', fontWeight: 600, ":hover": { backgroundColor: "#d32f2f" }, }}>Request resubmission</Button>
                    </Stack>
                </Box>
                <Divider />
                
            </Box>
            <Box
                sx={{
                    flexGrow: 1,
                    bgcolor: "background.default",
                    p: 3,
                    width: "70vw",
                    ml: "22%",
                }}
            >
                <Box position="relative">
                <Grid container sx={{ marginTop:20, justifyContent: 'center', overflow:"auto" }}>
                    <img src={billImage} sx={{ mr: "auto", ml: "auto",border: "solid", width: "70%" }} />
                </Grid>
                </Box>
                
            </Box>
        </>
    );
}

export default document;

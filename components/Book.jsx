import { Button, Grid, TextField, Typography } from "@mui/material";
import React from "react";
import { useGlobalProvider } from "../utils/themeContext";
import Box from "@mui/material/Box"
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import ListItemText from '@mui/material/ListItemText';
import Select from '@mui/material/Select';
import Checkbox from '@mui/material/Checkbox';
const About = () => {
    const { colors } = useGlobalProvider()
    return <div className=" min-h-[70vh] flex justify-center items-center px-5 py-10  md:px-20  bg-back bg-primary" id="book">
        <div className="w-full h-full   flex flex-col justify-center items-center p-5 gap-4 shadow-lg">
            <Typography variant="h2" color={colors.grey[500]} className="font-[700] opacity-70 text-center" fontFamily="Questrial"
            >   BOOK YOUR RIDE
            </Typography>
            <div className="flex gap-2 my-5">
                <Box bgcolor={colors.grey[800]} className="w-20 h-1 "></Box>
                <Box bgcolor={colors.teal[500]} className="w-20 h-1 "></Box>
                <Box bgcolor={colors.grey[800]} className="w-20 h-1 "></Box>


            </div>
            <Grid container spacing={5} className="">
                <Grid item xs={12} md={6} className="flex flex-col items-start gap-3">
                    <Typography fontFamily="Questrial" className="text-[17px]" textAlign="center">
                        Start Date
                    </Typography>
                    <TextField type="date" fullWidth />
                </Grid>
                <Grid item xs={12} md={6} className="flex flex-col items-start gap-3">
                    <Typography fontFamily="Questrial" className="text-[17px]" textAlign="center">
                        End Date
                    </Typography>
                    <TextField type="date" fullWidth />
                </Grid>
                <Grid item xs={12} md={6} className="flex flex-col items-start gap-3">
                    <Typography fontFamily="Questrial" className="text-[17px]" textAlign="center">
                        Name
                    </Typography>
                    <TextField type="text" fullWidth />
                </Grid>
                <Grid item xs={12} md={6} className="flex flex-col items-start gap-3">
                    <Typography fontFamily="Questrial" className="text-[17px]" textAlign="center">
                        Message
                    </Typography>
                    <TextField type="text" fullWidth />
                </Grid>
                <Grid item xs={12} md={6} className="flex flex-col items-start gap-3">
                    <Typography fontFamily="Questrial" className="text-[17px]" textAlign="center">
                        Email
                    </Typography>
                    <TextField type="text" fullWidth />
                </Grid>
                <Grid item xs={12} md={6} className="flex flex-col items-start gap-3">
                    <Typography fontFamily="Questrial" className="text-[17px]" textAlign="center">
                        Phone
                    </Typography>
                    <TextField type="text" fullWidth />
                </Grid>
            </Grid>
            <Button variant="contained" sx={{ backgroundColor: colors.teal[500], color: colors.grey[800], mt: 5, px: 5, py: 1, fontSize: 20, fontWeight: 700, fontFamily: "Questrial" }}>Book Now
            </Button>


        </div>
    </div>;
};

export default About;

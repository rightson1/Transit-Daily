import { Grid, Typography, Box } from "@mui/material";
import React from "react";
import { useGlobalProvider } from "../utils/themeContext";

const Services = () => {
    const { colors } = useGlobalProvider()
    return <div className=" bg-white flex justify-center items-center px-5 py-10  md:px-20 ">
        <div className="w-full h-full shadow-lg  flex flex-col justify-center items-center p-5 gap-4">

            {/* Typograpgy heading 1 variant color is gray */}
            <Typography variant="h2" className="font-[700]  text-center" fontFamily="Questrial"
                color={colors.orange[500]}
            >   We Offer The Best Services
            </Typography>
            <div className="flex gap-2 my-5">
                <Box bgcolor={colors.grey[800]} className="w-20 h-1 "></Box>
                <Box bgcolor={colors.orange[500]} className="w-20 h-1 "></Box>
                <Box bgcolor={colors.grey[800]} className="w-20 h-1 "></Box>


            </div>
            <Grid container spacing={2}>
                {
                    list.map((item, index) => {
                        return <Grid item xs={12} md={6} key={index}>
                            <div className="flex flex-col justify-center items-center gap-4">
                                <div className="flex justify-center items-center">
                                    <img src="/images/Group 1.png" alt="" />
                                </div>
                                <div className="flex flex-col justify-center items-center gap-2">
                                    <h1 className="text-[#1A1A1A] font-[700] text-[20px]">Bike Rental</h1>
                                    <p className="text-[#1A1A1A] font-[400] text-[15px] text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                </div>
                            </div>
                        </Grid>
                    })
                }

            </Grid>
        </div>
    </div>

};

const list = [
    {
        title: "Bike Rental",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
        title: "Bike Repair",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
        title: "Bike Maintenance",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
        title: "Bike Delivery",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
]
export default Services;

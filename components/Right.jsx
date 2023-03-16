import { Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { Parallax } from 'react-parallax';
import Typewriter from 'typewriter-effect';
import { motion } from "framer-motion"
import { useGlobalProvider } from "../utils/themeContext"

const Right = ({ title }) => {
    const { colors } = useGlobalProvider();
    return <div className="pt-10 ">
        <Grid container sx={{
            borderBottom: {
                xs: `4px solid ${colors.teal[500]} `,
                md: 'none'
            },
            border: {
                xs: `none`,
                md: `4px solid ${colors.teal[500]} `
            }
        }} className="">
            <Grid item xs={12} md={4} sx={{
                borderRight: {
                    xs: `none`,
                    md: `4px solid ${colors.teal[500]} `
                }
            }} className="md:h-[70vh]">
                <img src="/rent.jpg" alt="" className="w-full h-full object-cover h-[300px] md:h-full" />



            </Grid>
            <Grid item xs={12} md={8} className=" flex flex-col justify-center items-center py-10 gap-5 md:h-[70vh]" sx={{
                bgcolor: colors.black[500]
            }}>
                <Typography fontFamily="Questrial" variant="h1" className="uppercase " color={colors.teal[500]}
                    fontSize={{
                        xs: '2rem',

                    }}>Renting</Typography>
                <Typography fontFamily="Questrial" className="text-[17px] " textAlign="center" color={colors.black[100]}>
                    Welcome to Transit Daily, where we offer convenient and affordable bike rentals, as well as repair and maintenance services. Our bikes are designed for comfort and safety, with flexible rental options that work for your schedule. And if your bike needs a tune-up or repair, our experienced technicians can diagnose and fix any issues to get you back on the road quickly. At Transit Daily, we are committed to sustainability and reducing our carbon footprint, making our eco-friendly bikes the perfect choice for daily commuters, travelers, and anyone looking for a fun and eco-friendly way to explore their city.
                </Typography>

            </Grid>

        </Grid>
    </div>
};

export default Right;

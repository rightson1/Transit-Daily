import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { Parallax } from 'react-parallax';
import Typewriter from 'typewriter-effect';
import { motion } from "framer-motion"
import { useGlobalProvider } from "../utils/themeContext"
import Hero from "../components/Hero";
import Right from "../components/Right";
import Left from "../components/Left";
const Services = () => {
    const { colors } = useGlobalProvider();
    return <div className="min-h-screen flex flex-col gap-0">
        <Hero title="Our Services" />
        <div className="py-20 flex flex-col justify-center items-center gap-8 px-5 md:px-20">
            <Typography fontFamily="Questrial" variant="h1" className="uppercase"
                color={colors.teal[500]}
                fontSize={{
                    xs: '2rem',
                    md: '3rem'
                }}>WE SPECIALIZE IN</Typography>
            <Typography fontFamily="Questrial" className="text-[17px]" textAlign="center">
                Welcome to Transit Daily, where we offer convenient and affordable bike rentals, as well as repair and maintenance services. Our bikes are designed for comfort and safety, with flexible rental options that work for your schedule. And if your bike needs a tune-up or repair, our experienced technicians can diagnose and fix any issues to get you back on the road quickly. At Transit Daily, we are committed to sustainability and reducing our carbon footprint, making our eco-friendly bikes the perfect choice for daily commuters, travelers, and anyone looking for a fun and eco-friendly way to explore their city.
            </Typography>


        </div>
        <Right />
        <Left />
    </div>;
};

export default Services;

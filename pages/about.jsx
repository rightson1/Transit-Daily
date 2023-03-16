import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { Parallax } from 'react-parallax';
import Typewriter from 'typewriter-effect';
import { motion } from "framer-motion"
import { useGlobalProvider } from "../utils/themeContext"
import Hero from "../components/Hero";
const About = () => {
    const { colors } = useGlobalProvider();
    return <div className="min-h-screen">
        <Hero title="About Us" />
        <div className="py-20 flex flex-col justify-center items-center gap-8 px-5 md:px-20">
            <Typography fontFamily="Questrial" variant="h1" className="uppercase"
                color={colors.teal[500]}
                fontSize={{
                    xs: '2rem',
                    md: '3rem'
                }}>Transit Daily</Typography>
            <Typography fontFamily="Questrial" className="text-[17px]" textAlign="center">
                Welcome to Transit Daily, your go-to bike rental service for convenient and affordable transportation. Our bikes are designed for comfort and safety, with lightweight frames, comfortable seats, and easy-to-use gears. Perfect for commuters, travelers, or anyone looking for a quick ride around town. We are committed to sustainability and reducing our carbon footprint, which is why all of our bikes are eco-friendly and powered by pedal. With flexible rental options, you can choose the plan that works best for you. Simply book online or through our app, pick up your bike, and start exploring your city in a fun and eco-friendly way!
            </Typography>


        </div>
    </div>;
};

export default About;

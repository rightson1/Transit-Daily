import { Typography } from "@mui/material";
import React from "react";
import { useGlobalProvider } from "../utils/themeContext";
import Box from "@mui/material/Box"

const About = () => {
    const { colors } = useGlobalProvider()
    return <div className=" min-h-[70vh] flex justify-center items-center px-5 py-10  md:px-20  bg-back bg-primary">
        <div className="w-full h-full   flex flex-col justify-center items-center p-5 gap-4 shadow-lg">
            <Typography variant="h2" color={colors.grey[500]} className="font-[700] opacity-70 text-center" fontFamily="Questrial"
            >   We Offer The Best Services
            </Typography>
            <div className="flex gap-2 my-5">
                <Box bgcolor={colors.grey[800]} className="w-20 h-1 "></Box>
                <Box bgcolor={colors.teal[500]} className="w-20 h-1 "></Box>
                <Box bgcolor={colors.grey[800]} className="w-20 h-1 "></Box>


            </div>
            <Typography fontFamily="Questrial" className="text-[17px]" textAlign="center">
                Welcome to Transit Daily, your go-to bike rental service for convenient and affordable transportation. Our bikes are designed for comfort and safety, with lightweight frames, comfortable seats, and easy-to-use gears. Perfect for commuters, travelers, or anyone looking for a quick ride around town. We are committed to sustainability and reducing our carbon footprint, which is why all of our bikes are eco-friendly and powered by pedal. With flexible rental options, you can choose the plan that works best for you. Simply book online or through our app, pick up your bike, and start exploring your city in a fun and eco-friendly way!
            </Typography>

        </div>
    </div>;
};

export default About;

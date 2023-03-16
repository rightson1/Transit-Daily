import { Button, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { Parallax } from 'react-parallax';
import Typewriter from 'typewriter-effect';
import { motion } from "framer-motion"
import { useGlobalProvider } from "../utils/themeContext"
import Hero from "../components/Hero";
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt'
const Contact = () => {
    const { colors } = useGlobalProvider();
    return <div className="min-h-screen">

        <Parallax blur={0} bgImage="/image1.jpg" bgImageAlt="the cat" strength={500} >
            <Box className="min-h-[100vh] bg-[rgba(0,0,0,.4)] gap-4 flex justify-center items-center flex-col text-white   " >

                <Box className="w-full  h-[90%] max-w-[600px]  flex justify-center flex-col gap-4 p-10 contact relative" >
                    <Box className="absolute top-0 left-0 w-1/2 h-full  bg-[rgba(255,255,255,0.3)] pointer-events-none">

                    </Box>
                    <Typography fontFamily="Questrial" variant="h1" color={colors.teal[500]}>
                        CONTACT US
                    </Typography>
                    <input type="name" className="outline-none p-4 w-full bg-white focus:border-b-2 focus:border-red-500 font-family:Questrial text-black" placeholder="Full Name" />
                    <input type="email" className="outline-none p-4 w-full bg-white focus:border-b-2 focus:border-red-500 font-family:Questrial text-black" placeholder="Email Address" />
                    <textarea type="message" className="outline-none p-4 w-full bg-white focus:border-b-2 focus:border-red-500 font-family:Questrial text-black resize-none" placeholder="Message" />

                    <Button className="text-white gap-4 rounded-full self-start py-2 px-4"
                        sx={{
                            bgcolor: colors.teal[500] + " !important",
                        }}
                    >
                        Contact Us
                        <ArrowRightAltIcon />
                    </Button>
                </Box>
            </Box>

        </Parallax>
    </div>;
};

export default Contact;

import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { Parallax } from 'react-parallax';
import Typewriter from 'typewriter-effect';
import { motion } from "framer-motion"
import { useGlobalProvider } from "../utils/themeContext"
import Hero from "../components/Hero";
const Book = () => {
    const { colors } = useGlobalProvider();
    return <div className="min-h-screen">
        <Hero title="Under Development" />

    </div>;
};

export default Book;

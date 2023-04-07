import { Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { Parallax } from 'react-parallax';
import Typewriter from 'typewriter-effect';
import { motion } from "framer-motion"
import { useGlobalProvider } from "../utils/themeContext"

const Right = ({ service, index }) => {
    const { fields } = service;
    const { colors } = useGlobalProvider();
    return <div className="-mt-[4px] pt-10 md:pt-0">
        <Grid container sx={{
            borderBottom: {
                xs: `4px solid ${colors.teal[500]} `,
                md: 'none'
            },
            border: {
                md: `4px solid ${colors.teal[500]} `

            },


        }}
            direction={{
                xs: 'column',
                md: index % 2 == 0 ? 'row' : 'row-reverse'
            }}
            className="">
            <Grid item xs={12} md={4} sx={{
                borderRight: {
                    xs: `none`,
                    md: `4px solid ${colors.teal[500]} `
                }
            }} className="md:h-[70vh]">
                <img src={fields.image.fields.file.url}
                    alt="" className="w-full h-full object-cover h-[300px] md:h-full" />



            </Grid>
            <Grid item xs={12} md={8} className=" flex flex-col justify-center items-center py-10 gap-5 md:h-[70vh]" sx={{
                bgcolor: colors.black[500]
            }}>
                <Typography fontFamily="Questrial" variant="h1" className="uppercase " color={colors.teal[500]}
                    fontSize={{
                        xs: '2rem',

                    }}>{
                        fields.title
                    }</Typography>
                <Typography fontFamily="Questrial" className="text-[17px] " textAlign="center" color={colors.black[100]}>
                    {
                        fields.details
                    }
                </Typography>

            </Grid>

        </Grid>
    </div >
};

export default Right;

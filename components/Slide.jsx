import React from "react";
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper';
import { Box, Button, Typography } from "@mui/material";
const Slide = ({ services, agreement }) => {

    return <Box
        sx={{
            "& .swiper-pagination-bullet": {
                backgroundColor: "white !important"
            }
        }}>   <Swiper
            modules={[Navigation, Pagination, A11y, Autoplay]}
            autoplay={{
                delay: 3000,

                disableOnInteraction: false
            }}
            pagination={{ clickable: true }}

            slidesPerView={1}
        >
            {
                services.map((service, index) => {
                    const { fields } = service;
                    return (
                        <SwiperSlide key={index}>

                            <Box

                                className="h-[70vh] w-screen  flex flex-col justify-center items-center gap-8 text-white relative  z-10 ">
                                <div className="flex flex-col gap-5 p-10">
                                    <Typography fontFamily="Questrial" variant="h1" className="uppercase" textAlign="center"
                                        fontSize={{
                                            xs: '2.5rem',
                                            md: '3.5rem'
                                        }}>{
                                            fields?.title
                                        }</Typography>
                                    <Typography fontFamily="Questrial" variant="h5" textAlign="center">
                                        {fields?.excerpt}
                                    </Typography>

                                    {
                                        agreement?.length > 0 && <div className="flex justify-center gap-2">
                                            <Button
                                                className="w-[150px] "
                                                component="a"
                                                target="_blank"
                                                href={agreement[0]?.fields?.document.fields.file.url}

                                                sx={{
                                                    border: "1px solid white",
                                                    color: "white",
                                                    "&:hover": {
                                                        color: "black",
                                                        backgroundColor: "white"
                                                    }
                                                }}
                                            >
                                                View  Agreement
                                            </Button>
                                            <Button
                                                component="a"

                                                href="#book"

                                                className="w-[150px] "
                                                sx={{
                                                    border: "1px solid white",
                                                    color: "white",
                                                    "&:hover": {
                                                        color: "black",
                                                        backgroundColor: "white"
                                                    }
                                                }}
                                            >
                                                Book Now
                                            </Button>
                                        </div>

                                    }
                                </div>
                                <Box
                                    component="img"
                                    className="absolute top-0 left-0 w-full h-full object-cover z-[-1]"
                                    src={fields?.image?.fields?.file?.url}
                                />
                                <Box
                                    className="absolute top-0 left-0 w-full z-[-1] h-full object-cover bg-[rgba(0,0,0,0.5)]"

                                />

                            </Box>
                        </SwiperSlide>
                    )
                }

                )
            }
        </Swiper></Box>;
};

export default Slide;

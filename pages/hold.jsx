import { Box, Button, Typography } from "@mui/material";
import { Zoom } from 'react-slideshow-image';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import Link from "next/link";
import { useGlobalProvider } from "../utils/themeContext";
import { Parallax } from 'react-parallax';
import Typewriter from 'typewriter-effect';
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper';
export default function Home() {
    const { isMobileSmall, colors } = useGlobalProvider()
    const font = {
        xs: '3.5rem',
        md: '5.5rem'

    }
    return (

        <div className="relative">
            <Box sx={{
                "& img": {
                    objectFit: "cover"
                },
            }}>


                <Parallax blur={0} bgImage="/trek.jpg" bgImageAlt="the cat" strength={500} >
                    <div className="h-[90vh] bg-[rgba(0,0,0,.4)] gap-4 flex justify-center items-center flex-col text-white px-10">
                        <Typography fontFamily="Questrial" variant="h1" className="font-[900] flex items-center gap-4" textAlign="center"
                        >
                            <div className="flex">
                                <Typography component="span" className="font-[900]" fontSize={font} sx={{
                                    color: colors.yellow[500]
                                }}>Trans</Typography>
                                <Typography component="span" className="font-[900]"
                                    fontSize={font} sx={{
                                        color: colors.teal[500]
                                    }}>it</Typography>
                            </div>
                            <Typography component="span" className="font-[900]"
                                fontSize={font}
                                sx={{
                                    color: colors.black[100]
                                }}>  Daily </Typography>


                        </Typography>
                        <Typography fontFamily="Questrial" variant="h3" textAlign="center">
                            <Typewriter
                                options={{
                                    strings: ['Dream in Motion'],
                                    autoStart: true,
                                    loop: true,
                                }}
                            />
                        </Typography>

                    </div>

                </Parallax>
            </Box>



            {/* <div className="py-20 flex flex-col justify-center items-center gap-8 px-5 md:px-20">
        <Typography fontFamily="Questrial" variant="h1" className="font-[900] flex items-center gap-4" textAlign="center"
        >
          <div className="flex">
            <Typography component="span" className="font-[900]" fontSize={font} sx={{
              color: colors.yellow[500]
            }}>Trans</Typography>
            <Typography component="span" className="font-[900]"
              fontSize={font} sx={{
                color: colors.teal[500]
              }}>it</Typography>
          </div>
          <Typography component="span" className="font-[900]"
            fontSize={font}
            sx={{
              color: colors.black[100]
            }}>  Daily </Typography>


        </Typography>
        <Typography fontFamily="Questrial" className="text-[17px]" textAlign="center">
          Welcome to Transit Daily, your go-to bike rental service for convenient and affordable transportation. Our bikes are designed for comfort and safety, with lightweight frames, comfortable seats, and easy-to-use gears. Perfect for commuters, travelers, or anyone looking for a quick ride around town. We are committed to sustainability and reducing our carbon footprint, which is why all of our bikes are eco-friendly and powered by pedal. With flexible rental options, you can choose the plan that works best for you. Simply book online or through our app, pick up your bike, and start exploring your city in a fun and eco-friendly way!
        </Typography>


      </div> */}

        </div>
    );



}

Home.nolayout = true;
const buttonStyle = {
    display: 'none'
};
const properties = {
    prevArrow: <button style={{ ...buttonStyle }}></button>,
    nextArrow: <button style={{ ...buttonStyle }}></button>
}
const images = [
    {
        url: 'image1.jpg',
        caption: 'Slide 1'
    },
    {
        url: 'image3.jpg',
        caption: 'Slide 3'
    },
    {
        url: 'image4.jpg',
        caption: 'Slide 3'
    },
];



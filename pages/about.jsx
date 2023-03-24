import { Box, Button, Typography } from "@mui/material";
import { Fade } from 'react-slideshow-image';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import Link from "next/link";
import { useGlobalProvider } from "../utils/themeContext";
import Typewriter from 'typewriter-effect';;
import About from "../components/About";
import Services from "../components/Services";
export default function Home() {
    const { isMobileSmall, colors } = useGlobalProvider();
    const font = {
        xs: '3.5rem',
        md: '5.5rem'

    }
    return (<div className="relative">
        <div className="flex  w-full h-screen  z-[1]">

            <div className="flex flex-col justify-center items-center z-[6] h-full px-5 w-full gap-8">
                <div className="flex justify-center items-center">
                    <Typography fontFamily="Questrial" variant="h1" className="font-[900] flex items-center gap-4" textAlign="center"
                    >
                        <div className="flex">
                            <Typography component="span" className="font-[900]" fontSize={font} sx={{
                                color: colors.yellow[500]
                            }}>Gedi</Typography>
                            <Typography component="span" className="font-[900]"
                                fontSize={font} sx={{
                                    color: colors.teal[500]
                                }}>on</Typography>
                        </div>
                        <Typography component="span" className="font-[900]"
                            fontSize={font}
                            sx={{
                                color: colors.black[100]
                            }}>  Koech </Typography>


                    </Typography>

                </div>

                <Typography className="text-white font-semibold" variant="h4" fontFamily="Nunito" textAlign="center"
                    fontSize={{
                        xs: '1.5rem',
                        md: '2rem'
                    }}>
                    <Typewriter
                        options={{
                            strings: ['Ongata Rongai', 'Nairobi', 'Kenya'],
                            autoStart: true,
                            loop: true,
                        }}
                    />
                </Typography>
            </div>
            <div className="absolute top-0 h-screen w-screen z-[2] bg-[rgba(0,0,0,.7)] "></div>
            <Box
                sx={{
                    "& img": {
                        height: '100vh',
                        objectFit: 'cover',
                    },
                    "& .indicator": {
                        display: "none",
                        bgcolor: 'red'
                    }
                }}
                className="absolute w-screen h-screen top-0 z-[1]">
                <Fade scale={0.4} {...properties}
                    duration={3000}
                >
                    {
                        images.map((each, index) => <img key={index} style={{ width: "100%" }} src={each.url} className="z-[]" />)
                    }
                </Fade>
            </Box>
        </div>
        <About />

    </div>
    );



}
const buttonStyle = {
    display: 'none'
};
const properties = {
    prevArrow: <button style={{ ...buttonStyle }}></button>,
    nextArrow: <button style={{ ...buttonStyle }}></button>
}
const images = [
    {
        url: '/gidi.png',
        caption: 'Slide 1'
    },
    {
        url: '/gidi.png',
        caption: 'Slide 3'
    },

];

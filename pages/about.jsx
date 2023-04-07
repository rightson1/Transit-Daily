import { Box, Button, Typography } from "@mui/material";
import { Fade } from 'react-slideshow-image';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import Link from "next/link";
import { useGlobalProvider } from "../utils/themeContext";
import Typewriter from 'typewriter-effect';;
import About from "../components/About";
import Services from "../components/Services";
import Gidi from "../components/Gidi";
import { client } from "../utils/client"
import Vision from "../components/Vision";
export default function Home({ content }) {
    const { isMobileSmall, colors } = useGlobalProvider();
    const { autoType, title1, title2, title3, paragraph1, paragraph2, paragraph3, featuredImage } = content[0]?.fields;
    const font = {
        xs: '2.6rem',
        md: '5.5rem'

    }
    return (<div className="relative flex flex-col  w-screen overflow-x-hidden">
        <div className="flex  w-full h-[60vh] md:h-[70vh]   z-[1] ">

            <div className="flex flex-col justify-center items-center z-[6] h-full px-5 w-full gap-8">
                <div className="flex justify-center items-center">
                    <Typography fontFamily="Questrial" variant="h1" className="font-[900] flex items-center gap-1" textAlign="center"
                    >
                        <div className="flex px-5">
                            <Typography component="span" className="font-[900]" fontSize={font} sx={{
                                color: colors.yellow[500]
                            }}>Kipye</Typography>
                            <Typography component="span" className="font-[900]"
                                fontSize={font} sx={{
                                    color: colors.teal[500]
                                }}>gon</Typography>
                        </div>
                        <Typography component="span" className="font-[900]"
                            fontSize={font}
                            sx={{
                                color: colors.black[100]
                            }}> Koech </Typography>


                    </Typography>

                </div>

                <Typography className="text-white font-semibold" variant="h4" fontFamily="Nunito" textAlign="center"
                    fontSize={{
                        xs: '1.5rem',
                        md: '2rem'
                    }}>
                    <Typewriter
                        options={{
                            strings: autoType?.split('//'),
                            autoStart: true,
                            loop: true,
                        }}
                    />
                </Typography>
            </div>
            <div className="absolute top-0  h-[60vh] md:h-[70vh] w-screen z-[2] bg-[rgba(0,0,0,.7)] "></div>
            <Box
                className=" h-[60vh] md:h-[70vh] absolute top-0 w-screen z-[1] "
                sx={{
                    "& img": {
                        objectFit: 'cover',
                        imageOrientation: 'from-image',
                        objectPosition: "top",
                    },
                    "& .indicator": {
                        display: "none",
                        bgcolor: 'red'
                    }
                }}
            >
                <img style={{ width: "100%" }} src={featuredImage.fields.file.url} className="object-contain h-full" />)

            </Box>
        </div>
        <About title={title1} desc={paragraph1} />

        <Vision />

        <Gidi {...{ title2, title3, paragraph3, paragraph2 }} />

    </div>
    );



}
const buttonStyle = {
    display: 'none'
};
export const getStaticProps = async () => {
    const response = await client.getEntries({ content_type: 'aboutUs' });

    return {
        props: {
            content: response?.items,
            revalidate: 60
        }
    }
}

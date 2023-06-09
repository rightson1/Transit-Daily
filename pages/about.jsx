import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useGlobalProvider } from "../utils/themeContext";
import Typewriter from 'typewriter-effect';;
import About from "../components/About";
import { client } from "../utils/client"
import Gidi from "../components/Gidi";
import Vision from "../components/Vision";
import Title from "../components/Title";
export default function Home({ content }) {
    const { colors } = useGlobalProvider();
    const { autoType, mission, vision, values, title1, title2, title3, paragraph1, paragraph2, paragraph3, featuredImage } = content[0]?.fields;
    const font = {
        xs: '2.6rem',
        md: '5.5rem'

    }
    return (<div className="relative flex flex-col  w-screen overflow-x-hidden">
        <div className="flex  w-full h-[60vh] md:h-[70vh]   z-[1] ">
            <Title title=" SPORTS VIEW TALENTS"
                description="Sportsview Talents Academy formerly Sportsview Skaters Club (SVS) was formed in February 2019 as an in-line skating training program. Now entering our third year, SVS has evolved into a full-scale, roller skating, bike riding , floor ball and a very successful Chess club offering year-round tailored trainings to kids from the age of 3 . We record most of our training activities and upload them on YouTube and Facebook pages to enhance quality control." />

            <div className="flex flex-col justify-center items-center z-[6] h-full px-5 w-full gap-8">
                <div className="flex justify-center items-center">
                    <Typography fontFamily="Questrial" variant="h1" className="font-[900] flex items-center gap-1" textAlign="center"
                    >
                        <div className="flex px-5">
                            <Typography component="span" className="font-[900]" fontSize={font} sx={{
                                color: colors.yellow[500]
                            }}>Abo</Typography>
                            <Typography component="span" className="font-[900]"
                                fontSize={font} sx={{
                                    color: colors.teal[500]
                                }}>ut</Typography>
                        </div>
                        <Typography component="span" className="font-[900]"
                            fontSize={font}
                            sx={{
                                color: colors.black[100]
                            }}> Us </Typography>


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

        <Vision {...{ mission, vision, values }} />

        <Gidi {...{ title2, title3, paragraph3, paragraph2 }} />

    </div>
    );



}

export const getStaticProps = async () => {
    const response = await client.getEntries({ content_type: 'aboutUs' });

    return {
        props: {
            content: response?.items,
            revalidate: 60
        },
        revalidate: 60
    }
}

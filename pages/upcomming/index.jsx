
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import React from "react";
import { useGlobalProvider } from "../../utils/themeContext"
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import { client } from "../../utils/client"
import Link from "next/link";
import { format } from "timeago.js";
import Title from "../../components/Title";
const Event = ({ events }) => {
    const { colors } = useGlobalProvider();

    return <div className="min-h-screen ">
        <Title
            title="Transit Daily | Upcoming Cycling and Hiking Events in Nairobi and Beyond"
            description="Stay up-to-date with the latest cycling and hiking events organized by Transit Daily in Nairobi and surrounding areas, including Kajiado and Naivasha. Join us for a fun-filled day of outdoor activities and adventure. Book your spot now!"
        />

        <Box className="flex justify-center items-center h-[30vh] flex-col" sx={{
            backgroundImage: `url('/trek/1.png')`,
            backgroundSize: 'cover',
        }}>
            <div className="flex flex-col gap-5 p-10 items-center">
                <Typography fontFamily="Questrial" variant="h1" className="uppercase text-white" textAlign="center"
                    fontSize={{
                        xs: '2.5rem',
                        md: '3.5rem'
                    }}>Events</Typography>
                <Typography fontFamily="Questrial" variant="h5" textAlign="center" className="text-white">
                    Upcomming
                </Typography>



            </div>
        </Box>

        <div className="flex items-center justify-center p-5 md:p-10 flex-col py-10">
            <Box className="w-screen h-[3px]  my-3 flex justify-center items-start
        "  bgcolor={colors.black[100]}></Box>

            <Grid container spacing={2}>
                {
                    events.map((item, index) => {
                        const { title, slug, featuredImage: coverImage, excerpt, date } = item.fields
                        const { url } = coverImage.fields.file
                        return <Grid item xs={12} md={6} key={index} className="flex flex-col items-center justify-center py-5 ">

                            <img src={url} alt="" className="w-full min-h-[300px] max-h-[350px] object-cover  " />
                            <div className="w-full flex flex-col items-start justify-start py-5">
                                <Typography variant="h3" textAlign="start" fontFamily="Questrial" className=" text-black font-[900]  self-start capitalize" >
                                    {title}
                                </Typography>
                                <div className="flex w-full py-5">
                                    <Divider flexItem width="100%" sx={{ borderBottomWidth: 2 }} />
                                </div>
                                <div className="flex w-full justify-between mt-4">
                                    <Typography variant="body1" fontFamily="Questrial" className=" text-black  " >
                                        {
                                            format(date)
                                        }
                                    </Typography>
                                    <Link href={`/upcomming/${slug}`}>
                                        <a className="flex items-center justify-center self-start">
                                            <Typography variant="h1" fontFamily="Questrial" className=" text-black font-[900] text-xl" >
                                                Read More
                                            </Typography>
                                            <ArrowRightAltIcon className="text-black text-3xl" />
                                        </a>
                                    </Link>
                                </div>
                            </div>

                        </Grid>

                    })
                }


            </Grid>


        </div>


    </div>;
};


export const getStaticProps = async () => {
    const response = await client.getEntries({ content_type: 'upcomming' })

    return {
        props: {
            events: response.items,
            revalidate: 60
        }
    }
}

export default Event;

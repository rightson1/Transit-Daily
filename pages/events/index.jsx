import { Typography } from "@mui/material";
import { Box, Grid, Divider } from "@mui/material";
import React from "react";
import Pagination from '@mui/material/Pagination';
import { useGlobalProvider } from "../../utils/themeContext"
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import { client } from "../../utils/client"
import Link from "next/link";
import Button from "@mui/material/Button";
import { useState, useEffect } from "react";
import { format } from "timeago.js";
import Title from "../../components/Title";
const Event = ({ events }) => {
    const { colors } = useGlobalProvider();
    const [page, setPage] = useState(1);
    const [eventsPerPage, setEventsPerPage] = useState(3);
    const totalEvents = events?.length;

    useEffect(() => {
        setPage(1);
    }, [events]);

    const handlePageChange = (event, value) => {
        setPage(value);
    };

    const startIndex = (page - 1) * eventsPerPage;
    const endIndex = startIndex + eventsPerPage;
    const displayedEvents = events?.slice(startIndex, endIndex);
    return <div className="min-h-screen ">
        <Title
            title="Transit Daily Events | Cycling and Hiking Events in Nairobi and Kajiado"
            description="Join Transit Daily for exciting cycling and hiking events in Nairobi and Kajiado. Stay active and explore the beautiful landscapes of Kenya with our fun and affordable events. Check out our upcoming events and book your spot now."
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
                    Upcomming & Previus
                </Typography>

                <Link href="/upcomming">

                    <Button

                        className="w-auto px-3"
                        sx={{
                            border: "1px solid white",
                            color: "black",
                            backgroundColor: "white !important",
                            "&:hover": {
                                color: "white",
                                backgroundColor: "transparent !important"
                            }
                        }}
                    >
                        View Upcomming Events
                    </Button>
                </Link>



            </div>
        </Box>

        <div className="flex items-center justify-center p-5 md:p-10 flex-col py-10">
            <Box className="w-screen h-[3px]  my-3 flex justify-center items-start
        "  bgcolor={colors.black[100]}></Box>

            <Grid container spacing={2}>
                {
                    displayedEvents.map((item, index) => {
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
                                    <Link href={`/events/${slug}`}>
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
            <div className="flex w-full p-5 justify-center">
                <Pagination
                    count={Math.ceil(totalEvents / eventsPerPage)}
                    page={page}
                    onChange={handlePageChange}
                />
            </div>


        </div>


    </div>;
};


export const getStaticProps = async () => {
    const response = await client.getEntries({ content_type: 'events' })

    return {
        props: {
            events: response.items,
            revalidate: 60
        }
    }
}

export default Event;
const events = [
    {
        name: "How To Fix Tires",
        img: "/trek/1.png",
        pr: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugiat aliquid aperiam et culpa quis totam recusandae. Ad, quasi."
    },
    {
        name: "How to Rent A Bike",
        img: "/trek/2.png",
        pr: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugiat aliquid aperiam et culpa quis totam recusandae. Ad, quasi."
    },
    {
        name: "Rongai Picnics",
        img: "/trek/3.png",
        pr: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugiat aliquid aperiam et culpa quis totam recusandae. Ad, quasi."
    },
    {
        name: "Cyling Events",
        img: "/trek/4.png",
        pr: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugiat aliquid aperiam et culpa quis totam recusandae. Ad, quasi."
    },
]

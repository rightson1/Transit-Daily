import { Typography } from "@mui/material";
import React from "react";
import { useGlobalProvider } from "../utils/themeContext"
import Right from "../components/Right";
import Slide from "../components/Slide";
import { client } from "../utils/client"
import Title from "../components/Title";

const Services = ({ services }) => {

    const { colors } = useGlobalProvider();
    return <div className="min-h-screen ">
        <Title title="SERVICES || SPORTS VIEW TALENTS"
            description="Sportsview Talents Academy formerly Sportsview Skaters Club (SVS) was formed in February 2019 as an in-line skating training program. Now entering our third year, SVS has evolved into a full-scale, roller skating, bike riding , floor ball and a very successful Chess club offering year-round tailored trainings to kids from the age of 3 . We record most of our training activities and upload them on YouTube and Facebook pages to enhance quality control." />
        <Slide {...{ services }} />


        <div className="py-20 flex flex-col justify-center items-center gap-8 px-5 md:px-20">
            <Typography fontFamily="Questrial" variant="h1" className="uppercase"
                color={colors.teal[500]}
                fontSize={{
                    xs: '2rem',
                    md: '3rem'
                }}>WE SPECIALIZE IN</Typography>
            <Typography fontFamily="Questrial" className="text-[17px]" textAlign="center">
                Welcome to Transit Daily, where we offer convenient and affordable bike rentals, as well as repair and maintenance services. Our bikes are designed for comfort and safety, with flexible rental options that work for your schedule. And if your bike needs a tune-up or repair, our experienced technicians can diagnose and fix any issues to get you back on the road quickly. At Transit Daily, we are committed to sustainability and reducing our carbon footprint, making our eco-friendly bikes the perfect choice for daily commuters, travelers, and anyone looking for a fun and eco-friendly way to explore their city.
            </Typography>


        </div>
        <div className="flex flex-col  md:pb-0">
            {
                services.map((service, index) => {
                    return (
                        <Right {...{ service, index }} key={index} />


                    )
                })
            }
        </div>
    </div>;
};


export const getStaticProps = async () => {
    const response = await client.getEntries({ content_type: 'services' });


    return {
        props: {
            services: response?.items || [],
            revalidate: 60
        }
        , revalidate: 60
    }
}

export default Services;

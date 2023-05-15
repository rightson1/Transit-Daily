import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import React from "react";
import { useGlobalProvider } from "../utils/themeContext";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmailIcon from '@mui/icons-material/Email';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import { client } from "../utils/client";
import Link from 'next/link';
import YouTube from '@mui/icons-material/YouTube';
import Instagram from '@mui/icons-material/Instagram';
const Footer = ({ footer }) => {

    const { colors } = useGlobalProvider()
    const Heading = ({ title }) => (
        <Typography fontFamily="Questrial" variant="h1" className="uppercase"
            color={colors.teal[500]}
            fontSize={{
                xs: '1.3rem',
                md: '1.5rem'
            }}>{title}</Typography>
    )
    const Listing = ({ icon, text, link }) => {
        return (
            !!link ? (
                <Box className="flex gap-2 w-full" component="a" target='_black' href={link}>
                    {icon}
                    <Typography fontFamily="Questrial" className="text-[17px] text-white" >
                        {text}
                    </Typography>

                </Box>
            )
                : (
                    <Box className="flex gap-2 w-full">
                        {icon}
                        <Typography fontFamily="Questrial" className="text-[17px] text-white" >
                            {text}
                        </Typography>

                    </Box>
                )

        )
    }
    return <Grid container spacing={5}
        className="py-20 px-5 md:px-10  h-[140vh] md:h-[70vh]"
        sx={{
            bgcolor: colors.black[500]
        }}
    >
        <Grid item xs={12} md={4} className="flex flex-col ">
            {/* <img src="/logo.png" alt="" className="w-[100px] h-[100px]" /> */}
            <Heading title="SPORTS VIEW TALENTS" />
            <Typography fontFamily="Questrial" className="text-[17px] text-white" >
                You wanna learn skating and chess,dont know
                where to star? Sportsview talent offers the best chess and skating training in Kenya ,join us now!
            </Typography>

        </Grid>
        <Grid item xs={12} md={4} className="flex flex-col gap-4" >
            <Heading title="GMAIL & MAPS" />
            <Listing text="Sportsview Hotel Kasarani (Click To View)" icon={
                <LocationOnIcon className="text-white" />
            } link="https://goo.gl/maps/txa9DLNwuviwQchi7" />
            <Listing text="sportsviewtalentacademy@gmail.com" icon={
                <EmailIcon className="text-white" />
            } link="mailto:sportsviewtalentacademy@gmail.com" />
            <Divider sx={{
                borderBottom: `1px solid ${colors.teal[100]}`
            }}
            />


        </Grid>
        <Grid item xs={12} md={4} className="flex flex-col gap-4" >
            <Heading title="Our Contacts" />
            {/* <Listing text="0721299828" icon={
                <LocalPhoneIcon className="text-white" />
            } /> */}


            <Listing text="0721299828 ( Line 1 ) " icon={
                <LocalPhoneIcon className="text-white" />
            } />
            <Divider sx={{
                borderBottom: `1px solid ${colors.teal[100]}`
            }}
            />
            <Heading title="Social Media" />
            <Listing text="Youtube" link="youtu.be/UuY-_kH2uqc" icon={
                <YouTube className="text-white" />
            } />
            <Listing text="Instagram" link="https://www.instagram.com/Sportsview_skaters/" icon={
                <Instagram className="text-white" />
            } />

        </Grid>
    </Grid>;
};
export const getStaticProps = async () => {
    const response = await client.getEntries({ content_type: 'footer' })

    return {
        props: {
            footer: response.items,
            revalidate: 60
        }
    }
}


export default Footer;

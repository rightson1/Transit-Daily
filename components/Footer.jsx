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
            <Listing text="JQ5M + 52R, Ole Kasasi Rd,
 Ongata Rongai" icon={
                    <LocationOnIcon className="text-white" />
                } />
            <Listing text="sportsviewtalentacademy@gmail.com" icon={
                <EmailIcon className="text-white" />
            } />
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
            <Listing text="Facebook" link="https://www.facebook.com/transitdaily254/" icon={
                <FacebookIcon className="text-white" />
            } />
            <Listing text="Map" link="https://www.google.com/maps/place/Transit+Daily/@-1.3920625,36.7803738,17z/data=!4m16!1m7!3m6!1s0x182f0f02a2bd9467:0x69d6a1873c9730b3!2sTransit+Daily!8m2!3d-1.3920625!4d36.7825625!16s%2Fg%2F11tm_7zw_h!3m7!1s0x182f0f02a2bd9467:0x69d6a1873c9730b3!8m2!3d-1.3920625!4d36.7825625!9m1!1b1!16s%2Fg%2F11tm_7zw_h" icon={
                <LocationOnIcon className="text-white" />
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

import { Box, Divider, Grid, Typography } from "@mui/material";
import React, { useEffect } from "react";
import { useGlobalProvider } from "../utils/themeContext";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmailIcon from '@mui/icons-material/Email';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import { client } from "../utils/client";
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
    const Listing = ({ icon, text }) => (
        <Box className="flex gap-2 w-full">
            {icon}
            <Typography fontFamily="Questrial" className="text-[17px] text-white" >
                {text}
            </Typography>

        </Box>
    )

    return <Grid container spacing={5}
        className="py-20 px-5 md:px-10"
        sx={{
            bgcolor: colors.black[500]
        }}
    >
        <Grid item xs={12} md={4} className="flex flex-col ">
            <img src="/logo.png" alt="" className="w-[150px]" />
            <Typography fontFamily="Questrial" className="text-[17px] text-white" >
                On a case-by-case basis, Locus Studio enters into strategic partnerships/associations with other consultants in order to fill skill & experience gaps in the execution of complex projects.
            </Typography>

        </Grid>
        <Grid item xs={12} md={4} className="flex flex-col gap-4" >
            <Heading title="Rongai Office" />
            <Listing text="GF8 Delight Apartments, Diani Rd Off Ole Odume Rd" icon={
                <LocationOnIcon className="text-white" />
            } />
            <Listing text="P.O. Box 18689 Nairobi 00100" icon={
                <EmailIcon className="text-white" />
            } />
            <Divider sx={{
                borderBottom: `1px solid ${colors.teal[100]}`
            }}
            />


        </Grid>
        <Grid item xs={12} md={4} className="flex flex-col gap-4" >
            <Heading title="Our Contacts" />
            <Listing text="07123456789 (Line One Koech)" icon={
                <LocalPhoneIcon className="text-white" />
            } />


            <Listing text="07123456789 (Line 2 Mike)" icon={
                <LocalPhoneIcon className="text-white" />
            } />
            <Divider sx={{
                borderBottom: `1px solid ${colors.teal[100]}`
            }}
            />
            <Heading title="Social Media" />
            <Listing text="Facebook" icon={
                <FacebookIcon className="text-white" />
            } />
            <Listing text="Instagram" icon={
                <InstagramIcon className="text-white" />
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


import React from "react";
import About from "../components/About";
import { useGlobalProvider } from "../utils/themeContext"
import Slide from "../components/Slide";
import Rates from '../components/Rates';
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import Grid from "@mui/material/Grid";
import { client } from "../utils/client"
const Book = ({ services, rates, bikes, agreement }) => {
    const { colors } = useGlobalProvider();
    console.log(agreement)

    return <div className="">
        <Slide {...{ services, agreement }} />
        <Typography my={5} variant="h2" color={colors.grey[500]} className="font-[700] opacity-70 text-center" fontFamily="Questrial"
        >    Rates
        </Typography>
        <Rates {...{ rates }} />
        <Typography my={5} variant="h2" color={colors.grey[500]} className="font-[700] opacity-70 text-center" fontFamily="Questrial"
        >    Bikes
        </Typography>
        <div className="flex items-center justify-center p-5 md:p-10 flex-col">
            <Grid container spacing={2}>
                {
                    bikes.map((item, index) => {
                        const { fields } = item;
                        return <Grid item xs={12} md={6} key={index}>
                            <div className="flex flex-col items-center justify-center py-5">
                                <div className="flex flex-col items-center justify-center p-2">
                                    <img src={
                                        fields.image.fields.file.url
                                    } alt="" className="w-full min-h-[300px] max-h-[350px] object-cover  " />
                                    <div className="flex flex-col  py-5 w-full">
                                        <Typography variant="h3" textAlign="left" fontFamily="Questrial" className=" text-black font-[900]  self-start capitalize" >
                                            {fields.title}
                                        </Typography>
                                        <div className="flex w-full py-5 ">
                                            <Divider flexItem width="100%" sx={{ borderBottomWidth: 2 }} />
                                        </div>

                                        <Typography variant="body1" fontFamily="Questrial" className=" text-black  " >
                                            {fields.description}
                                        </Typography>
                                        <div className="flex w-full justify-between mt-4">
                                            <Typography variant="body1" fontFamily="Questrial" className=" text-black  " >
                                                {fields.class}
                                            </Typography>

                                        </div>
                                    </div>
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
    const response = await client.getEntries({ content_type: 'bookingPage' });
    const rates = await client.getEntries({ content_type: 'rates' });
    const bikes = await client.getEntries({ content_type: 'bikes' });
    const agreement = await client.getEntries({ content_type: 'rentalAgreement' });


    return {
        props: {
            services: response?.items || [],
            rates: rates?.items || [],
            bikes: bikes?.items || [],
            agreement: agreement?.items || [],
            revalidate: 60
        }
    }
}

const blogs = [
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

export default Book;

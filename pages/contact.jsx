import { Button, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { Parallax } from 'react-parallax';
import { management } from "../utils/management"
import { useGlobalProvider } from "../utils/themeContext"
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt'
import Title from "../components/Title";
import { toast } from "react-hot-toast";
const Contact = () => {
    const submit = (e) => {
        e.preventDefault();
        const data = new FormData(e.target);
        const obj = Object.fromEntries(data.entries());
        const body = {
            ...obj,
        }
        const entry = management.then((env) => {
            return env.createEntry("contactUs", {
                fields: {
                    name: {
                        "en-US": body.name
                    },
                    email: {
                        "en-US": body.email
                    },
                    message: {
                        "en-US": body.message
                    },

                }
            }
            )
        }).then((entry) => {
            e.target.reset();
            return entry.publish()

        })
        toast.promise(entry, {
            loading: "Submitting",
            success: "Submitted",
            error: "Error"
        })

    }
    const { colors } = useGlobalProvider();
    return <div className="min-h-screen">
        <Title title="CONTACT US | SPORTS VIEW TALENTS"
            description="Contact us at Sports View Talents for any inquiries. We are always ready to help."
        />
        <Parallax blur={0} bgImage="/image1.jpg" bgImageAlt="the cat" strength={500} >
            <Box className="min-h-[100vh] bg-[rgba(0,0,0,.4)] gap-4 flex justify-center items-center flex-col text-white   " >

                <Box component="form" onSubmit={submit} className="w-full  h-[90%] max-w-[600px]  flex justify-center flex-col gap-4 p-10 contact relative" >
                    <Box className="absolute top-0 left-0 w-1/2 h-full  bg-[rgba(255,255,255,0.3)] pointer-events-none">

                    </Box>
                    <Typography fontFamily="Questrial" variant="h1" color={colors.teal[500]}>
                        CONTACT US
                    </Typography>
                    <input type="name" className="outline-none p-4 w-full bg-white focus:border-b-2 focus:border-blue-500 font-family:Questrial text-black" placeholder="Full Name" name="name" />
                    <input type="email" className="outline-none p-4 w-full bg-white focus:border-b-2 focus:border-blue-300 font-family:Questrial text-black" placeholder="Email Address" name="email" />
                    <textarea type="message" className="outline-none p-4 w-full bg-white focus:border-b-2 focus:border-blue-500 font-family:Questrial text-black resize-none" placeholder="Message" name="message" />

                    <Button className="text-white gap-4 rounded-full self-start py-2 px-4" type="submit"
                        sx={{
                            bgcolor: colors.teal[500] + " !important",
                        }}
                    >
                        Contact Us
                        <ArrowRightAltIcon />
                    </Button>
                </Box>
            </Box>

        </Parallax>
    </div>;
};

export default Contact;

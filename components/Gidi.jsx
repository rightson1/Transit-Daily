import { Box, Typography } from "@mui/material";
import React from "react";
import { useGlobalProvider } from "../utils/themeContext";

const Gidi = () => {
    const { colors } = useGlobalProvider()
    return <Box className="flex flex-col md:flex-row min-h-[70vh] px-10  gap-5 my-20">
        <Box className="flex items-center gap-4  flex-col">
            <Typography variant="h3" color={colors.yellow[500]} className="font-[700] text-center" fontFamily="Questrial"
            >   We Offer The Best Services
            </Typography>

            <Typography className=" text-center text-[1.1rem]" color={colors.black[500]} fontFamily="Questrial"
            >   Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore, vitae, delectus qui hic ratione dolor cupiditate provident tempora ut explicabo at reiciendis corrupti illo distinctio nihil ipsam? Sit pariatur hic impedit doloremque veritatis excepturi cum, ad reprehenderit provident natus ipsum vitae, quibusdam dolorem voluptate maxime. Ea maxime esse nostrum voluptates odit eos et, error dolores quo aspernatur, quos ipsam tempora alias sint incidunt odio. Tempore tempora corrupti necessitatibus itaque at!
            </Typography>

        </Box>
        <Box className="flex items-center gap-4  flex-col">
            <Typography variant="h3" color={colors.yellow[500]} className="font-[700] text-center" fontFamily="Questrial"
            >   We Offer The Best Services
            </Typography>

            <Typography className=" text-center text-[1.1rem]" color={colors.black[500]} fontFamily="Questrial"
            >   Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore, vitae, delectus qui hic ratione dolor cupiditate provident tempora ut explicabo at reiciendis corrupti illo distinctio nihil ipsam? Sit pariatur hic impedit doloremque veritatis excepturi cum, ad reprehenderit provident natus ipsum vitae, quibusdam dolorem voluptate maxime. Ea maxime esse nostrum voluptates odit eos et, error dolores quo aspernatur, quos ipsam tempora alias sint incidunt odio. Tempore tempora corrupti necessitatibus itaque at!
            </Typography>

        </Box>

    </Box>;
};

export default Gidi;

import { Box, Typography } from "@mui/material";
import React from "react";
import { useGlobalProvider } from "../utils/themeContext";

const Gidi = ({ title2, title3, paragraph3, paragraph2 }) => {
    const { colors } = useGlobalProvider()
    return <Box className="flex flex-col md:flex-row min-h-[70vh] px-10  gap-5 my-20">
        <Box className="flex items-center gap-4  flex-col">
            <Typography variant="h3" color={colors.yellow[500]} className="font-[700] text-center" fontFamily="Questrial"
            >  {title2}
            </Typography>

            <Typography className=" text-center text-[1.1rem]" color={colors.black[500]} fontFamily="Questrial"
            >  {paragraph2}
            </Typography>

        </Box>
        <Box className="flex items-center gap-4  flex-col">
            <Typography variant="h3" color={colors.yellow[500]} className="font-[700] text-center" fontFamily="Questrial"
            >   {title3}
            </Typography>

            <Typography className=" text-center text-[1.1rem]" color={colors.black[500]} fontFamily="Questrial"
            >   {
                    paragraph3
                }
            </Typography>

        </Box>

    </Box>;
};

export default Gidi;

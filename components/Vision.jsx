import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import React from "react";
import { useGlobalProvider } from "../utils/themeContext";
const Vision = ({ mission, vision, values }) => {
    const { colors } = useGlobalProvider()
    return <Grid container bgcolor={colors.black[500]} className="py-20" >
        <Grid item xs={12} md={4} className="flex p-4 gap-4 flex-col justify-center items-center md:flex-row">
            <img src="/vision.png" alt="vision" className="w-[70px]  object-cover gap-4" />
            <div className="flex flex-col gap-2 bg-white rounded-md p-4 items-center">
                <Typography variant="h5" color={colors.yellow[500]} className="font-[700] text-center" fontFamily="Questrial"
                >  Vision
                </Typography>

                <Typography className=" text-center " color={colors.black[500]} fontFamily="Questrial"
                >
                    {vision}
                </Typography>
            </div>
        </Grid>
        <Grid item xs={12} md={4} className="flex p-4 gap-4 flex-col justify-center items-center md:flex-row">
            <img src="/mission.png" alt="mission" className="w-[70px]  object-cover gap-4" />
            <div className="flex flex-col gap-2 bg-white rounded-md p-4 items-center">
                <Typography variant="h5" color={colors.yellow[500]} className="font-[700] text-center" fontFamily="Questrial"
                >  Mission
                </Typography>

                <Typography className=" text-center " color={colors.black[500]} fontFamily="Questrial"
                >
                    {vision}
                </Typography>
            </div>
        </Grid>
        <Grid item xs={12} md={4} className="flex p-4 gap-4 flex-col justify-center items-center md:flex-row">
            <img src="/core.png" alt="core values" className="w-[70px]  object-cover gap-4" />
            <div className="flex flex-col gap-2 bg-white rounded-md p-4 items-center">
                <Typography variant="h5" color={colors.yellow[500]} className="font-[700] text-center" fontFamily="Questrial"
                >  Core Values
                </Typography>

                <Typography className=" text-center " color={colors.black[500]} fontFamily="Questrial"
                >
                    {values}
                </Typography>
            </div>
        </Grid>
    </Grid>;
};

export default Vision;

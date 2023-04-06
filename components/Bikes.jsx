import React from "react";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import Grid from "@mui/material/Grid";
const Bikes = () => {
    return <div className="flex items-center justify-center p-5 md:p-10 flex-col">
        <Grid container spacing={2}>
            {
                blogs.map((item, index) => {

                    return <Grid item xs={12} md={6} key={index}>
                        <div className="flex flex-col items-center justify-center py-5">
                            <div className="flex flex-col items-center justify-center p-2">
                                <img src={item.img} alt="" className="w-full min-h-[300px] max-h-[350px] object-cover " />
                                <div className="flex flex-col items-center justify-center py-5">
                                    <Typography variant="h3" textAlign="left" fontFamily="Questrial" className=" text-black font-[900]  self-start capitalize" >
                                        {item.name}
                                    </Typography>
                                    <div className="flex w-full py-5">
                                        <Divider flexItem width="100%" sx={{ borderBottomWidth: 2 }} />
                                    </div>

                                    <Typography variant="body1" fontFamily="Questrial" className=" text-black  " >
                                        {item.pr}
                                    </Typography>
                                    <div className="flex w-full justify-between mt-4">
                                        <Typography variant="body1" fontFamily="Questrial" className=" text-black  " >
                                            Jan 18 2022
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
};

export default Bikes;

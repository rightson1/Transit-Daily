import { Button, Grid, TextField, Typography } from "@mui/material";
import React from "react";
import { useGlobalProvider } from "../utils/themeContext";
import Box from "@mui/material/Box"
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import ListItemText from '@mui/material/ListItemText';
import Select from '@mui/material/Select';
import Checkbox from '@mui/material/Checkbox';
import { management } from "../utils/management"
import { toast } from "react-hot-toast";
const BookForm = ({ bikes }) => {
    const { colors } = useGlobalProvider();
    const [bikeNames, setBikeNames] = React.useState([]);
    const handleChange = (event) => {
        const {
            target: { value },
        } = event;
        setBikeNames(
            typeof value === 'string' ? value.split(',') : value,
        );
    };

    const submit = (e) => {
        e.preventDefault();
        const data = new FormData(e.target);
        const obj = Object.fromEntries(data.entries());
        const bikes = bikeNames.join(",");
        const body = {
            ...obj,
            bikes
        }
        const entry = management.then((env) => {
            return env.createEntry("bookForm", {
                fields: {
                    name: {
                        "en-US": body.name
                    },
                    email: {
                        "en-US": body.email
                    },
                    phone: {
                        "en-US": body.phone
                    },
                    bikes: {
                        "en-US": body.bikes
                    },
                    startDate: {
                        "en-US": body.startDate
                    },
                    endDate: {
                        "en-US": body.endDate
                    },
                    message: {
                        "en-US": body.message
                    },
                    bikes: {
                        "en-US": bikeNames.join(",")
                    }
                }
            }
            )
        }).then((entry) => {
            return entry.publish()
        }).catch((err) => {
            console.log(err)
        })
        toast.promise(entry, {
            loading: "Submitting",
            success: "Submitted",
            error: "Error"
        })
    }


    return <div className=" min-h-[70vh] flex justify-center items-center px-5 py-10  md:px-20  bg-back bg-primary" id="book">
        <Box className="w-full h-full   flex flex-col justify-center items-center p-5 gap-4 shadow-lg" component="form" onSubmit={submit}>
            <Typography variant="h2" color={colors.grey[500]} className="font-[700] opacity-70 text-center" fontFamily="Questrial"
            >   BOOK YOUR RIDE
            </Typography>
            <div className="flex gap-2 my-5">
                <Box bgcolor={colors.grey[800]} className="w-20 h-1 "></Box>
                <Box bgcolor={colors.teal[500]} className="w-20 h-1 "></Box>
                <Box bgcolor={colors.grey[800]} className="w-20 h-1 "></Box>


            </div>
            <Grid container spacing={5} className="" >
                <Grid item xs={12} md={6} className="flex flex-col items-start gap-3">
                    <Typography fontFamily="Questrial" className="text-[17px]" textAlign="center">
                        Start Date
                    </Typography>
                    <TextField type="date" fullWidth name="startDate" />
                </Grid>
                <Grid item xs={12} md={6} className="flex flex-col items-start gap-3">
                    <Typography fontFamily="Questrial" className="text-[17px]" textAlign="center">
                        End Date
                    </Typography>
                    <TextField type="date" fullWidth name="endDate" />
                </Grid>
                <Grid item xs={12} md={6} className="flex flex-col items-start gap-3">
                    <Typography fontFamily="Questrial" className="text-[17px]" textAlign="center">
                        Name
                    </Typography>
                    <TextField type="text" fullWidth name="name" />
                </Grid>

                <Grid item xs={12} md={6} className="flex flex-col items-start gap-3">
                    <Typography fontFamily="Questrial" className="text-[17px]" textAlign="center">
                        Email
                    </Typography>
                    <TextField type="text" fullWidth name="email" />
                </Grid>
                <Grid item xs={12} md={6} className="flex flex-col items-start gap-3">
                    <Typography fontFamily="Questrial" className="text-[17px]" textAlign="center">
                        Phone
                    </Typography>
                    <TextField type="text" fullWidth name="phone" />
                </Grid>
                <Grid item xs={12} md={6} className="flex flex-col items-start gap-3">
                    <Typography fontFamily="Questrial" className="text-[17px]" textAlign="center">
                        Message
                    </Typography>
                    <TextField type="text" name="message" fullWidth label="Any additional infomation" />
                </Grid>
                <Grid item xs={12} md={6} className="flex flex-col items-start gap-3"  >
                    <Typography fontFamily="Questrial" className="text-[17px]" textAlign="center">
                        Bikes
                    </Typography>

                    <Select
                        label="Select Bikes"
                        className="w-full"
                        fullWidth
                        id="demo-multiple-checkbox"
                        multiple
                        value={bikeNames}
                        onChange={handleChange}
                        input={<OutlinedInput label="Tag" />}
                        renderValue={(selected) => selected.join(', ')}
                        MenuProps={MenuProps}
                    >
                        {bikes.map((bike, index) => (
                            <MenuItem key={index} value={bike.name}>
                                <Checkbox checked={bikeNames.indexOf(bike.name) > -1} />
                                <ListItemText primary={bike.name} />
                            </MenuItem>
                        ))}
                    </Select>

                </Grid>
            </Grid>

            <Button type="submit" className="shadow-lg hover:bg-slate-200" sx={{ backgroundColor: colors.teal[500], color: colors.grey[800], mt: 5, px: 5, py: 1, fontSize: 20, fontWeight: 700, fontFamily: "Questrial" }}>Book Now

            </Button>


        </Box>
    </div>;
};

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
            width: 250,
        },
    },
};
export default BookForm;

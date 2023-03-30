import { Typography } from "@mui/material";
import { Box, Grid, Divider } from "@mui/material";
import React from "react";
import Pagination from '@mui/material/Pagination';
import { useGlobalProvider } from "../../utils/themeContext"
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import Link from "next/link";
const Blog = () => {
    const { colors } = useGlobalProvider();
    return <div className="min-h-screen ">

        <Box className="flex justify-center items-center h-[50vh] flex-col" sx={{
            backgroundImage: `url('/trek/4.png')`,
            backgroundSize: 'cover',
        }}>
            <Typography variant="h2" color={colors.black[100]} className="font-[700] opacity-70 text-center" fontFamily="Questrial"
            >   Blogs And News
            </Typography>
            <div className="flex gap-2 my-5">
                <Box bgcolor={colors.grey[800]} className="w-20 h-1 "></Box>
                <Box bgcolor={colors.teal[500]} className="w-20 h-1 "></Box>
                <Box bgcolor={colors.grey[800]} className="w-20 h-1 "></Box>


            </div>
        </Box>
        <div className="flex items-center justify-center p-5 md:p-10 flex-col gap-4 py-10">
            <Typography variant="h2" color={colors.black[500]} className="font-[700] opacity-70 text-center" fontFamily="Questrial"
            >   Blogs And News
            </Typography>
            <Typography className=" text-center text-[1.1rem]" color={colors.black[500]} fontFamily="Questrial"
            >
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi nam iure enim et corporis consequuntur dolore natus incidunt consequatur modi laboriosam, dolorem aspernatur autem dolores quidem quam sapiente magnam fuga obcaecati! Odio modi, eveniet omnis dolorum soluta quas voluptas veritatis animi doloribus adipisci similique excepturi, velit voluptate. Error expedita numquam vel totam veritatis consequatur quas dolores esse fugit similique aut, perspiciatis ut laborum voluptates natus, reprehenderit at sint minima labore ex facere ea. Autem labore necessitatibus totam ut nulla dicta voluptatibus esse voluptatum, pariatur quis iste quia debitis minima dolores excepturi impedit quaerat voluptates? Ex iste minus illum esse. Sunt.
            </Typography>
            <Typography className=" text-center text-[1.1rem]" color={colors.black[500]} fontFamily="Questrial"
            >
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi nam iure enim et corporis consequuntur dolore natus incidunt consequatur modi laboriosam, dolorem aspernatur autem dolores quidem quam sapiente magnam fuga obcaecati! Odio modi, eveniet omnis dolorum soluta quas voluptas veritatis animi doloribus adipisci similique excepturi, velit voluptate. Error expedita numquam vel totam veritatis consequatur quas dolores esse fugit similique aut, perspiciatis ut laborum voluptates natus, reprehenderit at sint minima labore ex facere ea. Autem labore necessitatibus totam ut nulla dicta voluptatibus esse voluptatum, pariatur quis iste quia debitis minima dolores excepturi impedit quaerat voluptates? Ex iste minus illum esse. Sunt.
            </Typography>
            <Typography className=" text-center text-[1.1rem]" color={colors.black[500]} fontFamily="Questrial"
            >
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi nam iure enim et corporis consequuntur dolore natus incidunt consequatur modi laboriosam, dolorem aspernatur autem dolores quidem quam sapiente magnam fuga obcaecati! Odio modi, eveniet omnis dolorum soluta quas voluptas veritatis animi doloribus adipisci similique excepturi, velit voluptate. Error expedita numquam vel totam veritatis consequatur quas dolores esse fugit similique aut, perspiciatis ut laborum voluptates natus, reprehenderit at sint minima labore ex facere ea. Autem labore necessitatibus totam ut nulla dicta voluptatibus esse voluptatum, pariatur quis iste quia debitis minima dolores excepturi impedit quaerat voluptates? Ex iste minus illum esse. Sunt.
            </Typography>

        </div>


    </div>;
};

export default Blog;

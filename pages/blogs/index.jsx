import { Typography } from "@mui/material";
import { Box, Grid, Divider } from "@mui/material";
import React from "react";
import Pagination from '@mui/material/Pagination';
import { useGlobalProvider } from "../../utils/themeContext"
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import Link from "next/link";
import { useState, useEffect } from "react";
import { client } from "../../utils/client"
import { format } from "timeago.js";
const Blog = ({ posts }) => {
    const { colors } = useGlobalProvider();
    const [page, setPage] = useState(1);
    const [blogsPerPage, setBlogsPerPage] = useState(3);
    const totalBlogs = posts?.length;

    useEffect(() => {
        setPage(1);
    }, [posts]);

    const handlePageChange = (event, value) => {
        setPage(value);
    };

    const startIndex = (page - 1) * blogsPerPage;
    const endIndex = startIndex + blogsPerPage;
    const displayedPosts = posts?.slice(startIndex, endIndex);
    return <div className="min-h-screen ">

        <Box className="flex justify-center items-center h-[30vh] flex-col" sx={{
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
        <div className="flex items-center justify-center p-5 md:p-10 flex-col pb-10">
            <Grid container spacing={2}>
                {
                    displayedPosts.map((item, index) => {

                        const { title, slug, featuredImage: coverImage, excerpt, date } = item.fields
                        return <Grid item xs={12} md={6} key={index}>
                            <div className="flex flex-col items-center justify-center py-5">
                                <div className="flex flex-col items-center justify-center p-2">
                                    <img src={`${coverImage.fields.file.url}`}
                                        srcSet={`${coverImage.fields.file.url}`} alt="" className="w-full min-h-[300px] max-h-[350px] object-cover " />
                                    <div className="flex flex-col items-center justify-center py-5">
                                        <Typography variant="h3" textAlign="left" fontFamily="Questrial" className=" text-black font-[900]  self-start capitalize" >
                                            {title}
                                        </Typography>
                                        <div className="flex w-full py-5">
                                            <Divider flexItem width="100%" sx={{ borderBottomWidth: 2 }} />
                                        </div>

                                        <Typography variant="body1" fontFamily="Questrial" className=" text-black  " >
                                            {excerpt}
                                        </Typography>
                                        <div className="flex w-full justify-between mt-4">
                                            <Typography variant="body1" fontFamily="Questrial" className=" text-black  " >
                                                {
                                                    format(date)
                                                }
                                            </Typography>
                                            <Link href={`/blogs/${slug}`}>
                                                <a className="flex items-center justify-center self-start">
                                                    <Typography variant="h1" fontFamily="Questrial" className=" text-black font-[900] text-xl" >
                                                        Read More
                                                    </Typography>
                                                    <ArrowRightAltIcon className="text-black text-3xl" />
                                                </a>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Grid>

                    })
                }


            </Grid>
            <div className="flex w-full p-5 justify-center">
                <Pagination
                    count={Math.ceil(totalBlogs / blogsPerPage)}
                    page={page}
                    onChange={handlePageChange}
                />
            </div>

        </div>


    </div>;
};
export const getStaticProps = async () => {
    const response = await client.getEntries({ content_type: 'blogs' })

    return {
        props: {
            posts: response.items,
            revalidate: 60
        }
    }
}
export default Blog;
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

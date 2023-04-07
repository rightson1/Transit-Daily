import { Skeleton, Typography } from "@mui/material";
import { Box, Grid, Divider } from "@mui/material";
import { format } from 'timeago.js';
import React from "react";
import { useGlobalProvider } from "../../utils/themeContext"
import { client } from "../../utils/client"
import PostBody from "../../components/posts/PostBody";
import { useRouter } from 'next/router'
const Blog = ({ post }) => {
    const { title, featuredImage: coverImage, author, date, } = post.fields;
    const { url } = coverImage.fields.file;
    const { colors } = useGlobalProvider();
    const router = useRouter();
    return <div className="min-h-screen ">

        <Box className="flex justify-center items-center h-[50vh] flex-col" sx={{
            backgroundImage: `url(${url})`,
            backgroundSize: 'cover',
        }}>
            <Typography variant="h2" color={colors.black[100]} className="font-[700] opacity-70 text-center" fontFamily="Questrial"
            >   {title}
            </Typography>
            <div className="flex gap-2 my-5">
                <Box bgcolor={colors.grey[800]} className="w-20 h-1 "></Box>
                <Box bgcolor={colors.teal[500]} className="w-20 h-1 "></Box>
                <Box bgcolor={colors.grey[800]} className="w-20 h-1 "></Box>


            </div>
        </Box>
        <Box item xs={12} md={6} className="flex   gap-3 justify-between p-5">
            <Typography variant='h5' fontFamily="Questrial">
                by {author}
            </Typography>
            <Typography variant='body1' fontFamily="Questrial" className='flex justify-between'>
                {/* <DateComponent dateString={date} className='text-sm text-gray-400' /> */}
                <span className='italic'>
                    {format(date)}
                </span>
            </Typography>


        </Box>

        <div className='w-full flex justify-center px-5 md:px-10 pb-10'>
            <article className='md:max-w-3/4 max-w-[900px]'>
                {router.isFallback ? (
                    <div>
                        <Skeleton variant="text" width="100%" height={200} />
                        <Skeleton variant="text" width="100%" height={50} />
                        <div className="flex">
                            <Skeleton variant="text" width="100%" height={200} />
                            <Skeleton variant="text" width="100%" height={200} />
                        </div>
                    </div>
                ) : (
                    <>
                        <PostBody post={post} />
                    </>
                )}
            </article>
        </div>


    </div>;
};
export const getStaticProps = async ({ params }) => {
    const cfClient = client

    const { slug } = params
    const response = await cfClient.getEntries({
        content_type: 'blogs',
        'fields.slug': slug
    })

    if (!response?.items?.length) {
        return {
            redirect: {
                destination: '/blogs',
                permanent: false
            }
        }
    }

    return {
        props: {
            post: response?.items?.[0],
            revalidate: 60
        }
    }
}

export const getStaticPaths = async () => {
    const response = await client.getEntries({ content_type: 'blogs' })
    const paths = response.items.map(item => ({
        params: { slug: item.fields.slug }
    }))

    return {
        paths,
        fallback: true
    }
}

export default Blog;

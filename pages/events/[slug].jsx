import { Skeleton, Typography } from "@mui/material";
import { Box, Grid, Divider } from "@mui/material";
import { format } from 'timeago.js';
import React from "react";
import { useGlobalProvider } from "../../utils/themeContext"
import { client } from "../../utils/client"
import PostBody from "../../components/posts/PostBody";
import { useRouter } from 'next/router'
import PostSlide from "../../components/posts/PostSlide";
import Title from "../../components/Title";
const Events = ({ post }) => {
    const { title, featuredImage: coverImage, author, date, images } = post.fields;
    const { url } = coverImage.fields.file;
    const { colors } = useGlobalProvider();
    const router = useRouter();
    return <div className="min-h-screen ">
        <Title
            title={title}
            description={title}
        />
        <Box className="flex justify-center items-center h-[50vh] flex-col" sx={{
            backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url(${url})`,
            backgroundSize: 'cover',
        }}>
            <Typography variant="h2" color={colors.grey[900]} className="font-[700] opacity-70 text-center" fontFamily="Questrial"
            >   {title}
            </Typography>
            <div className="flex gap-2 my-5">
                <Box bgcolor={colors.grey[100]} className="w-20 h-1 "></Box>
                <Box bgcolor={colors.black[100]} className="w-20 h-1 "></Box>
                <Box bgcolor={colors.grey[100]} className="w-20 h-1 "></Box>


            </div>
        </Box>


        <div className='w-full flex justify-center px-5 md:px-10 pb-20'>
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
                        <PostSlide {...{ images, title }} />

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
        content_type: 'events',
        'fields.slug': slug
    })

    if (!response?.items?.length) {
        return {
            redirect: {
                destination: '/events',
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
    const response = await client.getEntries({ content_type: 'events' })
    const paths = response.items.map(item => ({
        params: { slug: item.fields.slug }
    }))

    return {
        paths,
        fallback: true
    }
}

export default Events;

import Skeleton from "@mui/material/Skeleton";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import React from "react";
import { useGlobalProvider } from "../../utils/themeContext"
import { client } from "../../utils/client"
import PostBody from "../../components/posts/PostBody";
import { useRouter } from 'next/router'
import formatDate from "../../components/formatDate";
import Title from "../../components/Title";
const Events = ({ post }) => {
    const { title, featuredImage: coverImage, author, date, images, formLink } = post.fields;
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
            <div className="flex flex-col gap-5 p-10 items-center">
                <Typography fontFamily="Questrial" variant="h1" className="uppercase text-white" textAlign="center"
                    fontSize={{
                        xs: '2.5rem',
                        md: '3.5rem'
                    }}>{title}</Typography>
                <Typography fontFamily="Questrial" variant="h5" textAlign="center" className="text-white">
                    {
                        formatDate(date)
                    }
                </Typography>
                <Button
                    component="a"
                    href={formLink}
                    target="_blank"
                    className="w-auto px-3"
                    sx={{
                        border: "1px solid white",
                        color: "black",
                        backgroundColor: "white !important",
                        "&:hover": {
                            color: "white",
                            backgroundColor: "transparent !important"
                        }
                    }}
                >
                    Join Now
                </Button>


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
        content_type: 'upcomming',
        'fields.slug': slug
    })

    if (!response?.items?.length) {
        return {
            redirect: {
                destination: '/upcomming',
                permanent: false
            }
        }
    }

    return {
        props: {
            post: response?.items?.[0],
            revalidate: 60
        },
        revalidate: 60
    }
}

export const getStaticPaths = async () => {
    const response = await client.getEntries({ content_type: 'upcomming' })
    const paths = response.items.map(item => ({
        params: { slug: item.fields.slug }
    }))

    return {
        paths,
        fallback: true
    }
}

export default Events;

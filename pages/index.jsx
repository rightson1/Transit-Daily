import { Box, Button, Typography } from "@mui/material";
import { Zoom } from 'react-slideshow-image';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import Link from "next/link";
import { useGlobalProvider } from "../utils/themeContext";
import { ZoomOut } from "@mui/icons-material";

export default function Home() {
  const { isMobileSmall } = useGlobalProvider()
  const list = [
    {
      title: 'About',
      link: '/about'
    }, {
      title: 'Services',
      link: "/services"
    },
    {
      title: "Book Bike",
      link: '/book'
    },

    {
      title: "Events",
      link: '/events'
    },

    {
      title: "Blogs",
      link: '/blogs'
    },
    {
      title: "Contact",
      link: '/contact'
    },


  ]
  return (

    <div className="flex  w-full h-screen  ">
      <div className="flex flex-col justify-center items-center z-[6] h-full px-5 w-full gap-8">
        <div className="flex justify-center items-center">
          <div className="flex-col flex justify-center items-center  text-white">
            <Typography fontFamily="Gloria Hallelujah" variant="h1" fontSize={{
              xs: '2.5rem',
              md: '7rem'
            }}>
              Transit
            </Typography>
            <Typography fontFamily='Gloria Hallelujah' variant="h6"
              fontSize={{
                xs: '1.5rem',
                md: '4rem'
              }}>
              Daily
            </Typography>
          </div>
          <Box component="img" src="/logo.png" alt="" sx={{
            width: isMobileSmall ? '150px' : {
              xs: '200px',
              md: '400px'
            }
          }} />
        </div>
        <Typography className="text-white font-semibold" variant="h4" fontFamily="Nunito"
          fontSize={{
            xs: '1.5rem',
            md: '2rem'
          }}>
          VISION, AMBITION & TECHNOLOGY FOR GROUND BREAKING DESIGNS
        </Typography>
        <div className="flex  flex-wrap justify-start gap-2 items-center my-2">
          {
            list.map(({ title, link }, index) => {
              return (
                <Link key={index} href={link}>
                  <Button className="text-white gap-4 hover:text-teal-500">
                    {title}
                    <ArrowRightAltIcon />
                  </Button>
                </Link>
              )
            })
          }
        </div>

      </div>
      <div className="fixed top-0 h-screen w-screen z-[2] bg-[rgba(0,0,0,.7)] "></div>
      <Box
        sx={{
          "& img": {
            height: '100vh',
            objectFit: 'cover',
          },
          "& .indicator": {
            display: "none",
            bgcolor: 'red'
          }
        }}
        className="fixed w-screen h-screen top-0 z-[1]">
        <Zoom scale={0.4} {...properties}
          duration={3000}
        >
          {
            images.map((each, index) => <img key={index} style={{ width: "100%" }} src={each.url} />)
          }
        </Zoom>
      </Box>
    </div>
  );



}
const buttonStyle = {
  display: 'none'
};
const properties = {
  prevArrow: <button style={{ ...buttonStyle }}></button>,
  nextArrow: <button style={{ ...buttonStyle }}></button>
}
const images = [
  {
    url: 'image1.jpg',
    caption: 'Slide 1'
  },
  {
    url: 'image3.jpg',
    caption: 'Slide 3'
  },
  {
    url: 'image4.jpg',
    caption: 'Slide 3'
  },
];

Home.nolayout = true;

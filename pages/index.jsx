import { Box, Button, Typography } from "@mui/material";
import { Fade } from 'react-slideshow-image';
import { useGlobalProvider } from "../utils/themeContext";
import Typewriter from 'typewriter-effect';;
import About from "../components/About";
import Services from "../components/Services";
import Work from "../components/Work";
import Title from "../components/Title";
import { client } from "../utils/client"
export default function Home({ services, content }) {
  const { colors } = useGlobalProvider();
  const { autoType, title1, title2, title3, paragraph1, paragraph2, paragraph3, slideShow } = content[0]?.fields;

  const font = {
    xs: '3.5rem',
    md: '5.5rem'

  }
  return (<div className="relative">
    <div className="flex  w-full h-[60vh] md:h-[80vh]  z-[1]">
      <Title title="Affordable Bicycle Services and Cycling Events in Nairobi | Transit Daily"
        description="Transit Daily offers affordable bicycle repair, rental, and cycling events in Nairobi, Kenya. Join us for a fun and eco-friendly way to explore the city on two wheels. Contact us today to learn more!" />

      <div className="flex flex-col justify-center items-center z-[6] h-full px-5 w-full gap-8">
        <div className="flex justify-center items-center">
          <Typography fontFamily="Questrial" variant="h1" className="font-[900] flex items-center gap-4" textAlign="center"
          >
            <div className="flex">
              <Typography component="span" className="font-[900]" fontSize={font} sx={{
                color: colors.yellow[500]
              }}>Trans</Typography>
              <Typography component="span" className="font-[900]"
                fontSize={font} sx={{
                  color: colors.teal[500]
                }}>it</Typography>
            </div>
            <Typography component="span" className="font-[900]"
              fontSize={font}
              sx={{
                color: colors.black[100]
              }}>  Daily </Typography>


          </Typography>

        </div>

        <Typography className="text-white font-semibold" variant="h4" fontFamily="Nunito" textAlign="center"
          fontSize={{
            xs: '1.5rem',
            md: '2rem'
          }}>
          <Typewriter
            options={{
              strings: autoType?.split('//'),
              autoStart: true,
              loop: true,
            }}
          />
        </Typography>
      </div>
      <div className="absolute top-0 h-[60vh] md:h-[80vh]  w-screen z-[2] bg-[rgba(0,0,0,.7)] "></div>
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
        className="absolute w-screen h-[60vh] md:h-[80vh]  top-0 z-[1] overflow-hidden">
        <Fade scale={0.4} {...properties}
          duration={3000}
        >
          {
            slideShow.map((each, index) => {
              const { url } = each.fields.file;
              return (
                <img key={index} style={{ width: "100%" }} src={url} className="z-[]" />
              )
            })
          }
        </Fade>
      </Box>
    </div>
    <About title={title1} desc={paragraph1} />
    <Services {...{ services }} />
    <Work {...{ title2, paragraph2 }} />
  </div>
  );



}
const buttonStyle = {
  display: 'none'
};
export const getStaticProps = async () => {
  const response = await client.getEntries({ content_type: 'services' });
  const content = await client.getEntries({ content_type: 'homePage' });


  return {
    props: {
      services: response?.items || [],
      content: content?.items,
      revalidate: 60
    }
  }
}

const properties = {
  prevArrow: <button style={{ ...buttonStyle }}></button>,
  nextArrow: <button style={{ ...buttonStyle }}></button>
}
const imagess = [
  {
    url: 'trek.jpg',
    caption: 'Slide 1'
  },
  {
    url: '/trek/1.png',
    caption: 'Slide 3'
  },
  {
    url: '/trek/2.png',
    caption: 'Slide 3'
  },
  {
    url: '/trek/3.png',
    caption: 'Slide 3'
  },
  {
    url: '/trek/4.png',
    caption: 'Slide 3'
  },
];

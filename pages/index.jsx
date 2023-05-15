import { Box, Typography } from "@mui/material";
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
    xs: '2rem',
    md: '4.5rem'

  }
  // SPORTS VIEW TALENTS
  return (<div className="relative">
    <div className="flex  w-full h-[60vh] md:h-[80vh]  z-[1]">
      <Title title="SPORTS VIEW TALENTS"
        description="Sportsview Talents Academy formerly Sportsview Skaters Club (SVS) was formed in February 2019 as an in-line skating training program. Now entering our third year, SVS has evolved into a full-scale, roller skating, bike riding , floor ball and a very successful Chess club offering year-round tailored trainings to kids from the age of 3 . We record most of our training activities and upload them on YouTube and Facebook pages to enhance quality control." />

      <div className="flex flex-col justify-center items-center z-[6] h-full px-5 w-full gap-8">
        <div className="flex justify-center items-center">
          <Typography fontFamily="Questrial" variant="h1" className="font-[900] flex items-center gap-4" textAlign="center"
          >
            <div className="flex">
              <Typography component="span" className="font-[900]" fontSize={font} sx={{
                color: colors.yellow[500]
              }}>SPOR</Typography>
              <Typography component="span" className="font-[900]"
                fontSize={font} sx={{
                  color: colors.teal[500]
                }}>TSVIEW </Typography>
            </div>
            <Typography component="span" className="font-[900]"
              fontSize={font}
              sx={{
                color: colors.black[100]
              }}> TALENT </Typography>


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
    },
    revalidate: 60,
  }
}

const properties = {
  prevArrow: <button style={{ ...buttonStyle }}></button>,
  nextArrow: <button style={{ ...buttonStyle }}></button>
}

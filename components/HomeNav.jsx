import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import { useGlobalProvider } from "../utils/themeContext";
import { useRouter } from 'next/router'
import { Button } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import IconButton from '@mui/material/IconButton';
import { Typography } from '@mui/material';
import Link from 'next/link';
const nav = [{
    name: 'Home',
    link: '/'
},
{
    name: 'About Us ',
    link: '/about'
}, {
    name: 'Our Services',
    link: '/services'

}, {
    name: 'Book',
    link: '/book'
},

{
    name: 'News And Blog',
    link: '/blogs'
}
    ,
{
    name: 'Events',
    link: '/events'
}
    ,
{
    name: 'Contact Us',
    link: '/contact'
}
]
function HomeNav() {
    const router = useRouter()
    const path = router.pathname.split('/')[1]
    const { colors, setOpen } = useGlobalProvider()
    const handleOpenNavMenu = (event) => {
        setOpen(true)
    };
    return (
        <Box
            sx={{
                flexGrow: 1,
                width: "100%",
                top: 0,
                zIndex: 1000,
                left: 0,

                // bgcolor: colors.primary[500]
            }}
            className="z-20 bg-transparent fixed top-0 left-0 "
        >
            <AppBar position="static" sx={{
                background: 'inherit',
                boxShadow: 'none',
                position: 'fixed',
                display: {
                    xs: 'none',
                    md: 'flex'
                }
            }}>
                <Container maxWidth="xl">
                    <Toolbar disableGutters
                        className='flex justify-between py-5'>
                        <Box
                            variant="h6"
                            noWrap
                            component="button"
                            onClick={() => { router.push('/') }}
                            sx={{
                                mr: 2,
                                display: { xs: 'flex', md: 'flex' },
                                fontFamily: 'Lato',
                                fontWeight: 700,
                                letterSpacing: '.3rem',
                                color: colors.grey[100],
                                textDecoration: 'none',
                                fontSize: {
                                    xs: '1.8rem',
                                },

                            }}
                        >
                            <img src="/logo.png" className='w-[70px] ' alt="" />
                        </Box>

                        <div className="flex gap-3 items-center color-black ">
                            {
                                nav.map((item, index) =>
                                    <Link href={`${item.link}`} key={index}>
                                        <Button className="text-black"  >
                                            <Typography fontFamily="Questrial"
                                                sx={{
                                                    color: (item.link.split('/')[1] == path ? colors.teal[500] : 'white') + '!important',
                                                    borderBottom: item.link.split('/')[1] == path && `2px solid ${colors.teal[800]}`,
                                                    "&:hover": {
                                                        color: colors.teal[500] + '!important',
                                                        borderBottom: `2px solid ${colors.teal[500]}`,

                                                    }

                                                }}>
                                                {item.name}
                                            </Typography>

                                        </Button>
                                    </Link>


                                )
                            }
                        </div>
                    </Toolbar>
                </Container>
                <Box
                    className="flex justify-center items-center  absolute -bottom-[50px] z-10 w-full">
                    <div className="flex gap-3 bg-white shadow-md">

                    </div>

                </Box>
            </AppBar>
            <AppBar position="static" sx={{
                background: 'inherit',
                boxShadow: 'none',
                display: {
                    xs: 'flex',
                    md: 'none'
                }
            }}>
                <Container maxWidth='xl'>
                    <Toolbar disableGutters
                        className='flex justify-between'>
                        <Box
                            variant="h6"
                            noWrap
                            component="button"
                            onClick={() => { router.push('/') }}
                            sx={{
                                mr: 2,
                                display: { xs: 'flex', md: 'flex' },
                                fontFamily: 'Lato',
                                fontWeight: 700,
                                letterSpacing: '.3rem',
                                color: colors.grey[100],
                                textDecoration: 'none',
                                fontSize: {
                                    xs: '1.8rem',
                                },

                            }}
                        >
                            {/* JLM */}
                            <img src="/logo.png" className='w-[60px] rounded-full' alt="" />

                        </Box>

                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                            <MenuIcon className=""
                                onClick={handleOpenNavMenu}
                                sx={{
                                    color: colors.grey[900],
                                    fontSize: "2.5rem"
                                }} />
                        </IconButton>

                    </Toolbar>
                </Container>
            </AppBar>

        </Box>
    );
}
export default HomeNav;

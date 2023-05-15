import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { useGlobalProvider } from '../utils/themeContext';
import { IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { useRouter } from 'next/router';
import Link from 'next/link';
export default function Sidebar({ open, setOpen }) {
    const { colors } = useGlobalProvider()
    const router = useRouter()

    const toggleDrawer = (click) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setOpen(click);
    };

    const list = () => (
        <Box className="px-2 bg-transparent"
            sx={{
                py: 2,
                pb: 5,
            }}
            role="presentation"
            onClick={toggleDrawer(false)}
            onKeyDown={toggleDrawer(false)}

        >
            <Box className="flex justify-between">
                <img src="/logo.png" className='w-[50px] rounded-full' alt="Transit Daily Logo" />
                <IconButton className='self-end jus'>
                    <CloseIcon className='text-[30px]' />
                </IconButton>
            </Box>

            <List
            >
                {
                    listItems.map((item, index) => {


                        return (
                            <>
                                <Link href={item.link}>
                                    <ListItemButton className='py-5'>

                                        <ListItemText>
                                            {item.name}
                                        </ListItemText>
                                    </ListItemButton>
                                </Link>
                            </>
                        )

                    })
                }
            </List>
        </Box>
    );

    return (
        <div>

            <React.Fragment >
                <Drawer
                    anchor="top"
                    open={open}


                    onClose={toggleDrawer(false)}
                >
                    {list()}
                </Drawer>
            </React.Fragment>

        </div>
    );
}

const listItems = [

    {
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
        name: 'Register',
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
        name: 'Upcoming Events',
        link: '/upcomming'
    }
    ,
    {
        name: 'Contact Us',
        link: '/contact'
    }

]

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Modal from '@mui/material/Modal';
import CloseIcon from '@mui/icons-material/CloseOutlined';
import * as React from 'react';
import { useGlobalProvider } from "../../utils/themeContext";
const PostSlide = ({ images, title }) => {
    const [open, setOpen] = React.useState(null);
    const handleClose = () => setOpen(null);
    return <Box
        sx={{
            "& .swiper-pagination-bullet": {
                backgroundColor: "white !important"
            }
        }
        }>    <Grid className="my-10" container spacing={3}>
            {
                images.map((image, index) => {

                    const { url } = image?.fields?.file;
                    return (
                        <Grid item xs={12} md={4} key={index}>
                            <Box component="img"
                                alt={title}
                                onClick={() => setOpen(image.fields.file.url)}
                                className='w-full h-full object-cover max-h-[250px]  cursor-pointer'
                                src={image.fields.file.url}
                                sx={{ width: '100%', height: '100%', bgcolor: 'grey.500' }} />
                        </Grid>
                    )
                }

                )
            }
        </Grid>
        <Modal
            className='w-full h-full flex justify-center items-center p-10 md:p-[100px]  z-[8]'
            open={!!open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            sx={{
                bgcolor: 'rgba(0,0,0,0.5)',
            }}
        >

            <Box component="img"
                onClick={handleClose}
                className='w-full h-full object-fit'
                src={open}
                sx={{ width: '100%', height: '100%', }} />
        </Modal>
        {
            open && <Button onClick={handleClose} className='fixed text-white top-0 right-5 cursor-pointer z-10' >
                <CloseIcon fontSize='large' />
            </Button>
        }
    </Box>;
};

export default PostSlide;

import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import Grid from "@mui/material/Grid";
import Image from "next/image";
import IconButton from "@mui/material/IconButton";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import ArrowBackIosOutlinedIcon from "@mui/icons-material/ArrowBackIosOutlined";
import ArrowForwardIosOutlinedIcon from "@mui/icons-material/ArrowForwardIosOutlined";
import * as React from "react";
import Box from "@mui/material/Box";

export const LightBox = ({
                             images,
                             onClose,
                             onClickPrev,
                             onClickNext,
                             currentImage,
                             isOpen
                         }) => {

    const image = images[currentImage];

    return (
        <Dialog
            onClose={onClose}
            open={isOpen}
            onBackdropClick={onClose}
            fullScreen
        >
            <DialogContent
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    height: '100%',
                    padding: '0'
                }}
            >

                <Grid
                    item container
                    xs={12}
                    alignItems="center"
                    justifyContent="center">
                    <Image
                        src={image.img}
                        alt={`Lightbox ${currentImage}`}
                        style={{
                            maxWidth: '100%',
                            maxHeight: '100vh',
                            width: 'auto',
                            height: 'auto',
                            objectFit: "contain"
                        }}
                    />
                    <IconButton
                        onClick={onClose}
                        sx={{
                            position: 'absolute',
                            top: 0,
                            right: 0,
                            zIndex: 1,
                        }}
                    >
                        <CloseOutlinedIcon fontSize='large' sx={{color: 'rgba(0, 0, 0, 0.87)'}}/>
                    </IconButton>
                    {currentImage !== 0 &&
                    <Box
                        sx={{
                            position: 'absolute',
                            top: '50%',
                            left: 0,
                            transform: 'translateY(-50%)',
                            zIndex: 1,
                            width: 48,
                            height: 48,
                            borderRadius: '50%',
                            backgroundColor: 'rgba(245, 245, 245, 0.5)',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            marginLeft: '5px'
                        }}
                    >
                        <IconButton
                            onClick={onClickPrev}
                            sx={{
                                position: 'absolute',
                                top: '50%',
                                left: 0,
                                transform: 'translateY(-50%)',
                                zIndex: 1,
                            }}
                        >
                            <ArrowBackIosOutlinedIcon
                                fontSize='large'
                                sx={{color: 'rgba(0, 0, 0, 0.87)'}}
                                />
                        </IconButton>
                    </Box>
                    }
                    {currentImage !== images.length - 1 &&
                    <Box
                        sx={{
                            position: 'absolute',
                            top: '50%',
                            right: 0,
                            transform: 'translateY(-50%)',
                            zIndex: 1,
                            width: 48,
                            height: 48,
                            borderRadius: '50%',
                            backgroundColor: 'rgba(245, 245, 245, 0.5)',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            marginRight: '5px'
                        }}
                    >
                        <IconButton
                            onClick={onClickNext}
                            sx={{
                                position: 'absolute',
                                top: '50%',
                                right: 0,
                                transform: 'translateY(-50%)',
                                zIndex: 1,
                            }}
                        >
                            <ArrowForwardIosOutlinedIcon fontSize='large' sx={{color: 'rgba(0, 0, 0, 0.87)'}}/>
                        </IconButton>
                    </Box>
                    }
                </Grid>

            </DialogContent>

        </Dialog>
    );
};
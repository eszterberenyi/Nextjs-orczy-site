import * as React from 'react';
import {useState} from "react";
import Image from "next/image";
import Grid from "@mui/material/Grid";
import ArrowBackIosOutlinedIcon from '@mui/icons-material/ArrowBackIosOutlined';
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';
import IconButton from "@mui/material/IconButton";
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import Dialog from '@mui/material/Dialog';
import DialogContent from "@mui/material/DialogContent";

const Gallery = ({ photos, onClick }) => {
    return (
        <>
            {photos.map((photo, index) => (
                <Grid item key={index} xs={12}>
                    <Image
                        key={index}
                        src={photo.src}
                        alt={`Photo ${index}`}
                        onClick={(event) => onClick(event, { index })}
                        style={{maxWidth: '100%', height: 'auto'}}
                    />
                </Grid>
            ))}
        </>

    );
};

const Lightbox = ({
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
                        src={image.src}
                        alt={`Lightbox ${currentImage}`}
                        style={{
                            maxWidth: '100%',
                            maxHeight: '100vh',
                            width: 'auto',
                            height: 'auto',
                            objectFit: 'contain'
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
                            <ArrowBackIosOutlinedIcon fontSize='large' sx={{color: 'rgba(0, 0, 0, 0.87)'}}/>
                        </IconButton>
                    }
                    {currentImage !== images.length - 1 &&
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
                    }
                </Grid>

            </DialogContent>

        </Dialog>
    );
};

export const ImageGallery = ({images}) => {
    const [currentImage, setCurrentImage] = useState(0);
    const [lightboxIsOpen, setLightboxIsOpen] = useState(false);

    const openLightbox = (event, obj) => {
        setCurrentImage(obj.index);
        setLightboxIsOpen(true);
    };

    const closeLightbox = () => {
        setCurrentImage(0);
        setLightboxIsOpen(false);
    };

    const gotoPrevious = () => {
        setCurrentImage(currentImage - 1);
    };

    const gotoNext = () => {
        setCurrentImage(currentImage + 1);
    };

    return (
        <>
            <Gallery photos={images} onClick={openLightbox} />
            <Lightbox
                images={images}
                onClose={closeLightbox}
                onClickPrev={gotoPrevious}
                onClickNext={gotoNext}
                currentImage={currentImage}
                isOpen={lightboxIsOpen}
            />
        </>
    );
};
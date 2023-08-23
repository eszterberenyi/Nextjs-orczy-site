// import React, { useState } from 'react';
// import Lightbox,from 'react-spring-lightbox';
// import ArrowBackIosOutlinedIcon from '@mui/icons-material/ArrowBackIosOutlined';
// import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';
// import {Button} from "@mui/material";
// import IconButton from "@mui/material/IconButton";
//
// const images = [
//     {
//         src: 'https://timellenberger.com/static/blog-content/dark-mode/win10-dark-mode.jpg',
//         loading: 'lazy',
//         alt: 'Windows 10 Dark Mode Setting',
//     },
//     {
//         src: 'https://timellenberger.com/static/blog-content/dark-mode/macos-dark-mode.png',
//         loading: 'lazy',
//         alt: 'macOS Mojave Dark Mode Setting',
//     },
//     {
//         src: 'https://timellenberger.com/static/blog-content/dark-mode/android-9-dark-mode.jpg',
//         loading: 'lazy',
//         alt: 'Android 9.0 Dark Mode Setting',
//     },
// ];
//
//
// export const ImageGallery = () => {
//     const [isOpen, setOpen] = useState(true);
//     const [currentImageIndex, setCurrentIndex] = useState(0);
//
//     const gotoPrevious = () =>
//         currentImageIndex > 0 && setCurrentIndex(currentImageIndex - 1);
//
//     const gotoNext = () =>
//         currentImageIndex + 1 < images.length &&
//         setCurrentIndex(currentImageIndex + 1);
//
//     const forwardArrow = ({currentImageIndex}) => {
//         return (
//             <>
//             {currentImageIndex !== images.length - 1 &&
//                 <IconButton
//                     onClick={gotoNext}
//                     sx={{zIndex: 2}}
//                 >
//                     <ArrowForwardIosOutlinedIcon />
//                 </IconButton>
//             }
//             </>
//         )
//     }
//
//     const backArrow = ({currentImageIndex}) => {
//         console.log(currentImageIndex)
//         return (
//             <>
//                 {currentImageIndex !== 0 &&
//                 <IconButton
//                     onClick={gotoPrevious}
//                     sx={{zIndex: 2}}
//                 >
//                     <ArrowBackIosOutlinedIcon />
//                 </IconButton>
//                 }
//             </>
//         )
//     }
//
//
//     return (
//         <Lightbox
//             isOpen={true}
//             onPrev={gotoPrevious}
//             onNext={gotoNext}
//             images={images}
//             currentIndex={currentImageIndex}
//             /* Add your own UI */
//             // renderHeader={() => (<CustomHeader />)}
//             // renderFooter={() => (<CustomFooter />)}
//             renderPrevButton={() => (backArrow(currentImageIndex))}
//             renderNextButton={() => (forwardArrow(currentImageIndex))}
//             style={{
//                 // margin: '50px',
//                 // opacity: '0.5'
//             }}
//             // renderImageOverlay={() => (<ImageOverlayComponent >)}
//
//             /* Add styling */
//             // className="cool-class"
//             // style={{ background: "grey" }}
//
//             /* Handle closing */
//             // onClose={handleClose}
//
//             /* Use single or double click to zoom */
//             // singleClickToZoom
//
//             /* react-spring config for open/close animation */
//             // pageTransitionConfig={{
//             //   from: { transform: "scale(0.75)", opacity: 0 },
//             //   enter: { transform: "scale(1)", opacity: 1 },
//             //   leave: { transform: "scale(0.75)", opacity: 0 },
//             //   config: { mass: 1, tension: 320, friction: 32 }
//             // }}
//         />
//     );
// };


import * as React from 'react';
import {useState} from "react";
import Image from "next/image";
import Grid from "@mui/material/Grid";
import ArrowBackIosOutlinedIcon from '@mui/icons-material/ArrowBackIosOutlined';
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';
import IconButton from "@mui/material/IconButton";
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import Dialog from '@mui/material/Dialog';
import {aboutContent} from '../utils/pageContents';
import DialogContent from "@mui/material/DialogContent";


const Gallery = ({ photos, onClick }) => {
    return (
        <Grid container margin={3} spacing={3} direction='column' sx={{display: {xs: 'flex', md: 'none'}}}>
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
        </Grid>

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
            PaperProps={{
                sx: {
                    // padding: '10px',
                }
            }}
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
                            maxHeight: '100vh', // Set maximum height to viewport height
                            width: 'auto', // Maintain aspect ratio
                            height: 'auto', // Maintain aspect ratio}}
                            objectFit: 'contain'
                        }}
                    />
                    <IconButton
                        onClick={onClose}
                        sx={{
                            position: 'absolute',
                            top: 0,
                            right: 0,
                            zIndex: 1, // Ensure the icon is above the image
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
                                transform: 'translateY(-50%)', // Center vertically
                                zIndex: 1, // Ensure the icon is above the image
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
                                transform: 'translateY(-50%)', // Center vertically
                                zIndex: 1, // Ensure the icon is above the image
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

export const ImageGallery = () => {
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
            <Gallery photos={aboutContent.images} onClick={openLightbox} />
            <Lightbox
                images={aboutContent.images}
                onClose={closeLightbox}
                onClickPrev={gotoPrevious}
                onClickNext={gotoNext}
                currentImage={currentImage}
                isOpen={lightboxIsOpen}
            />
        </>
    );
};
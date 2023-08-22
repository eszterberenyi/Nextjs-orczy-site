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

const photos = [
    {
        src: "/cat.jpg",
    },
    {
        src: "/cat.jpg",
    },
    {
        src: "/cat.jpg",
    },
];

const Gallery = ({ photos, onClick }) => {
    return (
        <Grid container margin={3}>
            {photos.map((photo, index) => (
                <Grid item key={index}>
                    <Image
                        key={index}
                        src={photo.src}
                        alt={`Photo ${index}`}
                        onClick={(event) => onClick(event, { index })}
                        width={100}
                        height={200}
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
                      isOpen,
                  }) => {
    if (!isOpen) {
        return null;
    }

    const image = images[currentImage];

    return (
        <div className="lightbox">
            <IconButton onClick={onClose}>
                <CloseOutlinedIcon/>
            </IconButton>
            <div className="image-container">
                <Image src={image.src} alt={`Lightbox ${currentImage}`} width={100} height={200}/>
            </div>
            {currentImage !== 0 &&
                <IconButton onClick={onClickPrev}>
                    <ArrowBackIosOutlinedIcon/>
                </IconButton>
            }
            {currentImage !== images.length - 1 &&
                <IconButton onClick={onClickNext}>
                    <ArrowForwardIosOutlinedIcon/>
                </IconButton>
            }

        </div>
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
        <div>
            <Gallery photos={photos} onClick={openLightbox} />
            <Lightbox
                images={photos}
                onClose={closeLightbox}
                onClickPrev={gotoPrevious}
                onClickNext={gotoNext}
                currentImage={currentImage}
                isOpen={lightboxIsOpen}
            />
        </div>
    );
};
import * as React from 'react';
import {useState} from "react";
import {LightBox} from "./LightBox";
import {Gallery} from "./Gallery";

export const ImageGallery = ({images, renderAll}) => {
    const [currentImage, setCurrentImage] = useState(0);
    const [lightBoxIsOpen, setLightBoxIsOpen] = useState(false);

    const openLightBox = (event, obj) => {
        setCurrentImage(obj.index);
        setLightBoxIsOpen(true);
    };

    const closeLightBox = () => {
        setCurrentImage(0);
        setLightBoxIsOpen(false);
    };

    const gotoPrevious = () => {
        setCurrentImage(currentImage - 1);
    };

    const gotoNext = () => {
        setCurrentImage(currentImage + 1);
    };

    return (
        <>
            <Gallery photos={images} onClick={openLightBox} renderAll={renderAll} />
            <LightBox
                images={images}
                onClose={closeLightBox}
                onClickPrev={gotoPrevious}
                onClickNext={gotoNext}
                currentImage={currentImage}
                isOpen={lightBoxIsOpen}
            />
        </>
    );
};
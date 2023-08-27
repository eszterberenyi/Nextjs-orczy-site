import Image from "next/image";
import React from "react";
import Grid from "@mui/material/Grid";

export const MobileGallery = ({photos, onClick}) => {
    return (
        <>
            {photos.map((photo, index) => (
                <Grid item key={index}>
                    <Image
                        key={index}
                        src={photo.img}
                        alt={`Photo ${index}`}
                        onClick={(event) => onClick(event, { index })}
                        style={{maxWidth: '100%', height: 'auto'}}
                    />
                </Grid>
            ))}
        </>
)}
import Grid from "@mui/material/Grid";
import Image from "next/image";
import * as React from "react";
import CollectionsOutlinedIcon from '@mui/icons-material/CollectionsOutlined';

export const Gallery = ({ photos, onClick, renderAll }) => {

    const preloadedImages = React.useMemo(() => {
        if (renderAll) {
            return photos.map((photo, index) => (
                <Image
                    key={index}
                    src={photo.img}
                    alt={photo.title}
                    style={{ maxWidth: '100%', height: 'auto' }}
                />
            ));
        } else {
            return [
                <Image
                    key={0}
                    src={photos[0].img}
                    alt={photos[0].title}
                    style={{ maxWidth: '100%', height: 'auto' }}
                />
            ];
        }
    }, [photos, renderAll]);

    return (
        <Grid container>
            {preloadedImages.map((preloadedImage, index) => (
                <Grid item key={index} style={{ position: 'relative',  padding: '8px',  cursor: 'zoom-in' }}>
                    {preloadedImage}
                    {index === 0 && photos.length > 1 && (
                        <div
                            onClick={(event) => onClick(event, { index: 0 })}
                            style={{
                                position: 'absolute',
                                transform: 'translate(-50%, -50%)',
                                background: 'rgba(255, 255, 255, 0.5)',
                                color: 'white',
                                padding: '50px',
                                borderRadius: '5%',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                top: '50%', // Center vertically
                                left: '50%', // Center horizontally
                                width: '200px',
                                boxShadow: '0 5px 10px rgba(0, 0, 0, 0.7)'
                            }}
                        >
                            <CollectionsOutlinedIcon fontSize='large'/>
                        </div>
                    )}
                </Grid>
            ))}
        </Grid>
    );
};
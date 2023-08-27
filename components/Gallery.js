import Grid from "@mui/material/Grid";
import Image from "next/image";
import * as React from "react";
import CollectionsOutlinedIcon from '@mui/icons-material/CollectionsOutlined';

export const Gallery = ({ photos, onClick }) => {
    return (
        <Grid container>
            {photos.map((photo, index) => (
                <Grid item key={index} style={{ position: 'relative',  padding: '8px',  cursor: 'zoom-in' }}>
                    {index === 0 &&
                        <Image
                            src={photo.img}
                            alt={photo.title}
                            onClick={(event) => onClick(event, { index: 0 })}
                            style={{maxWidth: '100%', height: 'auto'}}
                        />
                    }
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
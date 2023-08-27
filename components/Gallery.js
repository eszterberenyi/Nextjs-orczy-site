import Grid from "@mui/material/Grid";
import Image from "next/image";
import * as React from "react";
import {MoreHorizOutlined} from "@mui/icons-material";

export const Gallery = ({ photos, onClick }) => {
    return (
        <div style={{ display: 'flex', flexWrap: 'wrap' }}>
            {photos.map((photo, index) => (
                <Grid item key={index} style={{ position: 'relative',  padding: '8px' }}>
                    {index === 0 &&
                        <Image
                            src={photo.img}
                            alt={photo.title}
                            onClick={(event) => onClick(event, { index: 0 })}
                            style={{maxWidth: '100%', height: 'auto', cursor: 'zoom-in'}}
                        />
                    }
                    {index === 0 && photos.length > 1 && (
                        <div
                            style={{
                                position: 'absolute',
                                bottom: '15px',
                                right: '15px',
                                background: 'rgba(0, 0, 0, 0.5)',
                                color: 'white',
                                padding: '8px',
                                borderRadius: '50%',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                            }}
                        >
                            <MoreHorizOutlined fontSize='large'/>
                        </div>
                    )}
                </Grid>
            ))}
        </div>

    );
};
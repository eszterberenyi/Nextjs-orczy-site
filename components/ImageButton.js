import * as React from 'react';
import { styled } from '@mui/material/styles';
import ButtonBase from '@mui/material/ButtonBase';
import Typography from '@mui/material/Typography';
import { Grid } from "@mui/material";
import Link from "next/link";
import Image from 'next/image';

const ImageButtonStyle = styled(ButtonBase)(({ theme }) => ({
    position: 'relative',
    height: 200,
    [theme.breakpoints.down('sm')]: {
        width: '100% !important',
        height: 100,
    },
    '&:hover, &.Mui-focusVisible': {
        zIndex: 1,
        '& .MuiImageBackdrop-root': {
            opacity: 1,
            backgroundColor: '#FDC623',
        },
        '& .MuiTypography-root': {
            border: '4px solid rgba(0, 0, 0, 0.87)',
            color: 'rgba(0, 0, 0, 0.87)'
        },
    },
}));

const ImageOverlay = styled('div')(() => ({
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#f5f5f5',
    overflow: 'hidden', // Add this line to hide overflow
}));

const ImageBackdrop = styled('div')(({ theme }) => ({
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: theme.palette.common.black,
    opacity: 0.4,
    transition: theme.transitions.create('opacity'),
}));

export const ImageButtons = ({ images, breakpoints = [12, 6] }) => {
    return (
        <Grid item container spacing={2}>
            {images.map((image) => (
                <Grid item xs={breakpoints[0]} md={breakpoints[1]} key={image.title}>
                    <ImageButtonStyle
                        focusRipple
                        key={image.title}
                        style={{
                            width: image.width,
                        }}
                    >
                        <Image
                            src={image.url}
                            alt={image.title}
                            fill
                            style={{objectFit: 'cover'}}
                            quality={100}
                            sizes="(max-width: 600px) 100vw, 50vw"
                        />
                        <ImageBackdrop className="MuiImageBackdrop-root" />
                        <Link href={image.link} passHref target={image.target}>
                            <ImageOverlay>
                                <Typography
                                    component="span"
                                    variant="subtitle1"
                                    color="inherit"
                                    fontWeight='bold'
                                    sx={{
                                        position: 'relative',
                                        p: 4,
                                        pt: 2,
                                        pb: (theme) => `calc(${theme.spacing(1)} + 6px)`,
                                    }}
                                >
                                    {image.title}
                                </Typography>
                            </ImageOverlay>
                        </Link>
                    </ImageButtonStyle>
                </Grid>
            ))}
        </Grid>
    );
}

export const ImageButton = ({ image, breakpoints = [12, 6] }) => {
    return (
        <Grid item xs={breakpoints[0]} md={breakpoints[1]}>
            <ImageButtonStyle
                focusRipple
                key={image.title}
                style={{
                    width: image.width,
                }}
            >
                <Image
                    src={image.url}
                    alt={image.title}
                    fill
                    style={{objectFit: 'cover'}}
                    quality={100}
                    sizes="(max-width: 600px) 100vw, 50vw"
                />
                <ImageBackdrop className="MuiImageBackdrop-root" />
                <Link href={image.link} passHref target={image.target}>
                    <ImageOverlay>
                        <Typography
                            component="span"
                            variant="subtitle1"
                            color="inherit"
                            fontWeight='bold'
                            sx={{
                                position: 'relative',
                                p: 4,
                                pt: 2,
                                pb: (theme) => `calc(${theme.spacing(1)} + 6px)`,
                            }}
                        >
                            {image.title}
                        </Typography>
                    </ImageOverlay>
                </Link>
            </ImageButtonStyle>
        </Grid>
    );
}
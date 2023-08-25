import React, {useEffect, useState} from "react";
import Layout from "../components/Layout";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import {enContent, imagePlaceholder} from "../utils/pageContents";
import Image from "next/image";
import {ItemTransition} from "../components/ItemTransition";
import { useTheme } from '@mui/material/styles';


export default function En() {

    const theme = useTheme();
    const [windowWidth, setWindowWidth] = useState(0);

    useEffect(() => {
        if (typeof window !== 'undefined') {
            setWindowWidth(window.innerWidth);

            const handleResize = () => {
                setWindowWidth(window.innerWidth);
            };

            window.addEventListener('resize', handleResize);

            return () => {
                window.removeEventListener('resize', handleResize);
            };
        }
    }, []);

    return (
        <Layout
            title='En'
        >
            <Grid
                container
                spacing={3}
                alignItems="center"
                justifyContent="center"
                sx={{padding: windowWidth >= theme.breakpoints.values.md ? 6 : 3}}
            >
                <ItemTransition>
                    <Grid item container>
                        <Typography variant='h5' fontWeight='bold'>{enContent.titles.about}</Typography>
                    </Grid>
                    <Grid item container xs={12} lg={6}>
                        <Grid item>
                            <Image
                                src={enContent.images.aboutUs}
                                alt='kép a projekttagokról'
                                priority={true}
                                style={{maxWidth: '100%', height: 'auto'}}
                            >

                            </Image>
                        </Grid>
                    </Grid>
                    <Grid item container spacing={6} xs={12} lg={6}>
                        <Grid item>
                            <Typography>{enContent.aboutUs}</Typography>
                        </Grid>
                    </Grid>
                </ItemTransition>

                <ItemTransition>
                    <Grid item container>
                        <Typography variant='h5' fontWeight='bold'>{enContent.titles.neighborhood}</Typography>
                    </Grid>
                    <Grid item container xs={12} lg={6}>
                        <Grid item>
                            <Image
                                src={imagePlaceholder.placeholder}
                                alt='kép a szomszédsági projektről'
                                priority={true}
                                style={{maxWidth: '100%', height: 'auto'}}
                            >
                            </Image>
                        </Grid>
                    </Grid>
                    <Grid item container spacing={6} xs={12} lg={6}>
                        <Grid item>
                            <Typography>{enContent.aboutNeighborhoodProject}</Typography>
                        </Grid>
                    </Grid>
                </ItemTransition>

            </Grid>
        </Layout>
    )
}
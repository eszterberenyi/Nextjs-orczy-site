import React from "react";
import Layout from "../components/Layout";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import {enContent} from "../utils/pageContents";
import Image from "next/image";
import {ItemTransition} from "../components/ItemTransition";
import {getWindowWidth} from "../utils/getWindowWidth";


export default function En() {
    const {theme, windowWidth} = getWindowWidth();

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
                                src={enContent.images.neighborhood}
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
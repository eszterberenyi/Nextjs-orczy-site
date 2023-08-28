import React from "react";
import Layout from "../components/Layout";
import Grid from "@mui/material/Grid";
import {neighborhoodContent} from "../utils/pageContents";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import {ImageGallery} from "../components/ImageGallery";
import {ImageButton} from "../components/ImageButton";
import {getWindowWidth} from "../utils/getWindowWidth";
import {ItemTransition} from "../components/ItemTransition";


export default function Workshops() {
    const {theme, windowWidth} = getWindowWidth();

    return (
        <Layout
            title='Szomszédsági'
        >

            {/*MOBILE*/}
            <Grid
                container
                alignItems="center"
                justifyContent="center"
                padding={6}
                sx={{display: {xs: 'none', md: 'none'}}}
            >
                {/*<AccordionPageSection content={neighborhoodContent}/>*/}
            </Grid>
            {/*MOBILE END*/}

            {/*DESKTOP*/}
            <Grid
                container
                alignItems="center"
                justifyContent="center"
                sx={{ padding: windowWidth >= theme.breakpoints.md ? 6 : 3 }}
                // sx={{display: {xs: 'flex', md: 'flex'}}}
            >
                <Grid item container spacing={3} sx={{marginBottom: '40px'}}>

                    <ItemTransition initial={true}>
                        <Grid item container lg={6} spacing={3} justifyContent="center">
                            <Grid item lg={12}>
                                <Image
                                src={neighborhoodContent.mainImage}
                                alt='kép a projekttagokról'
                                style={{maxWidth: '100%', height: 'auto'}}
                                priority
                                >
                                </Image>
                            </Grid>
                            <Grid item lg={12}>
                                <ImageGallery
                                    images={neighborhoodContent.about.pics}
                                    renderAll={false}
                                />
                            </Grid>
                        </Grid>

                        <Grid item container lg={6}>
                            <Typography style={{whiteSpace: 'pre-line'}}>{neighborhoodContent.mainText}</Typography>
                        </Grid>
                    </ItemTransition>

                    <ItemTransition>
                    <Grid item>
                        <Typography variant='h5' fontWeight='bold'>{neighborhoodContent.about.title}</Typography>
                    </Grid>
                    <Grid item>
                        <Typography style={{whiteSpace: 'pre-line'}}>{neighborhoodContent.about.text}</Typography>
                    </Grid>
                    <Grid item container spacing={3}>
                        {neighborhoodContent.buttonImages.map((img, index) => {
                            let breakpoints = index === 0 ? [12, 12] : [12, 6];

                            return (
                                index === 0 && (
                                    <ImageButton image={img} breakpoints={breakpoints} key={index}/>
                                )
                            )
                        })}
                    </Grid>
                    </ItemTransition>

                </Grid>

            </Grid>
            {/*DESKTOP END*/}


        </Layout>
    )
}
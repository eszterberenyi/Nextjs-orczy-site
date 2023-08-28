import Layout from "@/components/Layout";
import Grid from "@mui/material/Grid";
import Image from "next/image";
import {homeContent} from "../utils/pageContents"
import Typography from "@mui/material/Typography";
import {ImageButtons} from "../components/ImageButton";
import {CopyText} from "../components/CopyText";
import {ItemTransition} from "../components/ItemTransition";
import React from "react";
import {getWindowWidth} from "../utils/getWindowWidth";

export default function Home() {
    const {theme, windowWidth} = getWindowWidth();

    return (

        <Layout
            title='Orczy Szomszédok'
        >
            <Grid
                container
                spacing={3}
                alignItems="center"
                justifyContent="center"
            >
                <ItemTransition>
                    <Grid
                        container
                        spacing={0}
                        alignItems="center"
                        justifyContent="center"
                        sx={{
                            position: 'relative',
                            width: '100%',
                            height: '100vh'
                        }}
                    >
                        <Image
                            src={homeContent.images.opening}
                            alt="szubjektív térkép"
                            fill
                            style={{objectFit: 'cover'}}
                            quality={100}
                            priority={true}
                            sizes="(max-width: 600px) 100vw, 50vw"
                        />
                        <Grid
                            item
                            container
                            alignItems="center"
                            justifyContent="center"
                            sx={{
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                width: '100%',
                                height: '100%',
                            }}
                        >
                            <Image
                                src={homeContent.images.theySay}
                                alt=''
                                style={{maxWidth: '100%', height: 'auto', paddingLeft: '20px'}}
                                sizes="(max-width: 600px) 100vw, 50vw"
                            />
                        </Grid>
                    </Grid>
                </ItemTransition>

                <Grid container margin={3} spacing={3} sx={{padding: windowWidth >= theme.breakpoints.values.md ? 4 : 1}}>
                    <ItemTransition>
                        <Grid item container>
                            <Typography variant='h5' fontWeight='bold'>{homeContent.titles.about}</Typography>
                        </Grid>

                        <Grid item xs={12} lg={6}>
                                <Image
                                    src={homeContent.images.aboutUs}
                                    alt='kép a projekttagokról'
                                    priority={true}
                                    style={{maxWidth: '100%', height: 'auto'}}
                                    sizes="(max-width: 600px) 100vw, 50vw"
                                >

                                </Image>
                        </Grid>

                        <Grid item container direction="column" spacing={6} xs={12} lg={6}>
                            <Grid item>
                                <Typography>{homeContent.aboutUs}</Typography>
                            </Grid>
                            <Grid item container direction="column" mt='auto' mb={0}>
                                <Grid item>
                                    <p>This project is funded by:</p>
                                </Grid>
                                <Grid item>
                                    <Image
                                        src={homeContent.images.bertha}
                                        fill={false}
                                        placeholder="empty"
                                        alt='bertha foundation logo'
                                        style={{maxWidth: '25%', height: 'auto'}}
                                    />
                                </Grid>
                            </Grid>
                        </Grid>
                    </ItemTransition>

                    <ItemTransition>
                        <Grid item container>
                            <Grid item>
                                <Typography variant='h5' fontWeight='bold'>{homeContent.titles.current}</Typography>
                            </Grid>
                        </Grid>
                        <Grid item container spacing={2}>
                            <ImageButtons images={homeContent.buttonImages}/>
                        </Grid>
                    </ItemTransition>

                    <ItemTransition>
                        <Grid item>
                            <Typography variant='h5' fontWeight='bold'>{homeContent.titles.contact}</Typography>
                        </Grid>
                        <Grid item container spacing={1}>
                            <Grid item>
                                <Typography>{homeContent.email}</Typography>
                            </Grid>
                            <Grid item>
                                <CopyText
                                    text={homeContent.email}
                                />
                            </Grid>
                        </Grid>
                    </ItemTransition>
                </Grid>
            </Grid>

        </Layout>

    );
}
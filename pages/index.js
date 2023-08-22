import Layout from "@/components/Layout";
import Grid from "@mui/material/Grid";
import Image from "next/image";
import {homeContent} from "../utils/pageContents"
import Typography from "@mui/material/Typography";
import ButtonBases from "../components/ImageButton";
import {CopyText} from "../components/CopyText";
import {ItemTransition} from "../components/ItemTransition";
import React from "react";


export default function Home() {
    const backgroundImageUrl = 'url("/landing/nyito.jpg")'

    return (

        <Layout
            title='OSZ'
        >
            <Grid
                container
                spacing={3}
                alignItems="center"
                justifyContent="center"
                // padding='10px'
            >
                <ItemTransition>
                    <Grid
                        container
                        spacing={0}
                        alignItems="center"
                        justifyContent="center"
                        style={{
                            backgroundImage: backgroundImageUrl,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            width: '100%',
                            height: '100vh',
                        }}
                    >
                        {/*<Grid item>*/}
                        {/*    <Image*/}
                        {/*        src={homeContent.images.opening}*/}
                        {/*        alt='azt beszélik az orczyn felirat egy térképrészletre írva'*/}
                        {/*        priority={true}*/}
                        {/*        style={{maxWidth: '100%', height: 'auto'}}*/}

                        {/*    />*/}
                        {/*</Grid>*/}
                        <Grid item sx={{display: {xs: 'none', lg: 'flex'}}}>
                            <Image
                                src={homeContent.images.theySay}
                                alt=''
                                priority={true}
                                style={{maxWidth: '100%', height: 'auto', paddingLeft: '20px'}}
                            />
                        </Grid>
                        <Grid item sx={{display: {xs: 'flex', lg: 'none'}}}>
                            <Image
                                src={homeContent.images.theySay}
                                alt=''
                                priority={true}
                                style={{maxWidth: '100%', height: 'auto', paddingLeft: '20px'}}
                            />
                        </Grid>
                    </Grid>
                </ItemTransition>

                <Grid container margin={3} spacing={3}>
                    <ItemTransition>
                        <Grid item container>
                            <Typography variant='h5' fontWeight='bold'>{homeContent.titles.about}</Typography>
                        </Grid>

                        <Grid item container xs={12} lg={6}>

                            <Grid item>
                                <Image
                                    src={homeContent.images.aboutUs}
                                    alt='kép a projekttagokról'
                                    priority={true}
                                    style={{maxWidth: '100%', height: 'auto'}}
                                >

                                </Image>
                            </Grid>
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
                        </Grid>
                    </ItemTransition>

                    <ItemTransition>
                        <Grid item container>
                            <Grid item>
                                <Typography variant='h5' fontWeight='bold'>{homeContent.titles.current}</Typography>
                            </Grid>
                        </Grid>
                        <Grid item container spacing={2}>
                            <ButtonBases/>
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
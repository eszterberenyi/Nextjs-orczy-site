import Layout from "@/components/Layout";
import React, {useEffect, useState} from "react";
import Grid from "@mui/material/Grid";
import Image from "next/image";
import {homeContent} from "../utils/pageContents"
import Typography from "@mui/material/Typography";
import ButtonBases from "../components/ImageButton";
import {useInView} from "react-intersection-observer";
import Grow from "@mui/material/Grow";
import {CopyText} from "../components/CopyText";

function ItemTransition({children}) {
    const [isInView, setIsInView] = useState(false);
    const {ref, inView} = useInView({
        triggerOnce: true,
        threshold: 0.5,
    });

    useEffect(() => {
        setIsInView(inView);
    }, [inView]);

    return (
        <Grow in={isInView}
              ref={ref}
              timeout={1000}
              easing='cubic-bezier(0.4, 0, 0.2, 1)'
        >
            <Grid item container ref={ref} spacing={2}>
                {children}
            </Grid>
        </Grow>
    )
}

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
                padding='10px'
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
                            height: '100vh', // You can adjust the height as needed
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

        </Layout>

    );
}
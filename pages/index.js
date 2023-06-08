import Layout from "@/components/Layout";
import React, {useEffect, useState} from "react";
import Grid from "@mui/material/Grid";
import Image from "next/image";
import City from "../public/OSZ_ketsoros_sarga.svg";
import Cat from '../public/cat.jpg'
import {homeContent} from "../utils/pageContents"
import Typography from "@mui/material/Typography";
import ButtonBases from "../components/ImageButton";
import {useInView} from "react-intersection-observer";
import Grow from "@mui/material/Grow";

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

                <Grid item container
                      alignItems="center"
                      justifyContent="center"
                >
                    {/*<Grid item xs={12}>*/}
                        <Image
                            src={Cat}
                            alt='drawing of city streets from above'
                            priority={true}
                            style={{ maxWidth: '100%', height: 'auto' }}
                            // width={250} // Set the desired width for scaling down
                            // height={150} // Set the desired height for scaling down
                            // layout="responsive" // Ensure the image maintains its aspect ratio
                            // objectFit="scale-down"
                            // objectPosition='50% 50%'
                        >

                        </Image>
                    {/*</Grid>*/}
                </Grid>

                <ItemTransition>
                    <Grid item container>
                        <Typography variant='h5' fontWeight='bold'>{homeContent.titles.about}</Typography>
                    </Grid>
                    <Grid item container xs={12} md={6}>

                        <Grid item>
                            <Image
                                src={Cat}
                                alt='drawing of city streets from above'
                                priority={true}
                                style={{ maxWidth: '100%', height: 'auto' }}
                            >

                            </Image>
                        </Grid>
                    </Grid>

                    <Grid item container direction="column" spacing={6} xs={12} md={6}>
                        <Grid item>
                            <Typography>{homeContent.aboutUs}</Typography>
                        </Grid>
                        <Grid item container direction='column'>
                            <Grid item>
                                <p>This project is funded by:</p>
                            </Grid>
                            <Grid item>
                                <p>Bertha Logo</p>
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
                </ItemTransition>

            </Grid>

        </Layout>

    );
}
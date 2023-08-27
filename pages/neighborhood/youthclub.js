import React from "react";
import Layout from "../../components/Layout";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import {ImageButtons} from "../../components/ImageButton";
import {workshopsContent} from "../../utils/pageContents";

export default function Research() {
    const backgroundImageUrl = 'url("/exhibition/blob4.jpg")'

    return (
        <Layout
            title='Ifjúsági'
        >
            <Grid
                container
                spacing={3}
                alignItems="center"
                justifyContent="center"
            >
                <Grid
                    container
                    spacing={3}
                    alignItems="center"
                    justifyContent="center"
                    style={{
                        backgroundImage: backgroundImageUrl,
                        backgroundSize: 'contain',
                        backgroundPosition: 'right',
                        width: '100%',
                        height: '80vh',
                        backgroundRepeat: 'no-repeat',
                    }}
                >
                    <Grid
                        item
                        container
                        m={1}
                        spacing={5}
                    >
                        <Grid item sx={{paddingTop: '100px'}}>
                            <Typography variant='h5'>
                                Hamarosan.
                            </Typography>
                        </Grid>

                        <Grid item container spacing={1}>
                            <Grid item>
                                <Typography variant='h5'> Addig is látogass el kiállításunkra: </Typography>
                            </Grid>
                            <Grid item container>
                                <ImageButtons images={workshopsContent.buttonImages}/>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Layout>
    )}